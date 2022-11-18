function solution(babbling) {
  let cnt = 0;
  babbling.map((str) => {
    while (str.length >= 0) {
      if (str.length === 0) {
        cnt += 1;
        break;
      }
      if (str.startsWith("aya") && !str.startsWith("ayaaya")) {
        str = str.replace("aya", "");
      } else if (str.startsWith("ye") && !str.startsWith("yeye")) {
        str = str.replace("ye", "");
      } else if (str.startsWith("woo") && !str.startsWith("woowoo")) {
        str = str.replace("woo", "");
      } else if (str.startsWith("ma") && !str.startsWith("mama")) {
        str = str.replace("ma", "");
      } else {
        break;
      }
    }
  });
  console.log(cnt);
  return cnt;
}