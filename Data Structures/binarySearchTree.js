/** A tree is a data structure composed of nodes It has the following characteristics:
    Each tree has a root node (at the top).
    The root node has zero or more child nodes.
    Each child node has zero or more child nodes, and so on.
A binary search tree adds these two characteristics:
    Each node has up to two children.
    For each node, its left descendents are less than the current node, which is less than the right descendents.
    Binary search trees allow fast lookup, addition and removal of items.
    The way that they are set up means that, on average, each comparison allows the operations to skip about half of the tree,
    so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree.

    ╔═══════════╦══════════╦════════════╗
    ║ Algorithm ║ Average  ║ Worst Case ║
    ╠═══════════╬══════════╬════════════╣
    ║ Space     ║ O(n)     ║ O(n)       ║
    ║ Search    ║ O(log n) ║ O(n)       ║
    ║ Insert    ║ O(log n) ║ O(n)       ║
    ║ Delete    ║ O(log n) ║ O(n)       ║
    ╚═══════════╩══════════╩════════════╝

    https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/

 */

/* Binary Search Tree */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  /**
   *
   * @param {node data to be inserted in the BST} data
   * 1- if there is no root , then add this node as a root of BST
   * 2- else :
   *        a- check if this data less than the data of the node
   *            a1: yes , if no left node then add it as left node
   *            a2: yes , but there exist a left node already , then call search tree again on this left node
   *        b- data is greater than the data of the node
   *            b1: if no right node then add it as right node
   *            b2: there exist already a right node then call searchTree method on this node
   *        c-  else : return null
   */
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  /**
   * the minimum value is the least left one
   * so keep going left until the last one
   */
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  /**
   * the maximum value is the least right one
   * so keep going right until the last one
   */
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  /**
   *
   * @param {data to search for } data
   * if less than root move left else move right
   * if = root value then return it
   * if null return null
   */
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  /**
   *
   * @param {value to check if exist or not} data
   */
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child
        if (node.left == null) {
          return node.right;
        }
        // node has no right child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  /**
   * BST is balanced if the difference between minHegiht and maxHeight is maximun 1 ( 0 or 1)
   */
  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  /**
   *
   * @param {*} node
   * MinHeight: the distance between the root node & the first leaf node without 2 children
   */
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  /**
   *  Inorder (Left, Root, Right)
   */
  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  /**
   * Preorder (Root, Left, Right)
   */
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }

  /**
   * Postorder (Left, Right, Root)
   */
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  /**
   * display nodes level by level
   */
  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift(); //dequeue
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        }
        if (node.right != null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log("inOrder: " + bst.inOrder());
console.log("preOrder: " + bst.preOrder());
console.log("postOrder: " + bst.postOrder());

console.log("levelOrder: " + bst.levelOrder());
