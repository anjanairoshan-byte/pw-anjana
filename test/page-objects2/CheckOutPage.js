import { expect } from "@playwright/test";

export class CheckOutPage{
    constructor (page){
        this.page = page;
    }

    async CartPageItems(){
        await this.page.locator('#cart').locator('span').first().click();
        await this.page.waitForTimeout(3000);
    }

    async CartPageValidate(){
        await expect(this.page.locator('#cart')).toContainText('Sample Shirt Name');
        await expect(this.page.locator('#cart')).toContainText('Sample Jacket Name');
        await this.page.getByRole('button', { name: 'Checkout' }).click();
    }   

    async CartPageMyInfor(){
        await this.page.getByRole('textbox', { name: 'Ex. John' }).fill('Anjana');
        await this.page.getByRole('textbox', { name: 'Ex. Doe' }).fill('I');
        await this.page.getByRole('textbox').nth(3).fill('4510');
        await this.page.getByRole('button', { name: 'Continue' }).click();
        
    }

    async CartPageCheckOut(){
        await this.page.getByRole('button', { name: 'Finish' }).click();
        await expect(this.page.locator('#checkout-complete')).toContainText('Thank you for your order!')


    }


}