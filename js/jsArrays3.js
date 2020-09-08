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

//roll <= i

//let rolls = Number( window.prompt( `How many time do you wanna roll the dice?` ) );
// const funk123 = function ( rolls ) {
//   var dice1 = ;
//   for ( var i = 0; i < rolls; i++ ) {
//     var dieValue = [ 1, 2, 3, 4, 5, 6 ];
//     var randomRoll = Math.ceil( Math.random() * dieValue.length );
//
//     if ( randomRoll in dice1 ) {
//       dice1[ randomRoll ]++;
//     } else {
//       dice1[ randomRoll ] = 1;
//     }
//   }
//
//   console.log( dice1 );
// }
