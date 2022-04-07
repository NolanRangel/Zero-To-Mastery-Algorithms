class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }



    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            let inserted = false;
            while (!inserted) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }

        }

    }

    lookup(value) {
        if (this.root === null) {
            return null
        }
        let currentNode = this.root;
        // let found = false;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
            else if (currentNode.value === value) {
                // found = true;
                return currentNode;
            }
        }
        return false;

    }



}





let insertTree = new BinarySearchTree();
insertTree.insert(10);
insertTree.insert(5);
insertTree.insert(15);
insertTree.insert(2);
insertTree.insert(8);
insertTree.insert(12);
insertTree.insert(20);

console.log(insertTree.lookup(21))

// console.log(JSON.stringify(traverse(insertTree.root)))


// function traverse(node) {
//     const tree = { value: node.value };
//     tree.left = node.left === null ? null : traverse(node.left);
//     tree.right = node.right === null ? null : traverse(node.right);
//     return tree;
// }
