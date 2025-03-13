import { test, expect } from '@playwright/test';

test.describe('To Do James Tests', () => {



  test.beforeEach(async ({ page }) => {
    await page.goto('https://todolist.james.am/#/');
  });





  test('should visit page', async ({ page }) => {
    await page.goto('https://todolist.james.am/#/');

    await expect(page).toHaveTitle(/To Do List/);

  })

  test('add new item', async ({ page }) => {
    await page.locator('input.new-todo').fill('1 uzduotis');
    await page.keyboard.press('Enter');
    await page.locator('input.new-todo').fill('2 uzduotis');
    await page.keyboard.press('Enter');
    await page.locator('input.new-todo').fill('3 uzduotis');
    await page.keyboard.press('Enter');
    await expect(page.getByText('1 uzduotis')).toBeVisible();
  })
  test('delete item', async ({ page }) => {
    await page.fill('input.new-todo', '1 uzduotis');
    await page.press('input.new-todo', 'Enter');
    const todoItem = page.locator('ul.todo-list li:has-text("1 uzduotis")');
    await todoItem.hover();
    await todoItem.locator('button.destroy').click();
    await expect(todoItem).toHaveCount(0);
  });

  test('update item', async ({ page }) => {
    await page.fill('input.new-todo', '1 uzduotis');
    await page.press('input.new-todo', 'Enter');
   
    const todoItem = page.locator('ul.todo-list li', { hasText: '1 uzduotis' });
    await todoItem.dblclick();

    const editInput = page.locator('input.edit');
    await editInput.fill('paredagavom');
    await editInput.press('Enter');

    const editedItem = page.locator('ul.todo-list li', { hasText: 'paredagavom' });
    await expect(editedItem).toBeVisible();

   
    // await page.locator('ul.todo-list li', { hasText: '1 uzduotis' }).dblclick();


});

  test("count", async ({ page }) => {
    await page.fill('input.new-todo', '1 uzduotis');
    await page.press('input.new-todo', 'Enter');
    await page.fill('input.new-todo', '1 uzduotis');
    await page.press('input.new-todo', 'Enter');
    await page.fill('input.new-todo', '1 uzduotis');
    await page.press('input.new-todo', 'Enter');
    await page.fill('input.new-todo', '1 uzduotis');
    await page.press('input.new-todo', 'Enter');
    await page.fill('input.new-todo', '1 uzduotis');
    await page.press('input.new-todo', 'Enter');
    await page.fill('input.new-todo', '1 uzduotis');
    await page.press('input.new-todo', 'Enter');
    const fullList = page.locator('ul.todo-list li');
    await expect(fullList).toHaveCount(6);
  });
})
