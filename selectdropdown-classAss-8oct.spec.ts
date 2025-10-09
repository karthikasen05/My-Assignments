import {test  } from "@playwright/test";
test ("Test to launch a browser manually to select Dropdown",async({page})=>{
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`//input[@id='username']`).fill(`Demosalesmanager`);
    await page.locator(`//input[@id='password']`).fill(`crmsfa`);
    await page.locator(`//input[@class='decorativeSubmit']`).click();
    await page.locator(`//a[contains(text(),'CRM')]`).click();
    await page.locator(`//a[text()='Create Lead']`).click();
    await page.locator(`//input[@id='createLeadForm_companyName']`).fill(`TestLeaf`);
    await page.locator(`//input[@id='createLeadForm_firstName']`).fill(`Karthika`);
    await page.locator(`//input[@id='createLeadForm_lastNameLocal']`).fill(`Senthil`);
    await page.locator(`//input[@id='createLeadForm_personalTitle']`).fill(`Mrs`);
    await page.locator(`//input[@id='createLeadForm_generalProfTitle']`).fill(`Test`);
    await page.locator(`//input[@id='createLeadForm_annualRevenue']`).fill(`500000`);
    await page.locator(`//input[@id='createLeadForm_departmentName']`).fill(`Automation`);
    await page.locator(`//input[@id='createLeadForm_primaryPhoneNumber']`).fill(`9444257555`);

    await page.selectOption(`//select[@id="createLeadForm_currencyUomId"]`, {value : "INR"});
    await page.locator(`//input[@id='createLeadForm_generalCity']`).fill(`Chennai`);
    await page.selectOption(`//select[@id='createLeadForm_generalCountryGeoId']`, {value : "IND"});
     
    await page.locator(`//input[@class='smallSubmit']`).click();
    const pg = await page.title();
    console.log(  `Page title :`,pg );
    

    


});
