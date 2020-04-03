let myList = ["thing1", "thing2", "thing3", [1, {key1: "abc"}, 4]];

myList[3][1].key1;  //4th item, 2nd value, string in key1

let colors = [];

console.log(colors);

//Adding item to the end
colors.push("Red")
console.log(colors);
colors.push("Purple")
console.log(colors)

colors.pop()
console.log(colors);

//Removing from the end
let removed = colors.pop()
console.log(colors);
console.log(removed);

let orders = ["Mary", "Tim", "Greg", "Dolph", "Ashley"];

orders.splice(1, 1, "Donovan");
orders.splice(3, 0, "Adam");
console.log(orders);

//orders.shift();
//console.log(orders);

let shifted = orders.shift();
console.log(orders);
console.log(shifted);

orders.unshift();
console.log(orders);


let foods = ["Pecan Pie", "Shrimp", "Quesadilla", "Hot Dog", "Chana Masala"];

// for (let i = 0; i < foods.length; i++) {
//     console.log(foods[1])
// }

// for (i in foods) {
//     console.log(foods[i]);
// }

// for (food of foods) {
//     console.log(food);
// }

foods.forEach(food => console.log(food));

// foods.forEach(food => null);  //does not modify array
// console.log(foods);

foods.forEach( (x, y) => console.log(x, y) );  //logs value followed by index

foods.forEach( (x, y, z) => console.log(x, y, z) );  //logs value followed by index followed by whole array
//      x: string y: number z: string[]

console.log(typeof foods);
console.log(foods instanceof Array)

console.log(typeof 3 == "number")



/*
Challenge:
Create a function that takes an array as a parameter
First check if you are working with an array
Then flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
Using a method only, print the values of the newly arranged array
*/

let song = ["do", "re", "mi", "fa", "so"];

let reverseArray = (toReverse) => {
    if (toReverse instanceof Array) {
        toReverse.reverse();
    }
}

reverseArray(song);

song.forEach(input => console.log(input))






