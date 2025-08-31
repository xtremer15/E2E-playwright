import { expect, Locator, Page } from "@playwright/test";
import { CustomAssertion } from "./CustomAssertion";
import { InputInterface } from "../interfaces/Input.interface";
import { retryWithBackoff } from "../utils/Utils";

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
        await retryWithBackoff(() => expect(this.selector).toBeVisible());

        console.log(`Filling input with: ${text}`);
        await retryWithBackoff(() => expect(this.selector).toBeEnabled());
        await this.selector.fill(text);
        console.log("Fill complete");
    }

}