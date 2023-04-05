// In the case of anonymous function, it works as same.
const Product =function (n, p ,r) 
{
    this.name = n;
    this.price = p;
    this.rating = r;
}

const p = new Product("macbook",150000,5);
console.log(p);
