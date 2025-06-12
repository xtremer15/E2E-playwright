import { test, expect } from '@playwright/test';

test.describe('Example Tests', () => {


  test('open new tab', async ({ page, context }) => {
    await page.goto('https://the-internet.herokuapp.com/');

    // Navigate to the 'Multiple Windows' page
    await page.locator('[href="/windows"]').click();
    await page.waitForLoadState('domcontentloaded');
    await page.locator('[href=\'/windows/new\']').click()
    const newTab = await context.waitForEvent('page');
    await newTab.waitForLoadState('domcontentloaded');

    // Assert the new tab URL
    await expect(newTab).toHaveURL('https://the-internet.herokuapp.com/windows/new');
    console.log(newTab.url());
  });
})
