const { NotImplementedError } = require('../extensions/index.js')

const { ListNode } = require('../extensions/list-node.js')

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.front = null
  }

  getUnderlyingList() {
    return this.front
  }

  enqueue(value) {
    if (!this.front) {
      this.end = new ListNode(value)
      this.front = this.end
      return
    }

    this.end.next = new ListNode(value)
    this.end = this.end.next
  }

  dequeue() {
    ;[this.element, this.front] = [this.front.value, this.front.next]
    return this.element
  }
}

module.exports = {
  Queue,
}
