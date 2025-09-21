
function TestScore (Score) {
    switch (Score) {

        case ">85" : 
        console.log ("Pass Grade is : A");
        break;
        case ">75" :
        console.log("Pass Grade is : B");
        break;
        case ">55" :
        console.log("Pass Grade is : c");
        break;
        case ">35" :
        console.log("Pass Grade is : D");
        break;
        default:
        console.log ("Try to get a good marks")
        break;
    }
    
}
TestScore(">55");

