describe('Login', () => {


  it('Happy Path', () => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    cy.wait(1000)
    cy.get('[data-cy="input-nombres"]').type('Mike')
    cy.get('[data-cy="input-apellido"]').type('Myers')
    cy.get('[data-cy="input-telefono"]').type('1122334455')
    cy.get('[data-cy="input-dni"]').type('22113445')
    cy.get('[data-cy="select-provincia"]').type('Córdoba')
    cy.press(Cypress.Keyboard.Keys.ENTER)
    cy.get('[data-cy="select-localidad"]').type('Achiras')
    cy.press(Cypress.Keyboard.Keys.ENTER)

    cy.get('[data-type="day"]').type('14')
    cy.get('[data-type="month"]').type('10')
    cy.get('[data-type="year"]').type('1994')
    cy.get('[data-cy="input-email"]').type('sikerius47@gmail.com')
    cy.get('[data-cy="input-confirmar-email"]').type('sikerius47@gmail.com')
  cy.get('[data-cy="input-password"]').type('Test1234!')
  cy.get('[data-cy="input-repetir-password"]').type('Test1234!')
  cy.get('[data-cy="btn-registrarse"]').click()
  cy.wait(5000)



  })

})
