/* Array -> In Javascript arrays are heterogenous(means at any time you can store elements of any data type, including numbers,string,objects,and even other arrays).
Arrays are a type of object in the JS and have a number of built-int methods for adding, removing, and manipulating elements.
*/



// Declaration and Initialization of an array
/*
let a = [1,2,3,4,"sanket",false];
console.log(a);

let b = new Array(5); // Declaring an empty array of size 5.
let c = new Array("abc");
console.log(c);
console.log(a[0]); // acessing single element from array a.
a[4]=5; // arrays in JS are mutuable means you can update the elements.
console.log(a[4]);

console.log(a[15]);// says undefined.
*/



//Array Methods

/*
let arr = [1,2,3,4,5];
arr.push(6,7,8); // add elements at the end of the array.
console.log(arr);

let u = arr.pop();// remove last elements from the array and return the element.
console.log(arr);
console.log(u);


let v = arr.shift() // remove first elements from the array and return the element.
console.log(arr);
console.log(v);

arr.unshift(9); // add the elements at the starting of the array.
console.log(arr);

let a1=[1,2,3];
let a2=[4,5];

let a3= a1.concat(a2); // add the array a2 at the end of a1 and return the new array a3.
console.log(a1,a2,a3);

let s = a3.join("@"); // convert array to string. it add all the elments. here argument passed is decide the what have to be present there is in between the two elements of array after clubing them together to form the string.
console.log(s);

a3.reverse(); // used to reverse the array and no return type.
console.log(a3);

console.log(a3.slice(2,4)); // we pass (start,end) and it fetch the array from [start -> end - 1] and form the new array.

a1.splice(2, 0, 11); // we pass(index, number of elements to be deleted from this place,element which have to be added )
console.log(a1);


const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);
*/

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));