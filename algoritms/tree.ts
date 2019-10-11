interface ITreeNode {
  key: string;
  children: ITreeNode[];
  addChild: (childKey: string) => ITreeNode;
}

interface ITree {
  root: ITreeNode;
  print: () => void;
}

function createNode(key): ITreeNode {
  const children = [];
  return {
    key,
    children,
    addChild: (childKey) => {
      const child = createNode(childKey);
      children.push(child);
      return child;
    }
  }
}

function createTree(rootKey: string): ITree {
  const root = createNode(rootKey);
  return {
    root,
    print() {
      let result = '';

      function traverse(node: ITreeNode, visitFn: (key:string, depth: number) => void, depth: number) {
        visitFn(node.key, depth);
        depth++;
        node.children.map((child) => {
          traverse(child, visitFn, depth);
        });
      }

      function addKeyToResult(key: string, depth: number) {
        depth === 0
          ? result = key
          : result += `\n${' '.repeat(depth)}${key}`
      }

      traverse(this.root, addKeyToResult, 0);

      return result;
    }
  };
}

function demoTree() {
  const dom = createTree('html')
  const head = dom.root.addChild('head')
  const body = dom.root.addChild('body')
  const title = head.addChild('title - egghead Tree Lesson')
  const header = body.addChild('header')
  const main = body.addChild('main')
  const footer = body.addChild('footer')
  const h1 = header.addChild('h1 - Tree Lesson')
  const p = main.addChild('p - Learn about trees!')
  const copyright = footer.addChild(`Copyright ${new Date().getFullYear()}`)
  console.log(dom.print())
}

demoTree();