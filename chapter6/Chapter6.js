// // //Functions

// // //Basic Functions 

// // //Practice excercise 6.1 
// // function add(a,b){ 

// // return a + b;

// // }

// // var num1 =2; 
// // var num2 = 5; 

// // let result = add(num1,num2); 

// // console.log(result);

// // //Practice exersise 6.2 

// //  var words=["Big","Large","Beautiful","Unique"]; 

// // function user(){ 

// //     let userName = prompt("Enter your Name"); 

// //  return userName;
// // }
// // var randWord = words[Math.floor(Math.random()*words.length)]; 

// // console.log(`${randWord} hello userName`);


// // //Parameters and Arguments
// // function tester(para1, para2){
// //     return para1 + " " + para2;
// //    }
// //    const arg1 = "argument 1";
// //    const arg2 = "argument 2";
// //    tester(arg1, arg2);

// //    //Practice excercise 6.3 
// //    alert("Welcome to my Calculator");
// //    let a = prompt("Enter a number"); 
// //    let b = prompt("Enter a Number "); 
// //    let operator; 

// //    function calculator(num1,num2,operator){ 

// //         if(operator="+"){ 
// //             return num1 + num2; 
// //          }
// //         else if(operator="-"){ 
// //             return num1 - num2;

// //         }
// //         else{ 

// //             alert("Please enter + or -");
// //         }
// //     }

// //Default or unsuitable parameters 

// // function addTwoNumbers(x = 2, y = 3) {
// //     console.log(x + y);
// //    }

// // //special functions and operators
// // //Arrow functions 
// // //(param1, param2) => body of the function; 
// // function doingStuff(x) {
// //     console.log(x);
// //    }

// //    let doingArrowStuff = x => console.log(x);

//    //spread operators


//    //rest parameter 



//    //returning function values 

//    //Practice excercise 6.4

// //    const myArr = [];
 
// //    for(let x=0; x<10; x++){
// //      let val1 = 5 * x;
// //      let val2 = x * x;
// //      let res = cal(val1, val2, "+");
// //      myArr.push(res);
// //    }
// //    console.log(myArr);
// //    function cal(a, b, op) {
// //      if (op == "-") {
// //        return a - b;
// //      } else {
// //        return a + b;
// //      }
// //    } 


// //Returning with arrow functions 
// // let addTwoNumbers = (x, y) => x + y;

// // let result = addTwoNumbers(12, 15);
// // console.log(result);

// //Variable scope in functions 

// //Immediately invoked function expression

// //Practice exercise 6.5
// // let val = "1000";

// // (function () {
// //     let val = "100"; // local scope variable
// //     console.log(val);
// // })();

// // let result = (function () {
// //     let val = "Laurence";
// //     return val;
// // })();
// // console.log(result);
// // console.log(val);

// // (function (val) {
// //     console.log(`My name is ${val}`);
// // })("Laurence");

// //Recursive functions

// // function getRecursive(nr){ 
// //     console.log(nr); 
// //     getRecursive(--nr);
// // }

// // getRecursive(3);

// // function getRecursive(nr){ 
// //     console.log(nr); 
// //     if(nr > 0){ 
// //         getRecursive(--nr);
// //     }
// // } 

// // getRecursive(3);

// //Practice exercise 6.6 

// function calcFactorial(nr) { 
//     console.log(nr);
//     if (nr === 0) { 
//         return 1; 
//     } 
//     else { 
//         return nr * calcFactorial(--nr); 
//     } 
// } 
// console.log(calcFactorial(4)); 

// //Practice exercise 6.7 
// let start = 10; 
// function loop1(val) { 
//     console.log(val); 
//     if (val < 1) { 
//         return; 
//     } 
//     return loop1(val - 1); 
// } 
// loop1(start); 
// function loop2(val) { 
//     console.log(val); 
//     if (val > 0) { 
//         val--; 
//         return loop2(val); 
//     } 
//     return; 
// } 
// loop2(start); 

// //Practice exercise 6.8
// const test = function(val){
//     console.log(val);
// }
// test('hello 1');
 
// function test1(val){
//     console.log(val);
// }
// test1("hello 2");

