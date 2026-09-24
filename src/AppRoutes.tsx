import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Systems from "@/pages/Systems";
import SystemFamily from "@/pages/SystemFamily";
import Manufacturing from "@/pages/Manufacturing";
import Leadership from "@/pages/Leadership";
import About from "@/pages/About";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/systems" element={<Systems />} />
    <Route path="/systems/:slug" element={<SystemFamily />} />
    <Route path="/manufacturing" element={<Manufacturing />} />
    <Route path="/leadership" element={<Leadership />} />
    <Route path="/about" element={<About />} />
    <Route path="/resources" element={<Resources />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
