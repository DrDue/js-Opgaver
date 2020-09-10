'use strict'

function play( j ) {
  let dice = [ 0, 0, 0, 0, 0, 0, 0 ]

  for ( let i = 0; i < j; i++ ) {
    let x = Math.random();
    x = Math.floor( x * 1 + 1 );
    dice[ x ]++;
    console.log( dice );
    var n = dice.includes( j );
  }
  return dice;
}
