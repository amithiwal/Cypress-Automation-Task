const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dev-fe.buttonshift.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true,
    },
    setupNodeEvents(on, config) {
    },
  },
});
