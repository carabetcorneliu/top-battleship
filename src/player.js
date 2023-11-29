import { Ship } from './ship';
import { Gameboard } from './gameboard';

// eslint-disable-next-line import/prefer-default-export
export class Player {
  constructor() {
    this.ships = [];
    for (let i = 1; i <= 4; i += 1) {
      for (let j = 4; j >= i; j -= 1) {
        this.ships.push(new Ship(i));
      }
    }
    this.board = new Gameboard();
  }
}
