context("formulario Clase 6", () => {
  const URL = "http://192.168.0.12:8080";
  before(() => {
    cy.visit(URL);
  });

  describe("Test cantidad de integrantes", () => {
    it("Revisa un numero invalido de integrantes", () => {
      cy.get("#family-members").type(0);
      cy.get("#members-button").click();
      cy.get(".member").should("have.length", 0);
    });

    it("Revisa que se creen los integrantes indicados", () => {
      cy.visit(URL);
      const cantidadIntegrantes = 4;
      cy.get("#family-members").type(cantidadIntegrantes);
      cy.get("#members-button").click();
      cy.get(".member").should("have.length", cantidadIntegrantes);
    });
  });

  describe("Tests edades de los integrantes", () => {
    it("Ingresa valores invalidos", () => {
      cy.get(".member").each((member) => {
        cy.get(member).type(0);
      });
      cy.get("#calculate").click();
      cy.get(".result").should("have.length", 0);
      cy.get('#errores').should('not.have.class', 'oculto')

    });

    it("Ingresa valores validos", () => {
      cy.get(".member").each((member) => {
        cy.get(member).type(2);
      });
      cy.get("#calculate").click();
      cy.get('.result').should('have.length', 3)
      cy.get('#errores').should('have.class', 'oculto')
    });
  });
});
