import {chromium,webkit, test  } from "@playwright/test";
    // Edge - Browser - Redbus //
test ("Test to launch browser manually",async()=>{
    const Edgebrowser = await chromium.launch ({headless :false ,channel :'msedge'}); // Step 1-launching browser //
    const EdgeContext =await Edgebrowser.newContext(); // step 2 - create a window in incoginto named context//
    const Edgepage = await EdgeContext.newPage();// step 3 - create a page in isolated window //
    await Edgepage.goto ("https://www.redbus.in/");
    await Edgepage.waitForTimeout(3000);
    console.log ("page title ", await Edgepage.title())
    console.log ("page URL ", Edgepage.url());

    // WebKit - Browser - Flikart //

    const webkitbrowser = await webkit.launch({headless :false});
    const webkitContext = await webkitbrowser.newContext({  ignoreHTTPSErrors: true});
    const webkitpage = await webkitContext.newPage();
    await webkitpage.goto ("https://www.flipkart.com/");
    await webkitpage.waitForTimeout(4000);
    console.log ('----Flipkart(webkit)---');
    console.log ("page1 title ", await webkitpage.title());
    console.log ("page1 URL ", webkitpage.url());

    await Edgebrowser.close();
    await webkitbrowser.close();

});
