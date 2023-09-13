function solution(d, budget) {
  var answer = 0;
  d.sort((a,b)=>{return a-b})
  let sum = 0;

  // 다음것을 더했을때 버젯이 넘어가는 경우
  // 다음것을 더했을때 버젯과 같은 경우
  for(let i = 0; i<d.length; i++){
          if(d[i]>budget){
      return 0
    }
    sum+=d[i]
    if(sum+d[i+1]>budget){
      answer=i+1
      break
    }else if(sum+d[i+1]===budget){
      answer=i+2
      break
    }
  }
if(answer===0) answer = d.length
  console.log(answer)
  return answer;
}