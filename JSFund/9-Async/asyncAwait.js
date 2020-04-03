let myFn = async () => {
    //return "Hello there"
    //throw Error ("this is a mistake");
    //throw new Error("ERROR");
    return Promise.resolve("success")
};

myFn().then(console.log)

//myFn()
//    .then(data => console.log(data))
//    .catch()

/*async function foo() {
    let x = await myFn();
    console.log(x)
}

foo(); */

/*async function foo() {
    try {
        let response = await fetch("https://random.dog/woof.json");
        let json = await response.json();
        console.log(json);
    } catch(err) {
        console.error(err);
        //can add if/else to catch more specific errors
    }
}

foo();
*/