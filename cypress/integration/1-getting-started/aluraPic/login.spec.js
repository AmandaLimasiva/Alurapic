describe("Alura busca cursos", () => {
  beforeEach(() => {
    cy.visit("https://alura-fotos.herokuapp.com/#/home");
  });

  it("Realizar login de usuário válido", () => {
    cy.get("h4[class=text-center]").should("have.text", "Login");
    cy.get("input[formcontrolname=userName]").type("teste_amanda");
    cy.get("input[formcontrolname=password]").type("12345678");
    cy.contains("button", "login").click();

    cy.contains("a", "(Logout)").click();
    cy.get("h4[class=text-center]").should("have.text", "Login");
  });

  it("Realizar login de usuário inválido", () => {
    cy.get("h4[class=text-center]").should("have.text", "Login");
    cy.get("input[formcontrolname=userName]").type("teste_aman");
    cy.get("input[formcontrolname=password]").type("12345678");
    cy.contains("button", "login").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Invalid user name or password");
    });
  });
});
