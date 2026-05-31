# Project Details

This file provides guidance to AI agents when working with code in this repository.

## Commands

### Test Execution
- Run all tests: `npx playwright test`
- Run tests for a specific project: `npx playwright test --project=login-chromium` or `npx playwright test --project=jira-clone-chromium`
- Run tests in a specific directory: `npx playwright test tests/tests-examples/domain/login/`
- Run a single test file: `npx playwright test tests/tests-examples/domain/login/login.spec.ts`
- Run tests with specific tags: `npx playwright test --grep "@API"`
- Debug tests: `npx playwright test --debug` or `npx playwright test --headed`
- View test reports: `npx playwright show-report`

### Development Setup
- Install dependencies: `npm ci`
- Install Playwright browsers: `npx playwright install --with-deps`

### Debugging and Analysis
- View test traces: `npx playwright show-trace src/Ftest-results/trace.zip`
- Run tests with trace collection: `npx playwright test --trace=on`

## Architecture & Structure

### Framework Architecture
The project implements a layered Page Object Model (POM) with several key patterns:
- **Page Factory Pattern**: Page objects are instantiated via `PageFactory.createPage()` using string identifiers (e.g., `'login'`), centralizing instantiation.
- **Domain Layer**: Business logic is abstracted into domain classes (e.g., `LoginDomain`) that orchestrate interactions across pages and assertions.
- **Component-Based UI**: Reusable UI components (`Button`, `Input`) implement interfaces and custom assertion capabilities.
- **Centralized Locators**: All selectors are stored in `src/locators/Locators.json` and managed by the `LocatorManager` singleton.
- **Intercepted Logging**: `BasePage` uses a Proxy pattern to intercept locator operations and log actions via Winston.

### Project Configuration
- **Main Config**: `playwright.config.ts`
- **Modular Config**: Detailed configurations for browsers and expectations are found in `src/playwright-config/`.
- **Environment Settings**: Base URLs and credentials are managed in `testConfig.ts`.
- **Browser Projects**: 
  - `login-chromium`: Runs login-related tests.
  - `jira-clone-chromium`: Application tests that depend on successful login.

### Test Organization
Tests are located in `tests/tests-examples/` and categorized by:
- `domain/`: E2E tests for specific business domains (e.g., `login`, `jira-clone`).
- `API/`: API response validation tests.
- `Database/`: Database connectivity and data tests.

