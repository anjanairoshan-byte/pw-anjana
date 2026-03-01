import { expect } from '@playwright/test';

import testData from '../../data/testData.json' assert { type: 'json' };
import { BasePage } from './BasePage';

export class IntroPage extends BasePage{ 
  constructor(page){
    super(page)
    this.page = page;
  }

  //async navigate(){
  //  await this.page.goto('https://practice.qabrains.com/');
  //}  

  async checkLogin(){
    await expect(this.page.getByRole('menuitem',{name: 'Login'})).toBeVisible();
  }

  async clickLogin(username, password){
    await this.page.getByRole('button', { name: 'Login' }).click();
    
    
    //await this.page.locator('#email').fill('qa_testers@qabrains.com');
    //await this.page.locator('#password').fill('Password123');

    await this.page.locator('#email').fill(username);
    await this.page.locator('#password').fill(password);
    
    await this.page.getByRole('button', {name: 'Login'}).click();
    await this.page.waitForTimeout(3000);
  }

}