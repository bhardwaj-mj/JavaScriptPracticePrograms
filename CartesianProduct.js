function cartesianProduct(arr1, arr2) {
  const resulArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      resulArr.push([arr1[i], arr2[j]]);
    }
  }
  return resulArr;
}
const arr1 = [2, 5, 8];
const arr2 = [7, 6];
console.log(cartesianProduct(arr1, arr2));
