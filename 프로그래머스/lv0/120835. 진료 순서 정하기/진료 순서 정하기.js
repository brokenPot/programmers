function solution(emergency) {
      const obj = {};
  let temp = [...emergency];
  temp.sort((a, b) => {
    return b - a;
  });
  for (let i = temp.length; i >= 1; --i) {
    obj[temp[i - 1]] = i;
  }

  for (let i = 0; i < emergency.length; ++i) {
    emergency[i] = obj[emergency[i]];
  }
    return emergency;
}