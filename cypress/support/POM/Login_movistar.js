/// <reference types="cypress"/>

class Login {
  // Constructor
  get = {
    // Menu Options
    signUpButton: () => cy.get("#signin2"),
    loginButton: () => cy.get("#login2"),
    logoutButton: () => cy.get("#logout2"),
    homeButton: () => cy.get("a").contains("a", "Home "),
    welcome: () => cy.get("#nameofuser"),
    // Inputs
    signUsernameInput: () => cy.get("#sign-username"),
    signPasswordInput: () => cy.get("#sign-password"),
    usernameInput: () => cy.get("#loginusername"),
    passwordInput: () => cy.get("#loginpassword"),
    // Buttons
    submitButton: () => cy.get('[onclick="logIn()"]'),
    submitSignUpButton: () => cy.get('[onclick="register()"]'),
    //Category
    phoneCategory: () => cy.get("#itemc"),
    laptopCategory: () => cy.contains("#itemc", "Laptops"),
  };

  // Funciones o Metodos

  // Menu

  clickHomePage() {
    this.get.homeButton().click();
  }

  // Confiration

  welcomButtonConfirm(data) {
    this.get.welcome().should("contain", `Welcome ${data}`);
  }

  logoutConfirm() {
    this.get.welcome().should("not.be.visible");
  }

  // Register

  clickSignUpButton() {
    this.get.signUpButton().click();
  }

  registerUsername(data) {
    this.get.signUsernameInput().type(data);
  }

  registerPassword(data) {
    this.get.signPasswordInput().type(data);
  }

  clickSRegisterButton() {
    this.get.submitSignUpButton().click();
  }

  signUpModule(username, password) {
    this.clickSignUpButton();
    this.registerUsername(username);
    this.registerPassword(password);
    this.clickSRegisterButton();
  }

  // Login

  pickLoginButton() {
    this.get.loginButton().click();
  }

  enterUsername(data) {
    this.get.usernameInput().type(data);
  }

  enterPassword(data) {
    this.get.passwordInput().type(data);
  }

  clickSubmitButton() {
    this.get.submitButton().click();
  }

  clickLogoutSession() {
    this.get.logoutButton().click();
  }

  logoutModule() {
    this.get.logoutButton().then((obj) => {
      if (obj.length > 0) {
        this.clickLogoutSession();
        // validate logout succssefuly
        this.logoutConfirm();
      } else {
        throw new Error("logout not posible");
      }
    });
  }

  loginModule(username, password) {
    this.pickLoginButton();
    this.enterUsername(username); // en caso de fallo: "flooded"
    this.enterPassword(password); // en caso de fallo: "123456"
    this.clickSubmitButton();
    this.welcomButtonConfirm(username);
  }

  // Pick Category

  pickLaptopCategory() {
    this.get.laptopCategory().click();
  }

  // Products

  purchaseProduct(data) {
    cy.contains("a", `${data}`).then((prod) => {
      if (prod.length != 0) {
        cy.contains("a", `${data}`).should("exist");
        cy.contains("a", `${data}`).click();
        cy.wait(2000);
        cy.screenshot("finded");
      } else {
        throw new Error("No se encuentra el producto");
      }
    });
  }
}

export const login = new Login();
