const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
    video: false,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
