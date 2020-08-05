let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const matchRow = (board, player) => {
  for (let row = 0; row <= 2; row++) {
    for (let col = 0; col <= 2; col++) {
      if (board[row][col] !== player) break;

      if (col === 2) return `player ${player}  is winner`;
    }
  }
};

const matchRowOrDiagonal = (board, player) => {
  let canDiagonalLeft = board[0][0] === player ? true : false;
  let canDiagonalRight = board[0][2] === player ? true : false;

  let countMatchDiagonalLeft = canDiagonalLeft ? 1 : 0;
  let countMatchDiagonalRight = canDiagonalRight ? 1 : 0;

  for (let row = 0; row <= 2; row++) {
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

const matchCol = (board, player) => {
  for (let col = 0; col <= 2; col++) {
    let countMatch = 0;

    for (let row = 0; row <= 2; row++) {
      if (board[row][col] === player) {
        countMatch += 1;
      } else {
        break;
      }
    }
    if (countMatch === 3) return true;
  }
};

function checkBoard(board, player) {
  if (matchRowOrDiagonal(board, player) || matchCol(board, player)) {
    return `player ${player}  is winner`;
  }
}

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
let i = 2;
for (; i <= 10; i++) {
  let player = i % 2 === 0 ? "x" : "o";
  pos = Math.floor(Math.random() * allCell.length);
  row = allCell[pos][0];
  col = allCell[pos][1];
  board[row][col] = player;
  let whoWin = checkBoard(board, player);

  if (whoWin) {
    console.log(board);
    console.log(whoWin);
    break;
  }
  allCell.splice(pos, 1);
  console.log(board);
  console.log("<---------------------->");
  if (i === 10) {
    noHasPlayerWin = "Draw No one win";
  }
}

if (noHasPlayerWin) {
  console.log(noHasPlayerWin);
}
