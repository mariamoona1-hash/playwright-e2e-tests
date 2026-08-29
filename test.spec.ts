import { test, expect } from '@playwright/test';

test('Login to SauceDemo', async ({ page }) => {

    // Open website
    await page.goto('https://www.saucedemo.com/');


    // Enter username
    //await page.getByPlaceholder('Username').fill('standard_user');

    await page.locator('xpath=/html/body/div/div/div/div/div/div/form/div[1]/input')
    .fill('standard_user');

    // Enter password
    //await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.locator('xpath=/html/body/div/div/div/div/div/div/form/div[2]/input')
    .fill('secret_sauce');

    // Click Login
    //await page.getByRole('button', { name: 'Login' }).click();

    await page.locator('xpath=/html/body/div/div/div/div/div/div/form/input')
    .click();

    // Verify successful login
    await expect(page).toHaveURL(/inventory/);

    // Verify Products text
    await expect(page.getByText('Products')).toBeVisible();


    // Scroll down
    await page.mouse.wheel(0, 500);

    // Scroll more
    await page.mouse.wheel(0, 500);

    

    //take screenshot
    await page.screenshot({
        path: 'screenshot.png',
        fullPage: true
    });

    //hard wait
    await page.waitForTimeout(10000);

});