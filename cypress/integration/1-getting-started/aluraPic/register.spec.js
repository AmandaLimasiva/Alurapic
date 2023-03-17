describe("Formulário de Cadastro na Alura Pic ", () => {
  beforeEach(() => {
    cy.visit('/');
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

  it("Informar username inválido | com UPERCASE", () => {
    cy.contains("a", "Register now").click();
    cy.get("h4[class=text-center]").should(
      "have.text",
      "Register to embrace a new world!"
    );
    cy.get("input[formcontrolname=userName]").type("AMANDA");
    cy.get(".btn").click();
    cy.contains("ap-vmessage", "Must be lower case").should("be.visible");
  });

  it("Verificar se username está disponível para registro", () => {
    cy.contains("a", "Register now").click();
    cy.get("h4[class=text-center]").should(
      "have.text",
      "Register to embrace a new world!"
    );
    cy.get("input[formcontrolname=email]").type("amanda@gmail.com");
    cy.get("input[formcontrolname=fullName]").type("tony S.");
    cy.get("input[formcontrolname=userName]").type("tony");
    cy.get(".btn").click(); //Não precisei para validar
    cy.contains(".text-success", "User available").should("be.visible");
  });



  const usuarios = require("../../../fixtures/usuarios.json");
  usuarios.forEach((usuario) => {
    it("Registra novo usuário " + usuario.fullName, () => {
      cy.contains("a", "Register now").click();
      cy.get("h4[class=text-center]").should(
        "have.text",
        "Register to embrace a new world!"
      );
      cy.get("input[formcontrolname=email]").type(usuario.email);
      cy.get("input[formcontrolname=fullName]").type(usuario.fullName);
      cy.get("input[formcontrolname=userName]").type(usuario.userName);
      cy.get("input[formcontrolname=password]").type(usuario.password);
      cy.get(".btn").click(); //Não precisei para validar
    });
  });
});
