// Array , Function ...mostly everything is an object in JS.

// const oneArray = [1,2,3,4];
// const twoArray = [5,6,7,8];

//const threeArray = oneArray.concat(twoArray);

//const threeArray = [oneArray, twoArray]; (Not work)
// const threeArray = [...oneArray, ...twoArray]
// console.log(threeArray);

/*...oneArray = 1, 2, 3, 4 // ( ... )Work as a spread operator
...twoArray = 5, 6, 7, 8 */

// ****************************************************************// 

// function testone()
// {
//     console.log(arguments); //print the arguments and its index.
//     console.log(arguments.callee); //print the function which calls it.
//     console.log(arguments.length); // return the length.
// }
// testone(1,2,3,4),
// testone([1,2,3,4]); //check in the case of array,

// function call()
// {
//     console.log(typeof arguments);
// }
// call(1,2);

function manyArguments()
{
    let args = Array.from(arguments);
    let finalargs = args.map(e => e)
    console.log(finalargs);
}

manyArguments(1,2,3,4);
manyArguments(1,2,3,4,7,8,9);

// custome design object are not iterable.


////////////////////////////////////////////////////

//+++++++++++++++++++++++++++++++
// SPREAD

const oneArray = [1, 2, 3, 4]
const twoArray = [5, 6, 7, 8]

// const threeArray = oneArray.concat(twoArray)
// const threeArray = [oneArray, twoArray]

const threeArray = [...oneArray, ...twoArray]
// console.log(threeArray);

// +++++++++++++++++++++++++++++++++++++++++++++++++
// REST

function manyArguments(){
    console.log(typeof arguments);
    let args = Array.from(arguments)
    let finalArr = args.map(e => e  )
    console.log(finalArr);
}

function manyArgumentv2(...args){
    console.log(typeof args);
    let finalArr = args.map(e => e)
    console.log(finalArr);
}

// manyArguments(1, 2, 3)
// manyArgumentv2(1, 2, 3)


// +++++++++++++++++++++++++++++++++++++++++++++++++

const names = ["superman", "flash"]
const newNames = ["Batman", ...names, "thor"]

const sitename = "pwskills"
console.log([...sitename]);

function pwskills(...values){
    return values
}

console.log(pwskills("superman", "flash"));