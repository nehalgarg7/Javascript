function Product(n, p, r) {
    this.name = n;
    this.price = p;
    this.rating = r;
   // return {x: 10};
    return this;
}

const p = new Product("macbook",150000,5);
console.log(p);

// when we call function with new keyword then only we call following function as a function constructor.

/**
 * 1. this keyword in js is different than other languages.
 * 2. this keyword refers to the context from where we called.
 * 
 * in the function constructor also
 * - if you return primitive it is ignored and we return the object referred by this
 * - if you return a custom obj, then the custom obj is returned.
 * - if you don't return anything, then object referred by this is returned.
 */

let x = {
    p: Product
}

x.p("airpods",2000,5);
console.log(x);