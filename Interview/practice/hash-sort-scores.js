// function sortScores(unorderedScores, highestPossibleScore) {
//   const scoreCounts = new Array(highestPossibleScore + 1).fill(0);
//   const sortedScores = [];

//   unorderedScores.forEach((score) => {
//     scoreCounts[score] = scoreCounts[score] + 1;
//   });

//   for (let i = scoreCounts.length; i > 0; i--) {
//     if (scoreCounts[i]) {
//       for (let t = 0; t < scoreCounts[i]; t++) {
//         sortedScores.push(i);
//       }
//     }
//   }

//   return sortedScores;
// }

function sortScores(unorderedScores, highestPossibleScore) {
  // Array of 0s at indices 0..highestPossibleScore
  const scoreCounts = new Array(highestPossibleScore + 1).fill(0);

  // Populate scoreCounts
  unorderedScores.forEach((score) => {
    scoreCounts[score]++;
  });

  // Populate the final sorted array
  const sortedScores = [];

  // For each item in scoreCounts
  for (let score = highestPossibleScore; score >= 0; score--) {
    const count = scoreCounts[score];

    // For the number of times the item occurs
    for (let time = 0; time < count; time++) {
      sortedScores.push(score);
    }
  }

  return sortedScores;
}

// O(n) time and O(n)O(n) space

// players receive a score between 0 and 100, which you use to rank them from highest to lowest. You
// are given the unordered scores and highest value
// return a sorted array


// learned:
// you can create and pre-populate and array using the constructor syntax
// if you have the max value and an unsorted array - creating a new array with 0 as
// its default values and adding the number as the index is a fast way of sorting
