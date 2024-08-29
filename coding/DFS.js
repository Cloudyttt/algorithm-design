class Node {
    constructor(val, left, right) {
        this.val = val || 0;
        this.left = left || null;
        this.right = right || null;
    }
}

let arr = [1, null, 2, 3];
let root = null;
let i = 0;
function createTree(arr) {
    let root = new Node(arr[0]);
    arr = arr.slice(1);
    while (root && arr.length) {
        let left = new Node(arr.pop());
        let right = new Node(arr.pop() || null);
        root.left = left;
        root.right = right;
        root = root.left || root.right;
    }
    return root;
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // 时间复杂度O(n),n为节点个树，空间复杂度O(n)，即递归的空间开销(树的高度)，最坏的情况下树是链表，所以是O(n)，平均空间复杂度O(logn)
    // 前序递归遍历
    preOrderTraversal(root) {
        const res = [];
        const preOrder = (root) => {
            if (!root) {
                return;
            }
            res.push(root.val);
            preOrder(root.left);
            preOrder(root.right);
        };
        preOrder(root);
        return res;
    }

    // 中序递归遍历
    inOrderTraversal(root) {
        const res = [];
        const inOrder = (root) => {
            if (!root) {
                return;
            }

            inOrder(root.left);
            res.push(root.val);
            inOrder(root.right);
        };
        inOrder(root);
        return res;
    }

    // 后序递归遍历
    postOrderTraversal(root) {
        const res = [];
        const postOrder = (root) => {
            if (!root) {
                return;
            }

            postOrder(root.left);
            postOrder(root.right);
            res.push(root.val);
        };
        postOrder(root);
        return res;
    }

    // 迭代
    // 时间复杂度O(n),n为节点个树，空间复杂度O(n)，显示栈的空间开销
    // 前序递归遍历：中左右
    // 压栈顺序：右左中
    preOrderTraversalIteration(root) {
        const res = [];
        const stk = [];
        while (root || stk.length) {
            while (root) {
                res.push(root.val);
                stk.push(root);
                root = root.left;
            }

            root = stk.pop();

            root = root.right;
        }
        return res;
    }

    //  中序递归遍历：左中右
    //  压栈顺序：右中左
    inOrderTraversalIteration(root) {
        const res = [];
        const stk = [];
        while (root || stk.length) {
            while (root) {
                stk.push(root);
                root = root.left;
            }

            root = stk.pop();

            res.push(root.val);
            root = root.right;
        }
        return res;
    }

    // 后续递归遍历：左右中
    // 压栈顺序：中右左
    postOrderTraversalIteration(root) {
        const stk = [];
        const res = [];
        let prev = null;
        while (root || stk.length) {
            while (root) {
                stk.push(root);
                root = root.left;
            }

            root = stk.pop();

            if (!root.right || root.right === prev) {
                res.push(root.val);
                prev = root;
                root = null;
            } else {
                stk.push(root);
                root = root.right;
            }
        }
        return res;
    }
}
