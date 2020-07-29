//nodes with parent/child relations
//insertion O(log n) -> not guaranteed
//searching O(log n) -> not guaranteed

/* 
    traverse ways:
        -breadth-first search(BFS): horizontal search (root -> all 1rst lvl sons -> all 2nd lvl sons -> etc)
        -depth-first search(DFS): vertical search =
            -InOrder: last left son ->his father -> his sibling -> his grandpha -> his uncle -> etc
            -PreOrder: root -> left son -> left son (until last son) -> sibling -> uncle -> etc
            -PostOrder:all left sons -> father ->all right sons -> father -> grandfha -> etc 
*/

/* 
    terms:
        -root -> top node in a tree
        -child -> a node directly connected to another node when moving away from the root
        -parent -> the converse notion of a child
        -siblings -> a group of nodes with the same parent
        -leaf -> a node with no children
        -edge -> the connection between one node and another
*/

/* 
    use cases:
        - HTML DOM
        - network rounting
        - abstract sintax tree
        - IA
        - folders in operating system
        - computer file systems   
*/


//BINARY SEARCH TREE

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const node = new Node(val);

        if (!this.root) {
            this.root = node;
            return this;
        }

        let current = this.root;
        while (true) {
            if (val === current.val) return;

            if (val < current.val) {
                if (!current.left) {
                    current.left = node;
                    return this;
                }

                current = current.left;
            }

            if (val > current.val) {
                if (!current.right) {
                    current.right = node;
                    return this;
                }

                current = current.right;
            }
        }
    }

    find(val) {
        if (!this.root) return;
        let current = this.root;

        while (current) {
            if (val === current.val) return current;
            if (val < current.val) current = current.left;
            if (val > current.val) current = current.right;
            if (!current) return;
        }
    }

    traverseBFS() {
        let node = this.root;
        const queue = [], data = [];
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }

    traverseDFSPreOrder() {
        const data = [];
        let node = this.root;

        function traverse(node) {
            data.push(node.val);
            if (node.left) helper(node.left);
            if (node.right) helper(node.right);

        }

        traverse(node);
        return data;
    }

    traverseDFSPostOrder() {
        const data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.val);
        }

        traverse(this.root);
        return data;
    }

    traverseDFSInOrder() {
        const data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.val);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data; 
    }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(15);
tree.insert(6);
tree.insert(4);
tree.insert(11);
tree.insert(10);
tree.insert(13);
tree.insert(16);
tree.insert(7);
// console.log(tree.traverseBFS());
// console.log(tree.traverseDFSPreOrder());
// console.log(tree.traverseDFSPostOrder());
console.log(tree.traverseDFSInOrder());


/* traverse BFS
                        10(1)
          6(2)                             15(3)
4(4)               7(5)           11(6)              16(7)
                                       13(8)
*/

/* traverse DFS PreOrder
                        10(1)
          6(2)                             15(5)
4(3)               7(4)           11(6)              16(8)
                                       13(7)
*/

/* traverse DFS PostOrder
                        10(8)
          6(3)                             15(7)
4(1)               7(2)           11(5)              16(6)
                                       13(4)
*/

/* traverse DFS InOrder
                        10(4)
          6(2)                             15(7)
4(1)               7(3)           11(5)              16(8)
                                       13(6)
*/