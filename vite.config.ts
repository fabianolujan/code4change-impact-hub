import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";
import path from "path";

export default defineConfig(({ command }) => ({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart(),
    ...(command === "build" ? [cloudflare()] : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "@tanstack/react-query"],
  },
}));
