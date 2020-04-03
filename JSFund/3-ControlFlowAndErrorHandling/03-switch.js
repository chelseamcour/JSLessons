let friend = "Tye";


switch (friend) {
    case "Tom": //same as if (friend === "Tom")
        console.log("Hey Tom, you wanna go rock climbing?");
        break; //helps w computation time, stops checking if hits "Tom", having no break will include Tom and default
    case "Kenn":
        console.log("Hey Kenn, want to play Catan?");
        break;
    case "Carolyn":
        console.log("Hey Carolyn, when are we playing DnD?");
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

// If you don't include a break, the switch statement will fire all cases after the first met case until a break is hit, even if they are not true.

/*
Challenge:
Write a dessert menu;
If the dessert is pie, console.log 'Pie, pie, me oh my!'
If the dessert if cake, console.log 'Cake is great!'
If the dessert is ice cream, console.log 'I scream for ice cream!'
Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessert = "brownie";

switch (dessert) {
    case "pie":
        console.log("Pie, pie, me oh my!");
        break;
    case "cake":
        console.log("Cake is great!");
        break;
    case "ice cream":
        console.log("I scream for ice cream!");
        break;
    default:
        console.log("Not on the menu.");
}

//Multiple Conditions

let yep = -8;

switch (true) {
    case (yep < 0 && yep > -10):
        console.log("Worked");
        break;
    case (yep > 0):
        console.log("worked!");
        break;
    default:
        console.log("didn't work");
}