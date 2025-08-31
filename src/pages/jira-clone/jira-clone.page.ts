import { Button } from './../../components/Button';
import { Page } from "@playwright/test";
import { LocatorManager } from "../../locators/Locators";
import { BasePage } from "../../utils/BasePage";

export class AngularJiraClonePage extends BasePage {
    private readonly locators = LocatorManager.getInstance().getLocators('LoginPage');
    constructor(page: Page) {
        super(page);
    }

    private mailwindHarmnyButton = new Button(this.page, this.locators.transactionsHub)

    public async clickMailwindBtn() {
        await this.mailwindHarmnyButton.click()
    }

}