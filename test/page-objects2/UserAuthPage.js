import { expect } from '@playwright/test';

export class UserAuthPage{
  constructor(page){
    this.page = page;
  } 

  async authPageToast(){
    await expect(this.page.locator('#success-msg span',{hasText: 'Login Successful'})).toBeVisible();
    await expect(this.page.getByText('Congratulations. You have successfully logged in. When you are done click logout below')).toBeVisible();
  }

//   async clickLogin(){
//     await this.page.getByRole('button', { name: 'Login' }).click();
//     await this.page.locator('#email').fill('qa_testers@qabrains.com');
//     await this.page.locator('#password').fill('Password123');
//     await this.page.getByRole('button', {name: 'Login'}).click();
//     await this.page.waitForTimeout(3000);
  
//   }




}