import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testMatch: "**/*.spec.ts",
  webServer: {
    command: "npm run build && npm run preview",
    port: 4173,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
  ],
});
