function solution(dots) {
    var answer = 0;
      const pointX = dots[0][0];
  const pointY = dots[0][1];
  let saveXidx = 0;
  let saveYidx = 0;
  dots.map((dot, idx) => {
    if (pointX === dot[0]) {
      saveXidx = idx;
    } else if (pointY === dot[1]) {
      saveYidx = idx;
    }
  });

  answer =
    Math.abs(dots[saveXidx][1] - pointY) * Math.abs(dots[saveYidx][0] - pointX);
  console.log(answer);

    return answer;
}