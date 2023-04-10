/**
 * Syntax of try-catch
 * try{
 * //block of code for testing}
 * catch{
 * //block of code for addressing errors.
 * }finally{
 * //Block of code to run after try-catch}
 */
// let x = undefined;
// console.log(x[0]);

try {
    let x = undefined;
    console.log(x[0]);
    console.log("Will not executed"); //since the error ocurred just before it.
}
catch (err) {
    console.log("Catch blocks get executed",err);
}
finally {
    console.log("Finally always gets executed");
}

