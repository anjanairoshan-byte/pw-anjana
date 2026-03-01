import { expect } from "@playwright/test";

export class ProductPage{
    constructor (page){
        this.page = page;
    }


    async ProdPage(){

        await this.page.getByRole('button', { name: 'Add to cart' }).nth(0).click();
        await expect(this.page.locator('ol')).toContainText('Added to cart');
        
        await this.page.getByRole('button', { name: 'Add to cart' }).nth(1).click();
        await expect(this.page.locator('ol')).toContainText('Added to cart');
        
        //await page.getByRole('button', { name: 'Remove from cart' }).click();
        //await expect(page.locator('ol')).toContainText('Removed from cart');
        
    }

    async CartPage(){

        await this.page.locator('#ecommerce-header').locator('span').first().click();
        
    }

    

}