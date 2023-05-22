//////Concurrency////// 
//Doing multiple things at the same time 

//Callbacks 
//A function that takes another function as an argument
function doSomething(callback) {
    callback();
}
function sayHi() {
    console.log("Hi!");
}
doSomething(sayHi);

function judge(grade) {
    switch (true) {
        case grade == "A":
            console.log("You got an", grade, ": amazing!");
            break;
        case grade == "B":
            console.log("You got a", grade, ": well done!");
            break;
        case grade == "C":
            console.log("You got a", grade, ": alright.");
            break;
        case grade == "D":
            console.log("You got a", grade, ": hmmm...");
            break;
        default:
            console.log("An", grade, "! What?!");
    }
}
function getGrade(score, callback) {
    let grade;
    switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            console.log(score);
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
    }
    callback(grade);
}
getGrade(85, judge);

//Practice exercise 13.1 




//Promises 
//A promise is a special object that connects code that needs to produce a result
//and the code that needs to use this result in the next step 
// let promise = new Promise(function (resolve, reject) {
//     // do something that might take a while
//     // let's just set x instead for this example 
//     let x = 20;
//     if (x > 10) {
//     resolve(x); // on success
//     } else {
//     reject("Too low"); // on error
//     }
//    });
//    promise.then(
//     function (value) {
//     console.log("Success:", value);
//     },
//     function (error) {
//     console.log("Error:", error);
//     }
//    );


   const promise = new Promise((resolve, reject) => {
    resolve("success!");
   })

   .then(value => {
    console.log(value);
    return "we";
    })
    .then(value => {
    console.log(value);
    return "can";
    })
    .then(value => {
    console.log(value);
    return "chain";
    })
    .then(value => {
    console.log(value);
    return "promises";
    })
    .then(value => {
    console.log(value);
    })
    .catch(value => {
    console.log(value);
    })


//Practice Exercise 13.2



//Async and Await 
//async keyword, we can make a function return a promise
//await

function saySomething(x) {
    return new Promise(resolve => {
    setTimeout(() => {
    resolve("something" + x);
    }, 2000);
    });
   }
   async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
   }
   talk(2);
   talk(4);
   talk(8);

   //practice exercise 13.3


//Event loop

//Call stack and callback queue
