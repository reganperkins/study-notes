

FIFO - First In First Out
FILO - First In Last Out

## Queue data structures:
- uses the FIFO concept
- can include a priority feature

contains the following:
  - enqueue
  - dequeue
  - length
  - peek
  - isEmpty


## Stack (call stack)
- uses FILO concept

contains the following:
  - push
  - pop
  - length
  - peek
  - isEmpty

## Linked List
- a collection of items where each item points to the next one
- linked lists are very slow when searching for an item at a particular index
- must start at the beginning, often called the "head", and loop through each item's next property until we arrive at the item (takes 0(n) time)
- push and delete however have some benefits over arrays

contains the following:
  - head (first item)
  - tail (last item)
  - length
  - push
  - pop
  - get
  - delete
  - isEmpty

# Graph
- data structure comprised of a set of nodes, also known as vertices, and a set of edges
- nodes may point to other nodes known as edges
- directed graph: to show symmetry of edges both nodes must point to each other
- undirected graph: assumes symmetry of edges

- has a createNode factory
  - creates node with a key, children and addChild method
- has a createGraph function that returns object or methods including:
  - directed
  - nodes
  - edges
  - addNode
  - getNode
  - addEdge
  - print

## Breadth first
- starts at one node and explores as widely as possible before digging deeper


## Depth first
- starts at one node and uses recursion to travel as deeply down a path of neighboring nodes as possible, before coming back up and trying other paths

## Tree structure
- no three nodes create a circuitous path
- nodes have a single parent node and may have many children nodes
- node never have more than one parent nor point to any siblings.

- has a createNode factory
  - creates node with a key, children and addChild method
- createTree factory
  - root
  - print

## Binary Tree Structure
- each node has one parent and up to two children

- has a createNode factory
  - creates node with a key, leftChild, rightChild addRightChild and addLeftChild method
- createTree factory
  - root
  - print

## Bubble sort
- loop through our list of items, comparing our current item with the next one. If our current item is less than the next one, we swap them.
- continue looping through the list until we make a loop without any swaps.
- This is a very inefficient algorithm with a time complexity of O(n^2). Given a list of length n, we must compare each item against every other item in the list, which gives us n * n, or rather n^2. That means for a list of length 10, our worst case scenario will require 100 loops to sort our list. A list just twice as long will take 4x as many loops to solve.

## Insertion sort
- compare all the items before it and determine if it needs to be "inserted" to the left or right of our item. We then move onto the second item, again comparing it to every item before it in the list, inserting those items correctly
- outer loops starts at 1
- time complexity of O(n^2) so it is inefficient

## Merge Sort (divide and recurse)
divides the given array into two halves, a left half and a right half. We call merge sort on these sub-arrays. We continue to split our sub-arrays until we get arrays whose length is less than two. We then begin to stitch our small arrays back together, sorting them on the way up.

- The worst case scenario for our list is O(n log(n)), that is, we must go through every item at least once, hence the first n, but with each recursive call we operate on half the data set. This means that when we double n, we only get one more operation, instead of n number of operations like in bubble or insertion sort.

## Quick Sort
- we pick an index of our array to be the "pivot". Every item is compared to the pivot, and pushed into a left or right array depending on that comparison. Quick sort is then called on these left and right arrays.

- efficient algorithm and uses less memory than merge sort. The time complexity of quick sort is O(n log(n)). Sorting any list requires at least one pass through the entire list, hence n, but increasing the size of our list doesn't lead to a linear or quadratic increase in operations. Each doubling in size only results in one more level of operations.


## Coefficient
- A number used to multiply a variable. Example: 6z means 6 times z, and "z" is a variable, so 6 is a coefficient. 
- Variables with no number have a coefficient of 1. Example: x is really 1x.

## Big O notation
- time complexity: a way of showing how the amount of time increases as input increases
- formula for how time scales with respect to variable input (or input variables)
- constant time o(1) - it does not take longer with an increase of input
- liner time 0(n) - scales with data, with double the input it takes more time
linier time: O(n) - n usually the size of the input
constant time: O(1)
quadratic time )(n^2) - this increases in time in an upwards arch over input size ie more input much more time
should also consider memory usage and code readability when deciding which is better

### Turn expression into big O notation:
(T is time it takes to run function)
to get the above there are 2 rules:
  - find the fastest growing term
  - remove the coefficient
allows you to quickly compare performance of a function

**examples**: 
T = an + b = O(n)

T = cn^2 + dn + e = O(n^2)
(c, d and e are constants)

### Turn big O notation into expression:
uses the same steps as above:
(T is time it takes to run function)
to get the above there are 2 rules:
  - find the fastest growing term
  - remove the coefficient
**Examples**:

if there is only one number it is by default the fastest growing term
T = c = 0.115 = 0.115 = O(1) (constant time)

T = 