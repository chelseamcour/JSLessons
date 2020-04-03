/*function Person(name, age) {
    this.name = name;
    this.age = age;
}

let me = new Person("Adam", 26);

me, age
*/

let promise = new Promise((resolve, reject) => {
    setTimeout( () => {
        if (true) {
            resolve("Success");
        } else {
            reject("Failure");
        }
    }, 3000 );
});

promise
    .then(result => {
    return result + " this is the first .then method";
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })

console.log("I should be last!");