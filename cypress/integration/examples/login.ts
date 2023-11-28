/// <reference types="Cypress" />

import { login } from "../pageObjects/loginPage"

describe('Login Page', () => {
    beforeEach(()=>{ cy.visit(login.baseURL) })

    it('Successful Login', () => {
        login.logIn(login.username,login.correctPassword)

        //checking the URl user is redirected to is correct
        cy.url().should('eq',login.baseURL+login.dashboardURL)
    })

    it('Should not login with invalid', () => {
        login.logIn(login.username,login.wrongPassword)

        //comparing the error text with what is expected to appear
        cy.get(login.invalidLoginMessage).should('have.text','Invalid credentials')
    })

    it('Forgot Password', () => {
        cy.get(login.forgotPassword).click()
        cy.get(login.forgotPasswordNameField).type(login.username)
        cy.get(login.resetPasswordButton).click()

        //making sure the reset password link successful message appears as expected
        cy.get(login.resetSuccessfulMessage).contains('successfully')
    })

})