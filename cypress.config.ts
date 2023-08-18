import { defineConfig } from "cypress";

export default defineConfig({
  retries: {
    runMode: 2,
    openMode: 1,
  },

  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
