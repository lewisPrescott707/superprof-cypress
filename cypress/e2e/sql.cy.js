const dbName = 'superprof'
const query = 'SELECT * FROM students'

describe('database', () => {
    it('sql', () => {
        cy.task('queryDatabase', { dbName, query }).should('have.length', 1)
    })
})
