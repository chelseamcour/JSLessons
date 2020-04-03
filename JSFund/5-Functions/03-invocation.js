// invoke = call

function greeting() {
    console.log("Hello, friend");
}

let hal = function() {
    console.log("I'm sorry Dave, but I cannot do that.");
}

greeting();

hal();

/*
Challenge

Given the array, create a function that lists out the values individually.
*/

let arr = ["this", "is", "really", "cool"];

function array() {
    for (items in arr) {
    console.log(arr[items]);
    }
}

array();