import { test } from "@playwright/test";
import { LoginDomain } from "./login.domain";
import { LoginErrors } from "../../../../src/errors-handler/ui-errors";
import { log } from "console";

test.describe('Login Page Tests', () => {
    let loginDomain: LoginDomain;
    test.beforeEach(async ({ page }) => {
        await page.goto("/")
        loginDomain = new LoginDomain(page);
    });

    test('Should login user with invalid data', async ({ page }) => {
        await loginDomain.loginUser('admin', '');
        await page.waitForLoadState('domcontentloaded');
        await loginDomain.checkEmailErrorIsDisplayed(LoginErrors.PASSWORD_REQUIRED);
    });

});