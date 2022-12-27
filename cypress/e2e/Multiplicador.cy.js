describe("Entrado na pagina", () => {
  beforeEach("", () => {
    cy.visit("http://localhost:3000/");

    cy.intercept(
      "GET",
      `${process.env.REACT_APP_API_URL}/?ValorA=10&ValorB=10`,
      {
        fixture: "Multiplicador",
      }
    );
  });

  it("Testando Multiplicador", () => {
    cy.get("#ValorA").type(10);
    cy.get("#ValorB").type(10);
    cy.get("#Botao").click();
    cy.get("#Resultado").contains(100);
  });
});
