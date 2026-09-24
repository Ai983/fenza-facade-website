import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  ssr: {
    // react-helmet-async ships CommonJS; bundle it into the SSR output so the
    // prerender step (node prerender.js) imports it without ESM/CJS interop errors.
    noExternal: ["react-helmet-async"],
  },
});
