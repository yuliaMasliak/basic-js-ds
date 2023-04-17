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
    this.nodes.push(arg);
  }
  has(data) {
    let result = false;
    this.nodes.forEach((el) => {
      if (el == data) {
        result = true;
      }
    });
    return result;
  }

  find(data) {
    let arr = this.nodes.filter((el) => el == data);
    let res = arr.length == 0 ? null : true;
    return res;
  }

  remove(data) {
    this.nodes = this.nodes.filter((el) => el !== data);
  }

  min() {
    let min = this.nodes[0];
    this.nodes.forEach((el) => {
      if (el < min) {
        min = el;
      }
    });
    return min;
  }

  max() {
    let max = this.nodes[0];
    this.nodes.forEach((el) => {
      if (el > max) {
        max = el;
      }
    });
    return max;
  }
}

module.exports = {
  BinarySearchTree
};
