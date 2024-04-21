const { indexEndpoint } = Cypress.env("EndpointData");
const { product } = Cypress.env("ProductName");

describe("Search object in web", () => {
  beforeEach("open web site", () => {
    cy.visit(`/${indexEndpoint}`);
  });

  // Case 2:

  //   buscar el selector.. entrar y elegir un elemento de la lista y compararlo con un array de elementos aleatorios para validar
  it("The existence of an object or its non-existence is validated", () => {
    cy.contains("a", `${product}`).then((prod) => {
      if (prod.length != 0) {
        cy.contains("a", `${product}`).should("exist");
        cy.contains("a", `${product}`).click();
        cy.wait(2000);
        cy.screenshot("finded");
      } else {
        throw new Error("Product not found");
      }
    });
  });
});
