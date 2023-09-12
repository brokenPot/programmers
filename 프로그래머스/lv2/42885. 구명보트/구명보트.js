function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);

  let limitCheck=limit
  let pCount = 2

  while ( people.length!==0) {
    if(people[people.length-1] <= limitCheck && limitCheck - people[people.length-1] >= 0 ){
      limitCheck-=people[people.length-1]
      pCount-=1
      people.pop()
    }
    if(people[0] <=limitCheck && limitCheck - people[0] >= 0 ){
      limitCheck-=people[0]
      pCount-=1
      people.shift()
    }
    if(limitCheck - people[0] > 0 && pCount>0 || limitCheck - people[people.length-1] > 0  && pCount>0 ){
        continue
      }else{
        answer+=1
        pCount = 2
        limitCheck=limit
      }
  }
  console.log(answer)
  return answer;
}