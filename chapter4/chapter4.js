// //if and if else statements 
// /////////////////////////Practice exercise 4.1 //////////////////////
// var bol = true;
// console.log(bol);
// if (bol) {

//     console.log("Variable is true");
// }

// if (!bol) {

//     console.log("Variable is NOT true");

// }

// /////////////////////else if statements//////////////////////////
// let age = 10;
// let cost = 0;
// let message;
// if (age < 3) {
//     cost = 0;
//     message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {
//     cost = 5;
//     message = "With the child discount, the fee is 5 dollars";
// } else if (age >= 12 && age < 65) {
//     cost = 10;
//     message = "A regular ticket costs 10 dollars."
// } else {
//     cost = 7;
//     message = "A ticket is 7 dollars.";
// }
// console.log(message);
// console.log("Your Total cost " + cost);

// if (age < 3) {
//     console.log("Access is free under three.");
// } else if (age < 12) {
//     console.log("With the child discount, the fee is 5 dollars");
// } else if (age < 65) {
//     console.log("A regular ticket costs 10 dollars.");
// } else if (age >= 65) {
//     console.log("A ticket is 7 dollars.");
// }

// ////////////////Practice exercise 4.2/////////////////////////// 
// let userAge = prompt("What is your Age? ");
// let userMessage;
// if (userAge > 21) {
//     userMessage = "You can enter and purchase alcohol";

// }
// else if (userAge >= 19) {
//     userMessage = "You can enter but you cannot purchase alcohol";

// } 
// else{


//     userMessage = "GO Home";
// }

// console.log(userMessage);

// ////////////////////Conditional ternary operators//////////////////////

// //operand1 ? operand2 : operand3;
// //expression ? statement for true : statement associated with false;

// let access = age < 18 ? "denied" : "allowed";
// age < 18 ? console.log("denied") : console.log("allowed");

// /////////////////////Practice exercise 4.3//////////////////////////// 




// ////////////////////Switch Statements///////////////////////////////////

// if(activity === "Get up") {
//     console.log("It is 6:30AM");
//    } else if(activity === "Breakfast") {
//     console.log("It is 7:00AM");
//    } else if(activity === "Drive to work") {
//     console.log("It is 8:00AM");
//    } else if(activity === "Lunch") {
//     console.log("It is 12.00PM");
//    } else if(activity === "Drive home") {
//     console.log("It is 5:00PM")
//    } else if(activity === "Dinner") {
//     console.log("It is 6:30PM");
//    } 

//    switch(expression) {
//     case value1:
//     // code to be executed
//     break;
//     case value2:
//     // code to be executed
//     break;
//     case value-n:
//     // code to be executed
//     break;
//    }

//    switch(activity) {
//     case "Get up":
//     console.log("It is 6:30AM");
//     break;
//     case "Breakfast":
//     console.log("It is 7:00AM");
//     break;
//     case "Drive to work":
//     console.log("It is 8:00AM");
//     break;
//     case "Lunch":
//     console.log("It is 12:00PM");
//     break; 
//     case "Drive home":
//     console.log("It is 5:00PM");
//     break; 
//     case "Dinner":
//     console.log("It is 6:30PM");
//     break;
//    }

//    switch(expression) {
//     case value1:
//     // code to be executed
//     break;
//     case value2:
//     // code to be executed
//     break;
//     case value-n:
//     // code to be executed
//     break;
//     default:
//     // code to be executed when no cases match
//     break;
//    } 

// ///////////////////Practice exercise 4.4//////////////////////// 
// const randomNumber = Math.floor(Math.random() * 6);
// let answer = "Something went wrong";
// let question = prompt("Ask me anything");
// switch (randomNumber) {
//     case 0:
//         answer = "It will work out";
//         break;
//     case 1:
//         answer = "Maybe, maybe not";
//         break;
//     case 2:
//         answer = "Probably not";
//         break;
//     case 3:
//         answer = "Highly likely";
//         break;
//     default:
//         answer = "I don't know about that";
// }
// let output = "You asked me " + question + ". I think that " + answer;
// console.log(output);

////////////////////////Practice exercise 4.5///////////////////// 

// let prize = prompt("Pick a number 0-10");
// prize = Number(prize);
// let output = "My Selection: ";
// switch (prize){
//     case 0: 
//         output += "Gold ";
//     case 1:
//         output += "Coin ";
//         break;
//     case 2:
//         output += "Big ";
//     case 3:
//         output += "Box of ";
//     case 4:
//         output += "Silver ";
//     case 5:
//         output += "Bricks ";
//         break;
//     default:
//         output += "Sorry Try Again";
// }
// console.log(output);


///////////////////Chapter Projects///////////////////////// 

// // 1. Evaluating a number game 
// var num = 5;
// var userNum = prompt("Enter a number"); 

// if(userNum>num){ 
//     alert("Your number is greater"); 
// }
// else if(userNum<num){ 
//     alert("Your number is less");
// } 
// else{ 
//     alert("your number is equal"); 
// }

// //2. Friend checker game 
// let person = prompt("Enter a name");
// let message;
// switch (person) {
//     case "John" :
//     case "Larry" :
//     case "Jane" :
//     case "Laurence" :
//     message = person + " is my friend";
//     break;
//     default :
//     message = "I don't know " + person;
// }
// console.log(message);

//Rock Paper Scissors game 

const myArr = ["Rock", "Paper", "Scissors"];
let computer = Math.floor(Math.random() * 3); 
let player = Math.floor(Math.random() * 3); 
let message = "player " + myArr[player] + " vs computer " + myArr[computer] + " "; 
if (player === computer) { 
    message += "it's a tie"; 
} else if (player > computer) { 
    if (computer == 0 && player == 2) { 
        message += "Computer Wins"; 
    } else { 
        message += "Player Wins"; 
    } 
} else { 
    if (computer == 2 && player == 0) { 
        message += "Player Wins"; 
    } else { 
        message += "Computer Wins"; 
    } 
} 
console.log(message);


