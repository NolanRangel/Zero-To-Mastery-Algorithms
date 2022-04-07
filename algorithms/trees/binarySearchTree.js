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
        if (this.root === null) {
            this.root = value;
        }
        let current = this.root;
        let inserted = false;
        while (!inserted) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = new Node(value);
                    inserted = true;
                } else {
                    current = current.left;
                }
            }
            else if (value > current.value) {
                if (!current.right) {
                    current.right = new Node(value);
                    inserted = true;
                } else {
                    current = current.right;
                }
            }
            else {
                inserted = true;
            }
        }

    }

    lookup(value) {
        if (this.root === null) {
            return null;
        }
        let found = false;
        let current = this.root;
        while (!found) {
            if (value === current.value) {
                return true
            }
            if (value < current.value) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
    }

    remove(value) {
        if (this.root === null) {
            return null
        }
        let removed = false;
        let current = this.root;
        while (!removed) {
            if (value === current.value) {
                // remove

                removed = true;
            }
            else if (value < current.value) {
                current = current.left;
            }
            else {
                current = current.right
            }
        }
    }
}