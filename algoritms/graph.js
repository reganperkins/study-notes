"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createNode(key) {
    var children = [];
    return {
        key: key,
        children: children,
        addChild: function (node) { return children.push(node); }
    };
}
exports.createNode = createNode;
function createGraph(directed) {
    if (directed === void 0) { directed = false; }
    var nodes = [];
    var edges = [];
    return {
        directed: directed,
        nodes: nodes,
        edges: edges,
        addNode: function (key) {
            nodes.push(createNode(key));
        },
        getNode: function (key) {
            return nodes.find(function (node) { return node.key === key; });
        },
        addEdge: function (node1Key, node2Key) {
            var node1 = this.getNode(node1Key);
            var node2 = this.getNode(node2Key);
            node1.addChild(node2);
            if (!directed) {
                node2.addChild(node1);
            }
            edges.push(node1Key + "-" + node2Key);
        },
        print: function () {
            return (nodes
                .map(function (node) {
                if (node.children.length) {
                    return node.key + " => " + node.children.map(function (child) { return child.key; }).join(' ');
                }
                return node.key;
            })
                .join('\n'));
        },
    };
}
exports.createGraph = createGraph;
function demoGraph() {
    var graph = createGraph(true);
    graph.addNode('Kyle');
    graph.addNode('Anna');
    graph.addNode('Krios');
    graph.addNode('Tali');
    graph.addNode('Test');
    graph.addEdge('Kyle', 'Anna');
    graph.addEdge('Anna', 'Kyle');
    graph.addEdge('Kyle', 'Krios');
    graph.addEdge('Kyle', 'Tali');
    graph.addEdge('Anna', 'Krios');
    graph.addEdge('Anna', 'Tali');
    graph.addEdge('Krios', 'Anna');
    graph.addEdge('Tali', 'Kyle');
    console.log(graph.print());
}
demoGraph();
