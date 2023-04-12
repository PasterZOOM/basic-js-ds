const {NotImplementedError} = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
    queue = {}

    getUnderlyingList() {
        return this.queue
    }

    enqueue(value) {
        if (typeof this.queue.next === 'undefined') {
            this.queue = {value, next: null}
            return this.queue.value
        }
        const add = (head, value) => {
            if (head === null) {
                return {value, next: null}
            } else {
                head.next = add(head.next, value)
                return head
            }
        }
        this.queue.next = add(this.queue.next, value)
        return value
    }

    dequeue() {
        const value = this.queue.value
        this.queue = this.queue.next
        return value
    }
}

module.exports = {
    Queue
};
const queue = new Queue();
console.log(queue.enqueue(5));

console.log(queue.queue)
console.log(queue.enqueue(6));
console.log(queue.queue)
console.log(queue.enqueue(7));
console.log(queue.queue)

console.log(queue.dequeue())
