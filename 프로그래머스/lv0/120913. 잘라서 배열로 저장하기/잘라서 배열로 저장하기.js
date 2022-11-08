function solution(my_str, n) {
    var answer = [];
      while (my_str.length > n - 1) {
    const result = my_str.substr(0, n);
    answer.push(result);
    my_str = my_str.substr(n);
  }
  my_str === "" ? my_str : answer.push(my_str);
    return answer;
}