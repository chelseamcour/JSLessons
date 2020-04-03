/*

For repl 2
template

Person Model
Name
Height
Age
canVote
*/

let person1 = {
    name: "Macy",
    height: 64,
    age: 32,
    canVote: true
}

function Person(name, height, age) {
    this.name = name;
    this.height = height;
    this.age = age;
    this.canVote = age >= 18;

    this.greeting = () => console.log(`Hello, my name is ${name}`);
    this.birthday = () => this.age++;
}

    // return this;
    // if (age >= 18) {
    //    this.canVote = true;
    // } else {
    //    this.canVote = false;
    // }
let person2 = new Person("Adam", 68, 55); //new tells function to behave like object
let person3 = new Person("Donovan", 64, 88);

person2.greeting();

//console.log(person2, person3);
//console.log(person3.name)