import AppRoutes from "./AppRoutes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";

const App = () => (
  <>
    <SmoothScroll />
    <ScrollToTop />
    <a href="#main" className="skip-link">
      Skip to content
    </a>
    <Navbar />
    <main id="main">
      <AppRoutes />
    </main>
    <Footer />
    <StickyCTA />
  </>
);

export default App;
