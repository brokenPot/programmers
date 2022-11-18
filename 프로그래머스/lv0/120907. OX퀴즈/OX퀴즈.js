function solution(quiz) {
  var removeSpaceArr = [];
  let answer = [];
  quiz.map((q) => {
    removeSpaceArr.push(q.split("="));
  });
  removeSpaceArr.map((arr) => {
    if (arr[0].includes(" - ")) {
      let minusArr = arr[0].split(" - ");
      answer.push(
        Number(minusArr[0]) - Number(minusArr[1]) === Number(arr[1]) ? "O" : "X"
      );
    } else if (arr[0].includes(" + ")) {
      let plusArr = arr[0].split(" + ");
      answer.push(
        Number(plusArr[0]) + Number(plusArr[1]) === Number(arr[1]) ? "O" : "X"
      );
    }
  });
  return answer;
}