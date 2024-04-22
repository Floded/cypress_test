const { indexEndpoint } = Cypress.env("EndpointData");
const { product } = Cypress.env("ProductName");

describe("Search object in web", () => {
  beforeEach("open web site", () => {
    cy.visit(`/${indexEndpoint}`);
  });

  it("The existence of an object or its non-existence is validated", () => {
    cy.wait(2000);

    cy.contains(".hrefch", "Samsung galaxy s6").then((element) => {
      if (element.length > 0) {
        cy.wrap(element).click();
        cy.wait(2000);
        cy.screenshot("taking capture of the element");
      } else {
        cy.log("not found");
      }
    });
  });
});
