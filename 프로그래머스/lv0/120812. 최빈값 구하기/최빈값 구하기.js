function solution(array) {
  const obj = {};
  for (const key of array) {
    obj[key] ? (obj[key] += 1) : (obj[key] = 1);
  }
  let valueArr = Object.values(obj);
  let temp = 0;
  for (let i = 0; i < valueArr.length; ++i) {
    if (valueArr[i] > temp) {
      temp = valueArr[i];
    } else if (valueArr[i] === temp) {
      temp = -1;
    }
  }
  for (const key in obj) {
    if (Number(obj[key]) === temp) {
      return Number(key);
    }
  }
      return temp;

}