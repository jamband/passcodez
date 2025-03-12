/// <reference types="vitest/config" />

import { resolve } from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  resolve: {
    alias: { "@": resolve(__dirname, "src") },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [react()],
  test: {
    environment: "happy-dom",
    setupFiles: "../vitest.setup.ts",
    include: ["**/*.test.{ts,tsx}"],
  },
});
