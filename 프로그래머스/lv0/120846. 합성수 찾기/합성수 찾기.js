function solution(n) {
    var answer = 0;
      for (let x = 1; x <= n; ++x) {
    let subList = [];
    for (let i = 1; i < Math.sqrt(x); i++) {
      if (x % i === 0) subList = [...subList, i, x / i];
    }
    if (Number.isInteger(Math.sqrt(x))) subList = [...subList, Math.sqrt(x)];
    subList.length >= 3 ? (answer += 1) : answer;
  }
    return answer;
}