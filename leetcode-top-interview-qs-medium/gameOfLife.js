var gameOfLife = function(board) {
  function aliveNext(isAlive, liveNeibs) {
      if (isAlive) {
          if (liveNeibs < 2 || liveNeibs > 3) return 0;
          return 1
      } else if (liveNeibs === 3) return 1;
      return 0;
  }

  const m = board.length;
  const n = board[0].length;
  const nextGen = [];
  for (let i = 0; i < m; i++){
      nextGen.push([]);
      for (let j = 0; j < n; j++) {
          let liveNeibs = 0;
          for (let k = -1; k < 2; k++) {
              for (let l = -1; l < 2; l++) {
                  if ((k || l) && board[i+k][j+l]) liveNeibs++;
              }
          }
          nextGen[i].push(aliveNext(board[i][j], liveNeibs))
      }
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          board[m][n] = nextGen[m][n];
      }
  }
  return board;
};
