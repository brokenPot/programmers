function solution(brown, yellow) {
  let total = brown + yellow;
  let height = 3;
  while (true) {
    if (total % height === 0) {
      let width = total / height;
      if ((width - 2) * (height - 2) === yellow) {
        console.log([width, height]);
        return [width, height];
      }
    }
    height++;
  }
}