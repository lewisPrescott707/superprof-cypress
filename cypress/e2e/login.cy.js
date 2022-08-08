describe('cross domain', () => {
    it('login', () => {
        cy.origin('account.bbc.com', () => {
            cy.visit('/signin')
            cy.get('[type="email"]').type('superprof123test@gmail.com')
            cy.get('[type="password"]').type('Superprof123')
            cy.contains('button', 'Sign in').click()
        })
        cy.visit('/')
        cy.contains('Welcome to the BBC').should('be.visible')
    })
})