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


    clickLogin() {
        this.loginButton.click();
    }

    fillForm(email: string, password: string): void {
        this.emailInput.type(email);
        this.passwordInput.type(password);
    }
    get invalidEmailErrorText() {
        return this.userErrorMessage

    }

    get invalidPasswordErrorText() {
        return this.invalidPasswordError
    }
}