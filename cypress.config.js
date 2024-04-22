const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    testIsolation: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.demoblaze.com",
  },
  env: {
    EndpointData: {
      indexEndpoint: "index.html",
    },
    ProductName: {
      product: "Samsung galaxy s6",
    },
    AdminData: {
      username: "flooded",
      password: "123456",
    },
  },
});
