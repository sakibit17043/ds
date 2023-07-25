//class expression
// const Datastructure = class{

// }

// let ds = new Datastructure();
// console.log(ds);


//class declaration

class Datastructure {
    constructor(name){
        // this.name = name;
        this.storage = []; 
    }
    insert(value){
        this.storage.push(value);
        return this.storage;
    }
}

let ds = new Datastructure("Linked-list");
console.log(ds.insert(4));
console.log(ds.insert(9));
// console.log(ds);