const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dm2apn',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
