import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base =
  process.env.NODE_ENV === "production" ? "/organization.github.io/" : "/";

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: "dist",
    // Ensure the correct public path is used in production.
    publicPath: base,
    emptyOutDir: true,
  },
});
