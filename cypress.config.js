require('dotenv').config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: process.env.BASE_URL || 'https://www.amazon.com', // Fallback for demo
        defaultCommandTimeout: 10000,
        viewportWidth: 1280,
        viewportHeight: 720,
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        reporter: 'mochawesome',
        reporterOptions: {
            reportDir: 'cypress/reports',
            overwrite: false,
            html: false,
            json: true,
        },
    },
    env: {
        API_BASE_URL: process.env.API_BASE_URL || 'https://api.example.com',
        BUYER_EMAIL: process.env.BUYER_EMAIL,
        BUYER_PASSWORD: process.env.BUYER_PASSWORD,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
        ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    },
});
