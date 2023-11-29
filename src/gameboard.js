import { Ship } from './ship';
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
      console.log(`Missed on r${x} c${y}`);
    } else if (this.board[x][y] instanceof Ship && this.board[x][y] !== 'x') {
      this.board[x][y].hit();
      this.board[x][y] = 'x';
      console.log(`Ship got hit on r${x} c${y}`);
    }
  }

  checkAllShipsSunk() {
    const currentBoard = this.board;
    for (let i = 0; i < currentBoard.length; i += 1) {
      for (let j = 0; j < currentBoard[i].length; j += 1) {
        if (currentBoard[i][j] instanceof Ship) { return false; }
      }
    }
    return true;
  }
}
