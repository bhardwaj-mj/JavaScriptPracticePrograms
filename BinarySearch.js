function binarySearch(array, target) {
  let leftIndex = 0;
  let rigthIndex = array.length - 1;
  while (leftIndex <= rigthIndex) {
    let middleIndex = Math.floor((leftIndex + rigthIndex) / 2);
    if (target === array[middleIndex]) {
      return middleIndex;
    }
    if (target < array[middleIndex]) {
      rigthIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
let array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(binarySearch(array, 12));
