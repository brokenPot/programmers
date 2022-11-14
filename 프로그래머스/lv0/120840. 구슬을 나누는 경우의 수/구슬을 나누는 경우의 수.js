const facto = (num) => {
  const arr = Array.from({ length: num }, (_, i) => i + 1);
  const result = arr.reduce((acc, cur) => {
    return BigInt(acc) * BigInt(cur);
  }, 1);

  return result;
};
function solution(balls, share) {
  if (balls === share) {
    return 1;
  }
  const nfac = facto(balls);
  const nmfac = facto(balls - share);
  const mfac = facto(share);
  const answer = nfac / (nmfac * mfac);
  return answer;
}
