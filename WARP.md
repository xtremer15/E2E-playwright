# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

### Test Execution
```bash
# Run all tests
npx playwright test

# Run tests for a specific project/browser
npx playwright test --project=login-chromium
npx playwright test --project=jira-clone-chromium

# Run tests in specific directory
npx playwright test tests/tests-examples/domain/login/
npx playwright test tests/tests-examples/API/

# Run a single test file
npx playwright test tests/tests-examples/domain/login/login.spec.ts

# Run tests with specific tags
npx playwright test --grep "@API"

# Debug tests
npx playwright test --debug
npx playwright test --headed

# Generate and view test reports
npx playwright show-report
```

### Development Setup
```bash
# Install dependencies
npm ci

# Install Playwright browsers
npx playwright install --with-deps

# Run tests in specific environments
npx playwright test --project=login-chromium   # Login tests only
npx playwright test --project=jira-clone-chromium   # Jira clone tests (depends on login)
```

### Debugging and Analysis
```bash
# View test traces
npx playwright show-trace src/Ftest-results/trace.zip

# Run tests with trace collection
npx playwright test --trace=on

# Generate screenshots on failure (configured by default)
# Screenshots saved to: src/Ftest-results/
```

## Architecture

### Framework Structure
This is a layered Page Object Model (POM) architecture with the following key patterns:

**Page Factory Pattern**: Uses `PageFactory.createPage()` to instantiate page objects based on string identifiers (`'login'`, `'jira-clone'`). This centralizes page creation and enables easy switching between page implementations.

**Domain Layer**: Business logic is abstracted into domain classes (e.g., `LoginDomain`, `AngularJiraCloneDomain`) that orchestrate page interactions and assertions. This separates test intent from implementation details.

**Component-Based UI Elements**: Reusable UI components (`Button`, `Input`) with built-in assertions and logging. Each component implements interfaces and custom assertion capabilities.

**Centralized Locator Management**: All selectors stored in `src/locators/Locators.json` and managed through `LocatorManager` singleton. This enables easy maintenance and environment-specific overrides.

**Intercepted Logging**: `BasePage` uses Proxy patterns to intercept all Playwright locator operations, providing comprehensive action logging through Winston logger.

### Project Configuration
Tests are organized by domain and run in separate browser projects:
- `login-chromium`: Runs login-related tests first
- `jira-clone-chromium`: Depends on login completion, runs application tests

Configuration split across:
- `playwright.config.ts`: Main configuration
- `src/playwright-config/`: Modular config files for different aspects (browser, expectations, global settings)

### Test Organization
```
tests/
├── tests-examples/
│   ├── domain/           # Domain-specific E2E tests
│   │   ├── login/        # Login functionality
│   │   └── jira-clone/   # Application features
│   ├── API/              # API tests with response validation
│   └── Database/         # Database connectivity tests
```

### Key Architectural Components

**Base Classes**:
- `BasePage`: Provides intercepted locators with logging, common page utilities
- `BaseService`: API response validation utilities

**Factory Pattern**: 
- `PageFactory`: Creates page instances based on string types
- Enables runtime page switching and centralized instantiation

**Services Layer**:
- API testing with request/response validation
- Database connectivity through `DBActions`
- File-based expected response management

**Component System**:
- Reusable UI components with built-in visibility checks
- Interface-based design enabling component swapping
- Custom assertion capabilities per component type

**Error Handling**:
- Centralized error messages in `ui-errors.ts`
- Domain-specific error validation in test flows

### Development Guidelines

**Adding New Pages**:
1. Create page class extending `BasePage`
2. Add locators to `Locators.json` 
3. Register in `PageFactory` switch statement
4. Create corresponding domain class for business logic

**Test Dependencies**:
- Login tests must pass before jira-clone tests run
- Global setup/teardown handled in `global.setup.ts`/`global.teardown.ts`

**Environment Configuration**:
- Base URLs and credentials in `testConfig.ts` 
- API endpoints configurable per environment (qa/dev)
- Database connection parameters externalized

**Logging and Debugging**:
- All page interactions automatically logged via proxy interception
- Test results and traces stored in `src/Ftest-results/`
- Custom reporter available in `custom-reporter/`