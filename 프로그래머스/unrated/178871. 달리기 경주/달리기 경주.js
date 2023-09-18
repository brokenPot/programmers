function solution(players, callings) {
  var answer = []
  const playersObj = players.reduce((obj, player, idx) => {
    obj[player] = idx;
    return obj;
  }, {});
  for (let i = 0; i < callings.length; i++) {
    const currentIndex = playersObj[callings[i]];
      const prevIndex = currentIndex - 1;
      const currentPlayer = players[currentIndex];
      const prevPlayer = players[prevIndex];

      if (prevPlayer !== callings[i]) {
        players[currentIndex] = prevPlayer;
        players[prevIndex] = currentPlayer;
        playersObj[callings[i]] = prevIndex;
        playersObj[prevPlayer] = currentIndex;
      }
  }
  answer = players
  return answer;
}