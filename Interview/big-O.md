## Big O notation
- **time complexity**: a way of showing how the amount of time increases as input increases
- formula for how time scales with respect to variable input (or input variables)

- constant time o(1) - it does not take longer with an increase of input
- liner time 0(n) - scales with data, with double the input it takes more time

linier time: O(n) - n usually the size of the input
constant time: O(1)
quadratic time )(n^2) - this increases in time in an upwards arch over input size ie more input much more time

should also consider memory usage and code readability when deciding which is better


Big O expresses the runtime in relation to how it grows relative to it's inputs as its input grows generically larger

So we can say things like the runtime grows "on the order of the size of the input" (O(n)) or "on the order of the square of the size of the input" (O(n^2))


**space complexity**: memory cost 
  - We  look at the total size (relative to the size of the input) of any new variables we're allocating.

  Usually when we talk about space complexity, we're talking about additional space, so we don't include space taken up by the inputs. For example, this function takes constant space even though the input has nn items:
```js
  function getLargestItem(items) {
  let largest = -Number.MAX_VALUE;
  items.forEach(item => {
    if (item > largest) {
      largest = item;
    }
  });
  return largest;
}
```


Positives of Big O:

Pitfalls:
- sometimes constants do matter to run time
- Beware of premature optimization: sometimes optimizing time or space negatively impacts readability or coding time

## RAM - Random Access Memory
- where we keep the variables our functions allocate as they crunch data for us
- fast but has less space

