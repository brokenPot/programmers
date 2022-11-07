function solution(cipher, code) {
    var answer = '';
      let code1 = code - 1;
  let turn = Math.floor(cipher.length / code);
  let i = 1;
  while (i <= turn) {
    answer += cipher[code1];
    code1 += code;
    i++;
  }
    return answer;
}