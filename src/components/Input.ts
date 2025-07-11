import { expect, Locator, Page } from "@playwright/test";
import { CustomAssertion } from "./CustomAssertion";
import { InputInterface } from "../interfaces/Input.interface";

export class Input implements InputInterface, CustomAssertion {

    readonly page!: Page;
    private selector!: Locator;

    constructor(page: Page, selector: string) {
        this.page = page;
        this.selector = page.locator(selector);
        console.log("Input selector:", selector);
    }


    async assertMessage(message: string): Promise<void> {
        expect(await this.selector.textContent()).toBe(message);
    }


    async type(text: string): Promise<void> {
        await this.selector.focus();
        expect(await this.selector).toBeFocused();
        await this.selector.fill(text, { timeout: 500 });
    }

}