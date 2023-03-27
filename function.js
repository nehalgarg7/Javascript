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

// Function without a parameter and return.

