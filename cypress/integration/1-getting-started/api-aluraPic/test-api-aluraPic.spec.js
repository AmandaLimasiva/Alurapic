
describe(' Procurar por fotos e dados via API', () => {
    it('Buscar minhas fotos', () => {
      cy.request({
        method:'GET',
        url:'https://apialurapic.herokuapp.com/mands/photos',
      }).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body[0]).to.have.property('description')
        expect(res.body[0].description).to.be.equal('Lindo mapa')
      })
    })
})

describe('Fazer Login por API', () => {
  it.only('Buscar minhas fotos', () => {
    cy.request({
      method:'POST',
      url:'https://apialurapic.herokuapp.com/user/login',
      body: Cypress.env()
    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body).to.have.property('id')
      expect(res.body.id).to.be.equal(11)

      //email
      expect(res.body).to.have.property('email')
      expect(res.body.email).to.be.equal('mands@gmail.com')
    })
  })
})