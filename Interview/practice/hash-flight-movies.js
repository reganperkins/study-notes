// const hasTwoMovies = [90, 140, 300, 45, 800, 410, 160];
// const doesNotHaveTwoMovies = [90, 140, 300, 45, 800, 410];

// function getMovies(flightLength, movieLengths) {
//   for (let o = 0; o < movieLengths.length; o++) {
//     const current = movieLengths[o];
//     for (let i = 1; i < movieLengths.length; i++) {
//       if (current + movieLengths[i] === flightLength) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(getMovies(300, hasTwoMovies));
// console.log(getMovies(300, doesNotHaveTwoMovies));

// const hasTwoMovies = [90, 140, 300, 45, 800, 410, 160];
// const doesNotHaveTwoMovies = [90, 140, 300, 45, 800, 410];
// const doesNotHaveTwoUniqueMovies = [90, 150, 300, 45, 800, 410];

// function canTwoMoviesFillFlight(flightLength, movieLengths) {
//   const movieLengthSet = new Set(flightLength[0]);

//   for (let movieIndex = 1; movieIndex < movieLengths.length; movieIndex++) {
//     const current = movieLengths[movieIndex];

//     if (movieLengthSet.has(flightLength - current)) {
//       return true;
//     }

//     movieLengthSet.add(current);
//   }
//   return false;
// }

// console.log(canTwoMoviesFillFlight(300, hasTwoMovies));
// console.log(canTwoMoviesFillFlight(300, doesNotHaveTwoMovies));
// console.log(canTwoMoviesFillFlight(300, doesNotHaveTwoUniqueMovies));

function canTwoMoviesFillFlight(movieLengths, flightLength) {

  // Movie lengths we've seen so far
  const movieLengthsSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i];

    const matchingSecondMovieLength = flightLength - firstMovieLength;
    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      return true;
    }

    movieLengthsSeen.add(firstMovieLength);
  }

  // We never found a match, so return false
  return false;
}

// Write a function that takes an integer flightLength (in minutes) and an 
// array of integers movieLengths (in minutes) and returns a boolean 
// indicating whether there are two numbers in movieLengths whose sum equals flightLength