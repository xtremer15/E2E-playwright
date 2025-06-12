import { expect, Locator, Page } from "@playwright/test";
import { Input } from "../components/Input";

export class BasePage {
    readonly page!: Page;
    readonly url!: string;

    constructor(page: Page) {
        this.page = page;
    }

    async goTo(url: string): Promise<void> {
        await this.page.goto(url);
    }
    async waitForUrl(url: string): Promise<void> {
        url ? await this.page.waitForURL(url) : await this.page.waitForURL("www.google.com");
        expect(await this.page.url()).toBe(url);
    }


    async waitForElementVisibility(selector: any): Promise<void> {
        await this.page.waitForSelector(selector, { state: 'visible' });
        const isVisible = await this.page.locator(selector).isVisible()
        expect(isVisible).toBeTruthy();
    }

   

    async checkErrorMessage(locator: string, erorMessage: string) {
        await this.waitForElementVisibility(locator);
        const errorMsg = await this.page.locator(locator).innerText();
        expect(errorMsg).toBe(erorMessage);
    }
}