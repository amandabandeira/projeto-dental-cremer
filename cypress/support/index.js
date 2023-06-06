// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
require('./commands')
const url = Cypress.config("baseUrl")
Cypress.Commands.add('login', () => {
    cy.visit(url)
    cy.wait(900)
    cy.get('button > span').contains('Entrar').click()
    cy.wait(900)
    cy.get('#email-header').type('joanna.amanda12@hotmail.com')
    cy.wait(900)
    cy.get('#password-header').type("Mariameg395@")
    cy.get('#header-send2 > span').click()
    cy.wait(2000)
})

