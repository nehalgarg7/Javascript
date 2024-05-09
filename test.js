// function sumOfTwoNumber([num1,num2])
// {
//     return num1 + num2;
// }

// let numbers = [10,40];

// let result =  sumOfTwoNumber(numbers);
// console.log(result);

// function sum([a,b,c,d])
// {   
    

//     return a + b + c + d;
// }

// let val = [1,2,3,4];
// console.log(sum(val));

// const obj = {
//     name : "Nehal",

//     print: function (){
//         console.log(this.name);
//     }
// }

// obj.name = "ndwsn"
// obj.print();

// function manyArguments(){
//     console.log(arguments);

//     let args = Array.from(arguments);
//     console.log(args);

//     let finalArray = args.map(e=>e);
//     console.log(finalArray);
// }

// manyArguments(1,2,3);

let newArray = [1,2,3,4,5];

//let newSet = new Set(...newArray);

let abs = [...newArray];
console.log(abs);
console.log(...newArray);
//console.log(newSet);