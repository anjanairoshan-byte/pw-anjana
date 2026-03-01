import { test, expect } from '@playwright/test';
import { IntroPage } from './IntroPage';
import { UserAuthPage } from './UserAuthPage';
import { FormSubPage } from './formSubPage';
import { EComPage } from './EComPage';
import { DemoLoginPage } from './DemoLoginPage';
import { ProductPage } from './ProductPage';
import { CheckOutPage } from './CheckOutPage';

import testData from '../../data/testData.json' assert { type: 'json' };



test('endtoend', async({page})=>{

    //navigateToIntro page
    const intro = new IntroPage(page);
    await intro.navigate();
    //await page.pause();
    await intro.checkLogin();
    await intro.clickLogin(testData.validUser.username, testData.validUser.password);
    //await page.pause();

    //AuthPage Validation
    const AuthP = new UserAuthPage(page);
    await AuthP.authPageToast();

    //FormSubmission Page
    const FormPage = new FormSubPage(page);
    await FormPage.clickFormSub();
    await FormPage.fillDataFormSub();


    //Ecom Page
    const ECom = new EComPage(page);
    await ECom.fillDataFormSubToast();
    await ECom.clickEcomSite();
    await ECom.clickDemoPage();

    //DemoLogin Page
    const Demolog = new DemoLoginPage(page);
    await Demolog.DemoLogin();

    //Product Page
    const ProPage = new ProductPage(page);
    await ProPage.ProdPage();
    await ProPage.CartPage();


    //CheckOut Page
    const CheckO = new CheckOutPage(page);
    await CheckO.CartPageItems();
    await CheckO.CartPageValidate();
    await CheckO.CartPageMyInfor();
    await CheckO.CartPageCheckOut();



   // $ cat ~/.ssh/id_ed25519.pub
   // ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAID7r2FimaAWq7EX16Ur+0CF2Y2w53eM0boONaBkdLao3 anjanairoshan@gmail.com

});


// test('endToend', async({page})=>{
    
//     //await navigateToIntro(page);
//     const intro = new IntroPage(page);
//     await intro.navigateToIntro();
//     await intro.validateHeader();
//     await intro.navigateToInstallation();