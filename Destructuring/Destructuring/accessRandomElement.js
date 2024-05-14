function accessRandomElement (numbers){
    let [first, second , ...last] = numbers;

    return Array(first, second, last[last.length - 1]);
}

let numbers = [1,2,3,4,5];

console.log(accessRandomElement(numbers));