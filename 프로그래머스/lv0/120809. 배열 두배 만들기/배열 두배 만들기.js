function solution(numbers) {
    var answer = [];
      numbers.map((e) => {
    answer.push(e * 2);
  });
    return answer;
}