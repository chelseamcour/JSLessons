function hi(name, age) {
    console.log(`Hi ${name}, you are ${age}`);
}

hi("Chelsea", 28);

/*
Challenge

Write a function that takes two parameters:
    - one parameter is for a first name
    - other parameter is for last name
    - have them come together in a variable inside the funtion
    - console.log "Hello, my name is <your name>"
    - call (invoke) your function
*/

function hi(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;
    console.log(`Hello, my name is ${fullName}`);
}

hi("Chelsea", "Courtney");