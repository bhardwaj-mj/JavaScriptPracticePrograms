function recursiveBinarySearch(array, target) {
  return search(array, target, 0, array.length - 1);
}
function search(array, target, leftIndex, rigthIndex) {
  if (leftIndex > rigthIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rigthIndex) / 2);
  if (target === array[middleIndex]) {
    return middleIndex;
  }
  if (target < array[middleIndex]) {
    return search(array, target, leftIndex, middleIndex - 1);
  } else {
    return search(array, target, middleIndex + 1, rigthIndex);
  }
}
let array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(recursiveBinarySearch(array, 20));
