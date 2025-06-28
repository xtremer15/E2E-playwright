import { Page } from "@playwright/test";
import { BasePage } from "../../utils/BasePage";
import { LocatorManager } from "../../locators/Locators";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private readonly locators = LocatorManager.getInstance().getLocators('LoginPage');

    private emailInput: Input = new Input(this.page, this.locators.emailInput);
    private passwordInput: Input = new Input(this.page, this.locators.passwordInput);
    private loginButton: Button = new Button(this.page, this.locators.loginButton);
    private invalidEmailError = this.page.locator(this.locators.invalidEmailError);
    private invalidPasswordError = this.page.locator(this.locators.invalidPasswordError);


    clickLogin() {
        this.loginButton.click();
    }

    fillForm(email: string, password: string): void {
        this.emailInput.type(email);
        this.passwordInput.type(password);
    }
    get invalidEmailErrorText() {
        return this.invalidEmailError.textContent();

    }

    get invalidPasswordErrorText() {
        return this.invalidPasswordError.textContent();
    }
}