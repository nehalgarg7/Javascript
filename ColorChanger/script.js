/*
Color Hex Value

#
1 2 3 4 5 6 7 8 9
A B C D E F

Ex: #1a1a1a, #bbbbbb;
*/

const btn = document.getElementById("button");

//creating an arrow Function.
//Generating random Color firstly
const randomColor = () => {
    let val = "0123456789ABCDEF";
    let cons = "#";
    for(let i=0;i<6;i++)
    {
        cons = cons + val[Math.floor(Math.random()* 16)];  // + is used for concatention of string
    }
    return cons;
};

// console.log(randomColor());

// Math.random() gives value from 0 -> 0.99
// Math.floor() give integeral value.

//Fuunction to change color on event call.
function changeRandomColor()
{
    document.body.style.backgroundColor = randomColor();
}


// adding eventlisenter to button.
btn.addEventListener("click",changeRandomColor);