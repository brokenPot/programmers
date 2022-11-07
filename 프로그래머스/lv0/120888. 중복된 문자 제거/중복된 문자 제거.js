function solution(my_string) {
  let arr = [...my_string];
  const set = new Set(arr);

  const uniqueArr = [...set];
  return uniqueArr.join("");
}