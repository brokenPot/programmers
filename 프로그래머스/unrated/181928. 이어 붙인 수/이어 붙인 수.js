function solution(num_list) {
  var answer = 0;
  let odd=''
  let even=''
  while ( num_list.length > 0) {
    if(num_list[0]%2 === 0 ){
      even+=num_list[0]
    }else{
      odd+=num_list[0]
    }
    num_list.shift()
  }
  answer = parseInt(odd)+parseInt(even)
  return answer;
}