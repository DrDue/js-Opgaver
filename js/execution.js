'use strict';

document.write( `<p>Flip coin: ${play(2)}</p>` );
document.write( `<p>Flip coin: ${play(2)}</p>` );
document.write( `<p>Flip coin: ${play(2)}</p>` );

document.write( `<hr/>` );

document.write( `<p>Throw die: ${play(6)}</p>` );
document.write( `<p>Throw die: ${play(6)}</p>` );
document.write( `<p>Throw die: ${play(6)}</p>` );
document.write( `<p>Throw die: ${play(6)}</p>` );

document.write( `<hr/>` );

document.write( `<p>Spin the wheel: ${play(37)}</p>` );

document.write( `<hr/>` );

document.write( `<h2>Temps</h2>` );
let c = Number( window.prompt( 'Enter temp in C' ) );
document.write( `<p>${c} &deg;C = ${C2F(c)}&deg;F</p>` );
let f = Number( window.prompt( 'Enter temp in F' ) );
document.write( `<p>${f} &deg;F = ${F2C(f)}&deg;C</p>` );
