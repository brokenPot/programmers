function solution(n) {
  let pFactors = [];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      pFactors.push(i);
      n /= i;
    }
  }
  if (n > 1) {
    pFactors.push(n);
  }

  let set = new Set(pFactors);
  pFactors = [...set];
  pFactors.sort(function (a, b) {
    return a - b;
  });
  return pFactors;
}