function solution(name, yearning, photo) {
  var answer = [];
  let keyChain = {}
  for(let i =0; i<name.length; ++i){
    keyChain[name[i]] = yearning[i]
  }
  for(let j =0; j<photo.length; ++j){
    let sum = 0
    for(let x =0; x<photo[j].length; ++x){
      if(keyChain[photo[j][x]]){
        sum+=keyChain[photo[j][x]]
      }
    }
    answer.push(sum)
    sum=0
  }
  return answer;
}