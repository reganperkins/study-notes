// function getProductsOfAllIntsExceptAtIndex(arrayOfInts) {
//   if (arrayOfInts.length < 2) {
//     throw new Error('array must be longer then 1 item');
//   }

//   const productsArray = [];
//   let startProduct = 1;

//   for (let i = 0; i < arrayOfInts.length; i++) {
//     let endProduct = 1;

//     for (let j = i + 1; j < arrayOfInts.length; j++) {
//       endProduct *= arrayOfInts[j];
//     }

//     productsArray.push(startProduct * endProduct);
//     startProduct *= arrayOfInts[i];
//   }

//   return productsArray;
// }


function getProductsOfAllIntsExceptAtIndex(arrayOfInts) {
  if (arrayOfInts.length < 2) {
    throw new Error('array must be longer then 1 item');
  }

  const productsArray = [];

  // add start product
  let startProduct = 1;
  for (let i = 0; i < arrayOfInts.length; i++) {
    productsArray[i] = startProduct;
    startProduct *= arrayOfInts[i];
  }

  // add end product
  let endProduct = 1;
  for (let i = arrayOfInts.length - 1; i >= 0; i--) {
    productsArray[i] *= endProduct;
    endProduct *= arrayOfInts[i];
  }

  return productsArray;
}

// You have an array of integers, and for each index you want to find 
// the product of every integer except the integer at that index.


// learned:
// look for patterens! avoid extra runtime by omiting redundent calculations
// try to avoid nested for loops - maybe you can take one out by incrementing the opposite direstion