function solution(rsp) {
    var answer = '';
      for (const key of rsp) {
    key === "2"
      ? (answer += "0")
      : key === "0"
      ? (answer += "5")
      : (answer += "2");
  }
    return answer;
}