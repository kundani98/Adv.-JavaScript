

//Arrays and their properties 
//Practice exercise 3.1 
// var shoppingList = ["Milk", "Bread", "Apples"];
// shoppingList.length
// shoppingList[1] = "Bananas"
// console.log(shoppingList);


// arr8 = [ 2, 6, 7, 8 ];
// let findValue = arr8.find(2);
// //let findValue2 = arr8.find(e => e === 2);
// console.log(findValue);

//practice exercise 3.2
// const myList = [];
// myList.push("Milk", "Bread", "Apples");
// myList.splice(1, 1, "Bananas", "Eggs");
// console.log(myList);
// const removeLast = myList.pop();
// console.log(removeLast);
// myList.sort();
// console.log(myList.indexOf("Milk"));
// myList.splice(1, 0, "Carrots", "Lettuce");
// const myList2 = ["Juice", "Pop"];
// const finalList = myList.concat(myList2, myList2);
// console.log(finalList.lastIndexOf("Pop"));
// console.log(finalList);

//practice excercise 3.3 
// const myArr = [1, 2, 3];
// const bigArr = [myArr, myArr, myArr];
// console.log(bigArr[1][1]);
// console.log(bigArr[0][1]); 
// console.log(bigArr[2][1]);

// //practice excercise 3.4 
// const myCar = {
//     make: "Toyota",
//     model: "Camry",
//     tires: 4,
//     doors: 4,
  
//     forSale: false
// };

// let propColor = "color";
// myCar[propColor] = "red";
// propColor = "forSale";
// myCar[propColor] = true;
// console.log(myCar.make + " " + myCar.model);
// console.log(myCar.forSale);

// //Practice excersice 3.5
// const people = {friends:[]};
// const friend1 = {first: "Laurence", last: "Svekis", id: 1};
// const friend2 = {first: "Jane", last: "Doe", id: 2};
// const friend3 = {first: "John", last: "Doe", id: 3};
// people.friends.push(friend1, friend2, friend3);
// console.log(people); 

//Chapter Projects

//Manipulating an array
// const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
// {test: 'one', score: 55}, ['one', 'two']];

// theList.pop(); 
// theList.shift(); 
// theList.unshift("FIRST"); 
// theList[3] = "hello World"; 
// theList[2] = "MIDDLE"; 
// theList.push("LAST"); 
//  console.log(theList);

// //COmpany product catalog
// const inventory = [];
// const item3 = {
//     name: "computer",
//     model: "imac",
//     cost: 1000,
//     qty: 3
// }
// const item2 = {
//     name: "phone",
//     model: "android",
//     cost: 500,
//     qty: 11
// }
// const item1 = {
//     name: "tablet",
//     model: "ipad",
//     cost: 650,
//     qty: 1
// }
// inventory.push(item1, item2, item3);
// console.log(inventory);
// console.log(inventory[2].qty);


// let dog = { 
// "dog Name": "JavaScript", 
// weight: 2.4, 
// color: "brown", 
// breed: "chihuahua", 
// age: 3, 
// burglarBiter: true
// };

// console.log(dog["dog Name"]);