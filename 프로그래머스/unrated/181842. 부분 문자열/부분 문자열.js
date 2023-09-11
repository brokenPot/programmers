function solution(str1, str2) {
let count = 0;
    for (let l = 0; l <= str2.length - str1.length; l++) {
      let temp = "";
      if (str2[l] !== str1[0]) {
        continue;
      } else {
        for (let i = 0; i < str1.length; i++) {
          temp += str2[l + i];
        }
        if (str1 === temp) {
          count += 1;
          break;
        } else {
          continue;
        }
      }
    }
    return count;
}