function solution(num_list, n) {
    var answer = [[]];
      let answerLength = num_list.length / n;

  for (let i = 1; i < answerLength; ++i) {
    answer.push([]);
  }
  for (let x = 0; x < answer.length; ++x) {
    for (let j = 0; j < n; ++j) {
      answer[x].push(num_list.shift());
    }
  }

    return answer;
}