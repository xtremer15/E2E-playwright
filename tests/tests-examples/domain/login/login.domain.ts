import { expect } from "@playwright/test";
import { PageFactory } from "../../../../src/factory/page-factory";
import { LoginPage } from "../../../../src/pages/login/login.page";

export class LoginDomain {
    private loginPage: LoginPage;
    constructor(page: any) {
        this.loginPage = PageFactory.createPage<LoginPage>(page, 'login') as LoginPage;
    }

    public loginUser(email: string, password: string): void {
        this.loginPage.fillForm(email, password);
        this.loginPage.clickLogin();
    }

    public async checkEmailErrorIsDisplayed(expectedError: string) {
        await expect(this.loginPage.invalidEmailErrorText).toBe(expectedError);
    }
}