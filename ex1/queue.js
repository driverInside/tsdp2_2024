const LinkedList = require('./list');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue extends LinkedList {
  
}

const one = new Node(5);
const list = new LinkedList(one);

list.toString();
list.addStart(2);
list.addEnd(23);
list.toString();

console.log(list.hasValue(34)); // False
console.log(list.hasValue(2)); // true
