function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > numberToInsert) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = numberToInsert;
  }
}
const array = [20, 18, 16, 14, 12, 10, 8, 6, 4, 2];
insertionSort(array);
console.log(array);
