'use strict'

function play( j ) {
  let dice = [ 0, 0, 0, 0, 0, 0, 0 ]

  for ( let i = 0; i < j; i++ ) {
    let x = Math.random();
    x = Math.floor( x * 6 + 1 );
    dice[ x ]++;
    console.log( dice );
  }
  return dice;
}
