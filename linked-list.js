/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    if (this.length === 0) {
      this.tail = this.head;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let temp = null;
    if (this.length === 0) {
      throw new Error("List is empty");
    }

    if (!this.tail) {
      return undefined;
    } else if (this.length === 1) {
      temp = this.head;
      this.head = null;
      this.tail = null;
    } else if (this.length === 2) {
      this.head.next = null;
      temp = this.tail;
      this.tail = this.head;
    } else {
      temp = this.head;
      while (this.temp) {
        temp = this.temp.next;
      }
      this.tail = temp;
      this.tail.next = null;
    }
    this.length--;
    return temp.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let temp = null;
    if (this.length === 0) {
      throw new Error("List is empty");
    }

    if (this.head === this.tail) {
      temp = this.head;
      this.head = null;
      this.tail = null;
    } else if (this.length === 2) {
      temp = this.head;
      this.head = this.tail;
      this.head.next = null;
      this.tail.next = null;
    } else {
      temp = this.head;
      this.head = this.head.next;
      temp.next = null;
    }
    this.length--;
    return temp.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let temp = this.head;
    if (idx >= this.length || idx < 0) {
      throw new Error("Index out of bounds");
    }

    if (idx === 0) {
      return this.head.val;
    } else if (idx === this.length - 1) {
      return this.tail.val;
    } else {
      for (let i = 0; i < idx; i++) {
        temp = temp.next;
      }
      return temp.val;
    }
  }

  /** get(idx): return Node at index, throw error if out of bounds */

  get(idx) {
    let temp = this.head;
    if (idx > this.length || idx < 0) {
      throw new Error("Index out of bounds");
    }
    if (idx === 0) {
      return this.head;
    } else if (idx === this.length - 1) {
      return this.tail;
    } else {
      for (let i = 0; i < idx; i++) {
        temp = temp.next;
      }
      return temp;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    this.get(idx).val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);

    if (idx > this.length || idx < 0) {
      throw new Error("Index out of bounds");
    }

    if (this.length === 0 || idx === this.length) {
      this.push(val);
    } else {
      newNode.next = this.get(idx);
      this.get(idx - 1).next = newNode;
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Index out of bounds");
    }

    let temp = null;

    if (this.length === 0) {
      throw new Error("Empty List");
    } else if (this.length === 1) {
      temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return this.temp;
    } else if (this.length === idx - 1) {
      temp = this.tail;
      this.get(idx - 1).next = null;
    } else {
      temp = this.get(idx);
      this.get(idx - 1).next = this.get(idx + 1);
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    } else if (this.length === 1) {
      return this.head.val;
    } else {
      let sum = 0;
      let temp = this.head;
      while (temp) {
        sum += temp.val;
        temp = temp.next;
      }
      return sum / this.length;
    }
  }
}

module.exports = LinkedList;
