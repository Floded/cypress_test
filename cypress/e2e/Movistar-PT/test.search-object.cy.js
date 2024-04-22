const { indexEndpoint } = Cypress.env("EndpointData");
const { product } = Cypress.env("ProductName");

describe("Search object in web", () => {
  beforeEach("open web site", () => {
    cy.visit(`/${indexEndpoint}`);
  });

  it("The existence of an object or its non-existence is validated", () => {
    cy.wait(2000);
    // seleccionamos el selector de los elementos
    cy.get(".col-lg-4.col-md-6.mb-4").then((element) => {
      // validamos
      if (element.length > 0) {
        const indexRandom = Math.floor(Math.random() * element.length);
        const articleRandom = element[indexRandom];
        cy.wrap(articleRandom).contains("a").click();
        cy.wait(2000);
        cy.screenshot("taking capture of the element");
      } else {
        cy.log("not found");
      }
    });
  });
});
