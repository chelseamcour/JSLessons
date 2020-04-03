let hi = () => {
    return "hello, how are you doing?";
}

//function hi() {
//    return "hello, how are you doing?";
// }

let hello = hi();

console.log(hello);

let capName = (name) => {
    let capitalizedName = "";

    for(let letter in name) {
        if (letter == 0){
            capitalizedName += name[letter].toUpperCase();
        } else {
            capitalizedName += name[letter].toLowerCase();
        }
    }
    console.log(capitalizedName);
    return capitalizedName;
}

let myName = capName("cHElsEa");

/*
Challenge

Make a tip calculator using a function
Have it RETURN the value
Capture that returned value in a VARIABLE
Print that variable
*/

/* student solution
let getTip = (amount) => {
    amount *= 100;
    amount = Math.round(amount/5) / 100
    return amount;
}

let tipCoffee = getTip(4.59);
console.log(tipCoffee);
*/

let tipCalc = bill => (bill * 0.2).toFixed(2)
let totalTip = tipCalc(19.72);
console.log(totalTip)


