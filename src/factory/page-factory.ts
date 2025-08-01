import { Page } from "@playwright/test";
import { PageInstanceType, PageType } from "./factory.types";
import { LoginPage } from "../pages/login/login.page";

export class PageFactory {
    static createPage<T extends PageInstanceType>(page: Page, type: PageType) {
        switch (type.toLocaleLowerCase()) {
            case 'login':
                return new LoginPage(page);
            case 'jira-clone':
        }
    }
}