function nestedObjects(obj){
    const {name, address} = obj;
    const {street} = address;

    return {name: name, street: street};
}

const person = {
    name : "Mithun",
    age : 21,
    address : {
        street : "BB, Block B, Industrial Area. ",
        city : "Sector 62, Noida",
        state : "Uttar Pradesh",
    },
};

console.log(nestedObjects(person));