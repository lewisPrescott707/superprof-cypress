describe('spec', () => {

  before(function () {
    cy.log("first")
  })

  beforeEach(() => {
    cy.log("second")
  })

  afterEach(function () {
    cy.log("penultimate")
  })

  after(() => {
    cy.log("last")
  })
  
  it('passes', () => {
    var url = "example"
    cy.visit(`https://${url}.cypress.io`)
  })

  it.skip('scope', () => {
    cy.visit(`https://${url}.cypress.io`)
  })

  it('types', () => {
    var obj = {
      url: "example"
    }
    cy.visit(`https://${obj.url}.cypress.io`)
  })

  it('async', () => {
    ['example', 'example', 'example'].forEach((url) => {
      cy.visit(`https://${url}.cypress.io`)
      cy.wait(300)
      cy.get('h1').should('have.text', 'Kitchen Sink')
    })
  })

  it('chaining & promises', () => {
    cy.visit(`https://example.cypress.io`).url().should('include', 'example')
    cy.contains('get').click().then(() => {
      cy.get('#get > a').should('have.text', 'cy.get()')
    })
  })
})