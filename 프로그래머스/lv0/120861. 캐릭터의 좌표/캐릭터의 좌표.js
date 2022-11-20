function solution(keyinput, board) {
  let initP = [0, 0];
  let xstart = -Math.floor(board[0] / 2);
  let xEnd = Math.floor(board[0] / 2);
  let ystart = -Math.floor(board[1] / 2);
  let yEnd = Math.floor(board[1] / 2);

  keyinput.map((input) => {
    if (input === "left") {
      if (initP[0] > xstart) {
        initP[0] += -1;
      }
    }
    if (input === "right") {
      if (initP[0] < xEnd) {
        initP[0] += 1;
      }
    }
    if (input === "up") {
      if (initP[1] < yEnd) {
        initP[1] += 1;
      }
    }
    if (input === "down") {
      if (initP[1] > ystart) {
        initP[1] += -1;
      }
    }
  });
  return initP;
}