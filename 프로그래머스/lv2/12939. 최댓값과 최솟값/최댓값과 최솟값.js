function solution(s) {
    var answer = '';
      let sArr = s.split(" ");
  sArr.sort((a, b) => {
    return a - b;
  });
  answer += sArr[0];
  answer += " ";
  answer += sArr[sArr.length - 1];
    return answer;
}