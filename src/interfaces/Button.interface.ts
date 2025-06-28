import { Locator } from "@playwright/test";

export interface IButton {
    readonly locator: Locator;
    click(): Promise<void> | void;
}