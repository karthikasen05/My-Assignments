let browser ="Chrome";
function CheckBrowserVersion(browser,version) {
    console.log ("Checking browser version");
    setTimeout(() => {
        console.log('browser version is available');
    }, 3000);
    
     version();
}
function version() {
    console.log("The Browser version is chrome"+620.123);
    
}
CheckBrowserVersion(browser,version);