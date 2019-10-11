class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
  }
}

// function findSecondLargest(rootNode) {
//   if (!rootNode || (!rootNode.left && !rootNode.right)) {
//     throw new Error('tree has no second largest number');
//   }

//   const stack = [rootNode]; // push, shift
//   let largestNumber = Number.NEGATIVE_INFINITY;
//   let secondLargestNumber = Number.NEGATIVE_INFINITY;

//   while (stack.length) {
//     const current = stack.shift();

//     if (current.value > largestNumber) {
//       secondLargestNumber = largestNumber;
//       largestNumber = current.value;
//     } else if (current.value > secondLargestNumber) {
//       secondLargestNumber = current.value;
//     }

//     if (current.right) {
//       stack.push(current.right);
//     } else if (largestNumber === current.value && current.left && current.left) {
//       // current is largest so check left tree
//       stack.push(current.left);
//     }
//   }

//   return secondLargestNumber;
// }

function findLargest(rootNode) {
  let current = rootNode;
  while (current) {
    if (current.right) {
      current = rootNode.right;
    } else {
      return current;
    }
  }
}

function findSecondLargest(rootNode) {
  if (!rootNode || (!rootNode.left && !rootNode.right)) {
    throw new Error('Tree must have at least 2 nodes');
  }
  let current = rootNode;
  while (current) {
    // if current is largest and it has a subtree
    if (!current.right && current.left) {
      return findLargest(current.left).value;
    }
    // if current is parent of largest
    if (current.right && !current.right.right && !current.right.left) {
      return current.value;
    }
    current = current.right;
  }
}


// Write a function to find the 2nd largest element in a binary search tree.