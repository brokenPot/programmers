function solution(my_string) {
    var answer = 0;
  let found = my_string.match(/[0-9]+/g);
  return found ? found.map(num=>+num).reduce((a,b)=>a+b,0) : 0;
 
}