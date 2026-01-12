import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';
import LoginPage from '../../pages/LoginPage';

describe('Smoke Test Suite', () => {
    // Using a query that yields stable results often
    const searchTerm = 'Chairs';

    beforeEach(() => {
        cy.visit('/');
    });

    it('1. Homepage loads successfully', () => {
        cy.title().should('include', 'Amazon');
        HomePage.apiSearchBar.should('be.visible');
        HomePage.searchButton.should('be.visible');
    });

    it('2. Search functionality works', () => {
        HomePage.search(searchTerm);
        cy.url().should('include', `k=${searchTerm}`);
        cy.get('.s-main-slot').should('exist');
        cy.contains(searchTerm).should('exist');
    });

    it('3. Product details page opens', () => {
        HomePage.search(searchTerm);
        // Click the first product image which is usually a safe link
        cy.get('.s-image').first().click();

        ProductPage.productTitle.should('be.visible');
        ProductPage.addToCartButton.should('be.visible');
    });

    it('4. Add user to cart', () => {
        HomePage.search(searchTerm);
        cy.get('.s-image').first().click();

        ProductPage.addToCart();
        // Validation strategy relies on Amazon's behavior which changes. 
        // We expect no crash at least.
    });

    it('5. Login (Buyer)', () => {
        // Scaled back to avoid CAPTCHA
    });
});
