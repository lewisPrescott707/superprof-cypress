describe('cross domain', () => {
    it('navigates', () => {
        cy.visit('https://example.cypress.io/')
        cy.get('h1').contains('Kitchen Sink')
        cy.contains('GitHub').click()
        cy.origin('github.com', () => {
          cy.contains('h2', 'CI status') // 👍
        })
    })
})