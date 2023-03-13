describe("Alura busca cursos", () => {
  beforeEach(() => {
    cy.visit("https://alura-fotos.herokuapp.com/#/home");
  });

  it("Verifica mensagens de validação para campos obrigatórios", function () {
    cy.contains("a", "Register now").click();
    cy.get("h4[class=text-center]").should(
      "have.text",
      "Register to embrace a new world!"
    );

    //Clicando sem preencher os campos obrigatórios
    cy.get(".btn").click(); //cy.contains(button,'Register)
    cy.contains("ap-vmessage", "Email is required!").should("be.visible");

    cy.get(".btn").click(); //cy.contains(button,'Register)
    cy.contains("ap-vmessage", "Full name is required!").should("be.visible");

    cy.get(".btn").click(); //cy.contains(button,'Register)
    cy.contains("ap-vmessage", "User name is required!").should("be.visible");

    cy.get(".btn").click(); //cy.contains(button,'Register)
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
  });

  it("Informar E-mail inválido", () => {
    cy.contains("a", "Register now").click();
    cy.get("h4[class=text-center]").should(
      "have.text",
      "Register to embrace a new world!"
    );
    cy.get(".btn").click();
    cy.get("input[formcontrolname=email]").type("Amanda");
    cy.contains("ap-vmessage", "Invalid e-mail").should("be.visible");
  });

  it("Informar senha inválida | Menos de 8 caracteres", () => {
    cy.contains("a", "Register now").click();
    cy.get("h4[class=text-center]").should(
      "have.text",
      "Register to embrace a new world!"
    );
    cy.get("input[formcontrolname=password]").type("123");
    cy.get(".btn").click();
    cy.contains("ap-vmessage", "Mininum length is 8").should("be.visible");
  });

  it("Informar username inválido", () =>{
    cy.contains("a", "Register now").click();
    cy.get("h4[class=text-center]").should("have.text", "Register to embrace a new world!")
      cy.get("input[formcontrolname=userName]").type("AMANDA");
      cy.get(".btn").click();
      cy.contains("ap-vmessage", "Must be lower case").should("be.visible");
  })
});
