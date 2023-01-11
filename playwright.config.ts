import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testMatch: "**/*.spec.ts",
  webServer: {
    command: "yarn build && yarn preview",
    port: 4173,
  },
};

export default config;
