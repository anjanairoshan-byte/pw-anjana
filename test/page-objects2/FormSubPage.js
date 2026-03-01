import { expect } from '@playwright/test';

export class FormSubPage{
  constructor(page){
    this.page = page;
  } 

  async clickFormSub(){
    await this.page.locator('span.text.flex-1',{hasText: 'Form Submission'}).click();
  }

  async fillDataFormSub(){
    await this.page.locator('#name').fill('Anjana');
    await this.page.locator('#email').fill('anjanairoshan@gmail.com');
    await this.page.locator('#contact').fill('04310184243');
    await this.page.locator('#date').fill('2026-01-29');
       
    const fileChooserPromise = this.page.waitForEvent('filechooser');
    await this.page.getByRole('button', { name: 'file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/anjan/OneDrive/Pictures/Screenshots/1.png');

    await this.page.locator('#Blue').click();

    await this.page.locator('#Pasta').click();
    await this.page.locator('#Sandwich').click();

    await this.page.selectOption('#country', 'Burundi');
    await this.page.waitForTimeout(5000);

    //await this.page.locator('form').getByRole('button', {name: '/submit/i'}).click();
    await this.page.locator('button[type="submit"]').click();

  }



}