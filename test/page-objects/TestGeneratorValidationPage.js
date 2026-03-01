import { expect } from '@playwright/test';

// export async function testGeneratorValidation(page) {   
//   await expect(page.getByRole('main')).toContainText('Run the codegen command and perform actions');
//   await page.waitForTimeout(4000);
// }

export class TestGeneratorValidationPage{
  constructor(page){
    this.page = page;
  }

  async textSearch4(){
    await expect(this.page.getByRole('main')).toContainText('Run the codegen command and perform actions');
  }

  async waitPage(){
    await this.page.waitForTimeout(4000);
  }

}