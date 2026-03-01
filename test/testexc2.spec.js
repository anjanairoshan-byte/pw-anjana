import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {


//welcome page   
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();

//Intro
  //await expect(page.locator('h1')).toContainText('Installation');
  //await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
    introPageBehaviour(page);

//writing test
  //await expect(page.locator('h1')).toContainText('Writing tests');
  //await page.getByRole('link', { name: 'Generating tests', exact: true }).click();
    writingTestPageBehaviour(page);

//codegen introp page
  await expect(page.locator('h1')).toContainText('Generating tests');
  await page.getByRole('link', { name: 'Running and debugging tests', exact: true }).click();
  
  //running tests
  await expect(page.locator('h1')).toContainText('Running and debugging tests');
  await page.getByRole('link', { name: 'Trace viewer' }).first().click();

//trace viewwer intro
  await expect(page.locator('h1')).toContainText('Trace viewer');
  await page.getByRole('link', { name: 'Setting up CI', exact: true }).click();

//CI intro
  await expect(page.locator('h1')).toContainText('Setting up CI');

 

//External functions
async function introPageBehaviour(page) {
    await expect(page.locator('h1')).toContainText('Installation');
    await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
}

async function writingTestPageBehaviour(page) {
    await expect(page.locator('h1')).toContainText('Writing tests');
    await page.getByRole('link', { name: 'Generating tests', exact: true }).click();
}

//page object
});