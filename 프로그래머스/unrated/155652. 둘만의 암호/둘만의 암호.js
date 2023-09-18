
function solution(s, skip, index) {
  var answer = '';
  let skipObj = {}
  for (let val of skip) {
    skipObj[val] = (skipObj[val] || 0) + 1;
  }
  for(let i = 0 ; i<s.length ; i++){
    let arr = []
    for(let x = 0 ; x<index ; x++){
      const nextChar = s[i].charCodeAt(0)+x+1
      nextChar > 122 ? arr.push(String.fromCharCode(nextChar-26)) :  arr.push(String.fromCharCode(nextChar))  
      }

  while(arr.length>0){
    if (skipObj[arr[0]]){
      const nextChar2 = arr[arr.length-1].charCodeAt(0)+1
      arr.splice(0,1)
      nextChar2 > 122 ? arr.push(String.fromCharCode(nextChar2-26)) :arr.push(String.fromCharCode(nextChar2))  
    }else if(!skipObj[arr[0]] && arr.length === 1){
      break;
    }
    else{
      arr.shift()
    }
  }
    answer+=arr[arr.length-1]
    arr = []
  }
  return answer;
}