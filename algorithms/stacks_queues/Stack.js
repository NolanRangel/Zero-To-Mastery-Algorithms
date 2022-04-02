

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;

    }
  }
  
  class Stack{
    constructor(){
      this.top=null;
      this.length = 0;
    }
  
    isEmpty(){ 
      if(this.top === null){
          return true;
      } else{
          return false;
      }
    }
  
    push(data){
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    }
  
    pop(){
    let poppedTop = this.top
    this.top = this.top.next;
    this.length--;
    return poppedTop;
    }
  
    peek(){
      return this.top.data;
    }
  
    size(){
      //return the size of the stack
      return this.length;
    }
  
    printStack(){ // For learning purpose
      console.log("TOP")
      let runner = this.top;
      while(runner){
        // console.log(runner.data);
        runner= runner.next
      }
    }
  }
  
  let s1 = new Stack();
    s1.push(1);
  console.log(s1.isEmpty())
  s1.push(2);
  s1.push(3);
  s1.printStack(); 
  //expected:
  // TOP
  // [ 3 ] 
  // [ 2 ]
  // [ 1 ]
  
  console.log(s1.pop()); //expected: [ 3 ]
  s1.printStack();
  console.log(s1.size());
  console.log(s1.peek());
  //expected: 3
  // TOP
  // [ 2 ] 
  // [ 1 ]
  