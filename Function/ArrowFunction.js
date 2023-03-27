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
const sumAndDifference = (x,y) => ({ sum: x+y , difference: x-y}); // Focus here

// Calling a Function

let output1 = square(5); console.log(output1);
let output2 = sumOfTwoNumber(1,2); console.log(output2);
let output3 = sum(1,2); console.log(output3);
let output4 = sumAndDifference(5,3); console.log(output4);

// Features of Arrow Function Syntax:

/*
1. Parenthesis are optional in the case of a single parameter.
2. Must use parentheses in case of multiple parameteres.
3. The return keyword is not required for a single return expression in the function body.
4. The return keyword is required in case of multiple statements in the function.
5. To return an object notation, wrap it with parentheses.
*/

// Arrow function are often used with array methods like map(),filter(), and reduce(), because they make the code more readable, especially when used in a chain of array methods.