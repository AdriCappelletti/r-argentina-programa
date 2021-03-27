context("formularioClase6", () => {
  const URL = "http://192.168.0.12:8080";
  before(() => {
    cy.visit(URL);
  });
  
  it("Revisa un numero invalido de integrantes", () => {
    cy.get("#family-members").type(0)
    cy.get("#members-button").click()
    cy.get('.member').should('have.length', 0)
  });
});
