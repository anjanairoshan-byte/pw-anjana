import { expect } from '@playwright/test';

// export async function writingTests(page){
//   await expect(page.getByRole('article')).toContainText('Playwright automatically waits for actionability');
//   await page.getByRole('link', { name: 'Generating tests', exact: true }).click();
// }

export class WritingTestsPage {
  constructor(page) {
    this.page = page;
  }

  async textSearch2(){
    await expect(this.page.getByRole('article')).toContainText('Playwright automatically waits for actionability');
  }
  
  async nextNavi3(){
    await this.page.getByRole('link', { name: 'Generating tests', exact: true }).click();
  }


}
