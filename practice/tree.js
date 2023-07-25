class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class Tree{
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return !this.root;
    }
    insert(value){
        const node = new Node(value);
        if(this.root === null){
            this.root = node;
            return;
        }
        else{
            const searchTree = root =>{
                if(value<root.value){
                    if(root.left===null){
                        root.left = node;
                        return;
                    }
                    else{
                      return searchTree(root.left);
                    }
                }
                else if(value>root.value){
                    if(root.right===null){
                        root.right = node;
                        return;
                    }
                    else{
                       return searchTree(root.right);
                    }
                }
                else{
                    return null;
                }
            }
            return searchTree(this.root);
        }

    }
    findMax(){
        let root = this.root
        while(root.right!==null){
            root = root.right;
        }
        return root.value;
    }
    findMin(){
        let root = this.root;
        while(root.left!==null){
            root = root.left;
        }
        return root.value;
    }
    findValue(value){
        let current = this.root;
        while(value!==current.value){
            if(value<current.value){
                current = current.left;
            }
            else{
                current = current.right;
            }
            if(current===null){
                return null;
            }
        }
        return current.value;
    }
    isPresent(value){
        let current = this.root;
        while(current){
            if(value === current.value){
                return true;
            }
            else if(value<current.value){
                current = current.left;
            }
            else{
                current = current.right;
            }
        }
    }
}
const bst = new Tree();
console.log(bst.isEmpty());
bst.insert(89);
bst.insert(19);
bst.insert(769);
bst.insert(859);
bst.insert(839);
bst.insert(49);
bst.insert(895);
bst.insert(892);
console.log(bst.findMax())
console.log(bst.findMin())
console.log(bst.isEmpty())
console.log(bst.findValue(49));
console.log(bst.findValue(900));
console.log(bst.isPresent(19))
