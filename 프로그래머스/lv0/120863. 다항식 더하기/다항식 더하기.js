function solution(polynomial) {
  var answer = "";
  let splitArr = polynomial.split(" + ");

  let i = 0;
  let xArr = [];
  let numArr = [];
  while (i < splitArr.length) {
    if (splitArr[i].includes("x")) {
      xArr.push(
        splitArr[i].replace("x", "") === ""
          ? 1
          : Number(splitArr[i].replace("x", ""))
      );
    } else {
      numArr.push(Number(splitArr[i]));
    }
    i++;
  }

  let xArrTotal = 0;
  let numTotal = 0;

  xArrTotal = xArr.reduce((a, b) => {
    return a + b;
  }, 0);

  numTotal = numArr.reduce((a, b) => {
    return a + b;
  }, 0);

  let xStr = xArrTotal === 0 ? "" : `${xArrTotal === 1 ? "" : xArrTotal}x`;


  let numStr = numTotal === 0 ? "" : `${numTotal}`;

  answer =
    xStr !== "" && numStr !== "" ? `${xStr} + ${numStr}` : `${xStr}${numStr}`;
    return answer;
}