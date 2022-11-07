function solution(n) {
    var answer = 0;
  let plate = 1;
  while ((plate * 6) % n !== 0) {
    plate += 1;
    if ((plate * 6) % n === 0) {
      break;
    }
  }
  answer = plate;
    return answer;
}