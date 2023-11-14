/* eslint-disable */

import { Ship } from './game';

it('length of ship', () => {
  expect(new Ship(5).length)
    .toBe(5);
  expect(new Ship(4).length)
    .toBe(4);
});

it('ship is sunk', () => {
  expect(new Ship(5).isSunk())
    .toBe(false);
  expect(new Ship(0).isSunk())
    .toBe(true);
});

it('ship took a hit', () => {
  expect(new Ship(5).hit())
    .toBe(1);
});
