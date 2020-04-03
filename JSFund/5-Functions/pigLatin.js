/*
Challenge (Strings):
Pig Latin:
Create a function that takes in strings
In the function, translate a phrase into pig latin and print both the original and pig latin version to the console.
If able to do so, return the value into another variable and print that variable
What is Pig Latin?
    * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
    * If the word begins with a vowel, simply add an 'ay' at the end of the word
*/

/*function pigLatin(str) {
    // Convert string to lowercase
    str = str.toLowerCase()
    // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;
  
    if (vowels.includes(str[0])) {
      // If first letter is a vowel
      return str + "way";
    } else {
      // If the first letter isn't a vowel i.e is a consonant
      for (let char of str) {
        // Loop through until the first vowel is found
        if (vowels.includes(char)) {
          // Store the index at which the first vowel exists
          vowelIndex = str.indexOf(char);
          break;
        }
      }
      // Compose final string
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
  }
*/

/*function translate(str) {
    str=str.toLowerCase();

    // for words that start with a vowel:
    if (["a", "e", "i", "o", "u"].indexOf(str[0]) > -1) {
        return str=str+"way";
    }

    // for words that start with one or more consonants
   else {
   //check for multiple consonants
       for (var i = 0; i<str.length; i++){
           if (["a", "e", "i", "o", "u"].indexOf(str[i]) > -1){
               var firstcons = str.slice(0, i);
               var middle = str.slice(i, str.length);
               str = middle+firstcons+"ay";
               break;}
            }
    return str;}
}

translate("school");
*/

let test = "And the world turns";

const pigLatin = ( toChange, firstWord ) => {
    console.log(`Previous: ${toChange}`);
    // Split the word into an array of characters
    let modified = toChange.split(""); //no space between ""
    const vowels = ["a", "e", "i", "o", "u"]; // Legend of vowels to use
    // Change the string if it is a vowel
    if ( !(vowels.includes(modified[0].toLowerCase())) ) {
        // Take the first consonant, check if there are more until we hit a vowel
        // Place them at the end of the word (in order)
        // Loop through until we find a vowel
        do {
            // Take the consonant ad place it at the end of the word
            modified.push( modified.shift().toLowerCase() );
        } while( !(vowels.includes(modified[0].toLowerCase())) )
        // First character to uppercase
        modified[0] = firstWord ? modified[0].toUpperCase : modified[0];
        // Combines the array of characters into a single string
        modified = modified.join("");
        // Adds "ay" to the end
        modified += "ay";
        console.log(modified);
    } else {
        modified = modified.join("") + "way";
        console.log(modified);
    }
    return modified;
}

const pigSentence = ( toChange ) => {

    let modified = [];
    toChange.split(' ').forEach((word, index) => {
        modified.push( pigLatin(word, index === 0) );
    })
    modified = modified.join(' ');
    console.log(modified);
}

pigSentence(test);

// And -> Anday
// Pig -> Igpay
// This -> Isthay
// String -> Ingstray