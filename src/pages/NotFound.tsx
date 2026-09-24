import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found · Fenza Facade Engineering</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <section className="flex min-h-[80vh] items-center bg-ink pt-[74px]">
        <div className="container-content text-center">
          <Logo className="mx-auto" size="text-4xl" withTagline />
          <p className="mt-10 font-display text-[clamp(3rem,10vw,7rem)] leading-none text-gold">
            404
          </p>
          <h1 className="mt-4 font-display text-3xl text-cream">
            This elevation doesn't exist.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-pretty text-cream/60">
            The page you're looking for has moved or was never built. Let's get
            you back to the envelope.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-gold">
              Back home
            </Link>
            <Link to="/systems" className="btn-outline">
              Explore systems
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
