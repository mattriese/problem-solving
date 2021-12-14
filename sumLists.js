// simple node class
class Node {
  constructor(val) {
    this.val = val;
    this.next = undefined;
  }
}

// simple list class
class LinkedList {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === undefined) this.head = newNode;
    if (this.tail !== undefined) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** sumLists() takes two LinkedList instances, iterates through them, adding each
   * pair of nodes together and pushing that sum to a new LinkedList
   * Returns that LinkedList of sums
   */
  static sumLists(listOne, listTwo) {
    let resultList = new LinkedList();
    let current1 = listOne.head;
    let current2 = listTwo.head;
    let carry = 0;

    while (current2 || current1 || carry) {
      let val1 = current1 ? current1.val : 0;
      let val2 = current2 ? current2.val : 0;
      let sum = val1 + val2 + carry;
      let mod = sum % 10;
      sum >= 10 ? (carry = 1) : (carry = 0);
      resultList.push(mod);
      current1 === listOne.tail || current1 === null
        ? (current1 = null)
        : (current1 = current1.next);
        current2 === listTwo.tail || current2 === null
        ? (current2 = null)
        : (current2 = current2.next);
    }
    return resultList;
  }
}

module.exports = LinkedList;
