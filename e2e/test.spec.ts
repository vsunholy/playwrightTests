import { test, expect } from '@playwright/test';

test.describe('To Do James Tests', () => {



  test.beforeEach(async ({ page }) => {
    await page.goto('https://todolist.james.am/#/');
  });





  test('should visit page', async ({ page }) => {
    await page.goto('https://todolist.james.am/#/');

    await expect(page).toHaveTitle(/To Do List/);
    await page.getByText('To Do List');
  })

  test('add new item', async ({ page }) => {


  })
  test('delete item', async ({ page }) => {


  })
  test('update', async ({ page }) => {


  })

})
