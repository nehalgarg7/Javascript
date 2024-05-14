function uniqueItems (numbers)
{
    let uniqueNumber = new Set();
    
    numbers.map((e)=>{uniqueNumber.add(e)});

    return uniqueNumber;
}

let numbers = [1, 2, 3, 1, 4, 5, 2];

console.log(uniqueItems(numbers));