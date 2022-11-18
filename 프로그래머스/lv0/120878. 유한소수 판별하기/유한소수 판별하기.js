let getGCD = (num1, num2) => {
  let gcd = 1;
  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const primeFactors = (n) => {
  while (n % 2 === 0) {
    n /= 2;
  }
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      if (i !== 5) {
        return 2;
      }
      n /= i;
    }
  }
  if (n > 2) {
    if (n !== 5) {
      return 2;
    }
  }
  return 1;
};

function solution(a, b) {
  const gcd = getGCD(a, b);
  const minSon = a / gcd;
  const minMom = b / gcd;
  if (Number.isInteger(minSon / minMom)) {
    return 1;
  }
  let tf = primeFactors(minMom);
  return tf;
}