function solution(t, p) {
  let answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    const subString = t.slice(i, i + p.length);
    console.log(subString)
    if (parseInt(subString) <= parseInt(p)) {
      answer++;
    }
  }
  return answer;
}
