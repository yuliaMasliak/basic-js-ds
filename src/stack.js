const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.array = [];
  }
  push(element) {
    this.array[this.array.length] = element;
  }

  pop() {
    let res = this.array.slice(this.array.length - 1, this.array.length);
    this.array = this.array.slice(0, this.array.length - 1);
    return +res[0];
  }

  peek() {
    let res = this.array.slice(this.array.length - 1, this.array.length);
    return +res[0];
  }
}

module.exports = {
  Stack
};
