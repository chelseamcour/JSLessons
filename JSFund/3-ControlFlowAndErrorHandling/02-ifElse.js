let weather = 50;

if (weather === 50) {
    console.log ("No jacket needed!");
} else {
    console.log ("Wear a jacket!")
};

/*
CHALLENGE
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let myName = "Chelsey";
let nameTwo = "Casper";

if (myName === "Chelsea") {
    console.log ("Chelsea.");
} else {
    console.log ("Hello, what is your name?");
};

if (myName === "Chelsea") {
    console.log (`Hello, my name is ${myName}.`);
} else {
    console.log (`Hello, is your name ${nameTwo}?`);
};

if (myName === "Chelsea") {
    console.log (`Hello, my name is ${myName}.`);
} else {
    console.log (`Hello, is your name ${myName}?`);
};

/* CHALLENGE
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

let name = "ZAchARy";

if (name[0] === name[0].toUpperCase()) {
    console.log (name);
} else {
    console.log ("Hey, this isn\'t written correctly.");
};


if (name[0] === name[0].toUpperCase()) {
    console.log (name[0]);
} else {
    let restOfName = name.slice(1).toLowerCase(); //slice extracts from string
    console.log(restOfName);
};

if (name[0] === name[0].toUpperCase()) {
    let fixedString = name[0] + name.slice(1).toLowerCase();
    console.log (fixedString);
} else {
    let firstLetter = name[0].toUpperCase();
    let restOfName = name.slice(1).toLowerCase();
    let fullName = firstLetter = restOfName;
    console.log(fullName);
};


/* Challenge:
Set a variable age and give it an age of your choice
Set an else if statement that coveys the following:
If the age is 17 or younger, console.log "Sorry, you're to young to do anything."
If the age is at least 18, console.log "Yay! You can vote!"
If the age is at least 21, console.log "Yay! You can drink!"
If the age is at least 25, console.log "Yay! You can rent a car!"
*/

let age = 15;

if ( age <= 17 ) {
  console.log('Sorry, you\'re too young to do anything');
} else if ( age <= 20 )  {
  console.log('Yay! You can vote!');
} else if ( age <= 24 ) {
  console.log('Yay! You can drink!');
} else {
  console.log('Yay! You can rent a car!');
}


if (age > 24) {
  console.log('Yay! You can rent a car!');
} else if ( age > 20) {
  console.log();
} else if ( age > 17 ) {
  console.log();
} else {
  console.log();
}