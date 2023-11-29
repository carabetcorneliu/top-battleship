import { Player } from './player';
// import { Gameboard } from './gameboard';

// eslint-disable-next-line import/prefer-default-export
export function Game() {
  let playerOne;
  let playerTwo;
  let gameRunning = false;

  function htmlShipsLeft() {
    const shipsLeftToPlace = document.getElementById('shipsLeftToPlace');
    shipsLeftToPlace.innerHTML = `Ships left: ${playerOne.ships[0].length}`;
    for (let i = 1; i < playerOne.ships.length; i += 1) {
      shipsLeftToPlace.innerHTML += `, ${playerOne.ships[i].length}`;
    }
  }

  function mockPlaceShipsPlayerOne() {
    playerOne.board.placeShip(playerOne.ships[0], 0, 0);
    playerOne.board.placeShip(playerOne.ships[1], 1, 0);
    playerOne.board.placeShip(playerOne.ships[2], 2, 0);
    playerOne.board.placeShip(playerOne.ships[3], 3, 0);
    playerOne.board.placeShip(playerOne.ships[4], 4, 0);
    playerOne.board.placeShip(playerOne.ships[5], 5, 0);
    playerOne.board.placeShip(playerOne.ships[6], 6, 0);
    playerOne.board.placeShip(playerOne.ships[7], 7, 0);
    playerOne.board.placeShip(playerOne.ships[8], 8, 0);
    playerOne.board.placeShip(playerOne.ships[9], 9, 0);
  }

  function mockPlaceShipsPlayerTwo() {
    playerTwo.board.placeShip(playerTwo.ships[0], 0, 9);
    playerTwo.board.placeShip(playerTwo.ships[1], 1, 9);
    playerTwo.board.placeShip(playerTwo.ships[2], 2, 9);
    playerTwo.board.placeShip(playerTwo.ships[3], 3, 9);
    playerTwo.board.placeShip(playerTwo.ships[4], 4, 8);
    playerTwo.board.placeShip(playerTwo.ships[5], 5, 8);
    playerTwo.board.placeShip(playerTwo.ships[6], 6, 8);
    playerTwo.board.placeShip(playerTwo.ships[7], 7, 7);
    playerTwo.board.placeShip(playerTwo.ships[8], 8, 7);
    playerTwo.board.placeShip(playerTwo.ships[9], 9, 6);
  }

  function getPlayerOneBoard() {
    return playerOne.board.getBoard();
  }

  function getPlayerTwoBoard() {
    return playerTwo.board.getBoard();
  }

  // function populateBoard(cells) {
  // return mockPlaceShipsPlayerOne();
  // }

  // function playerOnePlaceShips(row, cell, direction) {
  //   htmlShipsLeft();
  //   console.log(`${row} + ${cell} + ${direction}`);
  // }

  function searchCellToAttackPlayerOne() {
    const playerTwoAttack = Math.floor(Math.random() * 100);
    const rowAttack = Math.floor(playerTwoAttack / 10);
    const cellAttack = playerTwoAttack % 10;
    if (playerOne.board.board[rowAttack][cellAttack] !== 'o'
      && playerOne.board.board[rowAttack][cellAttack] !== 'x') {
      console.log(`Player-2 attacked r${rowAttack} c${cellAttack}`);
      playerOne.board.receiveAttack(rowAttack, cellAttack);
      if (playerOne.board.checkAllShipsSunk()) {
        alert('Player 2 wins!');
        gameRunning = false;
      }
    } else {
      searchCellToAttackPlayerOne();
    }
  }

  function playerOneAttack(row, cell) {
    playerTwo.board.receiveAttack(row[1], cell[1]);
    if (playerTwo.board.checkAllShipsSunk()) {
      alert('Player 1 wins!');
      gameRunning = false;
    }
    searchCellToAttackPlayerOne();
  }

  function init() {
    playerOne = new Player();
    playerTwo = new Player();
    gameRunning = true;

    mockPlaceShipsPlayerOne();
    mockPlaceShipsPlayerTwo();
  }

  return {
    gameRunning,
    init,
    htmlShipsLeft,
    playerOneAttack,
    getPlayerOneBoard,
    getPlayerTwoBoard,
    // populateBoard,
    // playerOnePlaceShips,
  };
}
