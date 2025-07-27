import { Page } from "@playwright/test";
import { BasePage } from "../../utils/BasePage";
import { LocatorManager } from "../../locators/Locators";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export class LoginPage extends BasePage {
    private readonly locators = LocatorManager.getInstance().getLocators('LoginPage');
    constructor(page: Page) {
        super(page);
    }


    private emailInput: Input = new Input(this.page, this.locators.usernameField);
    private passwordInput: Input = new Input(this.page, this.locators.passwordField);
    private loginButton: Button = new Button(this.page, this.locators.loginButton);
    private userErrorMessage = this.page.locator(this.locators.userErrorMessage);
    private invalidPasswordError = this.page.locator(this.locators.passwordErrorMessage);


    async clickLogin() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.loginButton.click();
    }

    async fillForm(email: string, password: string) {
        await this.emailInput.type(email);
        await this.passwordInput.type(password);
    }

    async setEmail(email: string): Promise<void> {
        await this.emailInput.type(email);
    }
    async setPassword(password: string): Promise<void> {
        await this.passwordInput.type(password);
    }

    get invalidEmailErrorText() {
        return this.userErrorMessage

    }

    get invalidPasswordErrorText() {
        return this.invalidPasswordError
    }
}