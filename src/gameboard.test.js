/* eslint-disable */
import { Gameboard } from './gameboard';
import { Ship } from './ship';

test('placing a ship on the gameboard', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);

  gameboard.placeShip(ship, 2, 4);

  // Assuming your board has a `getBoard` method to retrieve the current state
  const currentBoard = gameboard.getBoard();

  // Check if the ship is placed at the correct positions
  expect(currentBoard[2][4]).toBe(ship);
  expect(currentBoard[2][5]).toBe(ship);
  expect(currentBoard[2][6]).toBe(ship);
});

test('taking a hit', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);

  gameboard.placeShip(ship, 0, 0);
  gameboard.receiveAttack(0, 1);

  const currentBoard = gameboard.getBoard();
  expect(currentBoard[0][1]).toBe(ship);
  expect(currentBoard[1][0]).toBe(null);
  gameboard.receiveAttack(1, 0);
  expect(currentBoard[1][0]).toBe('o');
  expect(gameboard.checkAllShipsSunk()).toBe(false);

});
