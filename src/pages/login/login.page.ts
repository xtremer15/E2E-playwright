import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../utils/BasePage";
import { LocatorManager } from "../../locators/Locators";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { awaitPageNavigation } from "../../utils/Utils";

export class LoginPage extends BasePage {
    private readonly locators = LocatorManager.getInstance().getLocators('LoginPage');
    private stringEmailField: string = this.locators.usernameField;
    private stringPassField: string = this.locators.passwordField;
    private stringLoginBTN: string = this.locators.loginButton;

    private locatorEmail = this.page.locator(this.locators.usernameField);
    private locatorPassword = this.page.locator(this.locators.passwordField);
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

    async getLoginBtn(): Promise<string> {
        return this.stringLoginBTN
    }

    async navigateToJira() {
        await awaitPageNavigation(this.page, "/project/board")
    }

    async fillForm(email: string, password: string) {
        // await this.emailInput.type(email);
        await this.locatorEmail.fill(email);
        // await this.locator(this.stringEmailField).fill(email);
        await this.page.waitForTimeout(1000)
        await this.locator(this.stringPassField).fill(password);
        // await this.passwordInput.type(password);
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