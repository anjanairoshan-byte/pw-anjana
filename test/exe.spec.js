import { test, expect } from '@playwright/test';


test.describe("category", () =>{

        test("test name 4", async ({page}) => {
                await page.goto("https://demo.guru99.com/test/newtours/index.php");
                
                await page.getByText('REGISTER', {exact:true}).click();

                
                await page.waitForTimeout(1000);

                await page.locator('input[name="firstName"]').fill('Anjana');               
        // await page.getByRole('textbox', {name: 'lastName'}).fill('Iroshan'); // why not working
                await page.locator('input[name="lastName"]').fill('Iroshan');
                await page.locator('input[name="phone"]').fill('0431018424');
                await page.locator('input[name="userName"]').fill('anjana@gmail.com');

                await page.locator('input[name="address1"]').fill('U23,1-3 Maher Street');
                await page.locator('input[name="city"]').fill('Caboolture');
                await page.locator('input[name="state"]').fill('QLD');
                await page.locator('input[name="postalCode"]').fill('4510');
                await page.locator('select[name="country"]').selectOption('CAMBODIA');

                await page.locator('input[name="email"]').fill('Anjitest1');
                await page.locator('input[name="password"]').fill('A@1234');
                await page.locator('input[name="confirmPassword"]').fill('A@1234');

                await page.getByRole('button', {name:'submit'}).click();
                await page.waitForTimeout(3000);

                await expect(page.getByText("Dear Anjana Iroshan,")).toBeVisible();
                await expect(page.getByText("Thank you for registering. You may now sign-in using the user name and password you've just entered.")).toBeVisible();
                await expect(page.getByText(" Note: Your user name is Anjitest1.")).toBeVisible();
        
                await page.waitForTimeout(2000);
                
                await page.getByRole('link', {name: 'sign-in'}).click();
                await expect(page).toHaveURL("https://demo.guru99.com/test/newtours/login.php");
                await expect(page.getByText('Welcome back to Mercury Tours!')).toBeVisible();

                await page.waitForTimeout(3000);
        
        });

});

test.describe("invalid", () => {

                test("test name 5", async ({page}) => {
                
                await page.goto("https://demo.guru99.com/test/newtours/index.php");
                await page.locator('input[name="userName"]').fill('NancyDrew');
                await page.locator('input[name="password"]').fill('Blossom123');
                await page.getByRole('button', {name:'submit'}).click();

                await page.waitForTimeout(2000);

                await expect(page.getByText('Enter your userName and password correct')).toBeVisible();

        });

});

test.describe("flightbooking", () => {

        test("test name 6", async({page}) => {
                
                await page.goto("https://demo.guru99.com/test/newtours/index.php");
                await page.getByText('Flights', {exact:true}).click();
                await page.waitForTimeout(2000);

                await page.locator('input[name="tripType"][value="oneway"]').click();
                await page.locator('select[name="passCount"]').selectOption("3");
                await page.locator('select[name="fromPort"]').selectOption('Paris');
                await page.locator('select[name="fromMonth"]').selectOption('12');
                await page.locator('select[name="fromDay"]').selectOption('8');
                await page.locator('select[name="toPort"]').selectOption('Portland');
                await page.locator('select[name="toMonth"]').selectOption('12');
                await page.locator('select[name="toDay"]').selectOption('30');

                await page.locator('input[name="servClass"][value="Business"]').click();
                await page.locator('select[name="airline"]').selectOption('Unified Airlines');

                await page.waitForTimeout(3000);
                await page.click('input[name="findFlights"]');

                await expect(page.getByText('No Seats Avaialble')).toBeVisible();

        });
})





