function nameOfFunction (parameter1, parameter2) {
    //Define the procedure
    return "something"
}

let iCaptureReturn = nameOfFunction(3,5)
console.log(iCaptureReturn); //returns 'something' from above

let someList = [nameOfFunction(12,2)]  
console.log(someList[0]) //returns 'something' from above


function greeting (fname, lname) {
    console.log(fname, lname) //or fname + " " + lname
}

greeting("Chelsea", "Courtney");
//Chelsea Courtney