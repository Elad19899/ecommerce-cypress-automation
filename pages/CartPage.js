import BasePage from './BasePage';

class CartPage extends BasePage {
    get cartCount() {
        return cy.get('#nav-cart-count');
    }

    get cartItems() {
        return cy.get('.sc-list-item'); // Generic list item class
    }

    get subtotal() {
        // Amazon uses different IDs based on device, typically #sc-subtotal-amount-activecart
        return cy.get('#sc-subtotal-amount-activecart');
    }

    open() {
        cy.get('#nav-cart').click();
    }
}

export default new CartPage();
