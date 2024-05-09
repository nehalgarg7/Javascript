"use strict"; // treat all JS Code as newer version

// alert(3+3) // we are using nodejs, not browser

let name = "Nehal";
let age = 22;
let isLoggedIn = false


// number => 2^53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// Array
// object 
// functions

console.log(typeof "hitesh"); // string
console.log(typeof null); // object
console.log(typeof undefined); // undefined


/*
 * Javascript do not follow strict type.
 */

let score = "33", anotherScore = "4a";
console.log(typeof score);

let valueInNumber = Number(score);
let valueInAnoteherNumber = Number(anotherScore);
console.table([typeof valueInNumber, typeof valueInAnoteherNumber]); // both are number but

console.log(valueInAnoteherNumber) // this is NaN means "Not a number";

let a = null;  
let b = undefined; 

console.log(Number(a), Number(b)); // 0 ,  NaN

let isLoggedOut = 1

let booleanIsLoggedOut = Boolean(isLoggedOut)
console.log(booleanIsLoggedOut);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber); // make it string


/**
 * Conversion
 */

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( (3+4) * 5 % 3);

console.log(+true);
console.log(+"");

/**
 *   Prefix and Postfix operator 
 *   ++a , a++
 *   --a , a--
 * 
 */

/************
 * Memory
 * 
 * 1. Stack (Primitive) // we got a copy of the variable
 * 2. Heap (Non-Primitive) // we got a reference of the variable
 */

let d = 4;
let c = a;

c = 5;
console.log(d , c);

// but

let obj1 = {
    name : "Nehal"
}

let obj2 = obj1;

obj2.name = "Neshu";

console.log(obj1.name, obj2.name); // got changed as we got reference to variable in the heap memory.


