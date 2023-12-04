class UserManagementPage{
    systemUsersURL= '/web/index.php/admin/viewSystemUsers'
    addUserURL= '/web/index.php/admin/saveSystemUser'

    adminTabMain= ':nth-child(1) > .oxd-main-menu-item'
    addButton= '.orangehrm-header-container > .oxd-button'
    userRoleFieldAdmin= '.oxd-select-dropdown'
    userFieldDropdownIcon= ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon'

    employeeNameField= '.oxd-autocomplete-text-input > input'
    nameAutocomplete= '.oxd-autocomplete-dropdown'

    statusField= ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon'
    statusEnabledOption = '.oxd-select-dropdown > :nth-child(2)'

    usernameField= ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'
    passwordField= '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'
    confirmPasswordField= ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'

    saveButton= '.oxd-button--secondary'

    userNameColumn= '.oxd-table-row > :nth-child(2)'
    employeeRow= '.oxd-table-row'
    deleteButton= '.oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1)'
    deleteConfirmationButton= '.oxd-button--label-danger'
}
export const userManagement: UserManagementPage = new UserManagementPage()

