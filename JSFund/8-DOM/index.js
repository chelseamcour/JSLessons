let listTitle = document.getElementById("listTitle");

//console.log(listTitle);

let listItem = document.querySelectorAll("ul li");
//let listItem  = document.querySelectorAll(".listItem"); // . or # before like CSS

console.log(listItem);

listTitle.style.textAlign = "center";

let groceryItems = document.getElementsByClassName("groceryItem"); //no . needed

groceryItems[2].style.color = "red";
groceryItems.item(1).style.color = "green"; // 0-index numbering

console.log(document.body.childNodes)

let listDiv = document.getElementById("list");
console.log(listDiv.firstElementChild);

listDiv.firstElementChild.style.fontSize = "25px"; //no space after number

document.getElementById("listTitle").addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "lightBlue";
})

listTitle.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "";  // or mouseleave with "transparent" for color
})

let newItem = "";
let inputBox = document.getElementById("listInput");
let groceryList = document.getElementById("groceryList");
let submitButton = document.getElementById("clickMe");
let errorMessage = document.createElement("p");

const generateNewItem = (value) => {
    if (value.length > 0) {
        errorMessage.innerText = "";
        let newListItem = document.createElement("li");
        newListItem.innerText = value;
        groceryList.appendChild(newListItem);
        inputBox.value = "";
    } else {
        errorMessage.innerText = "Please enter a value.";
        errorMessage.style.color = "red";
        document.getElementById("inputField").appendChild(errorMessage);
    } 
}

inputBox.addEventListener("keyup", event => {
    if (event.keyCode === 13) {   // 13 means 'enter'/'return' button
       generateNewItem(event.target.value); //needed for error message to show
    } else {
        newItem = event.target.value;
        console.log(newItem);
    }
});

submitButton.addEventListener("click", event => {  // Button listens for click, inputBox listens for enter
    // Procedure is to create a new list item.
    // Attach that list item to the ul.
    // Clear the input box.
    generateNewItem(inputBox.value) // so enter doesn't keep adding items
});

