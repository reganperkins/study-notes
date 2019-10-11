class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

const a = new GraphNode('a');
const b = new GraphNode('b');
const c = new GraphNode('c');

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);


function colorGraph(graph, colors) {
  graph.forEach((node) => {
    if (node.neighbors.has(node)) {
      throw new Error('this graph has a loop');
    }
    const illegalColors = new Set();

    node.neighbors.forEach((neighbor) => {
      if (neighbor.color !== null) {
        illegalColors.add(neighbor.color);
      }
    });

    for (let i = 0; i < node.neighbors.size + 1; i++) {
      if (!illegalColors.has(colors[i])) {
        node.color = colors[i];
        break;
      }
    }
  });
}


// we know d + 1 colouring is always possible since there will always be at least one colour not used by a  neighbour
// think there should be an array of colours

// for each node we must set a colour that is unique to each neighbour
//     if the max degree increases add that number to the color array
//      add a color to self that is not in neighbours


//  go through neighbours and assign a color from array that is not in neighbours
