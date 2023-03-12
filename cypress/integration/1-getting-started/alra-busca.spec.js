
describe('Alura busca cursos', () => {
  beforeEach(() => {
  cy.visit('https://alura.com.br');

  })
  it('Buscar curso de Java', () => {
    cy.get('#header-barraBusca-form-campoBusca').type('Java');
    cy.get('.header-barraBusca-form-submit').click();

    cy.get(':nth-child(3) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome').should('have.text', 'Formação Aprenda a programar em Java com Orientação a Objetos');
  })
})


