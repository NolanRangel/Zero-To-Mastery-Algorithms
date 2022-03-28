
class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        // return this
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        // return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        // create new Node
        const newNode = new Node(value);
        // grabs the node at the apprpriate index
        const leader = this.traversToIndex(index - 1);
        // create memory reference of the current node
        const holdingPointer = leader.next;
        // replace next with newNode
        leader.next = newNode;
        // point the newNode to the node it is replacing
        newNode.next = holdingPointer;
        this.length++;

    }

    delete(index) {
        const leader = this.traversToIndex(index - 1);
        // console.log(leader);
        leader.next = leader.next.next;

    }

    // used to grab the index of a node within a linked list
    traversToIndex(index) {
        let counter = 0;
        let runner = this.head;

        while (counter !== index) {
            runner = runner.next;
            counter++;
        }
        return runner;
    }



    printList() {
        const array = []
        let runner = this.head;

        while (runner !== null) {
            array.push(runner);
            runner = runner.next;
        }
        // console.log(array);
        return array
    }

}


const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(12);
myLinkedList.append(13);

myLinkedList.delete(1)

// myLinkedList.prepend(1);

// myLinkedList.insert(2, 99);

console.log(myLinkedList.printList());
// console.log(myLinkedList);