'use strict';
// document.write( `<h1>Assignments</h1>` );
//
// document.write( `<h2>JS.Arrays.1</h2>` );
//
// document.write( `<p>Flip coin: ${flipCoin()}</p>` );
// document.write( `<p>Roll die: ${rollDice()}</p>` );
//
//
// document.write( `<hr/>` );
//
// document.write( `<h2>JS.Arrays.2</h2>` );
//
// let s = prompt( 'tilføj det ord du vil finde ud af om er et palindrom' );
// document.write( `<p>Is ${s} a palindrome: ${isPalindrome(s)}</p>` );
//
// document.write( `<hr/>` );

document.write( `<h2>JS.Arrays.3</h2>` );

let x = Number( window.prompt( `How many time do you wanna roll the dice?` ) );
let arr = play( x );
if ( x in arr ) {
  document.write( `alle terninger har ramt den samme :o` );
} else {
  document.write( `Alle terninger har ikke slået det samme :(` );
}
