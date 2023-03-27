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