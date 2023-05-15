

// // dog Class
// // function Dog(dogName, weight, color, breed) { 
// //     this.dogName = dogName; 
// //     this.weight = weight; 
// //     this.color = color; 
// //     this.breed = breed; 
// //    } 

// //    let dog = new Dog("Jacky", 30, "brown", "labrador"); 
// //    let dog1 = new Dog("Jacky", 30, "brown1", "labrador");     
// //    let dog2 = new Dog("Jacky", 30, "brown2", "labrador"); 


// //    class Dog {
// //     constructor(dogName, weight, color, breed) {
// //     this.dogName = dogName;
// //     this.weight = weight;
// //     this.color = color;
// //     this.breed = breed;
// //     }
// //    }

// //    let dog3 = new Dog("JavaScript", 2.4, "brown3", "chihuahua");
// //    let dog4 = new Dog("JavaScript", 2.4, "brown4", "chihuahua");


//    class Person {
//     constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
// }

// let p = new Person("Maaike", "van Putten");
// console.log("Hi", p.firstname, p.lastname);



/////////////////////Inheritance////////////////////////
// class Vehicle {
//     color;
//     currentSpeed;
//     maxSpeed;
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move() {
//         console.log("moving at", this.currentSpeed);
//     }
//     accelerate(amount) {
//         this.currentSpeed += amount;
//     }
// }

// class Motorcycle extends Vehicle {
//     fuel;
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie() {
//         console.log("Driving on one wheel!");
//     }
// }

// let motor = new Motorcycle("black",0,250,"gasoline"); 
// console.log(motor.color);
// motor.accelerate(50); 
// motor.move();
// motor.doWheelie();

///////////////////Prototypes////////////////////////// 
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log("Hi there!");
    }
}

Person.prototype.introduce = function () {
    console.log("Hi, I'm", this.firstname);
};

let p = new Person("Maria", "Saga");
console.log(p.favoriteColor);
p.introduce();

//Practice exercise 7.3 
class Animal {
    constructor(species, sounds) {
        this.species = species;
        this.sounds = sounds;
    }
    speak() {
        console.log(this.species + " " + this.sounds);
    }
}
Animal.prototype.eat = function () {
    return this.species + " is eating";
}
let cat = new Animal("cat", "meow");
let dog = new Animal("dog", "bark");
cat.speak();
console.log(dog.eat());
console.log(dog);





