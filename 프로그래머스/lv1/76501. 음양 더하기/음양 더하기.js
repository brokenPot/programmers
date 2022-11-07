function solution(absolutes, signs) {
    var answer = 123456789; 
    signs.map((tf,i) => tf==true ? absolutes[i]*=1 : absolutes[i]*=-1)
    answer = absolutes.reduce(function add(sum, currValue) {
        return sum + currValue;
      }, 0);
    return answer;
}