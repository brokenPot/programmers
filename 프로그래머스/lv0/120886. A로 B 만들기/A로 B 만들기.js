function solution(before, after) {
  let beforeArr = [...before];
  let afterArr = [...after];
  let str1 = beforeArr.sort().join("");
  let str2 = afterArr.sort().join("");
  return str1 === str2 ? 1 : 0;
}