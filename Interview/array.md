# Arrays

**slicing**: taking a subset from an array and allocating a new array with those elements
array.slice(startIndex, endIndex)
- takes O(n) time and O(n) space since you must create a new array and copy over the items

**in place**: function modifies data structures or objects outside of its own stack frame (ie mutates data)
- An in-place algorithm avoids the cost of initializing or copying data structures, and it usually has an O(1) space cost.
- can cause side effects
- Your input is "destroyed" or "altered," which can affect code outside of your function
- In general, an in-place algorithm will require swapping elements.

**out of place**: doesn't make any changes that are visible to other functions. 
- Usually, those functions copy any data structures or objects before manipulating and changing them.
- considered safer because they avoid side effects

call stack: what a program uses to keep track of function calls it is made up of stack frames
  - takes up space
stack frames store:
  - Local variables
  - Arguments passed into the function
  - Information about the caller's stack frame
  - The return address—what the program should do after the function returns (i.e.: where it should "return to"). This is usually somewhere in the middle of the caller's code.

recursive functions can end up building huge call stacks since it creates a new stack frame for each function call
```js
function multiply1ToN(n) {
  return (n > 1)
    ? n * multiply1ToN(n - 1)
    : 1;
}
```



# Dynamic Arrays

**Strengths**:
- Fast lookups. Just like arrays, retrieving the element at a given index takes O(1) time.
- Variable size. You can add as many items as you want, and the dynamic array will expand to hold them.
- Cache-friendly. Just like arrays, dynamic arrays place items right next to each other in memory, making efficient use of caches.

**Weaknesses**:
- Slow worst-case appends. Usually, adding a new element at the end of the dynamic array takes O(1) time. But if the dynamic array doesn't have any room for the new item, it'll need to expand, which takes O(n) time.
- Costly inserts and deletes. Just like arrays, elements are stored adjacent to each other. So adding or removing an item in the middle of the array requires "scooting over" other elements, which takes O(n) time.

Amortized cost of appending in dynamic arrays (also called average cost)
1. The time cost of each special O(n) "doubling append" doubles each time.
2. At the same time, the number of O(1) appends you get until the next doubling append also doubles.
points one and two combined are why we san say appends have an amortized cost of O(1)