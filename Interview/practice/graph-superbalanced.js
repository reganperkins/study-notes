class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function isBalanced(treeRoot) {
  if (!treeRoot) {
    return true;
  }
  const depths = [];
  const stack = [[treeRoot, 0]];

  while (stack.length) {
    const nodePair = stack.shift();
    const currentNode = nodePair[0];
    const currentDepth = nodePair[1];

    if (!currentNode.left && !currentNode.right) {
      if (depths.indexOf(currentDepth) < 0) {
        depths.push(currentDepth);
      }
      if (depths.length > 2 || (depths.length === 2 && Math.abs(currentDepth - depths[0]) > 1)) {
        return false;
      }
    } else {
      if (currentNode.left) {
        stack.push([currentNode.left, currentDepth + 1]);
      }
      if (currentNode.right) {
        stack.push([currentNode.right, currentDepth + 1]);
      }
    }
  }
  return true;
}

// O(n) time and O(n) space.

// more then two depths or depth different is more then one
// keep track of depth
// keep a stack
// while stack has content loop
// if its the last item in the "stream" 
//    check depths is not > 2 || currentNode depth - depth[0] is not > 2
// else 
// add right to stack and continue doen left "stream"
