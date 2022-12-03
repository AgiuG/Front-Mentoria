describe("Entrado na pagina", () => {
  beforeEach("", () => {
    cy.visit("http://localhost:3000/");

    cy.intercept("GET", "http://localhost:3000/api?ValorA=10&ValorB=10", {
      fixture: "Multiplicador",
    });
  });

  it("Testando Multiplicador", () => {
    cy.get("#ValorA").type(10);
    cy.get("#ValorB").type(10);
    cy.get("#Botao").click();
    cy.get("#Resultado").contains(100);
  });
});
