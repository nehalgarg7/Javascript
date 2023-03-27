// Function expression are of two types. 1. Named function Expression 2. Unnamed function Expression.

// 1. Anonymous Function Expression (are actually Function Expression) 

//Ex: 1
let x = function ()
{
    console.log("hi");
}

x();

//Ex: 2
(function (x)
{
    console.log(x+x);
})(5);

// 2. Named function Expression

(function print()
{
    console.log("named");
})();

//Note: It is very tough to debug and call recursion on Anonymous Function