function solution(babbling) {
    var answer = 0;
      const words = ["aya", "ye", "woo", "ma"];
  babbling.map((word) => {
    let cnt = 0;
    while (word.length > 0) {
      if (word.startsWith(words[0])) {
        word = word.slice(3);
        cnt = 1;
      } else if (word.startsWith(words[1])) {
        word = word.slice(2);
        cnt = 1;
      } else if (word.startsWith(words[2])) {
        word = word.slice(3);
        cnt = 1;
      } else if (word.startsWith(words[3])) {
        word = word.slice(2);
        cnt = 1;
      } else {
        cnt = 0;
        break;
      }
    }
    answer += cnt;
  });
    return answer;
}