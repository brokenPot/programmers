
function solution(numlist, n) {
  var answer = [];
  let frequencyCounter1 = {};
  for (let val of numlist) {
    frequencyCounter1[val - n] = val;
  }
  let sortedArray = Object.keys(frequencyCounter1).map((num) => {
    return Math.abs(num);
  });
  sortedArray.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      answer.push(frequencyCounter1[sortedArray[i]]);
      answer.push(frequencyCounter1[-sortedArray[i + 1]]);
      i += 1;
      continue;
    } else if (frequencyCounter1[sortedArray[i]] === undefined) {
      answer.push(frequencyCounter1[-sortedArray[i]]);
    } else {
      answer.push(frequencyCounter1[sortedArray[i]]);
    }
  }

  return answer;
}
