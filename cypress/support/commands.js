Cypress.Commands.add("loginModule", (username, password) => {
  cy.get("#login2").click();
  cy.get("#loginusername").type(username);
  cy.get("#loginpassword").type(password);
  cy.contains("[type='button']", "Log in").click();
});

Cypress.Commands.add("searchArticleModule", (article) => {
  //   const flag = () => cy.get(element).should("exist");
  cy.contains(".hrefch", article).then((element) => {
    if (element.length > 0) {
      cy.wrap(element).click();
      cy.wait(2000);
      cy.screenshot("taking capture of the element");
    } else {
      cy.log("no hay articulo");
    }
  });
});
