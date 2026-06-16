import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testMatch: "src/**/*.spec.ts",
  webServer: {
    command: "pnpm build && pnpm preview",
    port: 4173,
  },
  projects: [
    {
      name: "chrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
  ],
});
