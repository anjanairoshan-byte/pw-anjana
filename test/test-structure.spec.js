import { test, expect } from '@playwright/test';


test.describe("category", () =>{

    test.beforeAll("category", () => {
        console.log("Before All");
    });

    test.beforeEach("category", () => {
        console.log("Before Each");
    });

    test("test name 1", async () => {
        console.log("This is the test body 1");
    });

    test.skip("test name 2", async () => {
        console.log("This is the test body 2");
    });

     test("test name 3", async () => {
        console.log("This is the test body 3");
    });

    test.only("test name 4", async ({page}) => {
        await page.goto("https://playwright.dev/docs/intro");
        await expect(page).toHaveTitle("Installation | Playwright");
        //getByText -- validate the text in the browser
        //toHaveTitle -- can validate only titles
        //await page.pause();
        //console.log("This is the test body for page load");
        //record the actions --> npx playwright codegen "browser url"  

    });
    // to show the browser we need to provide '--headed' when executing. ex:  "npx playwright test --headed"

    test.afterAll(() => {
        console.log("After All..");
    });

    // these are hooks
     test.afterEach(() => {
        console.log("After Each.....");
    });

// how to run a single test. But the hooks are running without any interation --> npx playwright test -g "test name 2"

});

