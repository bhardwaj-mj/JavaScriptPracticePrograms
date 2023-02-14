function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return "Factorial of " + n + " is " + result;
}
console.log(factorial(5));
