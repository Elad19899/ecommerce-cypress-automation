// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Login Command
Cypress.Commands.add('login', (email, password) => {
    cy.session([email, password], () => {
        cy.visit('/login');
        cy.get('input[type="email"]').type(email);
        cy.get('input[type="password"]').type(password);
        cy.get('button[type="submit"]').click();
        cy.url().should('not.include', '/login');
    });
});

// Search Command
Cypress.Commands.add('searchProduct', (keyword) => {
    cy.get('[data-testid="search-input"]').type(`${keyword}{enter}`);
});

// Add to Cart Command
Cypress.Commands.add('addToCart', () => {
    cy.get('[data-testid="add-to-cart-button"]').click();
});
