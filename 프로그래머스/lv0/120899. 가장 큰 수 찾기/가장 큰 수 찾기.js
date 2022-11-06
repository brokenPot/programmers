function solution(array) {
    var answer = [];
  let obj = {};
  for (const [idx, key] of array.entries()) {
    obj[key] ? (obj[key] = idx) : (obj[key] = idx);
  }
  let temp = -1;
  for (const key in obj) {
    let num = Number(key);
    num > temp ? (temp = num) : temp;
  }
  answer = [temp, obj[temp]];
    return answer;
}