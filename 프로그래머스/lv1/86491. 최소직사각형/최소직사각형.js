function solution(sizes) {
    var answer = 0;
      sizes.map((arr) => {
    arr.sort((a, b) => {
      return b - a;
    });
  });

  let temp0 = 0;
  let temp1 = 0;
  sizes.map((arr) => {
    if (temp0 < arr[0]) {
      temp0 = arr[0];
    }
    if (temp1 < arr[1]) {
      temp1 = arr[1];
    }
  });
  answer = temp0 * temp1;
    return answer;
}