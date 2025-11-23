import { test as baseTest, mergeTests, BrowserContext, Page } from '@playwright/test';
import { UIActions as UI } from './UI';
import { API } from './API';
import pagesFixtures, { PagesFixtures } from '../../../src/pages/pages.fixtures';
import servicesFixtures, { ServicesFixtures } from '../../../src/services/services.fixtures';


type IntegratedFixtures = PagesFixtures & ServicesFixtures;

type GeneralTestFixtures = {
    webActions: UI;
    context: BrowserContext;
    page: Page;
} & IntegratedFixtures;

const test = mergeTests(baseTest, pagesFixtures, servicesFixtures).extend<GeneralTestFixtures>({
    webActions: ({ page, context }, use) => use(new UI(page, context)),
    context: ({ context }, use) => use(context),
    page: ({ page }, use) => use(page),
})

export default test;
export { expect } from '@playwright/test';

//ToDo : check them out
// https://github.com/Digy4/playwright-typescript-starter/blob/master/tests/lighthouse/Lighthouse.js
// https://github.com/nirtal85/Playwright-Typescript-Example/blob/main/src/entities/UserData.ts
//https://github.com/hdorgeval/playwright-fluent