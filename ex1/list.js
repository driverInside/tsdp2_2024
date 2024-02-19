const Node = require('./node');

class LinkedList {
  constructor(head) {
    this.head = head;
    this.tail = head;
    this.size = 1;
  }

  size() {
    return this.size;
  }

  addStart(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  toString() {
    let str = ''
    let aux = this.head;

    str = aux.value + ' -> ';

    while (aux.next !== null) {
      aux = aux.next;
      str = str + aux.value + ' -> ';
    }
    console.log(str);
  }

  addEnd(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  hasValue(value) {
    let aux = this.head;

    while (aux.next != null) {
      if (aux.value === value) return true;

      aux = aux.next;
    }
    return false;
  }
}


const one = new Node(5);
const list = new LinkedList(one);

list.toString();
list.addStart(2);
list.addEnd(23);
list.toString();

console.log(list.hasValue(34)); // False
console.log(list.hasValue(2)); // true

module.exports = LinkedList;
