"use strict";

//console.log("Hello World!");

// function counterPrinter (userInput){
    // for(let i = 0; i < userInput; i++){
        // console.log(`My new favorite number is ${i}`);
    // }
// }

// counterPrinter(parseInt(prompt("Please enter a whole number between 1 and 1000! 👾")));

//function
function ageIsGreater(userInput){
    if(userInput > 35){
        return true;
    }
    return false;
} 

//invocation
let isAgeGreater =ageIsGreater
    (parseInt
        (prompt(
            "Let's see if you are older than I am?\nPlease enter your age(in whole numbers)."
        )
    )
);

if(isAgeGreater) {
    alert("Congrats! You win the age race!")
} else {
    alert("HA! Pascal is winning in age")
}

// const desktopItems = ['cabinet','desk','computer'];
// console.log(desktopItems['1']);
// desktopItems.push('Infinity Gauntlet');
// let deskItemsLen = desktopItems.length;
// for (let i = 0; i < deskItemsLen; i++){
//   console.log(desktopItems[i]);
// }
