
function bubbleSort(array) {
  let swapped = false;

  function sortItem(current, index) {
    const list = array;
    if (current > array[index + 1]) {
      const temp = array[index + 1];
      list[index + 1] = current;
      list[index] = temp;
      swapped = true;
    }
  }

  do {
    swapped = false;
    array.forEach(sortItem);
  } while (swapped);

  return array;
}

const numbers = [10, 4, 3, 7, 2, 9, 0, 0];
console.log(bubbleSort(numbers));
