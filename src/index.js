import './style.css';
import { Game } from './game';
import refreshIcon from './img/refresh_icon.png';

const gameInstance = Game();
const playerOnePlacedShips = false;
let direction = 'horizontal';
function pageContent() {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('mainContainer');

  function createHeader(text) {
    const header = document.createElement('h1');
    header.textContent = text;
    return header;
  }

  function createPlayerMap(player) {
    const playerMap = document.createElement('div');
    for (let i = 0; i < 10; i += 1) {
      const row = document.createElement('div');
      row.classList.add(`r${i}`);
      for (let j = 0; j < 10; j += 1) {
        const cell = document.createElement('div');
        cell.classList.add(`c${j}`);
        row.appendChild(cell);
      }
      playerMap.appendChild(row);
    }
    playerMap.classList.add(player);
    return playerMap;
  }

  function createPlayerZone(player) {
    const playerZone = document.createElement('div');
    const head = document.createElement('h2');
    head.innerHTML = player;
    playerZone.appendChild(head);
    playerZone.classList.add('player-zone');
    playerZone.appendChild(createPlayerMap(player));
    return playerZone;
  }

  function createShipsAndStateContainer() {
    const shipsAndStateContainer = document.createElement('div');
    shipsAndStateContainer.classList.add('shipsAndStateContainer');
    const playerOneContainer = document.createElement('div');
    playerOneContainer.classList.add('playerOneContainer');
    const stateContainer = document.createElement('div');
    stateContainer.id = 'stateContainer';
    const state = document.createElement('div');
    state.id = 'state';
    const shipsLeftToPlace = document.createElement('div');
    shipsLeftToPlace.id = 'shipsLeftToPlace';
    const shipsLeftEnemy = document.createElement('div');
    shipsLeftEnemy.id = 'shipsLeftEnemy';
    const refreshImg = document.createElement('img');
    refreshImg.id = 'refreshImg';
    refreshImg.src = refreshIcon;

    state.innerHTML = `Place Ships: ${direction} `;
    stateContainer.appendChild(state);
    stateContainer.appendChild(refreshImg);
    playerOneContainer.appendChild(stateContainer);
    playerOneContainer.appendChild(shipsLeftToPlace);
    shipsAndStateContainer.appendChild(playerOneContainer);
    shipsAndStateContainer.appendChild(shipsLeftEnemy);
    return shipsAndStateContainer;
  }

  function createGameContainer() {
    const gameContainer = document.createElement('div');
    const playerOneZone = createPlayerZone('Player-1');
    const playerTwoZone = createPlayerZone('Player-2');

    gameContainer.classList.add('gameContainer');
    gameContainer.appendChild(playerOneZone);
    gameContainer.appendChild(playerTwoZone);
    return gameContainer;
  }

  const mainHeader = 'BATTLESHIP';
  mainContainer.appendChild(createHeader(mainHeader));
  mainContainer.appendChild(createGameContainer());
  mainContainer.appendChild(createShipsAndStateContainer());
  return mainContainer;
}

(function startGame() {
  document.body.appendChild(pageContent());
  gameInstance.init();
  gameInstance.htmlShipsLeft();
  const boardP1 = gameInstance.getPlayerOneBoard();

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (boardP1[i][j]) {
        const cell = document.querySelector(`.Player-1 .r${i} .c${j}`);
        cell.classList.add('shipP1');
      }
    }
  }

  // const boardP2 = gameInstance.getPlayerTwoBoard();
  // console.log(boardP2);

  // for (let i = 0; i < 10; i += 1) {
  //   for (let j = 0; j < 10; j += 1) {
  //     if (boardP2[i][j]) {
  //       const cell = document.querySelector(`.Player-2 .r${i} .c${j}`);
  //       cell.classList.add('shipP2');
  //     }
  //   }
  // }
}());

function refreshBoard() {
  const playerOneBoard = gameInstance.getPlayerOneBoard();
  const playerTwoBoard = gameInstance.getPlayerTwoBoard();

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (playerOneBoard[i][j]) {
        const cell = document.querySelector(`.Player-1 .r${i} .c${j}`);
        if (playerOneBoard[i][j] === 'o') {
          cell.innerHTML = 'o';
        } else if (playerOneBoard[i][j] === 'x') {
          cell.innerHTML = 'x';
        } else {
          cell.classList.add('shipP1');
        }
      }
      if (playerTwoBoard[i][j]) {
        const cell = document.querySelector(`.Player-2 .r${i} .c${j}`);
        if (playerTwoBoard[i][j] === 'o') {
          cell.innerHTML = 'o';
        } else if (playerTwoBoard[i][j] === 'x') {
          cell.innerHTML = 'x';
          cell.classList.add('shipP2');
        }
      }
    }
  }
}

const cells = document.querySelectorAll('.c0, .c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9');

cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    if (cell.parentNode.parentNode.classList.contains('Player-1')) {
      console.log(`clicked on board 1 - ${cell.parentNode.classList[0]} ${cell.classList[0]} `);
      // player One place ship
    } else if (cell.parentNode.parentNode.classList.contains('Player-2')) {
      console.log(`Player-1 attack - ${cell.parentNode.classList[0]} ${cell.classList[0]}`);
      gameInstance.playerOneAttack(cell.parentNode.classList[0], cell.classList[0]);
      refreshBoard();
    }
  });
});

document.getElementById('refreshImg').addEventListener('click', () => {
  if (direction === 'horizontal') { direction = 'vertical'; } else { direction = 'horizontal'; }
  document.getElementById('state').innerHTML = `Place Ships: ${direction} `;
});
