import { Link } from "react-router-dom";
import Logo from "./Logo";
import { SYSTEMS } from "@/lib/systems";
import { BRAND, CONTACT, NAV, whatsappLink } from "@/lib/site";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink text-cream">
      <div className="container-content grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo withTagline size="text-2xl" />
          <p className="mt-6 max-w-xs text-pretty text-sm leading-relaxed text-cream/60">
            {BRAND.tagline} {BRAND.descriptor} Engineered and made in{" "}
            {BRAND.location}.
          </p>
          <p className="mt-6 text-xs leading-relaxed text-cream/40">
            {BRAND.legalName} is a separate legal entity within {BRAND.group}.
          </p>
        </div>

        <div className="md:col-span-4">
          <h3 className="eyebrow">Systems</h3>
          <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {SYSTEMS.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/systems/${s.slug}`}
                  className="tap-safe inline-block text-sm text-cream/60 transition-colors hover:text-gold"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="eyebrow">Company</h3>
          <ul className="mt-5 space-y-3">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="tap-safe inline-block text-sm text-cream/60 transition-colors hover:text-gold"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="eyebrow">Enquiries</h3>
          <ul className="mt-5 space-y-3 text-sm text-cream/60">
            <li>{BRAND.location}</li>
            <li>
              {CONTACT.emailConfirmed ? (
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="tap-safe inline-block transition-colors hover:text-gold"
                >
                  {CONTACT.email}
                </a>
              ) : (
                <span className="text-cream/40">Email — being confirmed</span>
              )}
            </li>
            <li>
              {CONTACT.phoneConfirmed ? (
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="tap-safe inline-block transition-colors hover:text-gold"
                >
                  {CONTACT.phone}
                </a>
              ) : (
                <span className="text-cream/40">Phone — being confirmed</span>
              )}
            </li>
            {CONTACT.whatsappConfirmed && (
              <li>
                <a
                  href={whatsappLink("Hello Fenza — I have a facade enquiry.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-safe inline-block transition-colors hover:text-gold"
                >
                  WhatsApp
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-content flex flex-col items-start justify-between gap-3 pb-24 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:pb-6">
          <p>
            © {year} {BRAND.legalName}. Part of {BRAND.group}.
          </p>
          <p className="tracking-wide2 uppercase">
            Building envelopes, engineered.
          </p>
        </div>
      </div>
    </footer>
  );
}
