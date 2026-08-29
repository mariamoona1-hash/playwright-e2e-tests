import { test } from '@playwright/test';

test(
  'JavaScript Alerts',
  { tag: ['@smoke', '@regression'] },
  async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByText('JavaScript Alerts').click();

    // Handle Alert
    page.once('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept();
    });

    await page.getByText('Click for JS Alert').click();

    // Handle Confirm
    page.once('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.dismiss();
    });

    await page.getByText('Click for JS Confirm').click();

    // Handle Prompt
    page.once('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept('Hello Playwright');
    });

    await page.getByText('Click for JS Prompt').click();
  }
);