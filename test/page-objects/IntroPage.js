import { expect } from '@playwright/test';

// export async function navigateToIntro(page){
//   await page.goto('https://playwright.dev/');
//   await expect(page.locator('h1')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
//   await page.getByRole('link', { name: 'Get started' }).click();
// }


export class IntroPage{
  constructor(page){
    this.page = page;
    //this.headerText = this.page.locator("h1");
    //this.getStartedLink = this.page.getByRole('link', { name: 'Get started' })
  }

  async navigateToIntro(){
    await this.page.goto('https://playwright.dev/');
  }  

  async validateHeader(){
    await expect(this.page.locator('h1')).toContainText('Playwright enables reliable end-to-end testing for modern web apps');
    //await expect(this.headerText.toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
  }

  async navigateToInstallation(){
    await this.page.getByRole('link', { name: 'Get started' }).click();
    //await this.getStartedLink.click();
  } 
}