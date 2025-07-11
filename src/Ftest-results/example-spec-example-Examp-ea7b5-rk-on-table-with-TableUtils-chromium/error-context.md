# Test info

- Name: Example Tests >> work on table with TableUtils
- Location: D:\Playwright\E2E-playwright\tests\example-spec\example.spec.ts:62:7

# Error details

```
Error: page.waitForEvent: Test timeout of 3000ms exceeded.
=========================== logs ===========================
waiting for event "domcontentloaded"
============================================================
    at D:\Playwright\E2E-playwright\tests\example-spec\example.spec.ts:65:16
```

# Page snapshot

```yaml
- banner:
  - link "Home":
    - /url: /
    - img
    - img
  - button "Products"
  - button "Open search with Enter or Space, or use the shortcut Ctrl K while anywhere else in the page.": Search Ctrl K
  - navigation:
    - list:
      - listitem:
        - link "AG Grid Demos":
          - /url: /example/
          - text: Demos
      - listitem:
        - link "AG Grid Theme Builder":
          - /url: /theme-builder/
          - text: Theme Builder
      - listitem:
        - link "AG Grid Docs":
          - /url: /react-data-grid/getting-started/
          - text: Docs
      - listitem:
        - link "AG Grid API":
          - /url: /react-data-grid/reference/
          - text: API
      - listitem:
        - link "AG Grid Community":
          - /url: /community/
          - text: Community
      - listitem:
        - link "AG Grid Pricing":
          - /url: /license-pricing/
          - text: Pricing
      - listitem:
        - link "AG Grid GitHub":
          - /url: https://github.com/ag-grid/ag-grid
      - listitem:
        - button "Dark mode selector"
- heading "Performance" [level=1]
- link "See the video tour":
  - /url: https://youtu.be/bcMvTUVbMvI
  - button "See the video tour"
- paragraph: Example showing grid performance with adjustable rows and columns.
- link "Performance Grid illustration":
  - /url: /example/
  - img "Performance Grid illustration"
- text: Performance
- link "Finance Grid illustration":
  - /url: /example-finance/
  - img "Finance Grid illustration"
- text: Finance
- link "HR Grid illustration":
  - /url: /example-hr/
  - img "HR Grid illustration"
- text: HR
- link "Inventory Grid illustration":
  - /url: /example-inventory/
  - img "Inventory Grid illustration"
- text: Inventory
- img
- text: "Data Size:"
- combobox "Framework selector": 100 Rows, 22 Cols
- text: "Theme:"
- combobox "Framework selector": Quartz
- text: "Filter:"
- textbox "Filter:"
- text: Drag here to set row groups
- grid:
  - rowgroup:
    - row
    - row "Row Number":
      - columnheader "Row Number"
    - row:
      - gridcell
  - rowgroup:
    - row "Participant Game of Choice Performance":
      - columnheader "Participant"
      - columnheader "Game of Choice"
      - columnheader "Performance"
    - row "Column with Header Selection  Name Language Country Game Name Bought Bank Balance Rating":
      - columnheader "Column with Header Selection ":
        - checkbox "Column with Header Selection"
        - text: 
      - columnheader "Name"
      - columnheader "Language"
      - columnheader "Country"
      - columnheader "Game Name"
      - columnheader "Bought"
      - columnheader "Bank Balance"
      - columnheader "Rating"
    - row "Open Filter Menu Open Filter Menu Open Filter Menu Open Filter Menu Open Filter Menu Open Filter Menu Open Filter Menu":
      - gridcell
      - gridcell "Open Filter Menu":
        - textbox "Name Filter Input" [disabled]
        - button "Open Filter Menu": 
      - gridcell "Open Filter Menu":
        - textbox "Language Filter Input"
        - button "Open Filter Menu": 
      - gridcell "Open Filter Menu":
        - textbox "Country Filter Input" [disabled]
        - button "Open Filter Menu": 
      - gridcell "Open Filter Menu":
        - textbox "Game Name Filter Input"
        - button "Open Filter Menu": 
      - gridcell "Open Filter Menu":
        - textbox "Bought Filter Input" [disabled]
        - button "Open Filter Menu": 
      - gridcell "Open Filter Menu":
        - spinbutton "Bank Balance Filter Input"
        - button "Open Filter Menu": 
      - gridcell "Open Filter Menu":
        - textbox "Rating Filter Input" [disabled]
        - button "Open Filter Menu": 
  - rowgroup:
    - row "1":
      - rowheader "1"
    - row "2":
      - rowheader "2"
    - row "3":
      - rowheader "3"
    - row "4":
      - rowheader "4"
    - row "5":
      - rowheader "5"
    - row "6":
      - rowheader "6"
    - row "7":
      - rowheader "7"
    - row "8":
      - rowheader "8"
    - row "9":
      - rowheader "9"
    - row "10":
      - rowheader "10"
    - row "11":
      - rowheader "11"
    - row "12":
      - rowheader "12"
    - row "13":
      - rowheader "13"
    - row "14":
      - rowheader "14"
    - row "15":
      - rowheader "15"
    - row "16":
      - rowheader "16"
  - rowgroup:
    - row "Press Space to toggle row selection (unchecked)  Tony Smith English Ireland flag Ireland Chess  $2,397 2 stars2 stars":
      - gridcell "Press Space to toggle row selection (unchecked) ":
        - checkbox "Press Space to toggle row selection (unchecked)"
        - text: 
      - gridcell "Tony Smith"
      - gridcell "English"
      - gridcell "Ireland flag Ireland":
        - img "Ireland flag"
        - text: Ireland
      - gridcell "Chess"
      - gridcell ""
      - gridcell "$2,397"
      - gridcell "2 stars2 stars":
        - img "2 stars"
        - img "2 stars"
    - row "Press Space to toggle row selection (unchecked)  Andrew Connell Swedish Sweden flag Sweden Bul  $12,749 3 stars3 stars3 stars":
      - gridcell "Press Space to toggle row selection (unchecked) ":
        - checkbox "Press Space to toggle row selection (unchecked)"
        - text: 
      - gridcell "Andrew Connell"
      - gridcell "Swedish"
      - gridcell "Sweden flag Sweden":
        - img "Sweden flag"
        - text: Sweden
      - gridcell "Bul"
      - gridcell ""
      - gridcell "$12,749"
      - gridcell "3 stars3 stars3 stars":
        - img "3 stars"
        - img "3 stars"
        - img "3 stars"
    - row "Press Space to toggle row selection (unchecked)  Kevin Flanagan Spanish Uruguay flag Uruguay Rithmomachy  $95,078":
      - gridcell "Press Space to toggle row selection (unchecked) ":
        - checkbox "Press Space to toggle row selection (unchecked)"
        - text: 
      - gridcell "Kevin Flanagan"
      - gridcell "Spanish"
      - gridcell "Uruguay flag Uruguay":
        - img "Uruguay flag"
        - text: Uruguay
      - gridcell "Rithmomachy"
      - gridcell ""
      - gridcell "$95,078"
      - gridcell
    - row "Press Space to toggle row selection (unchecked)  Bricker McGee French France flag France Kalah  $65,506":
      - gridcell "Press Space to toggle row selection (unchecked) ":
        - checkbox "Press Space to toggle row selection (unchecked)"
        - text: 
      - gridcell "Bricker McGee"
      - gridcell "French"
      - gridcell "France flag France":
        - img "France flag"
        - text: France
      - gridcell "Kalah"
      - gridcell ""
      - gridcell "$65,506"
      - gridcell
    - row "Press Space to toggle row selection (unchecked)  Dimple Unalkat Portuguese Portugal flag Portugal Game of the Generals  $85,310 2 stars2 stars":
      - gridcell "Press Space to toggle row selection (unchecked) ":
        - checkbox "Press Space to toggle row selection (unchecked)"
        - text: 
      - gridcell "Dimple Unalkat"
      - gridcell "Portuguese"
      - gridcell "Portugal flag Portugal":
        - img "Portugal flag"
        - text: Portugal
      - gridcell "Game of the Generals"
      - gridcell ""
      - gridcell "$85,310"
      - gridcell "2 stars2 stars":
        - img "2 stars"
        - img "2 stars"
    - row "Press Space to toggle row selection (unchecked)  Gil Lopes Spanish Colombia flag Colombia Hare and Hounds  $75,701 2 stars2 stars":
      - gridcell "Press Space to toggle row selection (unchecked) ":
        - checkbox "Press Space to toggle row selection (unchecked)"
        - text: 
      - gridcell "Gil Lopes"
      - gridcell "Spanish"
      - gridcell "Colombia flag Colombia":
        - img "Colombia flag"
        - text: Colombia
      - gridcell "Hare and Hounds"
      - gridcell ""
      - gridcell "$75,701"
      - gridcell "2 stars2 stars":
        - img "2 stars"
        - img "2 stars"
    - row "Press Space to toggle row selection (unchecked)  Sophie Beckham English Ireland flag Ireland Sugoroku  $66,706":
      - gridcell "Press Space to toggle row selection (unchecked) ":
        - checkbox "Press Space to toggle row selection (unchecked)"
        - text: 
      - gridcell "Sophie Beckham"
      - gridcell "English"
      - gridcell "Ireland flag Ireland":
        - img "Ireland flag"
        - text: Ireland
      - gridcell "Sugoroku"
      - gridcell ""
      - gridcell "$66,706"
      - gridcell
    - row "Press Space to toggle row selection (unchecked)  Isabelle Black French France flag France Nine Men's Morris  $15,749 3 stars3 stars3 stars":
      - gridcell "Press Space to toggle row selection (unchecked) ":
        - checkbox "Press Space to toggle row selection (unchecked)"
        - text: 
      - gridcell "Isabelle Black"
      - gridcell "French"
      - gridcell "France flag France":
        - img "France flag"
        - text: France
      - gridcell "Nine Men's Morris"
      - gridcell ""
      - gridcell "$15,749"
      - gridcell "3 stars3 stars3 stars":
        - img "3 stars"
        - img "3 stars"
        - img "3 stars"
    - row "Press Space to toggle row selection (unchecked)  Emily Braxton Maltese Malta flag Malta Blockade  $4,057 5 stars5 stars5 stars5 stars5 stars":
      - gridcell "Press Space to toggle row selection (unchecked) ":
        - checkbox "Press Space to toggle row selection (unchecked)"
        - text: 
      - gridcell "Emily Braxton"
      - gridcell "Maltese"
      - gridcell "Malta flag Malta":
        - img "Malta flag"
        - text: Malta
      - gridcell "Blockade"
      - gridcell ""
      - gridcell "$4,057"
      - gridcell "5 stars5 stars5 stars5 stars5 stars":
        - img "5 stars"
        - img "5 stars"
        - img "5 stars"
        - img "5 stars"
        - img "5 stars"
    - row "Press Space to toggle row selection (unchecked)  Olivia Brennan French France flag France Patolli  $32,835 1 stars":
      - gridcell "Press Space to toggle row selection (unchecked) ":
        - checkbox "Press Space to toggle row selection (unchecked)"
        - text: 
      - gridcell "Olivia Brennan"
      - gridcell "French"
      - gridcell "France flag France":
        - img "France flag"
        - text: France
      - gridcell "Patolli"
      - gridcell ""
      - gridcell "$32,835"
      - gridcell "1 stars":
        - img "1 stars"
    - row "Press Space to toggle row selection (unchecked)  Lily Brock Italian Italy flag Italy YINSH  $7,440 5 stars5 stars5 stars5 stars5 stars":
      - gridcell "Press Space to toggle row selection (unchecked) ":
        - checkbox "Press Space to toggle row selection (unchecked)"
        - text: 
      - gridcell "Lily Brock"
      - gridcell "Italian"
      - gridcell "Italy flag Italy":
        - img "Italy flag"
        - text: Italy
      - gridcell "YINSH"
      - gridcell ""
      - gridcell "$7,440"
      - gridcell "5 stars5 stars5 stars5 stars5 stars":
        - img "5 stars"
        - img "5 stars"
        - img "5 stars"
        - img "5 stars"
        - img "5 stars"
    - row "Press Space to toggle row selection (unchecked)  Chloe Bryson Greek Greece flag Greece Downfall  $65,717 1 stars":
      - gridcell "Press Space to toggle row selection (unchecked) ":
        - checkbox "Press Space to toggle row selection (unchecked)"
        - text: 
      - gridcell "Chloe Bryson"
      - gridcell "Greek"
      - gridcell "Greece flag Greece":
        - img "Greece flag"
        - text: Greece
      - gridcell "Downfall"
      - gridcell ""
      - gridcell "$65,717"
      - gridcell "1 stars":
        - img "1 stars"
    - row "Press Space to toggle row selection (unchecked)  Isabella Cadwell English Ireland flag Ireland Gipf  $53,143 5 stars5 stars5 stars5 stars5 stars":
      - gridcell "Press Space to toggle row selection (unchecked) ":
        - checkbox "Press Space to toggle row selection (unchecked)"
        - text: 
      - gridcell "Isabella Cadwell"
      - gridcell "English"
      - gridcell "Ireland flag Ireland":
        - img "Ireland flag"
        - text: Ireland
      - gridcell "Gipf"
      - gridcell ""
      - gridcell "$53,143"
      - gridcell "5 stars5 stars5 stars5 stars5 stars":
        - img "5 stars"
        - img "5 stars"
        - img "5 stars"
        - img "5 stars"
        - img "5 stars"
    - row "Press Space to toggle row selection (unchecked)  Amelia Cage English Ireland flag Ireland Shogi  $28,394 4 stars4 stars4 stars4 stars":
      - gridcell "Press Space to toggle row selection (unchecked) ":
        - checkbox "Press Space to toggle row selection (unchecked)"
        - text: 
      - gridcell "Amelia Cage"
      - gridcell "English"
      - gridcell "Ireland flag Ireland":
        - img "Ireland flag"
        - text: Ireland
      - gridcell "Shogi"
      - gridcell ""
      - gridcell "$28,394"
      - gridcell "4 stars4 stars4 stars4 stars":
        - img "4 stars"
        - img "4 stars"
        - img "4 stars"
        - img "4 stars"
    - row "Press Space to toggle row selection (unchecked)  Jessica Carson Swedish Sweden flag Sweden Mad Gab  $76,329 3 stars3 stars3 stars":
      - gridcell "Press Space to toggle row selection (unchecked) ":
        - checkbox "Press Space to toggle row selection (unchecked)"
        - text: 
      - gridcell "Jessica Carson"
      - gridcell "Swedish"
      - gridcell "Sweden flag Sweden":
        - img "Sweden flag"
        - text: Sweden
      - gridcell "Mad Gab"
      - gridcell ""
      - gridcell "$76,329"
      - gridcell "3 stars3 stars3 stars":
        - img "3 stars"
        - img "3 stars"
        - img "3 stars"
    - row "Press Space to toggle row selection (unchecked)  Sophia Chandler French France flag France Agon  $81,286 2 stars2 stars":
      - gridcell "Press Space to toggle row selection (unchecked) ":
        - checkbox "Press Space to toggle row selection (unchecked)"
        - text: 
      - gridcell "Sophia Chandler"
      - gridcell "French"
      - gridcell "France flag France":
        - img "France flag"
        - text: France
      - gridcell "Agon"
      - gridcell ""
      - gridcell "$81,286"
      - gridcell "2 stars2 stars":
        - img "2 stars"
        - img "2 stars"
  - rowgroup
  - rowgroup
  - rowgroup
  - rowgroup
- tablist:
  - tab "Columns" [expanded]
  - tab "Filters"
- tabpanel "Columns":
  - text: Pivot Mode
  - checkbox "Pivot Mode"
  - text: 
  - checkbox "Toggle All Columns Visibility" [checked]
  - text: 
  - textbox "Filter Columns Input"
  - tree "Column List 24 Columns":
    - treeitem "Participant Column Group" [expanded] [level=1]:
      - text: 
      - checkbox "Press SPACE to toggle visibility (visible)" [checked]
      - text:   Participant
    - treeitem "Name Column" [level=2]:
      - checkbox "Press SPACE to toggle visibility (visible)" [checked]
      - text:   Name
    - treeitem "Language Column" [level=2]:
      - checkbox "Press SPACE to toggle visibility (visible)" [checked]
      - text:   Language
    - treeitem "Country Column" [level=2]:
      - checkbox "Press SPACE to toggle visibility (visible)" [checked]
      - text:   Country
    - treeitem "Game of Choice Column Group" [expanded] [level=1]:
      - text: 
      - checkbox "Press SPACE to toggle visibility (visible)" [checked]
      - text:   Game of Choice
    - treeitem "Game Name Column" [level=2]:
      - checkbox "Press SPACE to toggle visibility (visible)" [checked]
      - text:   Game Name
  - text: Drag here to set row groups Drag here to aggregate
- status: "Rows : 100"
- status
- status
- region "Cookie banner":
  - alertdialog "Privacy":
    - text: By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.
    - link "More information about your privacy, opens in a new tab":
      - /url: https://www.ag-grid.com/cookies
      - text: Cookies Policy
    - button "Cookies Settings"
    - button "Reject All"
    - button "Accept All Cookies"
    - button "Close"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { TableUtils } from './Table.utils';
   3 |
   4 | test.describe('Example Tests', () => {
   5 |
   6 |
   7 |   test('open new tab', async ({ page, context }) => {
   8 |     await page.goto('https://the-internet.herokuapp.com/');
   9 |
  10 |     // Navigate to the 'Multiple Windows' page
  11 |     await page.locator('[href="/windows"]').click();
  12 |     await page.waitForLoadState('domcontentloaded');
  13 |     await page.locator('[href=\'/windows/new\']').click()
  14 |     const newTab = await context.waitForEvent('page');
  15 |     await newTab.waitForLoadState('domcontentloaded');
  16 |
  17 |     // Assert the new tab URL
  18 |     await expect(newTab).toHaveURL('https://the-internet.herokuapp.com/windows/new');
  19 |     console.log(newTab.url());
  20 |   });
  21 |
  22 |   test('work on table', async ({ page, }) => {
  23 |     await page.goto('https://the-internet.herokuapp.com/tables');
  24 |     await page.waitForTimeout(1500);
  25 |     const tableLocator = page.locator('#table1');
  26 |     const tableHeader = tableLocator.locator('thead .header span');
  27 |     const tableRows = tableLocator.locator('tbody td');
  28 |
  29 |     for (const row of await tableRows.all()) {
  30 |       const rowText = await row.textContent();
  31 |       const containsJason = rowText?.includes('Jason');
  32 |
  33 |       console.log('Row text:', rowText);
  34 |
  35 |       if (containsJason) {
  36 |         await row.getByRole('link', { name: 'delete' }).click();
  37 |         console.log('Clicked delete for row containing Jason');
  38 |         break; // Optional: stop after the first match
  39 |       }
  40 |     }
  41 |     // console.log("asdadaujkdask bla bla",await tableRows.all())
  42 |     // for (let element of await tableHeader.all()) {
  43 |     //   const firstName = await element.textContent() === 'First Name';
  44 |     //   if (await firstName) {
  45 |     //     console.log(await firstName)
  46 |
  47 |     //     for (let i of await tableRows.all()) {
  48 |     //       const jsonTxt = await i.getByText('Jason')
  49 |     //       console.log(jsonTxt)
  50 |     //       if (await jsonTxt) {
  51 |     //         await i.getByText('delete').click
  52 |     //       }
  53 |     //     }
  54 |     //   }
  55 |     // }
  56 |
  57 |     // Navigate to the 'Multiple Windows' page
  58 |
  59 |
  60 |   });
  61 |
  62 |   test('work on table with TableUtils', async ({ page }) => {
  63 |     await page.goto("https://www.ag-grid.com/example/")
  64 |     await page.locator('[aria-label="Dark mode selector"]').first().click()
> 65 |     await page.waitForEvent('domcontentloaded');
     |                ^ Error: page.waitForEvent: Test timeout of 3000ms exceeded.
  66 |   })
  67 | });
  68 |
```