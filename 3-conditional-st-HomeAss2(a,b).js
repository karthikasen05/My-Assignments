// launchBrowser-Conditional Statement //
let Browser ="Edge";
function launchBrowser() {
    if (Browser=="Chrome") 
    {
        console.log("Launch Browser : Chrome");
    }
        else if (Browser=="Safari") {
            console.log("Launch Browser :Safari");
        }
            else if (Browser=="Edge") {
                console.log("Launch Browser :Edge");
            }
                else {
                    console.log("Launch Browser");
                }     
    }
 launchBrowser();

// runTest-Switch Type //


function runTest(Test) {
    switch (Test) {

        case "Smoke" : 
        console.log ("Testtype is Smoke");
        break;
        case "Sanity" :
        console.log("Testtype is Sanity");
        break;
        case "Regression" :
        console.log("Testtype is Regression");
        break;
        default:
            break;
    }
    
}
runTest("Regression");
