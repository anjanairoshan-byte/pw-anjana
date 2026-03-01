import { expect } from '@playwright/test';

// export async function installation(page){
//   await expect(page.getByRole('article')).toContainText('Playwright Test is an end-to-end test');
//   await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
// }

export class InstallationPage {
  constructor(page) {
    this.page = page;
  }

async textSearch1(){
  await expect(this.page.getByRole('article')).toContainText('Playwright Test is an end-to-end test');
}

async nextNavi2(){
  await this.page.getByRole('link', { name: 'Writing tests', exact: true }).click();
}

}