const LinkedList = require('./list');
const Node = require('./node');

class Queue extends LinkedList {
  constructor (head) {
    super(head);
  }

  queue(value) {
    this.addEnd(value);
  }

  dequeue() {
    return this.removeStart();
  }

  toString() {
    let str = ''
    let aux = this.head;

    str = aux.value + ' <- ';

    while (aux.next !== null) {
      aux = aux.next;
      str = str + aux.value + ' <- ';
    }
    console.log(str);
  }
}

const one = new Node(5);
const queue = new Queue(one);

queue.toString();
queue.queue(23);
queue.queue(7);

const el = queue.dequeue();

console.log(`El elemento eliminado es el ${el.value}`);

queue.toString();

console.log(queue.hasValue(34)); // False
console.log(queue.hasValue(2)); // true
