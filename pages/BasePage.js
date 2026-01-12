class BasePage {
    visit(path = '/') {
        cy.visit(path);
    }

    getElement(selector) {
        return cy.get(selector);
    }
}

export default BasePage;
