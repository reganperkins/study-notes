function findRepeat(numbers) {

  let floor = 1;
  let ceiling = numbers.length - 1;

  while (floor < ceiling) {

    // Divide our range 1..n into an upper range and lower range
    // (such that they don't overlap)
    // lower range is floor..midpoint
    // upper range is midpoint+1..ceiling
    const midpoint = Math.floor(floor + ((ceiling - floor) / 2));
    const lowerRangeFloor = floor;
    const lowerRangeCeiling = midpoint;
    const upperRangeFloor = midpoint + 1;
    const upperRangeCeiling = ceiling;

    const distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;

    // Count number of items in lower range
    let itemsInLowerRange = 0;
    numbers.forEach(item => {

      // Is it in the lower range?
      if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
        itemsInLowerRange += 1;
      }
    });

    if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {

      // There must be a duplicate in the lower range
      // so use the same approach iteratively on that range
      floor = lowerRangeFloor;
      ceiling = lowerRangeCeiling;
    } else {

      // There must be a duplicate in the upper range
      // so use the same approach iteratively on that range
      floor = upperRangeFloor;
      ceiling = upperRangeCeiling;
    }
  }

  // Floor and ceiling have converged
  // We found a number that repeats!
  return floor;
}


// Write a function which finds an integer that appears more than once in our array. 
// (If there are multiple duplicates, you only need to find one of them.) Optimize for space

// O(n\lg{n}) time and O(1) space


/// create a set
// loop through 
// if exists in set is the repeater
// otherwise add to set and continue

// saving space
// sort in place and check if two in a row