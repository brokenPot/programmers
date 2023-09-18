function solution(players, callings) {
  const playersObj = players.reduce((obj, player, idx) => {
    obj[player] = idx;
    return obj;
  }, {});

  const sortedPlayers = players.slice().sort((a, b) => playersObj[a] - playersObj[b]);

  for (let i = 0; i < callings.length; i++) {
    const calling = callings[i];
    const currentIndex = playersObj[calling];
    
    if (currentIndex !== undefined && currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      const currentPlayer = sortedPlayers[currentIndex];
      const prevPlayer = sortedPlayers[prevIndex];

      if (prevPlayer !== calling) {
        sortedPlayers[currentIndex] = prevPlayer;
        sortedPlayers[prevIndex] = currentPlayer;
        playersObj[calling] = prevIndex;
        playersObj[prevPlayer] = currentIndex;
      }
    }
  }
  answer = sortedPlayers
  return answer;
}
