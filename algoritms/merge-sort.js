
function merge(left, right) {
  const sorted = [];
  // console.log('merge', left, right)
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // console.log('mergeSort', left, right)
  return merge(mergeSort(left), mergeSort(right));
}


const numbers = [4, 7, 2, 3, 9, 1, 8, 6, 5];
console.log(mergeSort(numbers));
