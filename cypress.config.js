const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //

  projectId: "how51n",
  defaultCommandTimeout: 8000,
  env: {
    // url:"https://www.google.com"
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    username: 'Admin',
    correctPassword: 'admin123',
    wrongPassword: 'wrongpassword',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/*.{js,ts}',
  },
});
