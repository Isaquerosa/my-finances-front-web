

describe('login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should not be able to login without email and password', () => {
    cy.get('#submit-signin-button').should('be.visible').click()

    cy.get(':nth-child(2) > #error-message').should('be.visible')
    cy.get('.mt-8 > #error-message').should('be.visible')
    cy.contains('Campo obrigatório')
  })

  it('should be able to login with success', () => {
    cy.get('#email-input').should('be.visible').type('isaquerosa977@gmail.com')
    cy.get('#password-input').should('be.visible').type('123456')

    cy.get('#submit-signin-button').should('be.visible').click()

    cy.url().should('eq', 'http://localhost:3000/transacoes')
    cy.contains('Listagem de transações')
  })
})