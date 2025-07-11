import { test, expect } from '@playwright/test';
import { TableUtils } from './Table.utils';

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

  test('work on table', async ({ page, }) => {
    await page.goto('https://the-internet.herokuapp.com/tables');
    await page.waitForTimeout(1500);
    const tableLocator = page.locator('#table1');
    const tableHeader = tableLocator.locator('thead .header span');
    const tableRows = tableLocator.locator('tbody td');

    for (const row of await tableRows.all()) {
      const rowText = await row.textContent();
      const containsJason = rowText?.includes('Jason');

      console.log('Row text:', rowText);

      if (containsJason) {
        await row.getByRole('link', { name: 'delete' }).click();
        console.log('Clicked delete for row containing Jason');
        break; // Optional: stop after the first match
      }
    }
    // console.log("asdadaujkdask bla bla",await tableRows.all())
    // for (let element of await tableHeader.all()) {
    //   const firstName = await element.textContent() === 'First Name';
    //   if (await firstName) {
    //     console.log(await firstName)

    //     for (let i of await tableRows.all()) {
    //       const jsonTxt = await i.getByText('Jason')
    //       console.log(jsonTxt)
    //       if (await jsonTxt) {
    //         await i.getByText('delete').click
    //       }
    //     }
    //   }
    // }

    // Navigate to the 'Multiple Windows' page


  });

  test('work on table with TableUtils', async ({ page }) => {
    await page.goto("https://www.ag-grid.com/example/")
    await page.waitForEvent('domcontentloaded');
    await page.locator('[aria-label="Dark mode selector"]').first().click()
  })
});
