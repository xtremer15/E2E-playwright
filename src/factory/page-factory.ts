import { Page } from "@playwright/test";
import { PageInstanceType, PageType } from "./factory.types";
import { LoginPage } from "../pages/login/login.page";
import { AngularJiraClonePage } from "../pages/jira-clone/jira-clone.page";

export class PageFactory {
    static createPage<T extends PageInstanceType>(page: Page, type: PageType) {
        switch (type.toLocaleLowerCase()) {
            case 'login':
                return new LoginPage(page);
            case 'jira-clone':
                return new AngularJiraClonePage(page);
        }
    }
}