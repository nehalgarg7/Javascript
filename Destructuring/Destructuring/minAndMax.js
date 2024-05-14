function minAndMax(numbers){
    let obj = {
        min : Math.min(...numbers),
        max : Math.max(...numbers)
    }

    return obj;
}

let numbers = [5, 2, 7, 1, 9];

console.log(minAndMax(numbers));