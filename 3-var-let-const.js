// Local variable using var-let-const //
const browsername = "Safari"; // global variable - declaration //
function getBrowserName() { // function block //
    if (browsername==="Chrome") { 
        var  browsername = "Safari"; // local variable - decalartion //
    }
    console.log ("Launching browser is " +browsername);
    
}
getBrowserName();
 
