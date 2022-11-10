function solution(n) {
   let num1 = n;
  let bin1 = num1.toString(2);
  let bin1Arr = bin1.match(/1/g);

  let num2 = n + 1;
  let oneCount = 0;
  while (bin1Arr.length !== oneCount) {
    oneCount = num2.toString(2).match(/1/g).length;
    if (bin1Arr.length === oneCount) {
      break;
    } else {
      num2 += 1;
    }
  }
  return num2;
}