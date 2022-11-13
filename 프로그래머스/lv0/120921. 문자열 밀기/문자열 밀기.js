function solution(A, B) {
  let Aarr = A.split("");
  let n = 1;
  if (A === B) {
    return 0;
  }
  while (n <= A.length) {
    let tempRear = Aarr[Aarr.length - 1];
    for (let i = Aarr.length - 1; i >= 0; --i) {
      Aarr[i] = Aarr[i - 1] || "";
    }
    Aarr[0] = tempRear;
    if (Aarr.join("") === B) {
      return n;
    }
    n++;
  }
  return -1;
}