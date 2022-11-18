function solution(babbling) {
  var cnt = 0;
  babbling.map((str) => {
    while (str.length >= 0) {
      if (str.length === 0) {
        cnt += 1;
        break;
      }
      if (str.startsWith("aya")) {
        str = str.replace("aya", "");
      } else if (str.startsWith("ye")) {
        str = str.replace("ye", "");
      } else if (str.startsWith("woo")) {
        str = str.replace("woo", "");
      } else if (str.startsWith("ma")) {
        str = str.replace("ma", "");
      } else {
        break;
      }
    }
  });
  return cnt;
}
