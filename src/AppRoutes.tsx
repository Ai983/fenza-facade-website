import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Systems from "@/pages/Systems";
import SystemFamily from "@/pages/SystemFamily";
import Sectors from "@/pages/Sectors";
import Projects from "@/pages/Projects";
import Manufacturing from "@/pages/Manufacturing";
import QualitySafety from "@/pages/QualitySafety";
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
    <Route path="/sectors" element={<Sectors />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/manufacturing" element={<Manufacturing />} />
    <Route path="/quality-safety" element={<QualitySafety />} />
    <Route path="/leadership" element={<Leadership />} />
    <Route path="/about" element={<About />} />
    <Route path="/resources" element={<Resources />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
