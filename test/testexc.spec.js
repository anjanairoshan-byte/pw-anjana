import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.locator('h1')).toContainText('Installation');
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await expect(page.locator('h1')).toContainText('Writing tests');


await page.getByTestId("test-id-1");
await page.getByPlaceholder("userName");


await page.locator("div[data-testid='test-id-1']")

await page.getByText(/.*following example.*/); 
//regexer.com --> regex rules

await page.locator("a[href='docs/intro']")
//https://www.google.com/search?q=html+roles+for+writing+locators&rlz=1C1RXQR_en-GBAU1166AU1166&oq=html+roles+for+writing+locators&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIHCAMQABjvBTIHCAQQABjvBdIBCDc0OTJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8
await page.getByRole('link', { name: 'Get started' }).click();
// by considering above link, 'a' was treted as the--> link  (line5)


});