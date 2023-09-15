function solution(num, total) {
  var answer = [];
  const avg = parseInt(total / num) 
  for(let i = avg-parseInt((num-1)/2) ; i< avg+parseInt((num+2)/2); i++){
    answer.push(i)
  }
  return answer;
}