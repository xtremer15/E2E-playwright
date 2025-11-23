import { ElementHandle, expect, FrameLocator, Locator, LocatorScreenshotOptions, Page } from "@playwright/test";
import { CustomAssertion } from "./CustomAssertion";
import { PageFunctionOn, SmartHandle, EvaluationArgument } from "playwright-core/types/structs";
import { IButton } from "../interfaces/Button.interface";

import { BaseComponent } from "./BaseComponent";

export class Button extends BaseComponent implements IButton, CustomAssertion {
    readonly page!: Page;
    readonly locator: Locator;

    constructor(page: Page, selector: string) {
        super();
        this.page = page;
        this.locator = this.page.locator(selector);
    }



    async click(): Promise<void> {
        await expect(this.locator).toBeVisible();
        await this.locator.click();
    }


    assertMessage(message: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
