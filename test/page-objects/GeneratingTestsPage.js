import { expect } from '@playwright/test';

// export async function generatingTests(page){
//   await expect(page.getByRole('article')).toContainText('Playwright can generate tests automatically,');
//   await page.getByRole('link', { name: 'Introduction', exact: true }).click();
// }

export class GeneratingTestsPage {
  constructor(page) {
    this.page = page;
  }

  async textSearch3(){
    await expect(this.page.getByRole('article')).toContainText('Playwright can generate tests automatically,');
  }

  async nextNavi4(){
    await this.page.getByRole('link', { name: 'Introduction', exact: true }).click();
  }



}

