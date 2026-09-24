import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { buildBreadcrumb, canonical } from "@/lib/seo";
import { BRAND, CONTACT, whatsappLink } from "@/lib/site";

export default function Contact() {
  const contactSchema = {
    "@type": "ContactPage",
    name: "Contact Fenza Facade Engineering",
    url: canonical("/contact"),
  };

  return (
    <>
      <Seo
        title="Contact & Enquiries"
        description="Enquire about a facade project with Fenza. Send your drawings, elevation areas and system intent, and we come back with a measured scope and an itemised offer. Manufacturing in Gurugram, Haryana."
        path="/contact"
        image="/og/contact-hero.jpg"
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          contactSchema,
        ]}
      />

      <PageHero
        image="contact-hero"
        eyebrow="Enquiries"
        title={
          <>
            Send us the{" "}
            <span className="italic text-gold-soft">elevation.</span>
          </>
        }
        intro="Share your drawings, elevation areas and system intent, and we will come back with a measured scope and an itemised offer."
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "Contact", to: "/contact" },
        ]}
      />

      <section className="bg-ink py-20 md:py-28">
        <div className="container-content grid gap-14 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-cream/10 bg-cream/[0.03] p-6 md:p-8">
              <EnquiryForm />
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="space-y-8">
                <div>
                  <span className="eyebrow">Manufacturing</span>
                  <p className="mt-3 text-lg text-cream">{BRAND.location}</p>
                  <p className="mt-1 text-sm text-sand">
                    Plus Code {CONTACT.plusCode}
                  </p>
                  <p className="mt-1 text-sm text-cream/50">
                    Precise factory address is being confirmed.
                  </p>
                </div>

                <div className="hairline" />

                <div>
                  <span className="eyebrow">Direct</span>
                  <ul className="mt-3 space-y-3 text-cream">
                    <li>
                      {CONTACT.emailConfirmed ? (
                        <a
                          href={`mailto:${CONTACT.email}`}
                          className="link-underline"
                        >
                          {CONTACT.email}
                        </a>
                      ) : (
                        <span className="text-cream/50">
                          Email — being confirmed
                        </span>
                      )}
                    </li>
                    <li>
                      {CONTACT.phoneConfirmed ? (
                        <a
                          href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                          className="link-underline"
                        >
                          {CONTACT.phone}
                        </a>
                      ) : (
                        <span className="text-cream/50">
                          Phone — being confirmed
                        </span>
                      )}
                    </li>
                    {CONTACT.whatsappConfirmed && (
                      <li>
                        <a
                          href={whatsappLink(
                            "Hello Fenza — I have a facade enquiry."
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline"
                        >
                          WhatsApp
                        </a>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="hairline" />

                <div>
                  <span className="eyebrow">How we respond</span>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-cream/60">
                    One point of contact is established for every project. We
                    reply with a measured scope, indicative specifications and an
                    itemised commercial offer against a frozen scope.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Map */}
        <div className="container-content mt-16">
          <Reveal variant="scale">
            <div className="overflow-hidden rounded-xl border border-cream/10">
              <iframe
                title="Fenza manufacturing — Gurugram, Haryana"
                src="https://www.google.com/maps?q=Gurugram,Haryana,India&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full grayscale-[0.3]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
