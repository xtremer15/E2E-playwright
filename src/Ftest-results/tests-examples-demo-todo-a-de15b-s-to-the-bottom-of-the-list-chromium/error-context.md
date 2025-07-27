# Test info

- Name: New Todo >> should append new items to the bottom of the list
- Location: D:\Playwright\E2E-playwright\tests\tests-examples\demo-todo-app.spec.ts:55:7

# Error details

```
Error: locator.press: Test timeout of 3000ms exceeded.
Call log:
  - waiting for getByPlaceholder('What needs to be done?')
    - locator resolved to <input class="new-todo" placeholder="What needs to be done?"/>
  - elementHandle.press("Enter")

    at createDefaultTodos (D:\Playwright\E2E-playwright\tests\tests-examples\demo-todo-app.spec.ts:463:19)
    at D:\Playwright\E2E-playwright\tests\tests-examples\demo-todo-app.spec.ts:57:5
```

# Page snapshot

```yaml
- text: This is just a demo of TodoMVC for testing, not the
- link "real TodoMVC app.":
  - /url: https://todomvc.com/
- heading "todos" [level=1]
- textbox "What needs to be done?"
- checkbox "❯Mark all as complete"
- text: ❯Mark all as complete
- list:
  - listitem:
    - checkbox "Toggle Todo"
    - text: buy some cheese
- strong: "1"
- text: item left
- list:
  - listitem:
    - link "All":
      - /url: "#/"
  - listitem:
    - link "Active":
      - /url: "#/active"
  - listitem:
    - link "Completed":
      - /url: "#/completed"
- contentinfo:
  - paragraph: Double-click to edit a todo
  - paragraph:
    - text: Created by
    - link "Remo H. Jansen":
      - /url: http://github.com/remojansen/
  - paragraph:
    - text: Part of
    - link "TodoMVC":
      - /url: http://todomvc.com
```

# Test source

```ts
  363 |     await expect(todoItems).toHaveClass(['completed', '']);
  364 |   });
  365 | });
  366 |
  367 | test.describe('Routing', () => {
  368 |   test.beforeEach(async ({ page }) => {
  369 |     console.log('🔍 started 19');
  370 |
  371 |     await createDefaultTodos(page);
  372 |     // make sure the app had a chance to save updated todos in storage
  373 |     // before navigating to a new view, otherwise the items can get lost :(
  374 |     // in some frameworks like Durandal
  375 |     await checkTodosInLocalStorage(page, TODO_ITEMS[0]);
  376 |   });
  377 |
  378 |   test('should allow me to display active items', async ({ page }) => {
  379 |     console.log('🔍 started 20');
  380 |
  381 |     const todoItem = page.getByTestId('todo-item');
  382 |     await page.getByTestId('todo-item').nth(1).getByRole('checkbox').check();
  383 |
  384 |     await checkNumberOfCompletedTodosInLocalStorage(page, 1);
  385 |     await page.getByRole('link', { name: 'Active' }).click();
  386 |     await expect(todoItem).toHaveCount(2);
  387 |     await expect(todoItem).toHaveText([TODO_ITEMS[0], TODO_ITEMS[2]]);
  388 |   });
  389 |
  390 |   test('should respect the back button', async ({ page }) => {
  391 |     console.log('🔍 started 21');
  392 |
  393 |     const todoItem = page.getByTestId('todo-item');
  394 |     await page.getByTestId('todo-item').nth(1).getByRole('checkbox').check();
  395 |
  396 |     await checkNumberOfCompletedTodosInLocalStorage(page, 1);
  397 |
  398 |     await test.step('Showing all items', async () => {
  399 |       await page.getByRole('link', { name: 'All' }).click();
  400 |       await expect(todoItem).toHaveCount(3);
  401 |     });
  402 |
  403 |     await test.step('Showing active items', async () => {
  404 |       await page.getByRole('link', { name: 'Active' }).click();
  405 |     });
  406 |
  407 |     await test.step('Showing completed items', async () => {
  408 |       await page.getByRole('link', { name: 'Completed' }).click();
  409 |     });
  410 |
  411 |     await expect(todoItem).toHaveCount(1);
  412 |     await page.goBack();
  413 |     await expect(todoItem).toHaveCount(2);
  414 |     await page.goBack();
  415 |     await expect(todoItem).toHaveCount(3);
  416 |   });
  417 |
  418 |   test('should allow me to display completed items', async ({ page }) => {
  419 |     console.log('🔍 started 22');
  420 |
  421 |     await page.getByTestId('todo-item').nth(1).getByRole('checkbox').check();
  422 |     await checkNumberOfCompletedTodosInLocalStorage(page, 1);
  423 |     await page.getByRole('link', { name: 'Completed' }).click();
  424 |     await expect(page.getByTestId('todo-item')).toHaveCount(1);
  425 |   });
  426 |
  427 |   test('should allow me to display all items', async ({ page }) => {
  428 |     console.log('🔍 started 23');
  429 |
  430 |     await page.getByTestId('todo-item').nth(1).getByRole('checkbox').check();
  431 |     await checkNumberOfCompletedTodosInLocalStorage(page, 1);
  432 |     await page.getByRole('link', { name: 'Active' }).click();
  433 |     await page.getByRole('link', { name: 'Completed' }).click();
  434 |     await page.getByRole('link', { name: 'All' }).click();
  435 |     await expect(page.getByTestId('todo-item')).toHaveCount(3);
  436 |   });
  437 |
  438 |   test('should highlight the currently applied filter', async ({ page }) => {
  439 |     console.log('🔍 started 24');
  440 |
  441 |     await expect(page.getByRole('link', { name: 'All' })).toHaveClass('selected');
  442 |
  443 |     //create locators for active and completed links
  444 |     const activeLink = page.getByRole('link', { name: 'Active' });
  445 |     const completedLink = page.getByRole('link', { name: 'Completed' });
  446 |     await activeLink.click();
  447 |
  448 |     // Page change - active items.
  449 |     await expect(activeLink).toHaveClass('selected');
  450 |     await completedLink.click();
  451 |
  452 |     // Page change - completed items.
  453 |     await expect(completedLink).toHaveClass('selected');
  454 |   });
  455 | });
  456 |
  457 | async function createDefaultTodos(page: Page) {
  458 |   // create a new todo locator
  459 |   const newTodo = page.getByPlaceholder('What needs to be done?');
  460 |
  461 |   for (const item of TODO_ITEMS) {
  462 |     await newTodo.fill(item);
> 463 |     await newTodo.press('Enter');
      |                   ^ Error: locator.press: Test timeout of 3000ms exceeded.
  464 |   }
  465 | }
  466 |
  467 | async function checkNumberOfTodosInLocalStorage(page: Page, expected: number) {
  468 |   return await page.waitForFunction(e => {
  469 |     return JSON.parse(localStorage['react-todos']).length === e;
  470 |   }, expected);
  471 | }
  472 |
  473 | async function checkNumberOfCompletedTodosInLocalStorage(page: Page, expected: number) {
  474 |   return await page.waitForFunction(e => {
  475 |     return JSON.parse(localStorage['react-todos']).filter((todo: any) => todo.completed).length === e;
  476 |   }, expected);
  477 | }
  478 |
  479 | async function checkTodosInLocalStorage(page: Page, title: string) {
  480 |   return await page.waitForFunction(t => {
  481 |     return JSON.parse(localStorage['react-todos']).map((todo: any) => todo.title).includes(t);
  482 |   }, title);
  483 | }
  484 |
```