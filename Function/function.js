// Function

/*
  1. use to organize and structure code..
  2. a piece of block of code which can be reused.
  3. allow to write more efficent and modular code.
  4. increase code readability and easier to understand.
  5. some func. are in-built in JS which can directly used and some must be user-defined functions.
*/

/*
In JS, func are first-class citizens.
Means, functions in JS can be assigned to variables, passed as arguments to other functions, and returned from functions.
*/


// Function declaration
/*
function functionName() 
{
    // function body
}

functionName() // calling a function
*/

/*
function greet()
{
    console.log("Hi");
}

greet();


function sqr(x)  // x is a parameter
{
    //console.log(x*x);
    return x*x; // if  we don't return anything then in JS function return undefined and also in the class if we write just return ;
}

let a = sqr(4); // 4 is a arguments.
console.log(a);
*/
// Function without a parameter and return.

// Function with one parameter.
/*
function print(s)
{
    console.log(s);
}

s = "hello";

print(s);

function sum(a,b)
{
    console.log(a+b);
}

sum(1,2);

// Function with default parameter -> Sometimes functions are written with default parameter values to avoid errors when the function is called without passing any arguments.

//Ex: 

function print(s="Default")
{
    console.log(s);
}

print("Hello");
print(); 

function sum(a=7,b=9)
{
    console.log(a+b);
}

sum();

// Array as an argument

function sumOfTwoNumber([num1,num2])
{
    return num1 + num2;
}

let numbers = [10,40];

let result =  sumOfTwoNumber(numbers);
console.log(result);

// Function with unlimited number of parameter

function SumOfAllNumber()
{
    let sum =0;
    for (let i=0; i<arguments.length; i++)
    {
        sum += arguments[i];
    }
    return sum;
}

console.log(SumOfAllNumber(1,2,3,4,5));
*/

// Arrow function (also known as Fat arrow function)

//1. One parameter, and a single return statement
const square = (x) => x * x;

//2. Multiple parameter, and a single return expression
const sumOfTwoNumber = (x,y) => x + y;

//3. Multiple statements in function expression
const sum = (x,y) => 
{
    console.log(`Adding ${x} and ${y}`); // Focus here.
    return x + y ;
}

// 4. Returning an object
const sumAndDifference = (x,y) => ({ sum: x+y , difference: x-y});