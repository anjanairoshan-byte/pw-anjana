import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Get started' }).click();
  await page.waitForTimeout(2000);

  await expect(page.getByText('Playwright Test is an end-to-')).toBeVisible();
  await page.waitForTimeout(2000);

  await expect(page.getByRole('strong')).toContainText('You will learn');
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Setting up CI' }).click();
  await page.waitForTimeout(2000);

  await expect(page.locator('#setting-up-github-actions')).toContainText('Setting up GitHub Actions');




  //guru99
  //https://demo.guru99.com/
    // locators, in "https://playwright.dev/"
});