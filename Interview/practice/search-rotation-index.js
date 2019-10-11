
function getCharValue(index, word) {
  return charValue[word[index]];
}

function findRotationPoint(words) {
  const firstWord = words[0];
  let floorIndex = 0;
  let ceilIndex = words.length - 1;
  
  while (floorIndex < ceilIndex) {
    const distance = ceilIndex - floorIndex;
    const centerIndex = Math.floor(floorIndex + distance / 2);
    const current = words[centerIndex];
    
    if (current < firstWord) {
      ceilIndex = centerIndex;
    } else {
      floorIndex = centerIndex;
    }
    
    if (floorIndex + 1 === ceilIndex) {
      break
    }
  }

  return ceilIndex;
}

// timeO(\lg{n})



// Binary search teaches us that when an array is sorted or mostly sorted:

// The value at a given index tells us a lot about what's to the left and what's to the right.
// We don't have to look at every item in the array. By inspecting the middle item, we can "rule out" half of the array.
// We can use this approach over and over, cutting the problem in half until we have the answer. This is sometimes called "divide and conquer."
// So whenever you know an array is sorted or almost sorted, think about these lessons from binary search and see if they apply.
