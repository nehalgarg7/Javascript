const Product =(n, p ,r) =>
{
    this.name = n;
    this.price = p;
    this.rating = r;
}

const p = new Product("macbook",150000,5);
console.log(p);

// The theory of this keyword pointing to calling context is not applicable with arrow function.

// refer this lec. again.
let obj = {
    x: 10,
    fun1() 
    {
        console.log(this.x);
    }
    // not work.
    // fun: () => {
    //     console.log(this.x);
    // }
}

obj.fun1();