import { Locator } from "@playwright/test";

export interface IButton {
    locator:Locator;
    click(): Promise<void> | void;
}