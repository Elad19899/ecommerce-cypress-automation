import BasePage from './BasePage';

class LoginPage extends BasePage {
    get emailInput() {
        return cy.get('input[type="email"]');
    }

    get passwordInput() {
        return cy.get('input[type="password"]');
    }

    get submitButton() {
        return cy.get('input[id="signInSubmit"]'); // Amazon-style ID
    }

    login(email, password) {
        this.visit('/login');
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.submitButton.click();
    }
}

export default new LoginPage();
