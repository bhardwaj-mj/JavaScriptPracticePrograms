function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const righrArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(righrArr));
}
function merge(leftArr, righrArr) {
  const sortedArr = [];
  while (leftArr.length && righrArr.length) {
    if (leftArr[0] <= righrArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(righrArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...righrArr];
}
const arr = [20, 18, 16, 14, 12, 10, 8, 6, 4, 2];
console.log(mergeSort(arr));
