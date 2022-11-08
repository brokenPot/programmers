function solution(array, n) {
    var answer = 0;
      let temp = Infinity;
      array.sort((a, b) => {
    return b - a;
  });
  array.map((item) => {
    if (temp >= Math.abs(item - n)) {
      temp = Math.abs(item - n);
      answer = item;
    }
  });
    return answer;
}