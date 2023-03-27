// Objects are set of Key, Value pair.

let obj = {id: 101, name: "alex", salary: 10000};

console.log(obj);

let emp = new Object(); // create a empty object
console.log(emp);

// we can assigned key:value pair to this object by following method:

emp.id = 102;
emp.salary = 10000;
console.log(emp);

// Another way to create an object is using function constructor

function Emp(i,n,s)
{
    this.id=i;
    this.name=n;
    this.salary=s;
}

const e = new Emp(103, "Anny" , 150000);

console.log(e);

// 
console.log(emp.id); // We can fetch the value of any object by using . operator. Syntax: object_name.key_name
//Another way to fetch object value.

console.log(emp['id']);

// Assiging new key - value pair

emp.name ="Sam";
// Another way

emp['name'] = 'mr.sam';

console.log(emp);

// To delete key-value pair.

delete emp.id;

console.log(emp);