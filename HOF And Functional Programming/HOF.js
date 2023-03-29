//  HOF stands for Higher Order Function. 
// A function that returns a function or takes other functions as arguments is called a higher-order functions.

const v  = "hello";
const powerTwo = (n) => {
    return n ** 2; // n power 2
}

function powerCube (powerTwo,n)
{
    return powerTwo(n) * n;
}

// what happen here 
/*
function powerCube (powerTwo,n)
{
    return (n) => {  // powerTwo(n) woh upar function pura copy hoke aa jayega.
    return n ** 2; // n power 2
} * n;
}
*/

console.log(powerCube(powerTwo, 3));

function sayHello()
{
    return () => { // returning function.
        console.log("Hi");
    }
}

let guessValue = sayHello(); // this guess value stores a function which is returned. So, guessValue act as function.
console.log(guessValue);

guessValue();

// More complex example.

const higherorder = n => { // this is one paramter arrow function.
    const oneFunction = m => {
        const twoFunction = p =>
        {
            return m + n + p; // here we have the scope of m,n and p.
        }
        return twoFunction;
    }
    return oneFunction;
}

console.log(higherorder(2)(3)(4)); // syntax to call nested higher order function.

// Ex-->

const myNums = [2,3,4,5];

const sumArray = arr => {
    let total = 0;
    arr.forEach(element => {
        total += element;
    });
    return total;
}

console.log(sumArray(myNums));