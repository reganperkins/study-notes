class BinaryNodeTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertRight(value) {
    this.right = new BinaryNodeTree(value);
  }

  insertLeft(value) {
    this.left = new BinaryNodeTree(value);
  }
}

// function isBinarySearchTree(rootNode) {
//   if (!rootNode) {
//     return false;
//   }
//   const queue = [rootNode];
//   while (queue.length) {
//     const currentNode = queue.shift();
//     const { left, right } = currentNode;

//     if (left && right && left > right) {
//       return false;
//     }
//     if (left) {
//       queue.unshift(left);
//     }
//     if (right) {
//       queue.unshift(right);
//     }
//   }

//   return true;
// }

function isBinarySearchTree(rootNode) {
  if (!rootNode) {
    return false;
  }

  const queue = [
    {
      node: rootNode,
      lowerBound: Number.NEGATIVE_INFINITY,
      upperBound: Number.POSITIVE_INFINITY,
    },
  ];

  while (queue.length) {
    const current = queue.pop();
    const { left, right, value: currentValue } = current.node;
    const { upperBound, lowerBound } = current;

    if (currentValue <= lowerBound || currentValue >= upperBound) {
      return false;
    }

    if (left) {
      queue.unshift({
        node: left,
        lowerBound,
        upperBound: currentValue,
      });
    }
    if (right) {
      queue.unshift({
        node: right,
        lowerBound: currentValue,
        upperBound,
      });
    }
  }

  return true;
}

//  O(n) time and O(n) space
// is a binary search tree



// have  a queue
// push things to queue
// shift them from queue
// issues:
// comparing siblings is not enough since parents must also be considered

// learned:
// can compare current to left and right making sure left is less then and right is more then BUT
// but realized that does not work as the ansestors must be taken into account
