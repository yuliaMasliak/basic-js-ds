const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addWithin(this.rootNode, data);
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.value == data) {
        return node;
      }
      if (data < node.value) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }
  has(data) {}

  find(data) {}

  remove(data) {}

  min() {}

  max() {}
}

module.exports = {
  BinarySearchTree
};
