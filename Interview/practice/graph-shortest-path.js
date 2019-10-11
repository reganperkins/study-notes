class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(item) {
    this.queue.unshift(item);
    this.size += 1;
  }

  dequeue() {
    this.size -= 1;
    return this.queue.pop();
  }
}

function getPathFromObject(obj, endNode) {
  const path = [];
  let next = endNode;

  while (next) {
    path.unshift(next);
    next = obj[next];
  }
  return path;
}

function getPath(graph, startNode, endNode) {
  if (!graph.hasOwnProperty(startNode)) {
    throw new Error('Start node not in graph!');
  }
  if (!graph.hasOwnProperty(endNode)) {
    throw new Error('End node not in graph!');
  }

  const queue = new Queue();
  queue.enqueue(startNode);

  // use path to keep track of which nodes we have seen
  // and to later create a path to return
  const path = {
    [startNode]: null,
  };

  while (queue.size) {
    const currentNode = queue.dequeue();

    if (currentNode === endNode) {
      return getPathFromObject(path, endNode);
    }

    graph[currentNode].forEach((user) => {
      // use hasOwnProperty to detech falsey values as well as truthey
      if (!path.hasOwnProperty(user)) {
        path[user] = currentNode;
        queue.enqueue(user);
      }
    });
  }
  return null;
}
