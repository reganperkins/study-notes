const { createQueue } = require('./queue.js');


interface INode {
  key: string;
  children: INode[];
  addChild: (node: INode) => number;
}

interface IGraph {
  directed: boolean;
  nodes: INode[];
  edges: string[];
  addNode: (key: string) => void;
  getNode: (key: string) => INode;
  addEdge: (node1Key: string, node2Key: string) => void;
  print: () => string;
  breadthFirstSearch: (startNodeKey: string, callback: (node: INode) => void) => void;
  depthFirstSearch: (startNodeKey: string, callback: (node: INode) => void) => void;
}

function createNode(key: string) {
  const children = [];
  return {
    key,
    children,
    addChild: (node) => children.push(node)
  };
}

function createGraph(directed: boolean = false):IGraph {
  const nodes: INode[] = [];
  const edges: string[] = [];
  return {
    directed,
    nodes,
    edges,
    addNode(key){
        nodes.push(createNode(key));
    },
    getNode(key) {
      return nodes.find(node => node.key === key);
    },
    addEdge(node1Key, node2Key) {
      const node1 = this.getNode(node1Key);
      const node2 = this.getNode(node2Key);
      node1.addChild(node2);
      if (!directed) {
      node2.addChild(node1);
      }
      edges.push(`${node1Key}-${node2Key}`);
    },
    print() {
      return (
        nodes
          .map((node) => {
            if (node.children.length) {
              return `${node.key} => ${node.children.map((child) => child.key).join(' ')}`;
            }
            return node.key;
          })
          .join('\n')
      );
    },
    breadthFirstSearch(startNodeKey, vistFn) {
      const startingNode = this.getNode(startNodeKey);
      const nodeCheckTracker = nodes.reduce((accumulator, node) => {
        accumulator[node.key] = false;
        return accumulator;
      }, {});
      const queue = createQueue();
      queue.enqueue(startingNode);

      while(!queue.isEmpty()) {
        const currentNode = queue.dequeue();
        if (!nodeCheckTracker[currentNode.key]) {
          nodeCheckTracker[currentNode.key] = true;
          queue.enqueue(currentNode);
          vistFn(currentNode);
        }
        currentNode.children.map((child) => {
          if(!nodeCheckTracker[child.key]) {
            nodeCheckTracker[child.key] = true;
            queue.enqueue(child);
            vistFn(child);
          }
        });
      }
    },
    depthFirstSearch(startNodeKey, vistFn) {
      const startingNode = this.getNode(startNodeKey);
      const visitedHash = nodes.reduce((accumulator, node) => {
        accumulator[node.key] = false;
        return accumulator;
      }, {});
      
      function explore(node) {
        if (visitedHash[node.key]) return;
        
        vistFn(node);
        visitedHash[node.key] = true;
        node.children.map(explore);
      }

      explore(startingNode);
    }
  };
}

function demoGraph() {
  const graph = createGraph(true);
  const nodes = ['a', 'b', 'c', 'd', 'e', 'f'];
  const edges = [
    ['a', 'b'],
    ['a', 'e'],
    ['a', 'f'],
    ['b', 'd'],
    ['b', 'e'],
    ['c', 'b'],
    ['d', 'c'],
    ['d', 'e']
  ];

  nodes.forEach(node => {
    graph.addNode(node)
  });

  edges.forEach((nodes: [string, string]) => {
    graph.addEdge(...nodes)
  });

  graph.breadthFirstSearch('a', (node: INode) => {
    console.log(node.key)
  });
  
  graph.depthFirstSearch('a', node => {
    console.log(node.key)
  })
}

demoGraph();