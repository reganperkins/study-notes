const takeOutOrders1 = [1, 3, 5];
const dineInOrders1 = [2, 4, 6];
const servedOrders1 = [1, 2, 4, 6, 5, 3];

// function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders, takeOutOrdersIndex = 0, dineInOrdersIndex = 0, servedOrdersIndex = 0) {
//   let currentOrder;
//   if (takeOutOrders[takeOutOrdersIndex] < dineInOrders[dineInOrdersIndex]) {
//     currentOrder = takeOutOrders[takeOutOrdersIndex];
//     takeOutOrdersIndex++;
//   } else {
//     currentOrder = dineInOrders[dineInOrdersIndex];
//     dineInOrdersIndex++;
//   }

//   if (servedOrders[servedOrdersIndex] === currentOrder) {
//     servedOrdersIndex++;
//     if (servedOrdersIndex < servedOrders.length) {
//       return isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders, takeOutOrdersIndex, dineInOrdersIndex, servedOrdersIndex);
//     }
//     return takeOutOrders.length + dineInOrders.length === servedOrders.length;
//   }
//   return false;
// }

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  if (takeOutOrders.length + dineInOrders.length !== servedOrders.length) {
    throw new Error('servedOrders length is different then total orders');
    // return false;
  }
  let takeOutOrdersIndex = 0;
  let dineInOrdersIndex = 0;
  let servedOrdersIndex = 0;

  for (let i = 0; i < servedOrders.length; i++) {
    let currentOrder;
    if (takeOutOrders[takeOutOrdersIndex] < dineInOrders[dineInOrdersIndex]) {
      currentOrder = takeOutOrders[takeOutOrdersIndex];
      takeOutOrdersIndex++;
    } else {
      currentOrder = dineInOrders[dineInOrdersIndex];
      dineInOrdersIndex++;
    }

    if (servedOrders[servedOrdersIndex] !== currentOrder) {
      return false;
    }
    servedOrdersIndex++;
  }
  return true;
}

isFirstComeFirstServed(takeOutOrders1, dineInOrders1, servedOrders1);

// O(n) time and O(1)O(1) additional space.
// is first come first served


// look at the beggining of the arrays and see which of the two is smaller - increment that index
// then comapare that to servedOrders[index] if it does not match its out of order
// if it does match increment servedOrdersIndex
// and repeat

// try not to use recursion