Cypress.Commands.add("acessarSite", () => {
    cy.visit(Cypress.env("BASE_URL"));
})