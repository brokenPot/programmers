function solution(box, n) {
    var answer = 0;
      const num1 = Math.floor(box[0] / n);
  const num2 = Math.floor(box[1] / n);
  const num3 = Math.floor(box[2] / n);
  answer = num1 * num2 * num3;
    return answer;
}