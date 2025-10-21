import { test,expect } from "@playwright/test";
test(`to handle alerts`,async({page})=>{
    await page.goto(`https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm`);
    await page.reload();
    //syntax for alert - //Event Listener //
     page.on('dialog', async (dialog) => {
    console.log(`Alert message: ${dialog.message()}`);
    await dialog.accept(); // Accept the alert (equivalent to pressing OK)
  });
   const frameloc =page.frameLocator(`//iframe[@id='iframeResult']`); 
   await frameloc.locator(`//button[text()='Try it']`).click();

   const result = await frameloc.locator('#demo').textContent();
   expect(result).toContain('You pressed OK!');


    })

