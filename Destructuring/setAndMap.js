let emptySet = new Set()

// console.log(emptySet.size);

let myArray = [1, 2, 3, 4, 3, 2]
let newSet = new Set([...myArray])
console.log(newSet);

newSet.add(9)
newSet.clear()
console.log(newSet);
// console.log(newSet.has(9));

// Set difference

function setDifference(setA, setB){

    return new Set([...setA].filter(el => !setB.has(el)))
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let map = new Map()

console.log(map.size);

let twoDarray = [
    ['nehal','22'],
    ['shyam','44']
]

// Ques convert this into map

twoDarray.map(e=>(map.set(e[0],e[1])));

console.log(map);