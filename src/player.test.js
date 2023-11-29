/* eslint-disable */
import { Player } from './player';
import { Ship } from './ship';
import { Gameboard } from './gameboard';

test('player exist', () => {
  const player = new Player();
  expect(player).toBeTruthy();
});

it('populates the ships array with Ship objects', () => {
  // Create a new instance of the Game
  const player = new Player();

  // Access the ships array from the instance
  const ships = player.ships;

  // Iterate over each ship in the array
  ships.forEach((ship) => {
    // Check if each ship is an instance of the Ship class
    expect(ship).toBeInstanceOf(Ship);

    // Additional checks if needed
    // For example, you can check if the length of each ship matches the expected values
    expect(ship.length).toBeGreaterThanOrEqual(1);
  });

  expect(ships).toBe(10);
});