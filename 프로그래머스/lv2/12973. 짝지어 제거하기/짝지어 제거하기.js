function solution(s)
{
  var answer = -1;
  let strArr = [...s];
  let stackArr = [];
  strArr.map((char) => {
    stackArr.push(char);
    if (
      stackArr.length > 1 &&
      stackArr[stackArr.length - 1] === stackArr[stackArr.length - 2]
    ) {
      stackArr.pop();
      stackArr.pop();
    }
  });

  stackArr.length === 0 ? (answer = 1) : (answer = 0);
    return answer;
}