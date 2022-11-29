function solution(brown, yellow) {
  let sum = brown + yellow;

  //카펫의 최소높이는 3부터이다.(위아래 갈색, 가운데가 노란색이기 때문에)
  for (let height = 3; height <= brown; height++) {
    if (sum % height === 0) {
      const width = sum / height
      if((height-2)*(width-2)===yellow){
        return [width,height]
      }
    }
  }
}