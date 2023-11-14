// eslint-disable-next-line import/prefer-default-export
export class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
  }

  placeShip(ship, x, y) {
    for (let i = 0; i < ship.length; i += 1) {
      this.board[x][y + i] = ship;
    }
  }

  getBoard() {
    return this.board;
  }

  receiveAttack(x, y) {
    if (this.board[x][y] === null) {
      this.board[x][y] = 'o';
    } else {
      this.board[x][y].hit();
    }
  }

  checkAllShipsSunk() {
    const currentBoard = this.board;
    for (let i = 0; i < currentBoard.length; i += 1) {
      for (let j = 0; j < currentBoard[i].length; j += 1) {
        if (currentBoard[i][j] && !currentBoard[i][j].isSunk()) { return false; }
      }
    }
    return true;
  }
}
