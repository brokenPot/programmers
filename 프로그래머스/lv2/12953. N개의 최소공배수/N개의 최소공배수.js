function solution(arr) {
  let LCM = Math.max(...arr);
  let i = 0;
  while (true) {
    while (i < arr.length) {
      if (LCM % arr[i] !== 0) {
        i = 0;
        break;
      } else {
        i++;
      }
    }
    if (i === arr.length) {
      console.log(LCM);
      return LCM;
    } else {
      LCM += 1;
    }
  }
}
