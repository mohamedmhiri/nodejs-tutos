"use strict";

let asterix = "*";
for (let i = 0; i < 10 ; i++ ){
    console.log(asterix.repeat(i+1));
}
/* Since the backslash alone means "escape", we need to double it to print
  *   one. Similarly, \n in a normal string is interpreted as "newline". 
  *   */
console.log('This string \\ has fewer \\ backslashes \\ and \n breaks the line.');

// Not so, with String.raw!

console.log ( String.raw`This string \\ has too many \\ backslashes \\ and \n doesn't break the line.` ) ;