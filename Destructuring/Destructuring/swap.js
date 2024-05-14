function swapNumber(num1, num2)
{
    [num1, num2] = [num2 , num1];
    return Array(num1, num2)
}

console.log(swapNumber(4,5));
