/// <reference types="vitest/config" />

import { resolve } from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: { "@": resolve(__dirname, "src") },
  },
  plugins: [react()],
  test: {
    environment: "happy-dom",
    setupFiles: "vitest.setup.ts",
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
