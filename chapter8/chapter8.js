

/////////Built-in JavaScript Methods//////////

// let s = "Hello";
// console.log(
//  s.concat(" there!")
//  .toUpperCase()
//  .replace("THERE", "you")
//  .concat(" You're amazing!")
// );

////////Global Methods///////////
// let x=7;
// console.log(Number.isNaN(x)); 

// console.log(isNaN(x));

///////////////Decoding and encoding URIs//////////////////


// ///decodeuri() and encodeuri
// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

//decodeUriComponent() and encodeUriComponent()
// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);

/////////////////////Parsing Numbers///////////////////

// let str_int = "6";
// let int_int = parseInt(str_int);
// console.log("Type of ", int_int, "is", typeof int_int);

// let str_float = "7.6";
// let int_float = parseInt(str_float);
// console.log("Type of", int_float, "is", typeof int_float);

// let str_binary = "0b101";
// let int_binary = parseInt(str_binary);
// console.log("Type of", int_binary, "is", typeof int_binary);

// let str_float = "7.6";
// let float_float = parseFloat(str_float);
// console.log("Type of", float_float, "is", typeof float_float);

//////////////////////////Array Methods////////////////////////
// let arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element, index) {
//  console.log("Printing stuff:", element, "on array position:", index);
// }
// arr.forEach(printStuff);

// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
//  return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// console.log(arr.every(checkString)); 
// console.log(filterArr.every(checkString));

// arr = ["grapefruit",4,"hello",5.6,true]; 
// console.log(arr);
// console.log(arr.copyWithin(0,3,4)); 



// function go(e){ 
//     eval(e.value)


// } 

// let arr= [ 1, 2, 3, 4]; 
// let mapped_arr = arr.map(x => x+1); 
// console.log(mapped_arr);

// let result = "Hello JavaScript";
// let arr_result = result.split(" ");
// console.log(arr_result);


// let favoriteFruits = "strawberry,watermelon,grapefruit";
// let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits);

// let letters = ["a", "b", "c"];
// let x = letters.join();
// console.log(x);

// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// let index_re = poem.indexOf("re");
// console.log(index_re);

// let searchStr = "When I see my fellow, I say hello";
// let pos = searchStr.search("lo");
// console.log(pos);

// let notFound = searchStr.search("JavaScript");
// console.log(notFound);

// let x = 2;
// let exp = Math.exp(x);
// console.log("Exp:", exp);
// let log = Math.log(exp);
// console.log("Log:", log);


// let milliDate = new Date(1000);
// console.log(milliDate);

// let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
// console.log(specificDate);