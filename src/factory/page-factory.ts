import { Page } from "@playwright/test";
import { PageInstanceType, PageType } from "./factory.types";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

export class PageFactory {
    static createPage<T extends PageInstanceType>(page: Page, type: PageType) {
        switch (type) {
            case 'login':
                return new LoginPage(page);
            case 'dashboard':
                return new DashboardPage(page);
        }
    }
}