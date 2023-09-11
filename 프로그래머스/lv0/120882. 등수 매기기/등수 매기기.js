function solution(score) {
  var answer = [];
  const arr = score.map((sco)=>{return sco[0]+sco[1]})
  const sortedArr = score.map((sco)=>{return sco[0]+sco[1]})

  sortedArr.sort(function(a, b){return a-b})
  sortedArr.reverse();

  let frequencyCounter1 = {};
    for (let idx in sortedArr) {
      if(!frequencyCounter1[sortedArr[idx]]) frequencyCounter1[sortedArr[idx]] = Number(idx)+1
  }

  answer= arr.map((e)=>{
    return frequencyCounter1[e]
  })

  console.log(answer)
  return answer;
}