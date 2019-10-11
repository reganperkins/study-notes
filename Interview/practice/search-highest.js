function sortScores(unsortedScores, highestPossibleScore) {
  const scores = new Array(highestPossibleScore + 1).fill(0);
  unsortedScores.forEach((score) => {
    scores[score]++;
  });

  const sortedScores = [];
  for (let i = scores.length; i > 0; i--) {
    if (scores[i]) {
      for (let j = 0; j < scores[i]; j++) {
        sortedScores.push(i);
      }
    }
  }
  return sortedScores;
}


// Write a function that takes:

// an array of unsortedScores
// the highestPossibleScore in the game
// and returns a sorted array of scores in less than O(n\lg{n}) time.
