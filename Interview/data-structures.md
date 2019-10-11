# Data structures:
- all data structures have trade offs, because of this you need to think of what the best use it for your problem
Arrays:
  **array**: 
    Pro:
      - fast look up O(1) regardless of size
      - Fast appends O(1)
    Con:
      - must have enough uninterrupted space in RAM to store the whole array
      - array items must be same length
      - Costly inserts and deletes

    - you can instead store pointers to array items allowing items to be stored anywhere and items can be of any size but then you lose the faster cache lookup. (still have to define the length of the array)
  **dynamic array**:
    1. start off with one array of set size.
    2. when you fill all the available space make another array twice as large
    3. copy contents to new array O(n)
    4. free up old array space
    5. add new value to new array
    since the average cost is not O(n) we say is has a amortized cost of O(1)

    Pro:
    - fast look up O(1) regardless of size
      - Fast appends O(1)
      - don't have to specify the size ahead of time
    Con: 
      - some appends and prepends can be expensive O(n)
      - Costly inserts and deletes

  **linked lists**
  - each is a node with two-index array with: the character itself, a pointer to the next character
  - keep a pointer variable referencing the head and tail of the list
    Pros:
      - fast appends and prepends 0(1)
      - don't have to predefine length
    Cons:
      - slow lookup O(n) (have to walk through the array
      - not cache friendly)

Hash:
  - has key/value pairs
  **hashing function**: the process we used to translate a key into an array index
    - a common trick for forcing a number into a specific range: the modulus operator (%) 
      ie number % 30

  Pros:
    - You get fast lookups by key...except some lookups could be slow

  Cons:
    - hash collisions: where the hash function returns the same for two indises
    - some key lookups could be slow
    - looking up the key for a given value still takes O(n) time


So you have to know what's important in the problem you're working on. What does your data structure need to do quickly? Is it lookups by index? Is it appends or prepends?