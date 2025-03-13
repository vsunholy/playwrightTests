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


  })
  test('update', async ({ page }) => {


  })
  test("count", async ({ page }) => {
    
    
  });
})
