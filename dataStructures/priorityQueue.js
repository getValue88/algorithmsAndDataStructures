class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        const node = new Node(val, priority);
        this.values.push(node);
        this.bubbleUp();

        return this;
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];

            if (element.priority >= parent.priority) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue() {
        const oldRoot = this.values[0];
        const newRoot = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = newRoot;
            this.sinkDown();
        }

        return oldRoot;
    }

    sinkDown() {
        let parentIdx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChild,
                rightChild,
                leftChildIdx = 2 * parentIdx + 1,
                rightChildIdx = 2 * parentIdx + 2,
                swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;

            this.values[parentIdx] = this.values[swap];
            this.values[swap] = element;
            parentIdx = swap;
        }
    }
}


const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('hi', 3);
priorityQueue.enqueue('hola', 2);
priorityQueue.enqueue('asd', 1);
priorityQueue.enqueue('dsa', 5);
priorityQueue.enqueue('que', 4);
priorityQueue.dequeue();

console.log(priorityQueue.values);