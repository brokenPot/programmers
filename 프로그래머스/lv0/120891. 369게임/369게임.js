function solution(order) {
    var answer = 0;
      let str = String(order);
  const re = /[^3|6|9]/g;
  answer = str.replace(re, "").length;
    return answer;
}