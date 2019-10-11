# Hashing and Hash Tables


## Hashing

Some uses for hashing:

1. Objects. Suppose we want an array-like data structure with constant-time lookups, but we want to look up values based on arbitrary "keys," not just sequential "indices." We could allocate an array, and use a hash function to translate keys into array indices. That's the basic idea behind an object

2. Preventing man-in-the-middle attacks. Ever notice those things that say "hash" or "md5" or "sha1" on download sites? The site is telling you, "We hashed this file on our end and got this result. When you finish the download, try hashing the file and confirming you get the same result. If not, your internet service provider or someone else might have injected malware or tracking software into your download!"

**hash functions**: takes input and outputs a fixed size string or number
 - we use this to match a object key to an array index to get a value in JS objects. One example way of doing this might be to add up the char value of each char in the key and get the modulus operator value by the number of slots available to the array
  ie lies => 108 + 105 + s101 + 115 => 429 % 30 => 9

**hash collision**: when the return key from a hash function is the same as another
  ie foes => 102 + 111 + 101 + 115 => 429 % 30 => 9
  - a common way to avoid this is instead of storing the actual values in our array, let's have each array slot hold a pointer to a linked list holding the values for all the keys that hash to that index. to do this you must also store the unhashed keys so you know what value matches your key

## Hash Table
known as Objects in JS

**Strengths**:
- Fast lookups. Lookups take O(1)O(1) time on average.
- Flexible keys. Most data types can be used for keys, as long as they're hashable.

**Weaknesses**:
- Slow worst-case lookups. Lookups take O(n)) time in the worst case.
- Unordered. Keys aren't stored in a special order. If you're looking for the smallest key, the 
  largest key, or all the keys in a range, you'll need to look through every key to find it.
- Single-directional lookups. While you can look up the value for a given key in O(1) time,
  looking up the keys for a given value requires looping through the whole dataset— O(n) time.
- Not cache-friendly. Many hash table implementations use linked lists, which don't put data next
  to each other in memory.


## Sets
sets: like hash tables but without values
 - generally we use these when we're interested in whether something is in a set or not