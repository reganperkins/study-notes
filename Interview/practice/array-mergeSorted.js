function mergeArrays(firstArray, secondArray) {

  // Set up our mergedArray
  const mergedArray = [];

  let firstIndex = 0;
  let secondIndex = 0;
  let mergedIndex = 0;

  while (mergedIndex < (firstArray.length + secondArray.length)) {

    const isFirstArrayExhausted = firstIndex >= firstArray.length;
    const isSecondArrayExhausted = secondIndex >= secondArray.length;

    // Case: next comes from first array
    // first array must not be exhausted, and EITHER:
    // 1) second's array IS exhausted, or
    // 2) The current element in first array is less
    //    than the current element in second's array
    if (!isFirstArrayExhausted
      && (isSecondArrayExhausted || (firstArray[firstIndex] < secondArray[secondIndex]))) {

      mergedArray[mergedIndex] = firstArray[firstIndex];
      firstIndex++;

      // Case: next comes from second's array
    } else {
      mergedArray[mergedIndex] = secondArray[secondIndex];
      secondIndex++;
    }

    mergedIndex++;
  }

  return mergedArray;
}

// Q: Write a function to merge our (sorted) arrays of orders into one sorted array
