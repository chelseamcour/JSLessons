/*For in Loop
allows you to grab keys in an object or the index in an array
allows you to grab values in an object or index

*/

let student = {
    name: "Chelsea",
    awesome: true,
    degree: "Geography",
    week: 1,
}

for (item in student) {  //item is temp name/place holder, can be any name
    console.log("Key ->", item)
    console.log("Value ->", student[item])
}

let catArray = ['siamese', 'tabby', 'feral', 'sphynx', 'lazy'];

for (breed in catArray) {
    /*console.log(breed); calling index(0-4) not value(data) */
    console.log(catArray[breed])
}

/* Challenge:
Write a for-in loop that:
    capitalizes the first letter of a student's name
    lowercases any other letter in name;
*/

let studentName = "dOLPH";
let newName = " ";

for (letter in studentName) {
    if (letter > 0) {
        newName = newName + studentName[letter].toLowerCase();
    } else {
        newName = newName + studentName[letter].toUpperCase();
    }
}

console.log(newName);

/*
NOT HOW TO DO IT USING FOR-IN LOOPS
let kidName = "aNN";

for ( name in kidName){
    kidName = kidName[0].toUpperCase() + kidName.slice(1).toLowerCase();
}
console.log(kidName);

let studentName = "dOLLPH";

for ( name in studentName){
    studentName = studentName[0].toUpperCase() + studentName.slice(1).toLowerCase();
}
console.log(studentName);
*/

