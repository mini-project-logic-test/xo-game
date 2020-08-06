let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const checkBoard = (board, player) => {
  let canDiagonalLeft = board[0][0] === player ? true : false;
  let canDiagonalRight = board[0][2] === player ? true : false;

  let countMatchDiagonalLeft = canDiagonalLeft ? 1 : 0;
  let countMatchDiagonalRight = canDiagonalRight ? 1 : 0;

  for (let row = 0; row <= 2; row++) {
    let countMatchCol = 0;
    let colForMatchCol = row;

    for (let rowForMatchCol = 0; rowForMatchCol <= 2; rowForMatchCol++) {
      if (board[rowForMatchCol][colForMatchCol] === player) {
        countMatchCol += 1;

        if (countMatchCol === 3) return true;
      } else {
        break;
      }
    }

    if (
      JSON.stringify(board[row]) === JSON.stringify([player, player, player])
    ) {
      return true;
    }
    let colForDiagonalLeft = row;
    let colForDiagonalRight = 2 - row;

    if (canDiagonalLeft && row !== 0) {
      if (board[row][colForDiagonalLeft] === player) {
        countMatchDiagonalLeft += 1;
      }
    }

    if (canDiagonalRight && row !== 0) {
      if (board[row][colForDiagonalRight] === player) {
        countMatchDiagonalRight += 1;
      }
    }
  }

  if (countMatchDiagonalLeft === 3 || countMatchDiagonalRight === 3) {
    return true;
  }
};

allCell = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2],
];
let noHasPlayerWin;
for (let i = 2; i <= 10; i++) {
  let player = i % 2 === 0 ? "x" : "o";
  pos = Math.floor(Math.random() * allCell.length);
  row = allCell[pos][0];
  col = allCell[pos][1];
  board[row][col] = player;
  let whoWin = checkBoard(board, player);

  if (whoWin) {
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
    console.log(`player ${player} is winner`);
    break;
  }
  allCell.splice(pos, 1);
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
  console.log("<---------------------->");
  if (i === 10) {
    noHasPlayerWin = "Draw No one win";
  }
}

if (noHasPlayerWin) {
  console.log(noHasPlayerWin);
}
