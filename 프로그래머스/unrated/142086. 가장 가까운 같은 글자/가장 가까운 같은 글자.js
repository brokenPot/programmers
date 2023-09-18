function solution(s) {
  var answer = [];
  let obj = {}
  
  let sArr = s.split('');
  const elements = sArr.entries()

for (const [idx, e] of elements) {
  if (obj[e]){
    for (let i = idx-1; i>=0; --i){
      if(sArr[i] === e){
        answer.push(idx-i)
        break
      }
      else{
        continue
      }
    }
  }else{
    obj[e] = 1
    answer.push(-1)
  }
}
  return answer;
}