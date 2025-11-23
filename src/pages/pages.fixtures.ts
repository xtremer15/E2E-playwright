import { test as pagesFixtures } from '@playwright/test';
import { LoginPage } from './login/login.page';
import { AngularJiraClonePage } from './jira-clone/jira-clone.page';


export type PagesFixtures = {
    jiraClone: AngularJiraClonePage;
    loginPage: LoginPage;

};

const pages = pagesFixtures.extend<PagesFixtures>({
    loginPage: ({ page }, use) => use(new LoginPage(page)),
    jiraClone: ({ page }, use) => use(new AngularJiraClonePage(page))
})

export default pages;