/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n// import { Gameboard } from './gameboard';\n\n// eslint-disable-next-line import/prefer-default-export\nfunction Game() {\n  var playerOne;\n  var playerTwo;\n  var gameRunning = false;\n  function htmlShipsLeft() {\n    var shipsLeftToPlace = document.getElementById('shipsLeftToPlace');\n    shipsLeftToPlace.innerHTML = \"Ships left: \".concat(playerOne.ships[0].length);\n    for (var i = 1; i < playerOne.ships.length; i += 1) {\n      shipsLeftToPlace.innerHTML += \", \".concat(playerOne.ships[i].length);\n    }\n  }\n  function mockPlaceShipsPlayerOne() {\n    playerOne.board.placeShip(playerOne.ships[0], 0, 0);\n    playerOne.board.placeShip(playerOne.ships[1], 1, 0);\n    playerOne.board.placeShip(playerOne.ships[2], 2, 0);\n    playerOne.board.placeShip(playerOne.ships[3], 3, 0);\n    playerOne.board.placeShip(playerOne.ships[4], 4, 0);\n    playerOne.board.placeShip(playerOne.ships[5], 5, 0);\n    playerOne.board.placeShip(playerOne.ships[6], 6, 0);\n    playerOne.board.placeShip(playerOne.ships[7], 7, 0);\n    playerOne.board.placeShip(playerOne.ships[8], 8, 0);\n    playerOne.board.placeShip(playerOne.ships[9], 9, 0);\n  }\n  function mockPlaceShipsPlayerTwo() {\n    playerTwo.board.placeShip(playerTwo.ships[0], 0, 9);\n    playerTwo.board.placeShip(playerTwo.ships[1], 1, 9);\n    playerTwo.board.placeShip(playerTwo.ships[2], 2, 9);\n    playerTwo.board.placeShip(playerTwo.ships[3], 3, 9);\n    playerTwo.board.placeShip(playerTwo.ships[4], 4, 8);\n    playerTwo.board.placeShip(playerTwo.ships[5], 5, 8);\n    playerTwo.board.placeShip(playerTwo.ships[6], 6, 8);\n    playerTwo.board.placeShip(playerTwo.ships[7], 7, 7);\n    playerTwo.board.placeShip(playerTwo.ships[8], 8, 7);\n    playerTwo.board.placeShip(playerTwo.ships[9], 9, 6);\n  }\n  function getPlayerOneBoard() {\n    return playerOne.board.getBoard();\n  }\n  function getPlayerTwoBoard() {\n    return playerTwo.board.getBoard();\n  }\n\n  // function populateBoard(cells) {\n  // return mockPlaceShipsPlayerOne();\n  // }\n\n  // function playerOnePlaceShips(row, cell, direction) {\n  //   htmlShipsLeft();\n  //   console.log(`${row} + ${cell} + ${direction}`);\n  // }\n\n  function searchCellToAttackPlayerOne() {\n    var playerTwoAttack = Math.floor(Math.random() * 100);\n    var rowAttack = Math.floor(playerTwoAttack / 10);\n    var cellAttack = playerTwoAttack % 10;\n    if (playerOne.board.board[rowAttack][cellAttack] !== 'o' && playerOne.board.board[rowAttack][cellAttack] !== 'x') {\n      console.log(\"Player-2 attacked r\".concat(rowAttack, \" c\").concat(cellAttack));\n      playerOne.board.receiveAttack(rowAttack, cellAttack);\n      if (playerOne.board.checkAllShipsSunk()) {\n        alert('Player 2 wins!');\n        gameRunning = false;\n      }\n    } else {\n      searchCellToAttackPlayerOne();\n    }\n  }\n  function playerOneAttack(row, cell) {\n    playerTwo.board.receiveAttack(row[1], cell[1]);\n    if (playerTwo.board.checkAllShipsSunk()) {\n      alert('Player 1 wins!');\n      gameRunning = false;\n    }\n    searchCellToAttackPlayerOne();\n  }\n  function init() {\n    playerOne = new _player__WEBPACK_IMPORTED_MODULE_0__.Player();\n    playerTwo = new _player__WEBPACK_IMPORTED_MODULE_0__.Player();\n    gameRunning = true;\n    mockPlaceShipsPlayerOne();\n    mockPlaceShipsPlayerTwo();\n  }\n  return {\n    gameRunning: gameRunning,\n    init: init,\n    htmlShipsLeft: htmlShipsLeft,\n    playerOneAttack: playerOneAttack,\n    getPlayerOneBoard: getPlayerOneBoard,\n    getPlayerTwoBoard: getPlayerTwoBoard\n    // populateBoard,\n    // playerOnePlaceShips,\n  };\n}\n\n//# sourceURL=webpack://top-battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n// eslint-disable-next-line import/prefer-default-export\nvar Gameboard = /*#__PURE__*/function () {\n  function Gameboard() {\n    _classCallCheck(this, Gameboard);\n    this.board = Array.from({\n      length: 10\n    }, function () {\n      return Array(10).fill(null);\n    });\n  }\n  _createClass(Gameboard, [{\n    key: \"placeShip\",\n    value: function placeShip(ship, x, y) {\n      for (var i = 0; i < ship.length; i += 1) {\n        this.board[x][y + i] = ship;\n      }\n    }\n  }, {\n    key: \"getBoard\",\n    value: function getBoard() {\n      return this.board;\n    }\n  }, {\n    key: \"receiveAttack\",\n    value: function receiveAttack(x, y) {\n      if (this.board[x][y] === null) {\n        this.board[x][y] = 'o';\n        console.log(\"Missed on r\".concat(x, \" c\").concat(y));\n      } else if (this.board[x][y] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship && this.board[x][y] !== 'x') {\n        this.board[x][y].hit();\n        this.board[x][y] = 'x';\n        console.log(\"Ship got hit on r\".concat(x, \" c\").concat(y));\n      }\n    }\n  }, {\n    key: \"checkAllShipsSunk\",\n    value: function checkAllShipsSunk() {\n      var currentBoard = this.board;\n      for (var i = 0; i < currentBoard.length; i += 1) {\n        for (var j = 0; j < currentBoard[i].length; j += 1) {\n          if (currentBoard[i][j] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship) {\n            return false;\n          }\n        }\n      }\n      return true;\n    }\n  }]);\n  return Gameboard;\n}();\n\n//# sourceURL=webpack://top-battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _img_refresh_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/refresh_icon.png */ \"./src/img/refresh_icon.png\");\n\n\n\nvar gameInstance = (0,_game__WEBPACK_IMPORTED_MODULE_1__.Game)();\nvar playerOnePlacedShips = false;\nvar direction = 'horizontal';\nfunction pageContent() {\n  var mainContainer = document.createElement('div');\n  mainContainer.classList.add('mainContainer');\n  function createHeader(text) {\n    var header = document.createElement('h1');\n    header.textContent = text;\n    return header;\n  }\n  function createPlayerMap(player) {\n    var playerMap = document.createElement('div');\n    for (var i = 0; i < 10; i += 1) {\n      var row = document.createElement('div');\n      row.classList.add(\"r\".concat(i));\n      for (var j = 0; j < 10; j += 1) {\n        var cell = document.createElement('div');\n        cell.classList.add(\"c\".concat(j));\n        row.appendChild(cell);\n      }\n      playerMap.appendChild(row);\n    }\n    playerMap.classList.add(player);\n    return playerMap;\n  }\n  function createPlayerZone(player) {\n    var playerZone = document.createElement('div');\n    var head = document.createElement('h2');\n    head.innerHTML = player;\n    playerZone.appendChild(head);\n    playerZone.classList.add('player-zone');\n    playerZone.appendChild(createPlayerMap(player));\n    return playerZone;\n  }\n  function createShipsAndStateContainer() {\n    var shipsAndStateContainer = document.createElement('div');\n    shipsAndStateContainer.classList.add('shipsAndStateContainer');\n    var playerOneContainer = document.createElement('div');\n    playerOneContainer.classList.add('playerOneContainer');\n    var stateContainer = document.createElement('div');\n    stateContainer.id = 'stateContainer';\n    var state = document.createElement('div');\n    state.id = 'state';\n    var shipsLeftToPlace = document.createElement('div');\n    shipsLeftToPlace.id = 'shipsLeftToPlace';\n    var shipsLeftEnemy = document.createElement('div');\n    shipsLeftEnemy.id = 'shipsLeftEnemy';\n    var refreshImg = document.createElement('img');\n    refreshImg.id = 'refreshImg';\n    refreshImg.src = _img_refresh_icon_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    state.innerHTML = \"Place Ships: \".concat(direction, \" \");\n    stateContainer.appendChild(state);\n    stateContainer.appendChild(refreshImg);\n    playerOneContainer.appendChild(stateContainer);\n    playerOneContainer.appendChild(shipsLeftToPlace);\n    shipsAndStateContainer.appendChild(playerOneContainer);\n    shipsAndStateContainer.appendChild(shipsLeftEnemy);\n    return shipsAndStateContainer;\n  }\n  function createGameContainer() {\n    var gameContainer = document.createElement('div');\n    var playerOneZone = createPlayerZone('Player-1');\n    var playerTwoZone = createPlayerZone('Player-2');\n    gameContainer.classList.add('gameContainer');\n    gameContainer.appendChild(playerOneZone);\n    gameContainer.appendChild(playerTwoZone);\n    return gameContainer;\n  }\n  var mainHeader = 'BATTLESHIP';\n  mainContainer.appendChild(createHeader(mainHeader));\n  mainContainer.appendChild(createGameContainer());\n  mainContainer.appendChild(createShipsAndStateContainer());\n  return mainContainer;\n}\n(function startGame() {\n  document.body.appendChild(pageContent());\n  gameInstance.init();\n  gameInstance.htmlShipsLeft();\n  var boardP1 = gameInstance.getPlayerOneBoard();\n  for (var i = 0; i < 10; i += 1) {\n    for (var j = 0; j < 10; j += 1) {\n      if (boardP1[i][j]) {\n        var cell = document.querySelector(\".Player-1 .r\".concat(i, \" .c\").concat(j));\n        cell.classList.add('shipP1');\n      }\n    }\n  }\n\n  // const boardP2 = gameInstance.getPlayerTwoBoard();\n  // console.log(boardP2);\n\n  // for (let i = 0; i < 10; i += 1) {\n  //   for (let j = 0; j < 10; j += 1) {\n  //     if (boardP2[i][j]) {\n  //       const cell = document.querySelector(`.Player-2 .r${i} .c${j}`);\n  //       cell.classList.add('shipP2');\n  //     }\n  //   }\n  // }\n})();\n\nfunction refreshBoard() {\n  var playerOneBoard = gameInstance.getPlayerOneBoard();\n  var playerTwoBoard = gameInstance.getPlayerTwoBoard();\n  for (var i = 0; i < 10; i += 1) {\n    for (var j = 0; j < 10; j += 1) {\n      if (playerOneBoard[i][j]) {\n        var cell = document.querySelector(\".Player-1 .r\".concat(i, \" .c\").concat(j));\n        if (playerOneBoard[i][j] === 'o') {\n          cell.innerHTML = 'o';\n        } else if (playerOneBoard[i][j] === 'x') {\n          cell.innerHTML = 'x';\n        } else {\n          cell.classList.add('shipP1');\n        }\n      }\n      if (playerTwoBoard[i][j]) {\n        var _cell = document.querySelector(\".Player-2 .r\".concat(i, \" .c\").concat(j));\n        if (playerTwoBoard[i][j] === 'o') {\n          _cell.innerHTML = 'o';\n        } else if (playerTwoBoard[i][j] === 'x') {\n          _cell.innerHTML = 'x';\n          _cell.classList.add('shipP2');\n        }\n      }\n    }\n  }\n}\nvar cells = document.querySelectorAll('.c0, .c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9');\ncells.forEach(function (cell) {\n  cell.addEventListener('click', function () {\n    if (cell.parentNode.parentNode.classList.contains('Player-1')) {\n      console.log(\"clicked on board 1 - \".concat(cell.parentNode.classList[0], \" \").concat(cell.classList[0], \" \"));\n      // player One place ship\n    } else if (cell.parentNode.parentNode.classList.contains('Player-2')) {\n      console.log(\"Player-1 attack - \".concat(cell.parentNode.classList[0], \" \").concat(cell.classList[0]));\n      gameInstance.playerOneAttack(cell.parentNode.classList[0], cell.classList[0]);\n      refreshBoard();\n    }\n  });\n});\ndocument.getElementById('refreshImg').addEventListener('click', function () {\n  if (direction === 'horizontal') {\n    direction = 'vertical';\n  } else {\n    direction = 'horizontal';\n  }\n  document.getElementById('state').innerHTML = \"Place Ships: \".concat(direction, \" \");\n});\n\n//# sourceURL=webpack://top-battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n// eslint-disable-next-line import/prefer-default-export\nvar Player = /*#__PURE__*/_createClass(function Player() {\n  _classCallCheck(this, Player);\n  this.ships = [];\n  for (var i = 1; i <= 4; i += 1) {\n    for (var j = 4; j >= i; j -= 1) {\n      this.ships.push(new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(i));\n    }\n  }\n  this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard();\n});\n\n//# sourceURL=webpack://top-battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Ship = /*#__PURE__*/function () {\n  function Ship(length) {\n    _classCallCheck(this, Ship);\n    this.length = length;\n    this.hits = 0;\n  }\n  _createClass(Ship, [{\n    key: \"hit\",\n    value: function hit() {\n      this.hits += 1;\n      return this.hits;\n    }\n  }, {\n    key: \"isSunk\",\n    value: function isSunk() {\n      return this.hits === this.length;\n    }\n  }]);\n  return Ship;\n}();\n\n//# sourceURL=webpack://top-battleship/./src/ship.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/pngkit_wrinkled-paper-png_9463665.png */ \"./src/img/pngkit_wrinkled-paper-png_9463665.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  background-color: rgb(219, 216, 216);\n  display: flex;\n  justify-content: center;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n.gameContainer {\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n}\n\n.playerOneContainer {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.shipsAndStateContainer {\n  margin-top: 50px;\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n}\n\n#refreshImg {\n  cursor: pointer;\n  width: 18px;\n  background-color: white;\n}\n\n.shipP1 {\n  background-color: rgb(130, 130, 247) !important;\n}\n\n.shipP2 {\n  background-color: rgb(247, 130, 237) !important;\n}\n\n#stateContainer {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  width: 37%;\n}\n\n.playerOneContainer, \n#shipsLeftEnemy {\n  width: 50%;\n  padding: 7px 7px 7px 5px;\n  font-size: large;\n  color: white;\n  font-weight: bold;\n  background-color: rgb(88, 88, 88);\n}\n\n#shipsLeftEnemy {\n  background-color: rgb(255, 110, 110);\n}\n\n.Player-1,\n.Player-2 {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.Player-1 > div,\n.Player-2 > div {\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n}\n\n.c0,\n.c1,\n.c2,\n.c3,\n.c4,\n.c5,\n.c6,\n.c7,\n.c8,\n.c9 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(152, 153, 153);\n  width: 50px;\n  aspect-ratio: 1/1;\n  cursor: pointer;\n  border: 1px solid rgb(83, 83, 83);\n}\n\n.Player-2 .c0:hover,\n.Player-2 .c1:hover,\n.Player-2 .c2:hover,\n.Player-2 .c3:hover,\n.Player-2 .c4:hover,\n.Player-2 .c5:hover,\n.Player-2 .c6:hover,\n.Player-2 .c7:hover,\n.Player-2 .c8:hover,\n.Player-2 .c9:hover {\n  background-color: rgb(247, 68, 68);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/img/refresh_icon.png":
/*!**********************************!*\
  !*** ./src/img/refresh_icon.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"7cd92152550ebfc7077059ae3d1fa5c8.png\");\n\n//# sourceURL=webpack://top-battleship/./src/img/refresh_icon.png?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/img/pngkit_wrinkled-paper-png_9463665.png":
/*!*******************************************************!*\
  !*** ./src/img/pngkit_wrinkled-paper-png_9463665.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5fe05814e1d73539c2ce.png\";\n\n//# sourceURL=webpack://top-battleship/./src/img/pngkit_wrinkled-paper-png_9463665.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;