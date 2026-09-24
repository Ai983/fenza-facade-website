/**
 * SSR-only root used by entry-server.tsx during prerendering.
 * Eager imports only (no lazy) so renderToString emits full content.
 * Client-only enhancers (smooth scroll, reveal controller, scroll restore) are
 * omitted — they hydrate on the client and never gate the crawlable markup.
 */
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./AppRoutes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const ServerApp = ({ helmetContext }: { helmetContext: object }) => (
  <HelmetProvider context={helmetContext}>
    <a href="#main" className="skip-link">
      Skip to content
    </a>
    <Navbar />
    <main id="main">
      <AppRoutes />
    </main>
    <Footer />
    <StickyCTA />
  </HelmetProvider>
);

export default ServerApp;
