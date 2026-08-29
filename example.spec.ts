import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        headless: false,
    },
});



import { test, expect } from '@playwright/test';


test('swag lab',async({ page})=>{

  await page.goto('https://www.saucedemo.com/');
  //go to login page
  await expect(page.locator("//div[@class = 'login_logo']")).toHaveText("Swag Labs");
});
