Cypress.Commands.add("login", (nome, senha) => {
  cy.get("h4[class=text-center]").should("have.text", "Login");
  cy.get("input[formcontrolname=userName]").type(nome, {log: false});
  cy.get("input[formcontrolname=password]").type(senha, {log: false});
  cy.contains("button", "login").click();
});
