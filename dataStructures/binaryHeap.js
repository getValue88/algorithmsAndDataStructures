//insertion O(log n)
//removal O(log n)
//seach O(n)

//each parent has at most two child nodes
//the value of each parent node is ALWAYS greather than its child nodes
//no order between siblings

/* use cases
    -priority queues
    -graph traversal algorithms
*/

//any left child is at parent index*2 + 1
//any right child is at parent index*2 + 2
//any parent node is at child floor((index-1) / 2)

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();

        return this;
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];

            if (element <= parent) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    remove() {
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
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
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


const heap = new MaxBinaryHeap();
heap.values = [41, 39, 33, 18, 27, 12];
heap.insert(55);
heap.remove();
console.log(heap.values)
