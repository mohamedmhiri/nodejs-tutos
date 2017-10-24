'use strict';

/**
 * destruction which allows us to import 
 * a part from the imported module 
 * we can also rename it by adding 
 * function_name:alias 
 * we can also give an alias 
 * to a class thanks to { A as A_Alias}
 */
/*const {doThat, getItDone} = require('./first-module');
doThat();
getItDone();*/

/*const configurableMod = require ( './configurable-module' );
const configureA = configurableMod( {logPrefix : 'A>'});
configureA.log (' test !');
const configureB = configurableMod( {logPrefix : 'B>'});
configureB.log (' test 2 !'); */
const firstMod1 = require ('./first-module');
const firstMod2 = require ('./first-module');

firstMod1.put ( "Peace unto you" );
console.log ( firstMod2.get() );