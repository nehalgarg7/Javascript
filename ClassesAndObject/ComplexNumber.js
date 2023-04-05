class ComplexNumber {
    #real;
    #img;

    constructor (r,i) {
        this.#real = r;
        this.#img = i;
    }

    display() {
        console.log(this.#real, " + i " , this.#img);
    }

    get reall(){
        return this.#real;
    }

    get imag(){
        return this.#img;
    }

    addComplexNumber(c)
    {
        this.#real += c.reall;
        this.#img += c.imag;
    }
}

const c1 = new ComplexNumber(4,3);
c1.display();
const c2 = new ComplexNumber(7,8);
c1.addComplexNumber(c2);
c1.display();