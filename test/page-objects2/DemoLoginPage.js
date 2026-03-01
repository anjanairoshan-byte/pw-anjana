import { expect } from "@playwright/test";

import testData from '../../data/testData.json' assert { type: 'json' };

export class DemoLoginPage{
    constructor (page){
        this.page = page;
    }

    async DemoLogin(){
    
    
    //await this.page.locator('#email').fill('test@qabrains.com');
    //await this.page.locator('#password').fill('Password123');
    await this.page.locator('#email').fill(testData.validUser.username2);
    await this.page.locator('#password').fill(testData.validUser.password2);


    await this.page.getByRole('button', {name: 'Login'}).click();
    //await expect(this.page.getByText('credentials matched: Successfully logged in.')).toBeVisible();

    

  }

}