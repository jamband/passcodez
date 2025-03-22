import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testMatch: "src/**/*.spec.ts",
  webServer: {
    command: "npm run build && npm run preview",
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
