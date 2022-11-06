function solution(num, k) {
    var answer = 0;
      answer = String(num).indexOf(String(k));
  answer !== -1 ? (answer += 1) : answer;
    return answer;
}