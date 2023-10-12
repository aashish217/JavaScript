//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++

// There are two types of memory

// 1. Stack ==> Uses in primitive datatypes , ==> It gives us a copy of that variable

// 2. Heap ==> Uses in NOn primitive datatypes, ==> It gives us the original reference of that variable.

// Example of stack memory 

let myNameIs = "Aashish";

let mySecondName = myNameIs;

mySecondName = "Ishu";

// console.log(mySecondName);
// console.log(myNameIs);

// conclusion ==> Value of myNameIs will not change 

// Example of stack memory 

let user1 = {

    name : "Aashish",

    city : "Gwalior"

}

let user2 = user1;

user2.city = "Delhi";

console.log(user1);
console.log(user2);

// conclusion ==> Value of city in user1 will also change