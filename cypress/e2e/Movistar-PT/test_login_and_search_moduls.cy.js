import { generateRandonData } from "../../helpers/generateRandom.help";
import { login } from "../../support/POM/Login_movistar";

const { indexEndpoint } = Cypress.env("EndpointData");
const { product } = Cypress.env("ProductName");

describe("implement modules for login and search", () => {
  beforeEach("Visit web site", () => {
    cy.visit(`/${indexEndpoint}`);
  });

  it("Login and search element test", () => {
    // Generate user random

    const username = generateRandonData.generate();
    const password = generateRandonData.generate();

    // const username = "flooded";
    // const password = "123456";

    // Register new user

    login.signUpModule(username, password);

    cy.wait(2000);

    // Login user

    login.loginModule(username, password);

    cy.wait(2000);

    // Search product
    login.purchaseProduct(product);

    // Logout

    login.logoutModule();
  });
});
