class Stack{
    constructor(){
        this.arr = [];
    }

    push(value){
        this.arr.push(value)
        return this.arr;
    }

    pop(){
        this.arr.pop();
        return this.arr;
    }

    peek(){
        return this.arr[this.arr.length-1];
    }

    size(){
        return this.arr.length;
    }

    isEmpty(){
        return this.arr.length === 0;
    }

    print(){
        console.log( this.arr.toString());
    }
}

const stack = new Stack();
stack.push(4);
stack.push(8);
stack.push(3);
stack.push(9);
console.log(stack.size())
stack.print()

