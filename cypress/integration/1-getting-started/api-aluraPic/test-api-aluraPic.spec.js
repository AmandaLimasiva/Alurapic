
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