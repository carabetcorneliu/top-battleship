// eslint-disable-next-line import/prefer-default-export
export class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits += 1;
    return this.hits;
  }

  isSunk() {
    return this.hits === this.length;
  }
}
