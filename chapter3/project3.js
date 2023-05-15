//Manipulating an array
// theList.pop(); 
// theList.shift(); 
// theList.unshift("FIRST"); 
// theList[3] = "hello World"; 
// theList[2] = "MIDDLE"; 
// theList.push("LAST"); 
// console.log(theList); 

//Company product catalog 
const inventory = [];
const item3 = {
    name: "computer",
    model: "imac",
    cost: 1000,
    qty: 3
}
const item2 = {
    name: "phone",
    model: "android",
    cost: 500,
    qty: 11
}
const item1 = {
    name: "tablet",
    model: "ipad",
    cost: 650,
    qty: 1
}
inventory.push(item1, item2, item3);
console.log(inventory);
console.log(inventory[2].qty);