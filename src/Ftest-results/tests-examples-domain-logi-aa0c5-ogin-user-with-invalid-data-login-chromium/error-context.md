# Test info

- Name: Login Page Tests >> Should login user with invalid data
- Location: G:\QA\Automation Frameworks\E2E-playwright\tests\tests-examples\domain\login\login.spec.ts:19:9

# Error details

```
Error: page.waitForEvent: Test ended.
=========================== logs ===========================
waiting for event "domcontentloaded"
============================================================
    at G:\QA\Automation Frameworks\E2E-playwright\tests\tests-examples\domain\login\login.spec.ts:20:14
```

# Test source

```ts
   1 | import { test } from "@playwright/test";
   2 | import { LoginDomain } from "./login.domain";
   3 | import { LoginErrors } from "../../../../src/errors-handler/ui-errors";
   4 | import { log } from "console";
   5 | import { LoginPage } from "../../../../src/pages/login/login.page";
   6 | import { PageFactory } from "../../../../src/factory/page-factory";
   7 |
   8 | test.describe('Login Page Tests', () => {
   9 |     let loginDomain: LoginDomain;
  10 |     let loginPage: LoginPage;
  11 |     test.beforeEach(async ({ page }) => {
  12 |         loginPage = PageFactory.createPage<LoginPage>(page, 'login') as LoginPage;
  13 |         loginDomain = new LoginDomain(page);
  14 |         await loginDomain.navigetToLoginPage();
  15 |         await page.waitForLoadState('domcontentloaded');
  16 |
  17 |     });
  18 |
  19 |     test('Should login user with invalid data', async ({ page }) => {
> 20 |         page.waitForEvent('domcontentloaded');
     |              ^ Error: page.waitForEvent: Test ended.
  21 |         await loginPage.fillForm('admin', '');
  22 |         // await loginDomain.loginUser('admin', '');
  23 |         await loginDomain.checkEmailErrorIsDisplayed(LoginErrors.PASSWORD_REQUIRED);
  24 |     });
  25 |
  26 |     test('Should login user with valid data', async ({ page }) => {
  27 |         await loginPage.fillForm('admin', 'admin');
  28 |         // await loginDomain.loginUser('admin', 'admin');
  29 |         await loginDomain.navigateToJiraClone();
  30 |         // await loginPage.clickLogin();
  31 |         // await loginPage.locator(await loginPage.getLoginBtn()).click();
  32 |     });
  33 |
  34 | });
```