describe('jquery', () => {
    it('should passes', () => {
        cy.visit(`https://example.cypress.io`)
        cy.get('.dropdown-toggle').click()
        cy.contains('a', 'Querying').click()
        cy.get('h1').should('have.text', 'Querying')
    })
})