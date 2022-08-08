describe('cross domain', () => {
    it('navigates', () => {
        cy.visit('https://example.cypress.io/')
        cy.get('h1').contains('Kitchen Sink')
        cy.origin('github.com', () => {
        cy.visit('/cypress-io/cypress-example-kitchensink')
          cy.contains('h2', 'CI status') // 👍
        })
    })
})