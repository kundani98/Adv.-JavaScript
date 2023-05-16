//Regular expressions(regex)

let text ="I love Javascript" ;
let text2 ="I love React and javascript";

// alert(text.match(/javascript/i)); 
// console.log(text.match(/javascript/i))

console.log(text2.match(/javascript|nodejs|react/i)); 

//    //Character options
//    let text ="d"; 
//    //console.log(text.match(/[abcd]/));
//     console.log(text.match(/[a-d]/)); 

//     let text1 = "t"
//     console.log(text1.match(/[a-zA-Z]/));
//     console.log(text1.match(/[a-z]/i)); 
    
//         let text2 = "8"
//     console.log(text.match(/[a-zA-Z0-9]/)); 

//     let text3 = "äé!";
//     console.log(text2.match(/[a-zA-Z0-9]/));

//     let text4 = "Just some text"; 
//     console.log(text.match(/./g)); 

    // let text5 = "Just some text.";
    // console.log(text5.match(/\./g)); 

    // let text = "I'm 29 years old.";
    // console.log(text.match(/\d/));
    
    // let text = "Coding is a lot of fun!";
    // console.log(text.match(/\s/g));
//     let text = "at the end or at the beginning?";
// console.log(text.match(/\bat/gi));


    // let text = "I love JavaScript!";
    // console.log(text.match(/(love|dislike)\s(javascript|spiders)/gi));

//     let text = "I love JavaScript!";
// console.log(text.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/g));


// let text = "You are doing great!";
// console.log(text.match(/n?g/gi));  

// let text = "123123123";
// console.log(text.match(/(123)/g));

// let text = "abcabcabc";
// console.log(text.match(/(abc){1,2}/));
    

// let text = "That's not the case.";
// console.log(text.search(/Case/i));

// let text = "Coding is fun. Coding opens up a lot of opportunities.";

// console.log(text.replace("Coding", "JavaScript"));

// let text = "Coding is fun. Coding opens up a lot of opportunities.";
// console.log(text.replace(/Coding/g, "JavaScript"));


//Email Validation 
// let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g; 
// let validEmail = "maaike_1234@email.com";
// let invalidEmail = "maaike@mail@.com";
// console.log(validEmail.match(emailPattern));
// console.log(invalidEmail.match(emailPattern)); 



// //Functions and arguments objects

// function test(a, b, c) {
//  console.log("first:", a, arguments[0]);
//  console.log("second:", b, arguments[1]);
//  console.log("third:", c, arguments[2]);
// }
// test("fun", "js", "secrets");

// function test(a, b, c) {
//  a = "nice";
//  arguments[1] = "JavaScript";
//  console.log("first:", a, arguments[0]);
//  console.log("second:", b, arguments[1]);
//  console.log("third:", c, arguments[2]);
// }
// test("fun", "js", "secrets");

// //Javascript hoisting 

// //Using strict mode 

// //Debugging


     // try {
        //     somethingVeryDangerous();
        // } catch (e) {
        //     if (e instanceof TypeError) {
        //         // deal with TypeError exceptions
        //         console.log(`TypeError: ${e}`);
        //     } else if (e instanceof RangeError) {
        //         // deal with RangeError exceptions

        //         console.log(`RangeError: ${e}`);
        //     } else if (e instanceof EvalError) {
        //         // deal with EvalError exceptions

        //         console.log(`EvalError: ${e}`)
        //     }
        //     else if (e instanceof ReferenceError) {
        //         // deal with EvalError exceptions

        //         console.log(`ReferenceError== ${e.stack}`)
        //     }

        //     else {
        //         //deal with all other exceptions
        //         console.log(`OtherError: ${e}`)
        //         //throw e; //rethrow
        //     }
        // } 

        // function somethingVeryDangerous(){ 
        //     let greeting ="H"

        //     if(greeting.length<2){ 

        //         throw "GreetingTooShortError";

        //     }

        // }

        // try {
        //     trySomething();
        // } catch (e) {
        //     console.log("Oh oh");
        // } finally {
        //     console.log("Error or no error, I will be logged!");
        // } 

               //Using cookies  
        // document.cookie = "name=Maaike;favoriteColor=black";

    //     //Local Storage 
    //     let message = "Hello storage!";
    //     localStorage.setItem("example", message);
    //     if (localStorage.getItem("example")) {
    //        document.getElementById("stored").innerHTML =
    //         localStorage.getItem("example");
    //    }
    //        alert(window.localStorage.key(0)); 
    //        alert(window.localStorage.getItem(window.localStorage.key(0))); 
    //        alert(window.localStorage.removeItem("example"));