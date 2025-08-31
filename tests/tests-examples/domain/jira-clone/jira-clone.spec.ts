import { test } from "@playwright/test";
import { Agent } from "http";
import { AngularJiraClonePage } from "../../../../src/pages/jira-clone/jira-clone.page";
import { AngularJiraCloneDomain } from "./jira-clone.domain";

test.describe('Angular Jira Clone Tests', () => {
    let jiraCloneDomain: AngularJiraCloneDomain;
    test.beforeEach(async ({ page }) => {
        jiraCloneDomain = new AngularJiraCloneDomain(page);
        await page.waitForLoadState('domcontentloaded');
    });

    test('The navigation to mailwind harmony', async ({ page }) => {
        await jiraCloneDomain.clickMailwindBtn()
    })
})