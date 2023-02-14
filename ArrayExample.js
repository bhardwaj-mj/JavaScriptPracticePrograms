const arr = [1, 2, 3, 4, 5, 6];
arr.push(4);
arr.unshift(0);
for (item of arr) {
  console.log(item);
}
arr.pop();
arr.shift();
for (item of arr) {
  console.log(item);
}
arr.forEach((item) => {
  console.log(item);
});
const numbers = arr.filter((item) => {
  if (item % 2 === 0) {
    console.log(item);
  }
});
const arr1 = arr.map((item) => {
  return item * 2;
});
console.log(arr1);
