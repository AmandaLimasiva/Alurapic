

describe("Alura busca cursos", () => {
  beforeEach(() => {
    cy.visit("https://alura-fotos.herokuapp.com/#/home");
  });

  it("Realizar login de usuário válido", () => {
    cy.login('teste_amanda', '12345678')
    cy.contains("a", "(Logout)").click();
    cy.get("h4[class=text-center]").should("have.text", "Login");
  });

  it("Realizar login de usuário inválido", () => {
    cy.login('aman', '1236')
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Invalid user name or password");
    });
  });
});
