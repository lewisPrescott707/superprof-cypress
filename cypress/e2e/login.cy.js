describe('cross domain', () => {
    it('login', () => {
        cy.visit('/')
        cy.contains('Welcome to the BBC').should('be.visible')
    })
})