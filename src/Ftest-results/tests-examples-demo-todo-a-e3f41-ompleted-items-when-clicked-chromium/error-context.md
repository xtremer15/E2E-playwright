# Test info

- Name: Clear completed button >> should remove completed items when clicked
- Location: D:\Playwright\E2E-playwright\tests\tests-examples\demo-todo-app.spec.ts:318:7

# Error details

```
Error: locator.click: Test timeout of 3000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Clear completed' })
    - locator resolved to <button class="clear-completed">Clear completed</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

    at D:\Playwright\E2E-playwright\tests\tests-examples\demo-todo-app.spec.ts:323:65
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
  - listitem:
    - checkbox "Toggle Todo" [checked]
    - text: feed the cat
    - button "Delete": ×
  - listitem:
    - checkbox "Toggle Todo"
    - text: book a doctors appointment
- strong: "2"
- text: items left
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
- button "Clear completed"
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
  223 |     await checkNumberOfTodosInLocalStorage(page, 3);
  224 |   });
  225 |
  226 |   test('should save edits on blur', async ({ page }) => {
  227 |     console.log('🔍 started 10');
  228 |
  229 |     const todoItems = page.getByTestId('todo-item');
  230 |     await todoItems.nth(1).dblclick();
  231 |     await todoItems.nth(1).getByRole('textbox', { name: 'Edit' }).fill('buy some sausages');
  232 |     await todoItems.nth(1).getByRole('textbox', { name: 'Edit' }).dispatchEvent('blur');
  233 |
  234 |     await expect(todoItems).toHaveText([
  235 |       TODO_ITEMS[0],
  236 |       'buy some sausages',
  237 |       TODO_ITEMS[2],
  238 |     ]);
  239 |     await checkTodosInLocalStorage(page, 'buy some sausages');
  240 |   });
  241 |
  242 |   test('should trim entered text', async ({ page }) => {
  243 |     console.log('🔍 started 11');
  244 |
  245 |     const todoItems = page.getByTestId('todo-item');
  246 |     await todoItems.nth(1).dblclick();
  247 |     await todoItems.nth(1).getByRole('textbox', { name: 'Edit' }).fill('    buy some sausages    ');
  248 |     await todoItems.nth(1).getByRole('textbox', { name: 'Edit' }).press('Enter');
  249 |
  250 |     await expect(todoItems).toHaveText([
  251 |       TODO_ITEMS[0],
  252 |       'buy some sausages',
  253 |       TODO_ITEMS[2],
  254 |     ]);
  255 |     await checkTodosInLocalStorage(page, 'buy some sausages');
  256 |   });
  257 |
  258 |   test('should remove the item if an empty text string was entered', async ({ page }) => {
  259 |     console.log('🔍 started 12');
  260 |
  261 |     const todoItems = page.getByTestId('todo-item');
  262 |     await todoItems.nth(1).dblclick();
  263 |     await todoItems.nth(1).getByRole('textbox', { name: 'Edit' }).fill('');
  264 |     await todoItems.nth(1).getByRole('textbox', { name: 'Edit' }).press('Enter');
  265 |
  266 |     await expect(todoItems).toHaveText([
  267 |       TODO_ITEMS[0],
  268 |       TODO_ITEMS[2],
  269 |     ]);
  270 |   });
  271 |
  272 |   test('should cancel edits on escape', async ({ page }) => {
  273 |     console.log('🔍 started 13');
  274 |
  275 |     const todoItems = page.getByTestId('todo-item');
  276 |     await todoItems.nth(1).dblclick();
  277 |     await todoItems.nth(1).getByRole('textbox', { name: 'Edit' }).fill('buy some sausages');
  278 |     await todoItems.nth(1).getByRole('textbox', { name: 'Edit' }).press('Escape');
  279 |     await expect(todoItems).toHaveText(TODO_ITEMS);
  280 |   });
  281 | });
  282 |
  283 | test.describe('Counter', () => {
  284 |   test('should display the current number of todo items', async ({ page }) => {
  285 |     console.log('🔍 started 14');
  286 |
  287 |     // create a new todo locator
  288 |     const newTodo = page.getByPlaceholder('What needs to be done?');
  289 |
  290 |     // create a todo count locator
  291 |     const todoCount = page.getByTestId('todo-count')
  292 |
  293 |     await newTodo.fill(TODO_ITEMS[0]);
  294 |     await newTodo.press('Enter');
  295 |
  296 |     await expect(todoCount).toContainText('1');
  297 |
  298 |     await newTodo.fill(TODO_ITEMS[1]);
  299 |     await newTodo.press('Enter');
  300 |     await expect(todoCount).toContainText('2');
  301 |
  302 |     await checkNumberOfTodosInLocalStorage(page, 2);
  303 |   });
  304 | });
  305 |
  306 | test.describe('Clear completed button', () => {
  307 |   test.beforeEach(async ({ page }) => {
  308 |     await createDefaultTodos(page);
  309 |   });
  310 |
  311 |   test('should display the correct text', async ({ page }) => {
  312 |     console.log('🔍 started 15');
  313 |
  314 |     await page.locator('.todo-list li .toggle').first().check();
  315 |     await expect(page.getByRole('button', { name: 'Clear completed' })).toBeVisible();
  316 |   });
  317 |
  318 |   test('should remove completed items when clicked', async ({ page }) => {
  319 |     console.log('🔍 started 16');
  320 |
  321 |     const todoItems = page.getByTestId('todo-item');
  322 |     await todoItems.nth(1).getByRole('checkbox').check();
> 323 |     await page.getByRole('button', { name: 'Clear completed' }).click();
      |                                                                 ^ Error: locator.click: Test timeout of 3000ms exceeded.
  324 |     await expect(todoItems).toHaveCount(2);
  325 |     await expect(todoItems).toHaveText([TODO_ITEMS[0], TODO_ITEMS[2]]);
  326 |   });
  327 |
  328 |   test('should be hidden when there are no items that are completed', async ({ page }) => {
  329 |     console.log('🔍 started 17');
  330 |
  331 |     await page.locator('.todo-list li .toggle').first().check();
  332 |     await page.getByRole('button', { name: 'Clear completed' }).click();
  333 |     await expect(page.getByRole('button', { name: 'Clear completed' })).toBeHidden();
  334 |   });
  335 | });
  336 |
  337 | test.describe('Persistence', () => {
  338 |   test('should persist its data', async ({ page }) => {
  339 |     console.log('🔍 started 18');
  340 |
  341 |     // create a new todo locator
  342 |     const newTodo = page.getByPlaceholder('What needs to be done?');
  343 |
  344 |     for (const item of TODO_ITEMS.slice(0, 2)) {
  345 |       await newTodo.fill(item);
  346 |       await newTodo.press('Enter');
  347 |     }
  348 |
  349 |     const todoItems = page.getByTestId('todo-item');
  350 |     const firstTodoCheck = todoItems.nth(0).getByRole('checkbox');
  351 |     await firstTodoCheck.check();
  352 |     await expect(todoItems).toHaveText([TODO_ITEMS[0], TODO_ITEMS[1]]);
  353 |     await expect(firstTodoCheck).toBeChecked();
  354 |     await expect(todoItems).toHaveClass(['completed', '']);
  355 |
  356 |     // Ensure there is 1 completed item.
  357 |     await checkNumberOfCompletedTodosInLocalStorage(page, 1);
  358 |
  359 |     // Now reload.
  360 |     await page.reload();
  361 |     await expect(todoItems).toHaveText([TODO_ITEMS[0], TODO_ITEMS[1]]);
  362 |     await expect(firstTodoCheck).toBeChecked();
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
```