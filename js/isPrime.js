'use strict'

const isPrime = function ( arg ) {

  let i = 1;
  let x = 6 * i - 1;
  let y = 6 * i + 1;

  while ( i < Math.sqrt( arg ) ) {
    if ( arg === 2 || arg === 3 ) {
      return true;

    } else if ( arg % x === 0 || arg % y == 0 ) {
      return false;
    }
    i++;
    x = 6 * i - 1;
    y = 6 * i + 1;
  }
  return true;
}
