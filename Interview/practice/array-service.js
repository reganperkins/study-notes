// // false
// const takeOut = [1, 3, 5];
// const dineIn = [2, 4, 6];
// const served = [1, 2, 4, 6, 5, 3];

// // true
// const takeOut2 = [1, 3, 5];
// const dineIn2 = [2, 4, 6];
// const served2 = [1, 2, 3, 4, 5, 6];

// // false
// const takeOut3 = [1, 3, 5];
// const dineIn3 = [0, 2, 4, 6];
// const served3 = [1, 0, 2, 3, 4, 5, 6];

// // true
// const takeOut4 = [];
// const dineIn4 = [2, 4, 6];
// const served4 = [2, 4, 6];


// function iterativeIsFIFO(takeOutOrders, dineInOrders, servedOrders) {
//   let takeOutOrdersIndex = 0;
//   let dineInOrdersIndex = 0;
//   let servedOrdersIndex = 0;

//   while (servedOrders.length > servedOrdersIndex) {
//     const takeOutIsNext = takeOutOrders[takeOutOrdersIndex] < dineInOrders[dineInOrdersIndex];

//     if (takeOutIsNext && servedOrders[servedOrdersIndex] === takeOutOrders[takeOutOrdersIndex]) {
//       takeOutOrdersIndex++;
//     } else if (!takeOutIsNext && servedOrders[servedOrdersIndex] === dineInOrders[dineInOrdersIndex]) {
//       dineInOrdersIndex++;
//     } else {
//       return false;
//     }
//     servedOrdersIndex++;
//   }
//   return true;
// }


// console.log(iterativeIsFIFO(takeOut, dineIn, served));
// console.log(iterativeIsFIFO(takeOut2, dineIn2, served2));
// console.log(iterativeIsFIFO(takeOut3, dineIn3, served3));
// console.log(iterativeIsFIFO(takeOut4, dineIn4, served4));


// function recursiveIsFIFO(takeOutOrders, dineInOrders, servedOrders, takeOutOrdersIndex, dineInOrdersIndex, servedOrdersIndex) {
//   takeOutOrdersIndex = typeof takeOutOrdersIndex !== 'undefined' ? takeOutOrdersIndex : 0;
//   dineInOrdersIndex = typeof dineInOrdersIndex !== 'undefined' ? dineInOrdersIndex : 0;
//   servedOrdersIndex = typeof servedOrdersIndex !== 'undefined' ? servedOrdersIndex : 0;

//   if (servedOrdersIndex === servedOrders.length) {
//     return true;
//   }

//   const currentTakeOut = takeOutOrders[takeOutOrdersIndex];
//   const currentDineIn = dineInOrders[dineInOrdersIndex];
//   const takeOutIsNext = currentTakeOut < currentDineIn;

//   if (takeOutIsNext && currentTakeOut === servedOrders[servedOrdersIndex]) {
//     takeOutOrdersIndex++;
//   } else if (!takeOutIsNext && currentDineIn === servedOrders[servedOrdersIndex]) {
//     dineInOrdersIndex++;
//   } else {
//     return false;
//   }

//   servedOrdersIndex++;
//   return recursiveIsFIFO(takeOutOrders, dineInOrders, servedOrders, takeOutOrdersIndex, dineInOrdersIndex, servedOrdersIndex);
// }

// console.log(recursiveIsFIFO(takeOut, dineIn, served));
// console.log(recursiveIsFIFO(takeOut2, dineIn2, served2));
// console.log(recursiveIsFIFO(takeOut3, dineIn3, served3));
// console.log(recursiveIsFIFO(takeOut4, dineIn4, served4));


function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  let takeOutOrdersIndex = 0;
  let dineInOrdersIndex = 0;
  let takeOutOrdersMaxIndex = takeOutOrders.length - 1;
  let dineInOrdersMaxIndex = dineInOrders.length - 1;

  for (let i = 0; i < servedOrders.length; i++) {
    let order = servedOrders[i];

    // if we still have orders in takeOutOrders
    // and the current order in takeOutOrders is the same
    // as the current order in servedOrders
    if (takeOutOrdersIndex <= takeOutOrdersMaxIndex
              && order === takeOutOrders[takeOutOrdersIndex]) {
      takeOutOrdersIndex++;

      // if we still have orders in dineInOrders
      // and the current order in dineInOrders is the same
      // as the current order in servedOrders
    } else if (dineInOrdersIndex <= dineInOrdersMaxIndex
              && order === dineInOrders[dineInOrdersIndex]) {
      dineInOrdersIndex++;

      // if the current order in servedOrders doesn't match the current
      // order in takeOutOrders or dineInOrders, then we're not serving first-come,
      // first-served
    } else {
      return false;
    }
  }

  // check for any extra orders at the end of takeOutOrders or dineInOrders
  if (dineInOrdersIndex != dineInOrders.length
         || takeOutOrdersIndex != takeOutOrders.length) {
    return false;
  }

  // all orders in servedOrders have been "accounted for"
  // so we're serving first-come, first-served!
  return true;
}
//  Q: Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.


// create the merged array that we will compare the served array too
// while loop works while the combined input arrays have a length
// if either input is empty we will add the other to the merged array
// compare the 0 index and push the lower one to the merged array

// when done we will comapre merged array to served array


// struggles:
// how do you compare two arrays?
// dont forget to break when poping out of loop

// learned:
// first started trying to merge both arrays and compare that result to the given result
// then realized we dont need to save the merged array - instead we can do this in one while
// loop by checking if the value at 0 index is smallest and seeing if that value is the first
// in the provided comparer array, if it is then increment the index counter for that array it
// matched and the served array and do it again
// otherwise the comparer array is out of order and it should return false
