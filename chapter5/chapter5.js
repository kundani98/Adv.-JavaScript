// //While loops
// ////////////////////Practice exercise 5.1 ////////////////////////////
// var max = 10; 
// var randNum = Math.floor(Math.random * 10); 
// console.log(randNum); 

// var correct = false; 

// while(correct = false){ 
//     var user = Number(prompt("Enter a number")); 

//     if(user===randNum){ 
//         correct == true;
//     }
// }

// alert("You Won");

// //do while loops
// // ////////////////////Practice exercise 5.2 ////////////////////////////
// let counter = 0;
// let step = 5;
// do {
//     console.log(counter);
//     counter += step;
// }
// while (counter <= 100); 


//for loops

// practice exercise 5.3   
// const myWork = [];
// for (let x = 1; x < 10; x++) {
//     let stat = x % 2 ? true : false;
    
//     let temp = {
//         name: `Lesson ${x}`, status: stat
//     };
   
//     myWork.push(temp);
// }
// console.log(myWork);


///Practice exercise 5.4 
const myTable = [];
// const rows = 4;
// const cols = 7;
// let counter = 0;
// for (let y = 0; y < rows; y++) {
//     let tempTable = [];
//     for (let x = 0; x < cols; x++) {
//         counter++;
//         tempTable.push(counter);
//     }
//     myTable.push(tempTable);
// }
// console.table(myTable);

// Practice exercise 5.5 
const grid = [];
const cells = 64;
let counter = 0;
let row;
for (let x = 0; x < cells + 1; x++) {
    if (counter % 8 == 0) {
        if (row != undefined) {        
            grid.push(row);
        }
        row = [];
    }
    counter++;
    let temp = counter;
    row.push(temp);
 
}
console.table(grid);
