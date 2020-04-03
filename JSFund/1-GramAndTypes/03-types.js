// Data Types

// Boolean - true or false
let on = true;
console.log(on);

let off = false;
console.log(off);

// Null - no value, but not undefined; to show your intent & for logic checks; undefined is the default empty value, null is set on purpose
let empty = null;

// Undefined
let undef = undefined; // default empty value
// 'let undef;' is same as above, no initialization gives variable default value of undefined

// Numbers
let degrees = 90;

let precise = 999999999999999;
console.log(precise);

let tooMuch = 9999999999999999n; //put n at end, makes value 'bigint' (for numbers >15)) instead of number 
console.log(tooMuch) //things can get funky with numbers >15, data loss like telephone game

let notQuite = 0.2 + 0.1; //things can get funky with decimals
console.log(notQuite);

console.log(typeof tooMuch);

// String - \ is escape character
let stringOne = 'single quotes';
let stringTwo = "double quotes";
let stringThree = `backticks`;

let first = 1050 + 100; // addition with numbers
let second = '1050' + '100'; // string concatenation, no spaces
console.log(first, second);

let third = 1050 + '100' // combined into string, string takes precedent as safety measure to avoid crash
console.log(third);
console.log(typeof third);

/* Challenge
Set 7 (or 8) variables:
firstName
lastName
houseNumber
aptNumber (if applicable)
street
city
state
zipcode
Set each variable to its respective type.
console.log your whole address (with the space between variable). */

const firstName = "Chelsea"; //low chance your first name will change
var lastName = "Courtney";
var houseNumber = 11975
var street = "Sunrise Circle"
var city = "Fishers";
var state = "IN";
var zipcode = 46038
let address = firstName + " " + lastName + "\n" + houseNumber + " " + street + "\n" + city + ", " + state + " " + zipcode
console.log(address);

console.log(`${firstName} ${lastName}\n${houseNumber} ${street}\n${city}, ${state} ${zipcode}`)

// Object
let firstObject = {
    /*property of object before colon*/
    integer: 50, /*value of object after colon*/
    stringOne: "hello world",
    isRemote: true,
};
console.log(firstObject);
console.log(typeof firstObject);

// Array - type of object, numerically indexed map of values starting at 0
let firstArray = ["Spanish", "English", "Dutch", "French"]; //[] is called endesis
console.log(typeof firstArray); //result is object
console.log(firstArray[0]);

/*
let arrayInObjectStyle = {
    0: "Spanish",
    1: "English",
    2: "Dutch",
    3: "French"
}
*/

var test = "test test"
