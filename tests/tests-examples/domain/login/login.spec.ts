import { test } from "@playwright/test";
import { LoginDomain } from "./login.domain";
import { LoginErrors } from "../../../../src/errors-handler/ui-errors";
import { log } from "console";
import { LoginPage } from "../../../../src/pages/login/login.page";
import { PageFactory } from "../../../../src/factory/page-factory";

test.describe('Login Page Tests', () => {
    let loginDomain: LoginDomain;
    let loginPage: LoginPage;
    test.beforeEach(async ({ page }) => {
        loginPage = PageFactory.createPage<LoginPage>(page, 'login') as LoginPage;
        loginDomain = new LoginDomain(page);
        await loginDomain.navigetToLoginPage();
        await page.waitForLoadState('domcontentloaded');

    });

    test('Should login user with invalid data', async ({ page }) => {
        // await loginPage.fillForm('admin', '');
        await loginDomain.loginUser('admin', '');
        await loginDomain.checkEmailErrorIsDisplayed(LoginErrors.PASSWORD_REQUIRED);
    });

    test('Should login user with valid data', async ({ page }) => {
        // await loginPage.fillForm('admin', 'admin');
        await loginDomain.loginUser('admin', 'admin');
        await loginDomain.navigateToJiraClone();
        // await loginPage.clickLogin();
    });

});