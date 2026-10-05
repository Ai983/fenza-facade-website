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
        description="Tell Fenza Facade Engineering what you need for your project. Contact our team by email, phone or the simple enquiry form. Manufacturing in Gurugram, Haryana."
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
            Tell us what you{" "}
            <span className="italic text-gold-soft">need.</span>
          </>
        }
        intro="Share your requirements and contact details. Our team will get in touch to discuss your project."
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
                    {CONTACT.emails.map((email) => (
                      <li key={email}>
                        <a
                          href={`mailto:${email}`}
                          className="link-underline"
                        >
                          {email}
                        </a>
                      </li>
                    ))}
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
                    Tell us about your requirements. Our team will review your
                    enquiry and contact you to discuss the next steps.
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
