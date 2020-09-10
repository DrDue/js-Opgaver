'use strict';
document.write( `<h1>Assignments</h1>` );

document.write( `<h2>JS.Arrays.1</h2>` );

document.write( `<p>Flip coin: ${flipCoin()}</p>` );
document.write( `<p>Roll die: ${rollDice()}</p>` );

document.write( `<hr/>` );



document.write( `<h2>JS.Arrays.2</h2>` );

let s = prompt( 'tilføj det ord du vil finde ud af om er et palindrom' );
document.write( `<p>Is ${s} a palindrome: ${isPalindrome(s)}</p>` );

document.write( `<hr/>` );



document.write( `<h2>JS.Arrays.3</h2>` );

let x = Number( window.prompt( `How many time do you wanna roll the dice?` ) );
let arr = play( x );
if ( arr.includes( x ) ) {
  document.write( `<p>alle terninger har ramt den samme :o</p>` );
} else {
  document.write( `<p>Alle terninger har ikke slået det samme :(</p>` );
}

let y = Number( window.prompt( `What dice number (1-6) will you see the amount it's been rolled?` ) );
document.write( `<p>the number ${y} has been rolled ${arr[y]} times</p>` );



document.write( `<h2>JS.Loops.2.2</h2>` );

let arg = Number( window.prompt( 'Add a number to see if its a prime' ) );

let start = new Date();
let b = isPrime( arg );
let stop = new Date();
let elapsed = stop - start;

document.write( `Is ${arg} a prime: ${b} <br>` );
document.write( `It took ${elapsed} miliseconds` )

document.write( `<hr/>` );
