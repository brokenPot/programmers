function solution(s) {
    var answer = '';
  let choppedS = s.split(" ");

  let sorting = choppedS.map(
    (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
  );

  let union = sorting.join(" ");

  answer = union;
    return answer;
}