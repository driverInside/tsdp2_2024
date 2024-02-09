class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const one = new Node(5);
const two = new Node(3);
const three = new Node(42);

one.next = two;
two.next = three;

// 5 -> 3 -> 42 ->
