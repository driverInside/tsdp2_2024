class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const one = new Node(5);
const two = new Node(3);
const three = new Node(7);
const four = new Node(42);

one.next = two;
two.next = three;
three.next = four;

/**
 * printList
 * 
 * @param {Node} head The head node of the list
 * @returns {string} The result string
 */
function printList(head) {
  let aux = head;
  let str = '';

  str = aux.value + ' -> ';

  while (aux.next !== null) {
    aux = aux.next;
    str = str + aux.value + ' -> ';
  }
  return str
}

console.log(printList(one));

// 5 -> 3 -> 7 ->
