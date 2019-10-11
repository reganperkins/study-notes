What are some common ways to get O(n) runtime?

1. common way to get O(n) runtime is to use a greedy algorithm. 
  - getting a specific value 

2. common way to get O(n) runtime is to use counting. ↴ We can build an 
array scoreCounts where the indices represent scores and the values represent how 
many times the score appears. Once we have that, can we generate a sorted array of 
scores?

## Counting:
 - is a common pattern in time-saving algorithms. It can often get you O(n)O(n) runtime, but at the expense of adding O(n)O(n) space.

- The idea is to define an object or array (call it e.g. counts) where the keys/indices represent the items from the input set and the values represent the number of times the item appears. In one pass through the input you can fully populate counts:
- Once you know how many times each item appears, it's trivial to:
    - generate a sorted array
    - find the item that appears the most times
    - etc.

```js
const counts = {};
array.forEach(item => {
  if (counts.hasOwnProperty(item)) {
    counts[item] += 1;
  } else {
    counts[item] = 1;
  }
});
```

O(nlgn) time, we'll probably be iteratively doubling something or iteratively cutting something in half.

You should know breadth-first search (BFS) and depth-first search (DFS) down pat so you can code them up quickly.
 Remember that breadth-first uses a queue  and depth-first uses a stack