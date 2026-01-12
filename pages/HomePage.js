import BasePage from './BasePage';

class HomePage extends BasePage {
    get apiSearchBar() {
        return cy.get('input[id="twotabsearchtextbox"]'); // Amazon style selector
    }

    get searchButton() {
        return cy.get('input[id="nav-search-submit-button"]');
    }

    search(keyword) {
        this.apiSearchBar.type(`${keyword}`);
        this.searchButton.click();
    }
}

export default new HomePage();
