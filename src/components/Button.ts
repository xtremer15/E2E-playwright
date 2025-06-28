import { ElementHandle, expect, FrameLocator, Locator, LocatorScreenshotOptions, Page } from "@playwright/test";
import { CustomAssertion } from "./CustomAssertion";
import { PageFunctionOn, SmartHandle, EvaluationArgument } from "playwright-core/types/structs";
import { IButton } from "../interfaces/Button.interface";

export class Button implements IButton, CustomAssertion {
    readonly page!: Page;
    readonly locator: Locator;

    constructor(page: Page, selector: string) {
        this.page = page;
        this.locator = this.page.locator(selector);
    }



    async click(): Promise<void> {
        await this.locator.isVisible();
        await this.locator.click();
    }


    assertMessage(message: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
