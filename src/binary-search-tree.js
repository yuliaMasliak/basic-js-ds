const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.data = null;
    this.nodes = [];
  }

  root() {
    return this.data;
  }

  add(arg) {
    if (this.data == null) {
      this.data = new Node(arg);
    }
    this.nodes.push(new Node(arg));
  }
  has(arg) {
    let result = false;
    this.nodes.forEach((el) => {
      if (el.data == arg) {
        result = true;
      }
    });
    return result;
  }

  find(arg) {
    let arr = this.nodes.filter((el) => el.data == arg);
    let res = arr.length == 0 ? null : arr[0];
    return res;
  }

  remove(arg) {
    this.nodes = this.nodes.filter((el) => el.data !== arg);
  }

  min() {
    let min = this.nodes[0].data;
    this.nodes.forEach((el) => {
      if (el.data < min) {
        min = el.data;
      }
    });
    return min;
  }

  max() {
    let max = this.nodes[0].data;
    this.nodes.forEach((el) => {
      if (el.data > max) {
        max = el.data;
      }
    });
    return max;
  }
}

module.exports = {
  BinarySearchTree
};
