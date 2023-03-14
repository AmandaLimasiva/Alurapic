Cypress.Commands.add("login", (nome, senha) => {
  cy.get("h4[class=text-center]").should("have.text", "Login");
  cy.get("input[formcontrolname=userName]").type(nome);
  cy.get("input[formcontrolname=password]").type(senha);
  cy.contains("button", "login").click();
});
