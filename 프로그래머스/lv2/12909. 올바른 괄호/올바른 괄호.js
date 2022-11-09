function solution(s){
  let strArr = [...s];
  let emptyArr = [];
  strArr.map((char) => {
    emptyArr.push(char);
    if (
      emptyArr.length > 1 &&
      emptyArr[emptyArr.length - 2] === "(" &&
      emptyArr[emptyArr.length - 1] === ")"
    ) {
      emptyArr.pop();
      emptyArr.pop();
    }
  });
  let answer = true;
  emptyArr.length === 0 ? answer : (answer = false);
    return answer;
}