const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null
  }

  root() {
    return this.tree
  }

  add(data, node = this.tree) {
    if (!node) {
      this.tree = new Node(data)
      return
    }

    if (data < node.data) {
      if (!node.left) {
        node.left = new Node(data)
        return
      }

      return this.add(data, node.left)
    }

    if (data > node.data) {
      if (!node.right) {
        node.right = new Node(data)
        return
      }

      return this.add(data, node.right)
    }
  }

  has(data) {
    return !!this.find(data)
  }

  find(data, node = this.tree) {
    return !node
      ? null
      : data < node.data
      ? this.find(data, node.left)
      : data > node.data
      ? this.find(data, node.right)
      : node
  }

  remove(data, node = this.tree) {
    if (!this.has(data)) return

    if (data < node.data) {
      node.left = this.remove(data, node.left)
    } else if (data > node.data) {
      node.right = this.remove(data, node.right)
    } else {
      if (!node.left) {
        return node.right
      } else if (!node.right) {
        return node.left
      } else {
        node.data = this.min(node.right)
        node.right = this.remove(node.data, node.right)
      }
    }

    return node
  }

  min(node = this.tree) {
    return !node.left ? node.data : this.min(node.left)
  }

  max(node = this.tree) {
    return !node.right ? node.data : this.max(node.right)
  }
}

module.exports = {
  BinarySearchTree,
}
