"use strict";

// Constructor  
let scotch_inventory = new Map();

// BASIC API METHODS
// Map.prototype.set (K, V) :: Create a key, K, and set its value to V.
scotch_inventory.set('Lagavulin 18', 2);
scotch_inventory.set('The Dalmore', 1);

// You can also create a map from an array of 2-element arrays.
scotch_inventory = new Map([['Lagavulin 18', 2], ['The Dalmore', 1]]);

// All maps have a size property. This tells you how many key-value pairs are stored within.
//   BE SURE TO USE 'size', NOT 'length', when you work with Map and Set.
console.log(scotch_inventory.size); // 2

// Map.prototype.get(K) :: Return the value associated with the key, K. If the key doesn't exist, return undefined.
console.log(scotch_inventory.get('The Dalmore')); // 1
console.log(scotch_inventory.get('Glenfiddich 18')); // undefined

// Map.prototype.has(K) :: Return true if map contains the key, K. Otherwise, return false.
console.log(scotch_inventory.has('The Dalmore')); // true
console.log(scotch_inventory.has('Glenfiddich 18')); // false

// Map.prototype.delete(K) :: Remove the key, K, from the map. Return true if succesful, or false if K doesn't exist.
console.log(scotch_inventory.delete('The Dalmore')); // true -- breaks my heart

// Map.prototype.clear() :: Remove all key-value pairs from the map.
scotch_inventory.clear();
console.log( scotch_inventory ); // Map {} -- long night

// ITERATOR METHODS
// Maps provide a number of ways to loop through their keys and values. 
//  Let's reset our inventory, and then explore.
scotch_inventory.set('Lagavulin 18', 1);
scotch_inventory.set('Glenfiddich 18', 1);

/* Map.prototype.forEach(callback[, thisArg]) :: Execute a function, callback, on every key-value pair in the map. 
  *   You can set the value of 'this' inside the callback by passing a thisArg, but that's optional and seldom necessary.
  *   Finally, note that the callback gets passed the VALUE and KEY, in that order. */
scotch_inventory.forEach(function (quantity, scotch) {
    console.log(`Excuse me while I sip this ${scotch}.`);
});

// Map.prototype.keys() :: Returns an iterator over the keys in the map.
const scotch_names = scotch_inventory.keys();
for (let name of scotch_names) {
    console.log(`We've got ${name} in the cellar.`);
}

// Map.prototype.values() :: Returns an iterator over the values of the map.
const quantities = scotch_inventory.values();
for (let quantity of quantities) {
    console.log(`I just drank ${quantity} of . . . Uh . . . I forget`);
}

// Map.prototype.entries() :: Returns an iterator over [key, value] pairs, provided as an array with two entries. 
//   You'll often see [key, value] pairs referred to as "entries" when people talk about maps. 
const entries = scotch_inventory.entries();
for (let entry of entries) {
    console.log(`I remember! I drank ${entry[1]} bottle of ${entry[0]}!`);
}