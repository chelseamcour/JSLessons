let x= 8;

x > 0
    ? console.log("positive")
    : console.log("negative or zero");

/*
if (x > 0) {
    console.log("positive");
} else {
    console.log("negative");
}
*/

if (x === 0) {
    console.log("hello");
} else if (x < 0) {
    console.log("hi");
} else {
    console.log("goodbye");
}

x === 0
    ? console.log("hello")
    : x < 0
        ? console.log("hi")
        : console.log("goodbye")

/* Challenge:
Set a variable age and give it an age of your choice
Set an else if statement that coveys the following:
If the age is 17 or younger, console.log "Sorry, you're to young to do anything."
If the age is at least 18, console.log "Yay! You can vote!"
If the age is at least 21, console.log "Yay! You can drink!"
If the age is at least 25, console.log "Yay! You can rent a car!"
*/

/*if ( age <= 17 ) {
    console.log('Sorry, you\'re too young to do anything');
  } else if ( age <= 20 )  {
    console.log('Yay! You can vote!');
  } else if ( age <= 24 ) {
    console.log('Yay! You can drink!');
  } else {
    console.log('Yay! You can rent a car!');
  }
*/

let age = 25
age <= 17
  ? console.log("Sorry, you are too young to do anything")
  : age <= 20
    ? console.log("Yay! You can vote!")
    : age <= 24
        ? console.log("Yay! You can drink!")
        : console.log("Yay! You can rent a car!");