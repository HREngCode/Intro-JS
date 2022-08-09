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

