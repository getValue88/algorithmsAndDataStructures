//FIFO (first in first out)
//insertion O(1)
//removal O(1)
//searching O(n)
//access O(n)
/* 
use cases:
    - background tasks
    - uploading resources
    - printing/ task proccesing
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const node = new Node(val);

        if (!this.first) {
            this.first = node;
            this.last = node;

        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        const removed = this.first;

        if (this.size === 1) {
            this.last = null;
        }

        this.first = removed.next;
        this.size--;
        return removed;
    }
}