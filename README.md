# E-commerce Automation Infrastructure

This repository contains the end-to-end automation suite for the E-commerce platform using Cypress.

## Prerequisites

- Node.js (LTS)
- npm

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment variables:
   Copy `.env.example` to `.env` and update the values.
   ```bash
   cp .env.example .env
   ```

## Running Tests

- **Open Cypress Test Runner:**
  ```bash
  npx cypress open
  ```

- **Run All Tests Headless:**
  ```bash
  npx cypress run
  ```

- **Run Smoke Suite:**
  ```bash
  npx cypress run --spec "cypress/e2e/smoke/**/*"
  ```

## Project Structure

- `cypress/e2e`: Test specifications organized by suite (smoke, regression, etc.)
- `cypress/pages`: Page Objects for screen interactions.
- `cypress/support`: Custom commands and global configuration.
- `cypress/fixtures`: Test data.

## Best Practices
- Use `data-testid` for selectors where possible.
- Avoid rigid sleeps/waits (`cy.wait(1000)`).
- Ensure tests are independent.

