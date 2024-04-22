const { generateRandonData } = require("../../helpers/generateRandom.help");
const { login } = require("../../support/POM/Login_movistar");
const { indexEndpoint } = Cypress.env("EndpointData");

describe("Test register, login and logout", () => {
  beforeEach("open web site", () => {
    cy.visit(`/${indexEndpoint}`);
  });

  // Case 1:

  it("registration, login and logout test is performed", () => {
    //Todo: crear una funcion para generar usuarios y contraseñas random
    // Fn help
    const username = generateRandonData.generate();
    const password = generateRandonData.generate();

    //TODO: registrar un nuevo usuario

    // Register User

    login.clickSignUpButton();
    login.registerUsername(username);
    login.registerPassword(password);
    login.clickSRegisterButton();
    cy.wait(2000);

    //TODO: iniciar sesion con el nuevo usuario creado

    // Login User
    if (login.logoutConfirm()) {
      cy.log("you are online");
    } else {
      login.pickLoginButton();
      login.enterUsername(username); // en caso de fallo: "flooded"
      login.enterPassword(password); // en caso de fallo: "123456"
      login.clickSubmitButton();
      cy.wait(2000);
    }

    //TODO: validar que se haya iniciado sesion correctamente

    // validate login succssesfuly
    login.welcomButtonConfirm(username); // en caso de fallo: "flooded"

    //TODO: finalmente cerrar sesion.

    // Logout User

    login.logoutModule();
  });
});
