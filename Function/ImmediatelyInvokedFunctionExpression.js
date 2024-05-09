// They are also called Self-Invoking Function.
// These function can be declared with using name or without name also.
// These function is declared and called at the same time. after then it can't be reuse.

(function print()
{
    console.log("named");
})();

/*
Note : After writing the function put it under () and for invoking or calling it again write ();
*/

(function (x)
{
    console.log(x+x);
})(5);

// global scope ke pollution ko hatane ke liye iffy ka use krte h. URL :https://youtu.be/sscX432bMZo?t=20896 

// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
