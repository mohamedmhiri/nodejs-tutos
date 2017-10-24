/*"use strict";

// Extending Array lets us use 'length' in an intuitive way,
//   and also gives us access to built-in array methods, like 
//   map, filter, reduce, push, pop, etc.
class FoodSet extends Array {

    // ...foods collects arbitrary number of arguments into an array
    //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
    constructor(...foods) {
        super();
        this.foods = [];
        foods.forEach((food) => this.foods.push(food))
    }
}
class Food {

    constructor (name, protein, carbs, fat) {
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
    }

    toString () {  
    return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`; 
    }

    print () {  
    console.log( this.toString() );  
    }
}

const foods = new FoodSet(new Food('Fish', 26, 0, 16), new Food('Hamburger', 26, 48, 24)) ;
console.log( foods ) ;*/
"use strict";

// Extending Array lets us use 'length' in an intuitive way,
//   and also gives us access to built-in array methods, like 
//   map, filter, reduce, push, pop, etc.
class FoodSet extends Array {

    // ...foods collects arbitrary number of arguments into an array
    //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
    constructor(...foods) {
        super();
        this.foods = [];
        foods.forEach((food) => this.foods.push(food))
    }

     // Custom iterator behavior. This isn't very *useful* iterator behavior, mind you, but it's a fine example.
     // The asterisk *must* precede the name of the key.
     * [Symbol.iterator] () {
        let position = 0;
        while (position < this.foods.length) {
          if (position === this.foods.length) {
              return "Done!"
          } else {
              yield `${this.foods[ position++ ]} is the food item at position ${position}`;
          }
         }
     }

      // Return an object of type Array, rather than type FoodSet, when users
      //   use built-in array methods. This makes our FoodSet interoperable
      //   with code expecting an array.
      static get [Symbol.species] () {
          return Array;
      }
}
class Food {

    constructor (name, protein, carbs, fat) {
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
    }

    toString () {  
    return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`; 
    }

    print () {  
    console.log( this.toString() );  
    }
}
const foodset = new FoodSet(new Food('Fish', 26, 0, 16), new Food('Hamburger', 26, 48, 24));

// When you use for . . . of with a FoodSet, JavaScript will iterate using the function you 
//    assoiated with the key [Symbol.iterator].
for (let food of foodset) {
  // Prints all of our foods
  console.log( food );
}

// JavaScript creates and returns a new object when you `filter` on an array, 
//    which it creates using the default constructor of the object you execute `filter` on.
//
//    Since most code would expect filter to return an Array, we can tell JavaScript
//       to use the Array constructor when implicitly creating a new instance by 
//       overriding [Symbol.species].
const healthy_foods = foodset.filter((food) => food.name !== 'Hamburger');

console.log( healthy_foods instanceof FoodSet ); // 
console.log( healthy_foods instanceof Array );