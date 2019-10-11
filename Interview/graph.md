# Graphs and Trees
- a graph organizes items in an interconnected network
- Each item is a node (or vertex)
- Nodes are connected by edges

Strengths:
- Representing links: Graphs are ideal for cases where you're working with things that connect to other things. Nodes and edges could, for example, respectively represent cities and highways, routers and ethernet cables, or Facebook users and their friendships.

Weaknesses:
- Scaling challenges: Most graph algorithms are O(n*lg(n))O(n∗lg(n)) or even slower. Depending on the size of your graph, running algorithms across your nodes may not be feasible.

Terms:
**directed graphs**: edges point from the node at one end to the node at the other end
**undirected graphs**: the edges simply connect the nodes at each end
**cyclic** it has a cycle—an unbroken series of nodes with no repeating nodes or edges that connects back to itself
**acyclic** Graphs without cycles
**graph coloring** is when you assign colors to each node in a graph
**legal coloring** means no adjacent nodes have the same color
**weighted**: each edge (connection) has a "weight." 
  - The weight could, for example, represent the distance between two locations, or the cost or time it takes to travel between the locations.
**degree** of a node is the number of edges connected to the node
**maximum degree** of a graph is the highest degree of all the nodes
directed graph, nodes have an **indegree** and an **outdegree**

Representations:
- **edge list**: a list of all the edges in the graph
    `const graph = [[0, 1], [1, 2], [1, 3], [2, 3]];`
- **Adjacency list**: a list where the index (or keys) represents the node and the value at that index is a list of the node's neighbors
    `const graph = [ [1], [0, 2, 3], [1, 3], [1, 2], ];`
    `const graph = { 0: [1], 1: [0, 2, 3], 2: [1, 3], 3: [1, 2], };`
- **Adjacency matrix**: A matrix of 0s and 1s indicating whether node x connects to node y (0 means no, 1 means yes)
    `const graph = [ [0, 1, 0, 0], [1, 0, 1, 1], [0, 1, 0, 1], [0, 1, 1, 0], ];`


**You should know breadth-first search (BFS) and depth-first search (DFS) down pat so you can code them up quickly**
**Remember that breadth-first uses a queue ↴ and depth-first uses a stack**

Example Questions solvable with BFS or DFS:
  1. Is there a path between two nodes in this undirected graph? Run DFS or BFS from one node and see if you reach the other one.

  2. What's the shortest path between two nodes in this undirected, unweighted graph? Run BFS from one node and backtrack once you reach the second. Note: BFS always finds the shortest path, assuming the graph is undirected and unweighted. DFS does not always find the shortest path.

  3. Can this undirected graph be colored with two colors? Run BFS, assigning colors as nodes are visited. Abort if we ever try to assign a node a color different from the one it was assigned earlier.

  4. Does this undirected graph have a cycle? Run BFS, keeping track of the number of times we're visiting each node. If we ever visit a node twice, then we have a cycle.


## Breadth First Search
- a method for exploring a tree or graph. In a BFS, you first explore all the nodes one step away, then all the nodes two steps away, etc.

Advantages:
- A BFS will find the shortest path between the starting point and any other reachable node. 

Disadvantages
- A BFS on a binary tree generally requires more memory than a DFS.

## Depth-first search
- a method for exploring a tree or graph. In a DFS, you go as deep as possible down one path before backing up and trying a different one

Advantages:
- Depth-first search on a binary tree generally requires less memory than breadth-first.
- Depth-first search can be easily implemented with recursion.

Disadvantages
- A DFS doesn't necessarily find the shortest path to a node


**Depth-first traversal of a tree uses memory proportional to the depth of the tree, while breadth-first traversal uses memory proportional to the breadth of the tree**

## Binary Tree:
- a tree where each node has two or fewer nodes
- child nodes are often called left or right
- "perfect" tree -> every level of the tree is completely full
- in a perfect tree:
    - the number of nodes in a binary tree doubles with each level
    - the number of nodes on the last level is equal to the sum of the number of nodes on all other levels (plus 1)
    - also means half our nodes are on the last level

## Search Binary Tree (BST)
- The nodes to the left are smaller than the current node
- The nodes to the right are larger than the current node
**Strengths**:
  - Good performance across the board. Assuming they're balanced, binary search trees are good at lots of operations, even if they're not constant time for anything.
  - Compared to a sorted array, lookups take the same amount of time (O(lg(n)), but inserts and deletes are faster (O(lg(n)) for BSTs, O(n) for arrays).
  - Compared to objects, BSTs have better worst case performance— O(lg(n)) instead of O(n). But, on average objects perform better than BSTs (meaning O(1)O(1) time complexity).
  - BSTs are sorted. Taking a binary search tree and pulling out all of the elements in sorted order can be done in O(n) using an in-order traversal. Finding the element closest to a value can be done in O(lg(n)) (again, if the BST is balanced!).

**Weaknesses**:
  - Poor performance if unbalanced. Some types of binary search trees balance automatically, but not all. If a BST is not balanced, then operations become O(n)O(n).
  - No O(1)O(1) operations. BSTs aren't the fastest for anything. On average, an array or an object will be faster.

