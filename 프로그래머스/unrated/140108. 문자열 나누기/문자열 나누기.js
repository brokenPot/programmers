function findFirstDuplicateKey(obj, mainkey) {
  for (const key in obj) {
    if (key !== mainkey && obj[key] === obj[mainkey]) {
      return key;
    }
  }
  return null;
}

function solution(s) {
  let answer = 0;
  const keyChain = {};
  let i = 0;
  let arr=[]
  while (s.length>0) {
    keyChain[s[i]] = (keyChain[s[i]] || 0) + 1;
    const dupKey = findFirstDuplicateKey(keyChain, s[i]);
    if (dupKey) {
      for (var variableKey in keyChain){
        if (keyChain.hasOwnProperty(variableKey)){
            delete keyChain[variableKey];
        }
    }
      arr.push(s.slice(0,i+1))
      s = s.slice(i + 1);
      i = 0;
    } else {
      ++i;
    }
  }
  console.log(arr)
  answer = arr.length===0 ? 1 : arr.length
  return answer;
}