/// <reference types="Cypress" />

import { login } from "../pageObjects/loginPage"

describe('Login Page', () => {
    beforeEach(()=> cy.visit(Cypress.env('baseURL')+login.loginURL))


    it('Should log in successfully', () => {
        login.logIn(Cypress.env('username'),Cypress.env('correctPassword'))

        //checking the URl user is redirected to is correct
        cy.url().should('eq',Cypress.env('baseURL')+login.dashboardURL)
    })

    // it('Should not login with invalid', () => {
    //     login.logIn(Cypress.env('username'),Cypress.env('wrongPassword'))

    //     //comparing the error text with what is expected to appear
    //     cy.get(login.invalidLoginMessage).should('have.text','Invalid credentials')
    // })

    // it('Forgot Password should work', () => {
    //     cy.get(login.forgotPassword).click()
    //     cy.get(login.forgotPasswordNameField).type(Cypress.env('username'))
    //     cy.get(login.resetPasswordButton).click()

    //     //making sure the reset password link successful message appears as expected
    //     cy.get(login.resetSuccessfulMessage).contains('successfully')
    // })

})