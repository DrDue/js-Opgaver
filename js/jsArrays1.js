'use strict'
var coinFlip = [ 1, 2 ];
var diceRoll = [ 1, 2, 3, 4, 5, 6 ];

// Flipping coins
function flipCoin() {
  coinFlip = Math.random();
  coinFlip = Math.floor( coinFlip * 2 + 1 );
  return coinFlip;
}

// Rolling Dice
function rollDice() {
  diceRoll = Math.random();
  diceRoll = Math.floor( diceRoll * 6 + 1 );
  return diceRoll;
}
