class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
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

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            this.length++
        } else {
            newNode.next = this.head;
            this.head = newNode;
            newNode.next.prev = newNode;
            this.length++;
        }
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

console.log(myLinkedList.printList());