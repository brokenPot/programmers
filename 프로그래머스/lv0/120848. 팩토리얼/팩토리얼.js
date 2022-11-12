function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

function solution(n) {
  for (let i = 2; i <= 10; i++) {
    let fac = factorial(i);
    if (fac === n) {
      return i;
    } else if (fac > n) {
      return i - 1;
    }
  }
}