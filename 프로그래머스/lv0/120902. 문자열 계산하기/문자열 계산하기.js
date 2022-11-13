function solution(my_string) {
  let numOnly = my_string.match(/[0-9]+/g);
  let opeOnly = my_string.match(/\+|\-/g);
  let temp = Number(numOnly[0]);
  for (let i = 1; i < numOnly.length; ++i) {
    if (opeOnly[i - 1] === "+") {
      temp += Number(numOnly[i]);
    } else if (opeOnly[i - 1] === "-") {
      temp -= Number(numOnly[i]);
    }
  }
    return temp;
}