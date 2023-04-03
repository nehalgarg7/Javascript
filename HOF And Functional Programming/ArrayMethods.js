// For Each

let arr = [2,3,4];

arr.forEach(function(element,index,arr){
    console.log(index,element,arr);
});

// same thing done using arrow function.
arr.forEach((element,index,arr)=>{
    console.log("arrow: ",index,element,arr);
});

const heros = ["naagraj","doga","dhruva","maniraj"]

//converting each string from lowecase -> uppercase.
heros.forEach((el)=>{console.log(el.toUpperCase())});

// Map

arr.map(function(element, index, arr){
    console.log(index,element,arr);
})

heros.map((element)=>{
    console.log(element.toUpperCase());
})

//filter

console.log(heros);

const herosWithRaj = heros.filter((h)=>{
    return h.endsWith('raj');
})

console.log(herosWithRaj);

// shopping cart

const cartBill =[20,30,50];
const sumOfCartBill = cartBill.reduce((prev,curr)=>prev+curr, 0);
console.log(sumOfCartBill);

const gameScore = [200, 300 ,310 , 250 ,150]

//check if all values are numbers

const gameScoreCheck = gameScore.every((v)=>typeof v === 'number');
console.log(gameScoreCheck);

// find score above 200

const cricketScore = [200, 310 ,300 , 250 ,150]
const above200 = cricketScore.find((score)=>{return score>200}) //it return the first element greater than 200.

console.log(above200);

//findIndex
//some
//sort