import { expect, Locator, Page } from "@playwright/test";
import { CustomAssertion } from "./CustomAssertion";
import { InputInterface } from "../interfaces/Input.interface";

export class Input implements InputInterface, CustomAssertion {

    readonly page!: Page;
    private selector!: Locator;

    constructor(page: Page, selector: string) {
        this.page = page;
        this.selector = this.page.locator(selector);
        console.log("Input selector:", selector);
    }


    async assertMessage(message: string): Promise<void> {
        await this.selector.waitFor({ state: 'visible' });
        expect(await this.selector.textContent()).toBe(message);
    }


    async type(text: string): Promise<void> {
        console.log("Waiting for selector to be visible...");
        await expect(this.selector).toBeVisible();

        console.log(`Filling input with: ${text}`);
        await this.selector.click();
        await this.selector.fill(text, { timeout: 500 });
        console.log("Fill complete");
    }

}