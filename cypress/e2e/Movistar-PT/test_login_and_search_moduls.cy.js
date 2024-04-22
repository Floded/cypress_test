const { login } = require("../../support/POM/Login_movistar");
const { indexEndpoint } = Cypress.env("EndpointData");
const { product } = Cypress.env("ProductName");
const { username, password } = Cypress.env("AdminData");

describe("implement modules for login and search", () => {
  beforeEach("Visit web site", () => {
    cy.visit(`/${indexEndpoint}`);
  });

  it("Login and search element test", () => {
    //TODO: crear un modulo reusable para el login y usarlo aqui.

    // Login user

    cy.loginModule(username, password);

    cy.wait(2000);

    //TODO: crear un modulo reusable de busqueda de articulo y usarlo aqui.
    //TODO: registrar evidencia por medio de un log.

    // Search product

    cy.searchArticleModule("Nexus 6");
    cy.wait(2000);

    //TODO: hacer logout de la web.

    // Logout

    login.clickLogoutSession();
  });
});
