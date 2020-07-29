//insertion O(1)
//removal O(1) or O(n)
//searching O(n)
//access O(n)
// better than arrays when insert and remove is frequently required
// worst than array at searching and accessing elements

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    unshift(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        if (!this.tail) this.tail = newNode;

        return this;
    }

    shift() {
        if (this.length === 0) return;

        const temp = this.head;
        this.head = this.head.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length || isNaN(index) || this.length === 0) return null;

        let node = this.head;
        for (let i = 0; i <= index; i++) {
            if (index === i) return node;
            node = node.next;
        }
    }

    set(index, val) {
        let node = this.get(index);
        if (!node) return false;

        node.val = val;
        return true;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        const newNode = new Node(val);
        const prevNode = this.get(index - 1);
        const nextNode = prevNode.next;

        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return;

        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const prevNode = this.get(index - 1);
        const removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    reverse() {
        if (this.length <= 1) return this;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}

const list = new SinglyLinkedList();

list.push('hi');
list.push('how');
list.push('are');
list.push('you');


list.reverse();
console.log(list);