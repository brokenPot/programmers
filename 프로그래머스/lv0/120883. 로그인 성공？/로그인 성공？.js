function solution(id_pw, db) {
  const dbObj = {} // {rardss: '123', yyoom: '1234', meosseugi: '1234'}
  
  db.map((acc)=>{
    dbObj[acc[0]] =  acc[1]
  })
  var answer = '';

  if(dbObj[id_pw[0]]!==undefined){
    if(dbObj[id_pw[0]]===id_pw[1]){
      answer = 'login'
    }
    else{
      answer = 'wrong pw'
    }
  }else{
    answer = 'fail'
  }
  console.log(answer)
  return answer;
}