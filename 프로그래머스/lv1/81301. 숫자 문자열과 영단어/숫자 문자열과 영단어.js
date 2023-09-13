function isNum(s) {
  return /^\s*\d+\s*$/.test(s); // Use regex to check for numeric values
}

function solution(s) {
  const obj = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };

  let wordStash = "";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (isNum(s[i])) {
      result += s[i];
    } else {
      wordStash += s[i];
      if (obj[wordStash]) {
        result += obj[wordStash];
        wordStash = "";
      }
    }
  }
  console.log(parseInt(result, 10));
  return parseInt(result, 10); // Convert the result to an integer
}