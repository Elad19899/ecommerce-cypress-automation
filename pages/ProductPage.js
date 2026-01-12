import BasePage from './BasePage';

class ProductPage extends BasePage {
    get productTitle() {
        return cy.get('#productTitle');
    }

    get price() {
        return cy.get('.a-price .a-offscreen').first();
    }

    get addToCartButton() {
        return cy.get('#add-to-cart-button');
    }

    get addedToCartMessage() {
        return cy.contains('Added to Cart');
    }

    addToCart() {
        this.addToCartButton.click();
    }
}

export default new ProductPage();
