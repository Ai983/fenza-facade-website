import { useState, type FormEvent } from "react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { buildBreadcrumb } from "@/lib/seo";
import { ENQUIRY_ENDPOINT } from "@/lib/site";

const CATALOGUE_URL = "/downloads/fenza-product-catalogue.html";

const field =
  // text-base (16px) on phones stops iOS Safari auto-zooming the page on focus;
  // it steps back down to 14px from sm: up where that zoom never applies.
  "w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-base sm:text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

function CatalogueGate() {
  const [unlocked, setUnlocked] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if ((fd.get("company_website") as string)?.length) {
      setUnlocked(true);
      return;
    }
    const lead = {
      intent: "catalogue-download",
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      submittedAt: new Date().toISOString(),
    };
    if (ENQUIRY_ENDPOINT) {
      try {
        await fetch(ENQUIRY_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });
      } catch {
        /* non-blocking: still let them read the catalogue */
      }
    }
    setUnlocked(true);
  }

  if (unlocked) {
    return (
      <div className="rounded-xl border border-gold/40 bg-cream/95 p-8 text-ink">
        <h3 className="font-display text-2xl">Your catalogue is ready.</h3>
        <p className="mt-2 text-sm text-muted">
          The full product catalogue opens in a new tab.
        </p>
        <a
          href={CATALOGUE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-6"
        >
          Open the catalogue
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-cream/10 bg-cream/[0.03] p-6 md:p-8"
    >
      <h3 className="font-display text-2xl text-cream">
        Get the product catalogue
      </h3>
      <p className="mt-2 text-sm text-cream/60">
        Thirteen system families, indicative technical data and detail imagery.
      </p>
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="mt-6 grid gap-4">
        <input name="name" required placeholder="Name" className={field} autoComplete="name" />
        <input name="email" type="email" required placeholder="Email" className={field} autoComplete="email" />
        <input name="phone" type="tel" placeholder="Phone / WhatsApp" className={field} autoComplete="tel" />
        <button type="submit" className="btn-gold w-full">
          Get the catalogue
        </button>
      </div>
    </form>
  );
}

const UPCOMING = [
  {
    title: "System datasheets",
    body: "Per-system specification sheets, verified before publication.",
    status: "In preparation",
  },
  {
    title: "Test reports",
    body: "Air, water, wind and structural performance to ASTM / EN / CWCT, issued against the approved project mock-up.",
    status: "On request",
  },
  {
    title: "Finish & colour samples",
    body: "Anodised, powder-coat and PVDF ranges, with wood-grain and stone-effect options.",
    status: "On request",
  },
];

export default function Resources() {
  return (
    <>
      <Seo
        title="Resources — Catalogue & Technical Data"
        description="Download the Fenza product catalogue and request system datasheets, finish samples and facade test reports (air, water, wind and structural to ASTM / EN / CWCT)."
        path="/resources"
        image="/og/resources-hero.jpg"
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
          ]),
        ]}
      />

      <PageHero
        image="resources-hero"
        eyebrow="Resources"
        title={
          <>
            Catalogue, datasheets &{" "}
            <span className="italic text-gold-soft">technical data.</span>
          </>
        }
        intro="Everything a specifier needs to work with Fenza — starting with the product catalogue, with datasheets and test reports layered in as they are verified."
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "Resources", to: "/resources" },
        ]}
      />

      <section className="bg-ink py-20 md:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="eyebrow">Available now</span>
            <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
              The product catalogue.
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-cream/65">
              Our current catalogue covers all thirteen system families with lead
              descriptions, indicative technical data and detail imagery — the
              fastest way to scope Fenza into a project.
            </p>
          </div>
          <div className="lg:col-span-6">
            <Reveal variant="scale">
              <CatalogueGate />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-28">
        <div className="container-content">
          <span className="eyebrow">Coming as it is verified</span>
          <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
            Deepening the evidence base.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {UPCOMING.map((u, i) => (
              <Reveal key={u.title} delay={(i % 3) * 90}>
                <div className="flex h-full flex-col rounded-lg border border-cream/10 bg-ink p-7">
                  <span className="w-fit rounded-full border border-gold/30 px-3 py-1 text-[0.62rem] uppercase tracking-wide2 text-gold">
                    {u.status}
                  </span>
                  <h3 className="mt-5 font-display text-xl text-cream">
                    {u.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">
                    {u.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-cream/45">
            Technical values published by Fenza are indicative until confirmed
            per project. Datasheets and test reports are verified before release.
          </p>
        </div>
      </section>
    </>
  );
}
