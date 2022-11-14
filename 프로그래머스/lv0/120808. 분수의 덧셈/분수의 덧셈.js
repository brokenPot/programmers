function solution(denum1, num1, denum2, num2) {
  let total = [denum1 * num2 + denum2 * num1, num2 * num1];
  if (total[0] % num1 === 0) {
    total[0] = total[0] / num1;
    total[1] = total[1] / num1;
  }
  if (total[0] % num2 === 0) {
    total[0] = total[0] / num2;
    total[1] = total[1] / num2;
  }
  console.log(total);
  return total;
}