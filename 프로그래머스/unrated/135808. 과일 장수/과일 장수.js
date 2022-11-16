function solution(k, m, score) {
  let srtArr = score.sort((a, b) => {
    return b - a;
  });
  let i = 0;
  let total = 0;
  while (i <= srtArr.length - m) {
    const mArr = srtArr.slice(i, m + i);
    total += mArr[mArr.length - 1] * m;
    i += m;
  }
  return total;
}