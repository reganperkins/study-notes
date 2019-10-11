var createQueue = require('./queue.js').createQueue;
function createNode(key) {
    var children = [];
    return {
        key: key,
        children: children,
        addChild: function (node) { return children.push(node); }
    };
}
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
        breadthFirstSearch: function (startNodeKey, vistFn) {
            var startingNode = this.getNode(startNodeKey);
            var nodeCheckTracker = nodes.reduce(function (accumulator, node) {
                accumulator[node.key] = false;
                return accumulator;
            }, {});
            var queue = createQueue();
            queue.enqueue(startingNode);
            while (!queue.isEmpty()) {
                var currentNode = queue.dequeue();
                if (!nodeCheckTracker[currentNode.key]) {
                    nodeCheckTracker[currentNode.key] = true;
                    queue.enqueue(currentNode);
                    vistFn(currentNode);
                }
                currentNode.children.map(function (child) {
                    if (!nodeCheckTracker[child.key]) {
                        nodeCheckTracker[child.key] = true;
                        queue.enqueue(child);
                        vistFn(child);
                    }
                });
            }
        },
        depthFirstSearch: function (startNodeKey, vistFn) {
            var startingNode = this.getNode(startNodeKey);
            var visitedHash = nodes.reduce(function (accumulator, node) {
                accumulator[node.key] = false;
                return accumulator;
            }, {});
            function explore(node) {
                if (visitedHash[node.key])
                    return;
                vistFn(node);
                visitedHash[node.key] = true;
                node.children.map(explore);
            }
            explore(startingNode);
        }
    };
}
function demoGraph() {
    var graph = createGraph(true);
    var nodes = ['a', 'b', 'c', 'd', 'e', 'f'];
    var edges = [
        ['a', 'b'],
        ['a', 'e'],
        ['a', 'f'],
        ['b', 'd'],
        ['b', 'e'],
        ['c', 'b'],
        ['d', 'c'],
        ['d', 'e']
    ];
    nodes.forEach(function (node) {
        graph.addNode(node);
    });
    edges.forEach(function (nodes) {
        graph.addEdge.apply(graph, nodes);
    });
    graph.breadthFirstSearch('a', function (node) {
        console.log(node.key);
    });
    graph.depthFirstSearch('a', function (node) {
        console.log(node.key);
    });
}
demoGraph();
