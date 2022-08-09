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

//French Toast, Bacon Cheeseburger, Chicken Fried Steak

// let timeOfDay = 1000

// let mealOfChoice = ''

// if (timeOfDay < 1200){
//   mealOfChoice = "French Toast"
// }
// else if (timeOfDay > 1200 && timeOfDay < 1700){
//   mealOfChoice = "French Toast"
// }
// else if (timeOfDay > 1700){
//   mealOfChoice = "Chicken Fried Steak"
// }

// console.log(`It is ${timeOfDay}, time to have ${mealOfChoice}`)

// function genRandomNumber(min, max) {
//   return Math.floor(Math.random() * 11);
// }
// let bandNumber = genRandomNumber();
// if (bandNumber < 3) {console.log ("My favorite band is the Beatles")}
// else if (bandNumber > 2 && bandNumber < 6) {console.log ("My favorite band is the Stones")}
// else if (bandNumber > 5 && bandNumber < 9) {console.log ("My favorite band is the Floyd")}
// else if (bandNumber > 8 && bandNumber < 11) {console.log ("My favorite band is the Hendrix")}

// function displayMessage(){
//   for(i = 0; i < 7; i++){
//     console.log(`JavaScript is cool!`);
//   }
// }

// displayMessage()
