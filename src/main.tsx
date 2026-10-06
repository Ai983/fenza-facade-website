import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { preloadJournal } from "./pages/JournalRoute";
import "./index.css";

const tree = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

const root = document.getElementById("root")!;

async function start() {
  if (import.meta.env.PROD) {
    // Landing on a Journal URL: load its chunk first so the first client render matches the
    // prerendered HTML. Other pages never download the Journal.
    if (window.location.pathname.startsWith("/journal")) {
      await preloadJournal().catch(() => undefined);
    }
    hydrateRoot(root, tree);
  } else {
    createRoot(root).render(tree);
  }
}

start();
