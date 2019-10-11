

// Write a function that takes an array of characters and reverses the letters in place. ↴

function reverse(arrayOfChars) {

  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;

  while (leftIndex < rightIndex) {

    // Swap characters
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;

    // Move towards middle
    leftIndex++;
    rightIndex--;
  }
}

// Q: Write a function that takes an array of characters and reverses the letters in place. ↴

// struggled:
// kept trying to remember methods that are mutating and non mutating

// learned:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Mutator_methods