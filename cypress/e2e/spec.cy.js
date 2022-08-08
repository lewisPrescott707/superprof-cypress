describe('spec', () => {
  const url = "example"
  before(function () {
    cy.log("first")
  })

  afterEach(function () {
    cy.log("penultimate")
  })

  after(() => {
    cy.log("last")
  })
  
  it('should passes', () => {
    cy.visit(`https://${url}.cypress.io`)
    cy.get('.dropdown-toggle').click()
    cy.contains('a', 'Querying').click()
    cy.get('h1').should('have.text', 'Querying')
  })

  it('scope', () => {
    cy.visit(`https://${url}.cypress.io`)
  })

  it('types', () => {
    var obj = {
      "url": "example"
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