function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
function isPowerOfTwoBitwise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwoBitwise(16));
