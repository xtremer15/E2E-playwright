import { expect } from "@playwright/test";
import { PageFactory } from "../../../../src/factory/page-factory";
import { LoginPage } from "../../../../src/pages/login/login.page";

export class LoginDomain {
    private loginPage: LoginPage;
    constructor(page: any) {
        this.loginPage = PageFactory.createPage<LoginPage>(page, 'login') as LoginPage;
    }

    public async navigetToLoginPage(): Promise<void> {
        await this.loginPage.goTo('https://angular-login-module.vercel.app/login')
    }

    public async loginUser(email: string, password: string): Promise<void> {
        await this.loginPage.fillForm(email, password);
        await this.loginPage.clickLogin();
    }

    public async checkEmailErrorIsDisplayed(expectedError: any) {
        await this.loginPage.invalidEmailErrorText.isVisible();
        expect(await this.loginPage.invalidEmailErrorText.textContent()).toBe(expectedError);
    }
}