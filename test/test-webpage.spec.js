import { test, expect } from '@playwright/test';


test.describe("category", () => {

    test.only("testtext1", async ({page})=> {
        await page.goto("https://playwright.dev/");
        await page.waitForTimeout(3000);

        await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
        await page.click(".getStarted_Sjon");
        await page.waitForTimeout(3000);

        await page.getByText("See the browser window: add");
        //wait page.pause();
    });
    
        //getByText -- validate the text in the browser
        //toHaveTitle -- can validate only titles
        //await page.pause();
        //console.log("This is the test body for page load");

        //record the actions --> npx playwright codegen "browser url"  
         // to show the browser we need to provide '--headed' when executing. ex:  "npx playwright test --headed"

    //2025/11/26 note

         // when we run multiple config files, When we need to run the tests with specific config, we need to use
         // -c <file name>
         // npx playwright test -c playwright.config.js --headed -g "testtext1"
         //-g to run the specific section


})