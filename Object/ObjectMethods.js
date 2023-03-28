let emp = {
    id : 101,
    name: 'Sanket',
    age: 24
}

let keys = Object.keys(emp); // Extract all keys of the object and return in the form of string
console.log(keys);

let values = Object.values(emp); // Extract all the values of the object and return in the form of array
console.log(keys);

let entries = Object.entries(emp); // Extract key -  values pair of the objects and return in the form of array
console.log(entries);

Object.freeze(emp); // stop add, delete and update of an object.
emp.address = "Naa";
emp.id = 100;
console.log(emp);

Object.seal(emp); // allow update but can't add or delete anything
emp.address = "Naa";
emp.id = 100;
console.log(emp); 

let o = Object.assign({x:16}, emp); // assign all the key-value pair to new object o and also add new key-value to it by passing it under the {}.
console.log(o);