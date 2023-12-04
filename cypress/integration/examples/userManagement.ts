import { login } from "../pageObjects/loginPage"
import { userManagement } from "../pageObjects/userManagmentPage"

describe('User Management Page', () => {

    it('Should add user succesfully', () => {

        cy.visit(Cypress.env('baseURL'))
        login.logIn(Cypress.env('username'),Cypress.env('correctPassword'))

        cy.visit(Cypress.env('baseURL')+userManagement.systemUsersURL)
        //the above could be done by cy.get(userManagement.adminTabMain).click() instead too

        cy.get(userManagement.addButton).click()

        //confirm we're on the right URL
        cy.url().should('eq',Cypress.env('baseURL')+userManagement.addUserURL)



        //filling in the user role
        cy.get(userManagement.userFieldDropdownIcon).click().each(($el, index, $list) => {
                const role = $el.find(userManagement.userRoleFieldAdmin+ ':nth-child('+index+')').text();
                if (role.includes('Admin')) {
                    cy.wrap($el).click();
                }
            })

        cy.get(userManagement.userRoleFieldAdmin).click()

        //filling in the employee name
        cy.get(userManagement.employeeNameField).type('sa')
        cy.wait(2000)
        cy.get(userManagement.nameAutocomplete).each(($el, index, $list) => {
            const name=$el.text()

            if(name.includes('Sania')){
                cy.wrap($el).click()
            }

        })

        //choosing the enabled status
        cy.get(userManagement.statusField).click()
        cy.get(userManagement.statusEnabledOption).click()

        //wrinting a username and password
        cy.get(userManagement.usernameField).type('admin1')
        cy.get(userManagement.passwordField).type(Cypress.env('correctPassword'))
        cy.get(userManagement.confirmPasswordField).type(Cypress.env('correctPassword'))

        //saving the new user
        cy.get(userManagement.saveButton).click()
        cy.wait(3000)

        //searching for the emplyee name in the system users list, finding it and deleting it so we can add it again on the next run
        cy.get(userManagement.userNameColumn).each(($el, index, $list) => {
            const employeeName=$el.text()

            if(employeeName.includes('admin1')){
                cy.get(':nth-child(' +index + ') > ' +userManagement.deleteButton).click()
                cy.get(userManagement.deleteConfirmationButton).click()
            }
        })

    })
})