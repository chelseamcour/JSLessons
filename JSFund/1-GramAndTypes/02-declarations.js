// Variables

//
var a = 1;
    var   b    =    2;
//  (1)  (2)  (3)  (4)

/*
1 - var keyword: denotes a variable
2 - variable name: cannot be a reserved word, or start with a number
3 - assignment operator
4 - value put inside of the variable

1 & 2 - declaration
2, 3, 4 - intialization
*/

// Variable Declaration - naming variable, needs var
var stream;

// Variable Initialization - stating variable value & type (number, boolean, string)
stream = true;

stream = false;  // Re-Initialization - changing/re-stating variable value

// var - variable, let - var within function, const - constant, helps show intent that no change is wanted

let today = "great";
const efa = "school";

today = "mediocre";
efa = "consulting";

console.log(today, efa)

const testing //will not work without initialization
