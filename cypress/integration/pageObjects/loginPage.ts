class LogInPage{
    baseURL= 'https://opensource-demo.orangehrmlive.com'
    dashboardURL='/web/index.php/dashboard/index'

    usernameField= ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    passwordField= ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginButton= '.oxd-button'
    username= 'Admin'
    correctPassword= 'admin123'
    wrongPassword= 'wrongpassword'
    invalidLoginMessage= '.oxd-alert-content > .oxd-text'
    forgotPassword= '.orangehrm-login-forgot > .oxd-text'
    forgotPasswordNameField= '.oxd-input'
    resetPasswordButton= '.oxd-button--secondary'
    resetSuccessfulMessage= '.oxd-text--h6'

    logIn(username, password)  {
        cy.get(this.usernameField).type(username)
        cy.get(this.passwordField).type(password)
        cy.get(this.loginButton).click()
     }
}
export const login: LogInPage = new LogInPage()