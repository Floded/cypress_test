const { generateRandonData } = require("../../helpers/generateRandom.help");
const { login } = require("../../support/POM/Login_movistar");
const { indexEndpoint } = Cypress.env("EndpointData");

describe("Test register, login and logout", () => {
  beforeEach("open web site", () => {
    cy.visit(`/${indexEndpoint}`);
  });

  // Case 1:

  it("registration, login and logout test is performed", () => {
    // Fn help
    const username = generateRandonData.generate();
    const password = generateRandonData.generate();
    // Register User

    login.clickSignUpButton();
    login.registerUsername(username);
    login.registerPassword(password);
    login.clickSRegisterButton();
    cy.wait(2000);

    // Login User

    login.pickLoginButton();
    login.enterUsername(username); // en caso de fallo: "flooded"
    login.enterPassword(password); // en caso de fallo: "123456"
    login.clickSubmitButton();
    cy.wait(2000);
    // validate login succssesfuly
    login.welcomButtonConfirm(username); // en caso de fallo: "flooded"

    // Logout User

    login.logoutModule();

    login.clickHomePage();
  });
});
