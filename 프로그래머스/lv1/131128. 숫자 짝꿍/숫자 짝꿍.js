function solution(X, Y) {
  var answer = '';

  let arr= []
  let xObj = {}
  let yObj = {}

  for (let x of X) {
    xObj[x] = (xObj[x] || 0) + 1;
  }

  for (let y of Y) {
    yObj[y] = (yObj[y] || 0) + 1;
  }

  for (let key in xObj) {
    if (yObj.hasOwnProperty(key) ) {
      const cnt = xObj[key] > yObj[key] ? yObj[key] : xObj[key] 
      for(let i = 0; i<cnt ; i++){
        arr.push(parseInt(key));
      }
    }
  }
  if(arr.length === 0){
    answer='-1'
    return answer
  }
  arr=arr.sort((a,b)=>{return b-a})
  answer = arr.join('')
  if(parseInt(answer) === 0){
    answer = '0'
    return answer
  }
  return answer;
}