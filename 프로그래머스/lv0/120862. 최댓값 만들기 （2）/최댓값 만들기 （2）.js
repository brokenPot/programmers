function solution(numbers) {
    var answer = 0;
  let neg = [];
  let pos = [];
  let BigNeg = 0;
  let BigPos = 0;
  if (numbers.length === 2) {
    answer = numbers[0] * numbers[1];
    return answer;
  } else {
    for (let i = 0; i < numbers.length; ++i) {
      if (numbers[i] === 0) {
        continue;
      }
      numbers[i] < 0 ? neg.push(numbers[i]) : pos.push(numbers[i]);
    }
    if (neg.length > 1) {
      neg.sort((a, b) => {
        return a - b;
      });
      BigNeg = neg[0] * neg[1];
    }
    if (pos.length > 1) {
      pos.sort((a, b) => {
        return b - a;
      });
      BigPos = pos[0] * pos[1];
    }
    BigNeg > BigPos ? (answer = BigNeg) : (answer = BigPos);
  }

    return answer;
}