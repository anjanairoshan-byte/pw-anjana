import { expect } from "@playwright/test";

export class EComPage{
    constructor(page){
        this.page = page;
    }

    async fillDataFormSubToast(){
    await this.page.waitForTimeout(5000);
    await expect(this.page.getByText('Form submit successfully.')).toBeVisible();
    await expect(this.page.getByText('Congratulations. You have successfully submitted user registration form')).toBeVisible();
  }

    async clickEcomSite(){
    await this.page.locator('span.text.flex-1',{hasText: 'E-Commerce Site'}).click();
  }

  async clickDemoPage(){
    await this.page.getByRole('Link', {name: 'Visit Demo Site'}).click();
  }


}