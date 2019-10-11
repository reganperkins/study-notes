// function getLargestProductOf3(arrOfInts) {
//   if (arrOfInts.length < 3) {
//     throw new Error();
//   }

//   let first;
//   let second;
//   let third;

//   arrOfInts.forEach((int) => {
//     if (int > first || !first) {
//       const tempFirst = first;
//       const tempSecond = second;
//       first = int;
//       second = tempFirst;
//       third = tempSecond;
//     } else if (int > second || !second) {
//       const tempSecond = second;
//       second = int;
//       third = tempSecond;
//     } else if (int > third || !third) {
//       third = int;
//     }
//   });


//   return first * second * third;
// }


// function getLargestProductOf3(arrayOfInts) {
//   if (arrayOfInts.length < 3) {
//     throw new Error();
//   }

//   let highestProductOf3;
//   let highestProductOf2;
//   let lowestProductOf2;
//   let lowest;
//   let highest;

//   arrayOfInts.forEach((int) => {
//     if (int < 0) {
//       // lowest is not added yet
//       if (!lowest) {
//         lowest = int;
//       // set lowestProductOf2
//       } else if (!lowestProductOf2) {
//         lowestProductOf2 = int * lowest;
//         // hightest or lowest product might be largest
//         const productValues = [];
//         if (highestProductOf3) {
//           productValues.push(highestProductOf3);
//         }
//         if (highestProductOf2) {
//           productValues.push(highestProductOf2 * int);
//         }
//         if (highest) {
//           productValues.push(lowestProductOf2 * highest);
//         }
//         highestProductOf3 = Math.max(...productValues);
//       } else {
//         // set highestProductOf3
//         const productValues = [lowestProductOf2 * int];
//         if (highestProductOf2) {
//           productValues.push(highestProductOf2 * int);
//         }
//         if (highestProductOf3) {
//           productValues.push(highestProductOf3);
//         }
//         highestProductOf3 = Math.max(...productValues);

//         // if new product is lowestProductOf2
//         if (int * lowest < lowestProductOf2) {
//           lowestProductOf2 = int * lowest;
//         }
//       }
//       if (int < lowest) {
//         lowest = int;
//       }
//     } else {
//       // highest is not added yet
//       if (!highest) {
//         highest = int;
//       // current is the highest
//       } else if (!highestProductOf2) {
//         highestProductOf2 = int * highest;
//         // hightest or lowest product might be largest
//         const productValues = [];
//         if (highestProductOf3) {
//           productValues.push(highestProductOf3);
//         }
//         if (lowestProductOf2) {
//           productValues.push(lowestProductOf2 * int);
//         }
//         if (lowest) {
//           productValues.push(highestProductOf2 * lowest);
//         }
//         highestProductOf3 = Math.max(...productValues);
//       } else {
//         // set highestProductOf3
//         const productValues = [highestProductOf2 * int];
//         if (lowestProductOf2) {
//           productValues.push(lowestProductOf2 * int);
//         }
//         if (highestProductOf3) {
//           productValues.push(highestProductOf3);
//         }
//         highestProductOf3 = Math.max(...productValues);

//         // if new product is highestProductOf2
//         if (int * highest > highestProductOf2) {
//           highestProductOf2 = int * highest;
//         }
//       }
//       if (int > highest) {
//         highest = int;
//       }
//     }
//   });


//   return highestProductOf3;
// }


function getHighestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) {
    throw new Error('Less then three items!');
  }

  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  for (let i = 2; i < arrayOfInts.length; i++) {
    const current = arrayOfInts[i];

    highestProductOf3 = Math.max(
      current * highestProductOf2,
      current * lowestProductOf2,
      highestProductOf3,
    );

    highestProductOf2 = Math.max(
      current * lowest,
      current * highest,
      highestProductOf2,
    );

    lowestProductOf2 = Math.min(
      current * lowest,
      current * highest,
      lowestProductOf2,
    );

    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
  }

  return highestProductOf3;
}

// Given an array of integers, find the highest product you can get from three of the integers.
// O(n) time and O(1)O(1) space.


// at first I did not think about arrayOfInts having negative numbers
// this effects the 0

// Given an array of integers, find the highest product you can get from three of the integers.

// keep track of the highest two number and lowest two (since a negative * negative is positive)
// see if a combination of highest and lowest makes a larger product if so change the highestProductNumbers
// and lowestProductNumbers
// once through array return


// keep track of lowest# highest# highestProductOf3 highestProductOf2 lowestProductOf2
// for each of int array update the vars


// struggled:
// should have prepopulated variables -> removes a ton of logic and allows the use of Math.mix/max
