import { test as baseTest } from '@playwright/test';
// import { LoginPage } from '../../e2e/pages/login';
import { UIActions as UI } from './UI';

const test = baseTest.extend<{
    webActions: UI;
    // loginPage: LoginPage;
}>({
    webActions: async ({ page, context }, use) => {
        await use(new UI(page, context));
    },
    // loginPage: async ({ page, context }, use) => {
    //     await use(new LoginPage(page, context));
    // },
})

export default test;
//ToDo : check them out
// https://github.com/Digy4/playwright-typescript-starter/blob/master/tests/lighthouse/Lighthouse.js
// https://github.com/nirtal85/Playwright-Typescript-Example/blob/main/src/entities/UserData.ts
