// OOPs in JS are completely different that other programming language.
// But behind the scene its is based on prototype based inheritance
class Product {
    // properties and behaviour
    // name;
    // price;
    // rating;
    //behaviour -> function -> member function

    #rating; // to declare a private methods or data member use #.
    constructor(n, p, r) {
        console.log("calling the constructor");
        this.name = n; // this keyword refers to calling context.
        this.price = p;
        this.rating = r;
        // return 10; if you are returning primitive than it will be avoided by constructor

       // return {x: 0, y: 20}; // but if you return non-primitive then it will not get ignored.
        //return this; // return the current object.
    } 

    // A class can't have multiple constructor. And if it not declared it calls default constructor.


    static custom()
    {
        console.log("Calling a static method");
    }


    //Setter and Getter

    getRating()
    {
        console.log(this.#rating);
    }

    setRating(r)
    {
        if(r<0) return;
        this.#rating = r;
    }

    //Another way to do the same tasks using get and set keyword.
    get RatingGetter()
    {
        console.log(this.#rating);
    }

    set RatingSetter(r)
    {
        if(r<0) return;
        this.#rating = r;
    }

    display() {
        console.log("displaying the current product");
        console.log("this refers to",this);
        console.log(this.name);
    }
}

const p = new Product("Iphone", 1000, 5); // new -> creates an empty place object.
// above piece of the code calls constructor function.

 console.log(p);
 //p.display()

 /************************************************ */
 //p.custom(); // can't call the static methods with object.
 Product.custom() ; // call the static methods with the class.
  
 /************************************************ */


// Another way to create a object: {key,value} pair.
// let obj ={
//     {key,value} pair
// }


//Setter and Getter execution.
p.setRating(10);
p.getRating();

p.RatingSetter = 15;
p.RatingGetter;