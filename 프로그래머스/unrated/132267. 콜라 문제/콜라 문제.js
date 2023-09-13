function solution(a, b, n) {
  var answer = 0;
  let spare = 0;

  while(n>=a){
    if(n%a===0){
      answer += (n/a)*b
      n = (n/a)*b
    }else{
      spare+=n%a
      n -= n%a
      answer += (n/a)*b
      n = (n/a)*b
    }
    if(spare!==0){
      n+=spare
      spare=0
    }
  }

  return answer;
}