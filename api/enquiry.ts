/**
 * POST /api/enquiry: a Vercel serverless function (not part of the Vite/React build).
 *
 * Both website forms (the enquiry form and the catalogue download) post here. The function:
 *  1. creates the lead in the sales CRM (hagerstone-marketing-erp, Pipeline > WEBSITE > New Lead)
 *     through its website-lead webhook. That webhook needs a secret header, which is why this
 *     runs on the server: anything in the browser bundle is public.
 *  2. also sends the original payload to the n8n "Fenza - Website Enquiry Pipeline" as a backup
 *     copy (its data table) and for the acknowledgement email to the enquirer.
 *
 * The visitor sees success if either destination accepted the lead, so a CRM outage never loses
 * one. Failures are logged and show up in Vercel > fenza-facade-website > Logs.
 *
 * Environment (Vercel project settings, server side only, never VITE_*):
 *  - ERP_WEBHOOK_SECRET   required: the WEBHOOK_SECRET of the hagerstone-marketing-erp project
 *  - ERP_WEBHOOK_URL      optional: defaults to the production intake URL below
 *  - N8N_ENQUIRY_WEBHOOK  optional: defaults to the n8n webhook below; set to "" to turn the copy off
 */

const ERP_WEBHOOK_URL =
  process.env.ERP_WEBHOOK_URL ||
  "https://hagerstone-marketing-erp.vercel.app/api/webhook/website-leads";

const N8N_ENQUIRY_WEBHOOK =
  process.env.N8N_ENQUIRY_WEBHOOK ??
  "https://primary-production-72e3f.up.railway.app/webhook/fenza-enquiry";

const SITE = "https://fenzafacade.com";
/** The CRM's service line for facades and windows (see the ERP's lib/portfolio-data.ts). */
const SERVICE_LINE = "facade_glazing";
const TIMEOUT_MS = 10_000;
const MAX_BODY = 20_000;

type Payload = Record<string, unknown>;

/** A trimmed string field, capped in length, or null. */
function str(body: Payload, key: string, max = 300): string | null {
  const v = body[key];
  if (typeof v !== "string") return null;
  const t = v.trim().slice(0, max);
  return t.length ? t : null;
}

const json = (data: unknown, status: number) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

/** Where on the site the lead came from, as sales should read it in the CRM card. */
function sourceDetail(body: Payload): string {
  const system = str(body, "system");
  const city = str(body, "city");
  const page = str(body, "page") ?? "";
  let where: string;
  if (body.intent === "catalogue-download") where = "Catalogue download";
  else if (system) where = `${system} page`;
  else if (city) where = `${city} city page`;
  else if (page === "/") where = "Home page";
  else if (page === "/contact") where = "Contact page";
  else where = "Enquiry form";
  return `Fenza website · ${where}`;
}

/** The note on the CRM lead: what they asked, plus the context sales needs to reply. */
function notes(body: Payload): string {
  const catalogue = body.intent === "catalogue-download";
  const lines = [
    catalogue
      ? "Downloaded the product catalogue on the Fenza Facade website."
      : "Enquiry from the Fenza Facade website.",
  ];
  const system = str(body, "system");
  const page = str(body, "page");
  const landing = str(body, "landing_page", 500);
  const referrer = str(body, "referrer", 500);
  if (system) lines.push(`System of interest: ${system}`);
  if (page) lines.push(`Sent from: ${SITE}${page}`);
  if (landing && landing !== page) lines.push(`Landed on: ${SITE}${landing}`);
  if (referrer) lines.push(`Came from: ${referrer}`);
  const message = str(body, "message", 5000);
  if (message) lines.push("", message);
  return lines.join("\n");
}

async function post(url: string, data: unknown, headers: Record<string, string> = {}) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(data),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  const text = await res.text().catch(() => "");
  if (!res.ok) throw new Error(`HTTP ${res.status} ${text.slice(0, 200)}`);
  try {
    return JSON.parse(text) as Payload;
  } catch {
    return {};
  }
}

async function toCrm(body: Payload): Promise<string> {
  const secret = process.env.ERP_WEBHOOK_SECRET;
  if (!secret) throw new Error("ERP_WEBHOOK_SECRET is not set");
  const result = await post(
    ERP_WEBHOOK_URL,
    {
      full_name: str(body, "name", 120),
      email: str(body, "email", 200),
      phone: str(body, "phone", 40),
      city: str(body, "city", 80),
      service_line: SERVICE_LINE,
      message: notes(body),
      source_detail: sourceDetail(body),
      utm_source: str(body, "utm_source", 100),
      utm_medium: str(body, "utm_medium", 100),
      utm_campaign: str(body, "utm_campaign", 150),
    },
    { "x-webhook-secret": secret }
  );
  // "created" for a new lead, "duplicate" when the phone/email is already in the CRM
  // (the enquiry is then added to that lead's timeline instead).
  return typeof result.status === "string" ? result.status : "accepted";
}

export async function POST(request: Request): Promise<Response> {
  const raw = await request.text().catch(() => "");
  if (!raw || raw.length > MAX_BODY) return json({ error: "Invalid request" }, 400);

  let body: Payload;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error();
    body = parsed as Payload;
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  if (!str(body, "name") || (!str(body, "email") && !str(body, "phone"))) {
    return json({ error: "Name and an email or phone number are required" }, 400);
  }

  const [crm, backup] = await Promise.allSettled([
    toCrm(body),
    N8N_ENQUIRY_WEBHOOK ? post(N8N_ENQUIRY_WEBHOOK, body) : Promise.reject(new Error("off")),
  ]);

  if (crm.status === "rejected") {
    console.error("[enquiry] CRM failed:", crm.reason instanceof Error ? crm.reason.message : crm.reason);
  }
  if (backup.status === "rejected" && N8N_ENQUIRY_WEBHOOK) {
    console.error("[enquiry] n8n copy failed:", backup.reason instanceof Error ? backup.reason.message : backup.reason);
  }

  if (crm.status === "rejected" && backup.status === "rejected") {
    return json({ error: "Could not record the enquiry" }, 502);
  }
  return json(
    { ok: true, crm: crm.status === "fulfilled" ? crm.value : "failed" },
    200
  );
}
