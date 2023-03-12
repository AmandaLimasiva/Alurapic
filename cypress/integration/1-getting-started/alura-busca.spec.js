
describe('Alura busca cursos', () => {
  beforeEach(() => {
  cy.visit('https://alura.com.br');

  })
  it('Buscar curso de Java', () => {
    cy.get('#header-barraBusca-form-campoBusca').type('Java');
    cy.get('.header-barraBusca-form-submit').click();

    cy.contains('h4.busca-resultado-nome', 'Formação Aprenda a programar em Java com Orientação a Objetos');
  })
})


