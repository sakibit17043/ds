// class SinglyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     isEmpty(){
//         return this.length===0;
//     }
//     push(value){
//         let newNode={
//             value: value,
//             next: null
//         }
//         if(this.isEmpty()){
//             this.head = newNode;
//             this.tail = newNode;
//         }
//         else{
//              this.tail.next = newNode;
//              this.tail = newNode;
//         }
//         this.length++;
//     }
//     pop(){
//         if(!this.head){
//             return null;
//         }
//         if(this.length===1){
//             let removeNode = this.head;
//             this.head = null;
//             this.tail = null;
//             this.length = 0;
//             return removeNode;
//         }
//         let currentNode = this.head;
//         let lastNode = this.tail;
//         let newLastNode;
//         while(currentNode){
//             if(currentNode.next === lastNode){
//                 // currentNode.next = null;
//                 // this.tail = currentNode;
//                 newLastNode = currentNode;
//                 break;
//             }
//             currentNode = currentNode.next;
//         }
//         newLastNode.next = null;
//         this.tail = newLastNode;
//         this.length--;
//         return lastNode;
//     }
// }
// let list = new SinglyLinkedList();
// console.log(list);
// list.push(6);
// list.push(8);
// list.push(10);
// list.pop();
// list.pop();

// console.log(list );

// console.log(list.isEmpty());
class Node{
    constructor(value){
        this.value=value;
        this.next = null;

    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty(){
        return this.length===0;
    }

    push(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }
        else{
            this.tail.next = node;
            this.tail = node
        }
        this.length++;
    }
    pop(){
        if(!this.head){
            return null;
        }
        if(this.length===1){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        let lastNode = this.tail;
        let currentNode = this.head;
        let newLastNode;
        while(currentNode){
            if(currentNode.next=== this.tail){
                newLastNode = currentNode;
                break;
            }
            currentNode = currentNode.next;
        }
        newLastNode.next = null;
        this.tail = newLastNode;
        this.length--;
        return lastNode;
    }
    shift(){
        if(!this.length){
            return null;
        }
        this.head = this.head.next;
        this.length--;
        if(!this.length)
        this.tail = null;
    }
    unShift(value){
        let node = new Node(value);
        if(!this.length){
            this.tail = node;
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }
    showList(){
        let arr = [];
        let currentNode = this.head;
        while(currentNode){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
}
let list = new SinglyLinkedList();
list.push(5);
list.push(6);
list.push(0);
list.shift();
list.shift();
list.push(56)
list.unShift(76)
list.push("Sakib")
console.log(list.showList())
// list.shift(); 
// list.shift();
// list.shift();

console.log(list)