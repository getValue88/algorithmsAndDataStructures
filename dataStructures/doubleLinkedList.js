//need more memory and give more flexibility when compared to a singleLinkedList
//better than singleLinkedList for finding nodes (can be done in half the time)
//insertion O(1)
//removal O(1)
//searching O(n)
//access O(n)


class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;

        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return;

        const removed = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;

        } else {
            this.tail = removed.prev;
            this.tail.next = null;
            removed.prev = null;
        }

        this.length--;
        return removed;
    }

    shift() {
        if (this.length === 0) return;

        const removed = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;

        } else {
            this.head = removed.next;
            this.head.prev = null;
            removed.next = null;
        }

        this.length--;
        return removed;
    }

    unshift(val) {
        const node = new Node(val);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;

        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return;
        let current;

        if (index <= this.length / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current;
        }

        current = this.tail;
        for (let i = this.length - 1; i > index; i--) {
            current = current.prev;
        }
        return current;
    }

    set(index, val) {
        const node = this.get(index);
        if (!node) return false;

        node.val = val;
        return true;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;

        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        const node = new Node(val);
        const prevNode = this.get(index - 1);
        const nextNode = prevNode.next;

        node.prev = prevNode;
        prevNode.next = node;

        node.next = nextNode;
        nextNode.prev = node;

        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return;

        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const removed = this.get(index);
        removed.prev.next = removed.next;
        removed.next.prev = removed.prev;

        removed.prev = null;
        removed.next = null;

        this.length--;
        return removed;
    }

    reverse() {
        let node = this.tail;
        this.tail = this.head;
        this.head = node;
        
        let prev = null;
        let next;
        for (let i = this.length - 1; i >= 0; i--) {
            next = node.prev;
            node.next = node.prev;
            node.prev = prev;

            prev = node;
            node = next;
        }

        return this;
    }

    print() {
        for (let i = 0; i < this.length; i++) {
            console.log(this.get(i).val);
        }
    }
}

const list = new DoubleLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

list.reverse();
console.log(list);