import {chromium,firefox,test} from "@playwright/test";
    test ("Test to launch browser manually", async () => { 
        const browser1 = await chromium.launch ({headless:false});
        const context1 =await  browser1.newContext();
        const page1 =await context1.newPage();
        await page1.goto ("https://www.amazon.in/");
        await page1.waitForTimeout(3000);
        console.log(await page1.title());
        console.log(await page1.url());
// firefox Browser //
       
        const browser = await firefox.launch ({headless:false});
        const context =await  browser.newContext();
        const page =await context.newPage();
        await page.goto ("https://www.amazon.in/");
        await page.waitForTimeout(3000);
        console.log(await page.title());
        console.log(await page.url());

    } );
