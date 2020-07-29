//LIFO (last in first out)
//insertion O(1)
//removal O(1)
//searching O(n)
//access O(n)
/* 
use cases:
    - call stacks (manage function invocations)
    - undo / redo functionalities
    - routing (history object)
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const node = new Node(val);

        if (!this.first) {
            this.first = node;
            this.last = node;

        } else {
            const secondNode = this.first;
            this.first = node;
            node.next = secondNode;
        }

        return ++this.size;
    }

    pop() {
        if (!this.first) return null;

        const removedNode = this.first;

        if (this.size === 1) {
            this.last = null;

        }

        this.first = removedNode.next;
        this.size--;
        return removedNode.val;
    }
}