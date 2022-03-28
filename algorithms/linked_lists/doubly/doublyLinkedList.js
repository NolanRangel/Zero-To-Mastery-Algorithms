class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1
    }


    append(value) {
        const newNode = new Node(value);
        // **
        newNode.prev = this.tail
        // the tails next changes from null to the newNode
        this.tail.next = newNode;
        // the tail is now set to the newNode and next is null
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        // gets the current head and the newNode to the old head
        newNode.next = this.head;
        // **
        this.head.prev = newNode
        // the head is now the newNode
        this.head = newNode;
        this.length++;
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

        // grabs the node one index BEFORE the given index
        const leader = this.traversToIndex(index - 1);

        // create memory reference of the index requested
        // grabs the index before leader
        // **
        const follower = leader.next;
        // replace next with newNode
        leader.next = newNode;
        // **
        newNode.prev = leader;
        // point the newNode to the node it is replacing
        newNode.next = follower;
        // **
        follower.prev = newNode;

        this.length++;

    }

    delete(index) {
        // node before unwanted node
        const leader = this.traversToIndex(index - 1);
        // console.log(leader);

        // puts unwanted node into variable
        const unwantedNode = leader.next;

        // puts node thats next in line into a varaiable
        const follower = unwantedNode.next;
        // console.log(follower.value);

        // changes the unwanted node into the next node in line
        leader.next = follower;

        // points the next node after unwanted node to the node before the unwanted node
        follower.prev = leader;

        this.length--;

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

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(12);
myLinkedList.append(13);

myLinkedList.prepend(99);

myLinkedList.insert(2, 333)

// edge case found: cannot delete head
myLinkedList.delete(1);

console.log(myLinkedList.printList());