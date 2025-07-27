# Test info

- Name: New Todo >> should allow me to add todo items
- Location: D:\Playwright\E2E-playwright\tests\tests-examples\demo-todo-app.spec.ts:15:7

# Error details

```
Error: locator.press: Test timeout of 3000ms exceeded.
Call log:
  - waiting for getByPlaceholder('What needs to be done?')
    - locator resolved to <input class="new-todo" placeholder="What needs to be done?"/>
  - elementHandle.press("Enter")

    at D:\Playwright\E2E-playwright\tests\tests-examples\demo-todo-app.spec.ts:21:19
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
   1 | import { test, expect, type Page } from '@playwright/test';
   2 |
   3 | test.beforeEach(async ({ page }) => {
   4 |   await page.goto('https://demo.playwright.dev/todomvc');
   5 | });
   6 | test.describe.configure({ mode: 'parallel' });
   7 |
   8 | const TODO_ITEMS = [
   9 |   'buy some cheese',
   10 |   'feed the cat',
   11 |   'book a doctors appointment'
   12 | ];
   13 |
   14 | test.describe('New Todo', () => {
   15 |   test('should allow me to add todo items', async ({ page }) => {
   16 |     // create a new todo locator
   17 |     const newTodo = page.getByPlaceholder('What needs to be done?');
   18 |     console.log('🔍 started 1');
   19 |     // Create 1st todo.
   20 |     await newTodo.fill(TODO_ITEMS[0]);
>  21 |     await newTodo.press('Enter');
      |                   ^ Error: locator.press: Test timeout of 3000ms exceeded.
   22 |
   23 |     // Make sure the list only has one todo item.
   24 |     await expect(page.getByTestId('todo-title')).toHaveText([
   25 |       TODO_ITEMS[0]
   26 |     ]);
   27 |
   28 |     // Create 2nd todo.
   29 |     await newTodo.fill(TODO_ITEMS[1]);
   30 |     await newTodo.press('Enter');
   31 |
   32 |     // Make sure the list now has two todo items.
   33 |     await expect(page.getByTestId('todo-title')).toHaveText([
   34 |       TODO_ITEMS[0],
   35 |       TODO_ITEMS[1]
   36 |     ]);
   37 |
   38 |     await checkNumberOfTodosInLocalStorage(page, 2);
   39 |   });
   40 |
   41 |   test('should clear text input field when an item is added', async ({ page }) => {
   42 |     // create a new todo locator
   43 |     const newTodo = page.getByPlaceholder('What needs to be done?');
   44 |     console.log('🔍 started 2');
   45 |
   46 |     // Create one todo item.
   47 |     await newTodo.fill(TODO_ITEMS[0]);
   48 |     await newTodo.press('Enter');
   49 |
   50 |     // Check that input is empty.
   51 |     await expect(newTodo).toBeEmpty();
   52 |     await checkNumberOfTodosInLocalStorage(page, 1);
   53 |   });
   54 |
   55 |   test('should append new items to the bottom of the list', async ({ page }) => {
   56 |     // Create 3 items.
   57 |     await createDefaultTodos(page);
   58 |     console.log('🔍 started 3');
   59 |
   60 |     // create a todo count locator
   61 |     const todoCount = page.getByTestId('todo-count')
   62 |
   63 |     // Check test using different methods.
   64 |     await expect(page.getByText('3 items left')).toBeVisible();
   65 |     await expect(todoCount).toHaveText('3 items left');
   66 |     await expect(todoCount).toContainText('3');
   67 |     await expect(todoCount).toHaveText(/3/);
   68 |
   69 |     // Check all items in one call.
   70 |     await expect(page.getByTestId('todo-title')).toHaveText(TODO_ITEMS);
   71 |     await checkNumberOfTodosInLocalStorage(page, 3);
   72 |   });
   73 | });
   74 |
   75 | test.describe('Mark all as completed', () => {
   76 |   test.beforeEach(async ({ page }) => {
   77 |     await createDefaultTodos(page);
   78 |     await checkNumberOfTodosInLocalStorage(page, 3);
   79 |   });
   80 |
   81 |   test.afterEach(async ({ page }) => {
   82 |     await checkNumberOfTodosInLocalStorage(page, 3);
   83 |   });
   84 |
   85 |   test('should allow me to mark all items as completed', async ({ page }) => {
   86 |     // Complete all todos.
   87 |     await page.getByLabel('Mark all as complete').check();
   88 |     console.log('🔍 started 4');
   89 |
   90 |     // Ensure all todos have 'completed' class.
   91 |     await expect(page.getByTestId('todo-item')).toHaveClass(['completed', 'completed', 'completed']);
   92 |     await checkNumberOfCompletedTodosInLocalStorage(page, 3);
   93 |   });
   94 |
   95 |   test('should allow me to clear the complete state of all items', async ({ page }) => {
   96 |     const toggleAll = page.getByLabel('Mark all as complete');
   97 |     console.log('🔍 started 5');
   98 |
   99 |     // Check and then immediately uncheck.
  100 |     await toggleAll.check();
  101 |     await toggleAll.uncheck();
  102 |
  103 |     // Should be no completed classes.
  104 |     await expect(page.getByTestId('todo-item')).toHaveClass(['', '', '']);
  105 |   });
  106 |
  107 |   test('complete all checkbox should update state when items are completed / cleared', async ({ page }) => {
  108 |     console.log('🔍 started 6');
  109 |
  110 |     const toggleAll = page.getByLabel('Mark all as complete');
  111 |     await toggleAll.check();
  112 |     await expect(toggleAll).toBeChecked();
  113 |     await checkNumberOfCompletedTodosInLocalStorage(page, 3);
  114 |
  115 |     // Uncheck first todo.
  116 |     const firstTodo = page.getByTestId('todo-item').nth(0);
  117 |     await firstTodo.getByRole('checkbox').uncheck();
  118 |
  119 |     // Reuse toggleAll locator and make sure its not checked.
  120 |     await expect(toggleAll).not.toBeChecked();
  121 |
```