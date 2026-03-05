# Demo Todo App — Concise Checklist Plan

## Application Overview

Concise, checklist-style test plan for the Playwright demo TodoMVC app. Focus: small, readable items that state what is tested and what is verified. Assume fresh browser/storage state for each scenario.

## Test Scenarios

### 1. Demo Todo — Checklist Scenarios

**Seed:** `tests/seed.spec.ts`

#### 1.1. Smoke — Load app

**File:** `specs/test.plan.demo-todo.md`

**Steps:**
  1. Open https://demo.playwright.dev/todomvc
    - expect: Page loads successfully
    - expect: Main input with placeholder 'What needs to be done?' is visible
    - expect: No existing todos shown on fresh state
  2. Inspect main UI elements (input, list container, footer, filters)
    - expect: Input, todo list container, todo-count and filter links (All/Active/Completed) are present and visible

#### 1.2. Add Todo — single item

**File:** `specs/test.plan.demo-todo.md`

**Steps:**
  1. Type 'buy milk' into the input and press Enter
    - expect: New todo item appears in list with text 'buy milk'
    - expect: Input is cleared after adding
    - expect: `todo-count` shows 1 or contains '1'
    - expect: Local storage contains one todo entry (if app uses storage)

#### 1.3. Add Todos — order and multiple

**File:** `specs/test.plan.demo-todo.md`

**Steps:**
  1. Add three todos in sequence: A, B, C
    - expect: List shows [A, B, C] in that order
    - expect: `todo-count` shows 3
    - expect: All items present in localStorage

#### 1.4. Complete Todo — toggle single

**File:** `specs/test.plan.demo-todo.md`

**Steps:**
  1. Mark second todo as completed via its checkbox
    - expect: That todo has class 'completed'
    - expect: Checkbox is checked
    - expect: LocalStorage/completed state updated accordingly
    - expect: `Clear completed` button becomes visible

#### 1.5. Toggle All — mark/unmark all

**File:** `specs/test.plan.demo-todo.md`

**Steps:**
  1. Click 'Mark all as complete' control
    - expect: All todo items show class 'completed'
    - expect: Master checkbox is checked
    - expect: LocalStorage shows all completed
  2. Click it again to uncheck
    - expect: No item has 'completed' class
    - expect: Master checkbox is unchecked

#### 1.6. Edit Todo — save, trim, cancel, remove

**File:** `specs/test.plan.demo-todo.md`

**Steps:**
  1. Double-click the 2nd item, change text to '  trimmed text  ' and press Enter
    - expect: List shows trimmed text 'trimmed text'
    - expect: LocalStorage updated with trimmed text
  2. Double-click 2nd item, clear the text and press Enter
    - expect: Item is removed from the list and storage
  3. Double-click an item, type change, press Escape
    - expect: Original text remains, edit is cancelled

#### 1.7. Clear Completed — remove completed items

**File:** `specs/test.plan.demo-todo.md`

**Steps:**
  1. Complete one or more items, click 'Clear completed'
    - expect: Completed items are removed from UI and storage
    - expect: `Clear completed` button hides when no completed items remain

#### 1.8. Counter — reflects number of active items

**File:** `specs/test.plan.demo-todo.md`

**Steps:**
  1. Add and complete items to vary active count
    - expect: `todo-count` displays correct active item number on each change

#### 1.9. Persistence — reload preserves state

**File:** `specs/test.plan.demo-todo.md`

**Steps:**
  1. Add items, mark some completed, then reload the page
    - expect: List and completed states persist after reload
    - expect: LocalStorage retains items and completed flags

#### 1.10. Routing/Filters — All / Active / Completed

**File:** `specs/test.plan.demo-todo.md`

**Steps:**
  1. With mixed completed and active items, click 'Active' filter
    - expect: Only active items are visible
    - expect: Count of visible items matches active count
  2. Click 'Completed' then 'All' and use browser back button
    - expect: Filters show appropriate lists and browser back restores previous view

#### 1.11. Negative — empty input and large input

**File:** `specs/test.plan.demo-todo.md`

**Steps:**
  1. Press Enter on empty input
    - expect: No new item is created, app remains stable
  2. Paste very long text into input and press Enter
    - expect: Long text is accepted or appropriately truncated without breaking layout

#### 1.12. Mocking/Network edge (optional)

**File:** `specs/test.plan.demo-todo.md`

**Steps:**
  1. (Optional) Intercept network requests and return empty list or 500 error
    - expect: App either shows empty list or handles server error gracefully
    - expect: Client-side fallback (localStorage) remains operational if available
