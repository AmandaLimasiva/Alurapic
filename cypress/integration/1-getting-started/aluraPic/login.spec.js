//https://docs.cypress.io/guides/references/best-practices

describe("Alura busca cursos", () => {
  beforeEach(() => {
    cy.visit('/');
    /*cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
      statusCode: 400
    }).as('stubPost');*/
  });

  it("Realizar login de usuário válido", () => {
    cy.login(Cypress.env('userName'), Cypress.env('password'))
    cy.contains("a", "(Logout)").click();
    cy.get("h4[class=text-center]").should("have.text", "Login");
  });


  /*it("Realizar login de usuário mock", () => {
    cy.login(Cypress.env('userName'), Cypress.env('password'))
    //cy.wait('@stubPost')
    cy.contains("a", "(Logout)").click();
    cy.get("h4[class=text-center]").should("have.text", "Login");
  });*/

  it("Realizar login de usuário inválido", () => {
    cy.login(Cypress.env('userName'), Cypress.env('password'))
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Invalid user name or password");
    });
  });
});