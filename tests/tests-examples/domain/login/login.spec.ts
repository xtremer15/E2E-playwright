import { test } from "@playwright/test";
import { LoginDomain } from "./login.domain";
import { LoginErrors } from "../../../../src/errors-handler/ui-errors";

test.describe('Login Page Tests', () => {
    let loginDomain: LoginDomain;
    test.beforeEach(async ({ page }) => {
        loginDomain = new LoginDomain(page);

    });

    test('Should login user with invalid data', async ({ page }) => {
        await loginDomain.loginUser('asdad', '');
        await page.waitForLoadState('domcontentloaded');
        await loginDomain.checkEmailErrorIsDisplayed(LoginErrors.EMAIL_REQUIRED);
    });

});