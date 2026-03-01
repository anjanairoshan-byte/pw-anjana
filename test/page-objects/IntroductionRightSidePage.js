import { expect } from '@playwright/test';

//  export async function introductionRightSide(page){
//    await page.getByRole('link', { name: 'How to record a test' }).click();
//  }

export class IntroductionRightSidePage {
  constructor(page){
    this.page = page;
  }

  async nextNavi4(){
    await this.page.getByRole('link', { name: 'How to record a test' }).click();
  }

}