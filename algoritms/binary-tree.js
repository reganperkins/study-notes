const TRAVERSALS = {
  IN_ORDER: (node, visitFn) => {
    if (node === null) return;
    TRAVERSALS.IN_ORDER(node.left, visitFn);
    visitFn(node);
    TRAVERSALS.IN_ORDER(node.right, visitFn);
  },
  PRE_ORDER: (node, visitFn) => {
    if (node === null) return;
    visitFn(node);
    TRAVERSALS.PRE_ORDER(node.left, visitFn);
    TRAVERSALS.PRE_ORDER(node.right, visitFn);
  },
  POST_ORDER: (node, visitFn) => {
    if (node === null) return;
    TRAVERSALS.POST_ORDER(node.left, visitFn);
    TRAVERSALS.POST_ORDER(node.right, visitFn);
    visitFn(node);
  },
};

function createNode(key) {
  return {
    key,
    left: null,
    right: null,
    addLeft(childKey) {
      const child = createNode(childKey);
      this.left = child;
      return child;
    },
    addRight(childKey) {
      const child = createNode(childKey);
      this.right = child;
      return child;
    },
  };
}

function createBinaryTree(rootKey) {
  const root = createNode(rootKey);
  return {
    root,
    print(order = 'IN_ORDER') {
      let result = '';
      function visit(node) {
        result += (result.length === 0) ? node.key : ` => ${node.key}`;
      }
      TRAVERSALS[order](this.root, visit);
      return result;
    },
  };
}

function demoBinaryTree() {
  const tree = createBinaryTree('a');
  const b = tree.root.addLeft('b');
  const c = tree.root.addRight('c');
  const d = b.addLeft('d');
  const e = b.addRight('e');
  const f = c.addLeft('f');
  const g = c.addRight('g');
  const h = d.addLeft('h');
  const i = d.addRight('i');

  console.log('IN_ORDER: ', tree.print());

  console.log('PRE_ORDER: ', tree.print('PRE_ORDER'));

  console.log('POST_ORDER: ', tree.print('POST_ORDER'));
}

demoBinaryTree();
