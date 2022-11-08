function solution(i, j, k) {
    var answer = 0;
      for (let x = i; x <= j; x++) {
    for (const char of String(x)) {
      if (char === `${k}`) {
        answer += 1;
      }
    }
  }
    return answer;
}