// https://habr.com/en/post/493474/


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLLQueue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;

    }

    isEmpty() {
        // check if the queue is empty
        if (this.front === null) {
            return true;
        } else {
            return false;
        }
    }

    getFront() {
        //return the front
        return this.front ? this.front.data : null
    }
    enqueue(data) {
        // construct a new node and add to the current queue
        const newNode = new Node(data)
        if (this.front) {
            this.rear.next = newNode;
            this.rear = newNode;
        } else {
            this.front = newNode;
            this.rear = newNode;
        }
    }

    dequeue() {
        // remove and return from the front of the queue
        const runner = this.front;
        this.front = this.front.next;
        return runner;
    }

    contains(target) {
        // check if the queue contains the target
        let runner = this.front;

        while (runner) {
            console.log(runner.data)
            if (runner.data === target) {
                return true;
            } else {
                runner = runner.next;
            }
        }
        return false;

    }

    printQueue() { //for learning puspose
        console.log("Front: " + this.front.data);
        var runner = this.front;
        while (runner) {
            console.log(runner.data)
            runner = runner.next;
        }
        console.log("Rear: " + this.rear.data);
    }
}


var q = new SLLQueue();
var z = new SLLQueue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");
q.printQueue(); //expected: front: "a", rear : "d"

console.log(q.dequeue().data);
q.printQueue(); //expected: front: "b", rear : "d"
// console.log(z.getFront())
// console.log(q.getFront())
console.log(q.contains("d"))