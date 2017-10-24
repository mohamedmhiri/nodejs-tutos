"use strict";

const template = 
`
<div class="${getClass()}">
  <h1>Example</h1>
    <p>I'm a pure JS & HTML template!</p>
</div>
`

function getClass () {
    // Check application state, calculate a class based on that state
    return "some-stateful-class";
}

console.log(template);

// 'This string doesn't contain a newline!\n' -- Note that \n is printed literally
const unescaped = String.raw`This ${string()} doesn't contain a newline!\n`
const escaped = `This ${string()} doesn't contain a newline!\n` ;
function string () { return "string"; }

console.log(unescaped);
console.warn(escaped);
