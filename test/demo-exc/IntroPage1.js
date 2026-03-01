import { expect } from '@playwright/test';

export class IntroPage1{
    constructor (page){
        this.page = page;
    }


async navigateToMain(){

    await this.page.goto('https://demo.opencart.com/en-gb/product/apple-cinema ');
    await this.page.pause(5000);
   
}
async searchText(){
    await this.page.locator('input[name="search"]').fill("iphone");
    await this.page.waitForTimeout(5000);
}


}
