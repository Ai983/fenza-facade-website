import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

const tree = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

const root = document.getElementById("root")!;

if (import.meta.env.PROD) {
  hydrateRoot(root, tree);
} else {
  createRoot(root).render(tree);
}
