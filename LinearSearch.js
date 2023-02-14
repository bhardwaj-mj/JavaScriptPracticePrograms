function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
let array = [10, 20, 98, 76, 85, 42, 35];
console.log(linearSearch(array, 98));
