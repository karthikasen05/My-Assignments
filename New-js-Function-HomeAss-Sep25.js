// Named Function //
function userProfile(name) 
{
console.log (`Hello,${name} ! `);

}
userProfile("Karthika");
    
// Arrow Function //

let double = (a) => a*a // single line Arrow Function Declaratin //
console.log(double(10));

// Anonymous Function //

let Timeout = function () {
    setTimeout(() => {
        console.log("This message is delayed by 2 seconds")
        
    }, 4000);
    
}
Timeout();

// Callback Function //
 let name = "Karthika";
function getUserData(name,User) {
    setTimeout(() => {
        console.log("Log meassage using the callback Function");
         User(name);
    }, 5000);
    
}
function User(name) {
    console.log("The user name is:" +name);
}
getUserData(name,User);
