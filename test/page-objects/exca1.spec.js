import { test, expect } from '@playwright/test';
//import { navigateToIntro } from './IntroPage';
//import { installation } from './installationPage';
//import { writingTests } from './writingTestsPage';
//import { generatingTests } from './generatingTestsPage';
import { IntroductionRightSidePage } from './IntroductionRightSidePage';
import { TestGeneratorValidationPage } from './TestGeneratorValidationPage';

import { IntroPage } from './IntroPage';
import { InstallationPage } from './installationPage';
import { WritingTestsPage } from './WritingTestsPage';
import { GeneratingTestsPage } from './GeneratingTestsPage';

// test('test', async ({ page }) => {

// //navigate To Intro --
//   await page.goto('https://playwright.dev/');
//   await expect(page.locator('h1')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
//   await page.getByRole('link', { name: 'Get started' }).click();

// //installation --
//   await expect(page.getByRole('article')).toContainText('Playwright Test is an end-to-end test');
//   await page.getByRole('link', { name: 'Writing tests', exact: true }).click();

// //writingTests
//   await expect(page.getByRole('article')).toContainText('Playwright automatically waits for actionability');
//   await page.getByRole('link', { name: 'Generating tests', exact: true }).click();

// //generatingTests
//   await expect(page.getByRole('article')).toContainText('Playwright can generate tests automatically,');
//   await page.getByRole('link', { name: 'Introduction', exact: true }).click();

// //introductionRightSide
//   await page.getByRole('link', { name: 'How to record a test' }).click();

// //testGeneratorValidation  
//   await expect(page.getByRole('main')).toContainText('Run the codegen command and perform actions');
//   //await page.pause(5000);
// });
//------------------------------------------------


test('endToend', async({page})=>{
    
    //await navigateToIntro(page);
    const intro = new IntroPage(page);
    await intro.navigateToIntro();
    await intro.validateHeader();
    await intro.navigateToInstallation();

    //await installation(page); 
    const inst = new InstallationPage(page);
    await inst.textSearch1();
    await inst.nextNavi2();

    //await writingTests(page);
    const writingT = new WritingTestsPage(page);
    await writingT.textSearch2();
    await writingT.nextNavi3();

    //await generatingTests(page);
    const genText = new GeneratingTestsPage(page);
    await genText.textSearch3();
    await genText.nextNavi4();
    
    //await introductionRightSide(page);
    const IntroRight = new IntroductionRightSidePage(page);
    await IntroRight.nextNavi4();

    //await testGeneratorValidation(page);
    const testGen = new TestGeneratorValidationPage(page);
    await testGen.textSearch4();
    await testGen.waitPage();


});


