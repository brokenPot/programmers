function solution(sides) {
  let okArr = [];
  let big = Math.max(...sides);
  let small = Math.min(...sides);
  for (let i = big - small + 1; i <= big; ++i) {
    if (big < small + i) {
      okArr.push(i);
    }
  }
  for (let i = big + 1; i < big + small; ++i) {
    okArr.push(i);
  }
  return okArr.length;
}