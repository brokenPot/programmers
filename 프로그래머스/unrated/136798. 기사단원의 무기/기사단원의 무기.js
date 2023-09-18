const getDivisors = (num) => {
  const divisors = [];
  for(let i = 1 ; i <= Math.sqrt(num) ; i++){
      if(num % i === 0) {
          divisors.push(i);
          if(num / i != i) divisors.push(num / i);
      }
  }
  return divisors.length;
}


function solution(number, limit, power) {
  var answer = 0;
  let arr = []
  for(let i = 1; i<=number; i++){
    arr.push(getDivisors(i))
  }

  for(let x = 0; x<arr.length; x++){
    if(arr[x]>limit){
      arr[x] = power
    }
  }

   answer = arr.reduce((a, b) => a + b, 0);
  return answer;
}