function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

// out-of-place
// function shuffle(array) {
//   const shuffledArray = [];
//   const inputLength = array.length;

//   while (shuffledArray.length < inputLength) {
//     const index = getRandom(0, array.length - 1);
//     shuffledArray.push(array[index]);
//     array.splice(index, 1);
//   }
//   return shuffledArray;
// }

// in-place
function shuffle(array) {
  const inputLength = array.length;

  let lowestIndex = 0;
  for (let i = 0; i < inputLength; i++) {
    const shuffleIndex = getRandom(lowestIndex, array.length);
    array.unshift(shuffleIndex);
    lowestIndex++;
  }
  array.splice(inputLength);
}

// O(n) time and O(1)O(1) space
// Write a function for doing an in-place ↴ shuffle of an array.

// learned:
// you can make changes in-place on an array by adding to the front and removing at the end
// why the front? if at the end we would track the lowest and highest indices
