function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  const pivotIndex = array.length - 1;
  const pivot = array[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < pivotIndex; i++) {
    const current = array[i]
    if (array[i] < pivot) {
      left.push(current);
    } else {
      right.push(current);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const numbers = [4, 7, 2, 3, 9, 1, 8, 6, 5];
console.log(quickSort(numbers));
