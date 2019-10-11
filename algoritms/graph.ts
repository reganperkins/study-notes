
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
    addNode (key){
        nodes.push(createNode(key));
    },
    getNode (key) {
      return nodes.find(node => node.key === key);
    },
    addEdge (node1Key, node2Key) {
      const node1 = this.getNode(node1Key);
      const node2 = this.getNode(node2Key);
      node1.addChild(node2);
      if (!directed) {
      node2.addChild(node1);
      }
      edges.push(`${node1Key}-${node2Key}`);
    },
    print () {
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
  };
}

function demoGraph() {
  const graph = createGraph(true)

  graph.addNode('Kyle')
  graph.addNode('Anna')
  graph.addNode('Krios')
  graph.addNode('Tali')
  graph.addNode('Test')
  
  graph.addEdge('Kyle', 'Anna')
  graph.addEdge('Anna', 'Kyle')
  graph.addEdge('Kyle', 'Krios')
  graph.addEdge('Kyle', 'Tali')
  graph.addEdge('Anna', 'Krios')
  graph.addEdge('Anna', 'Tali')
  graph.addEdge('Krios', 'Anna')
  graph.addEdge('Tali', 'Kyle')
  
  console.log(graph.print())
}

export {
  createGraph,
  createNode
};