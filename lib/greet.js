/**
 * Import required libraries just below this comment block.
 * Make sure that they're assigned to the variables expected below!
 */

 const _ = require("lodash")

function greet(greeting, greetee) {
  return `${greeting}, ${greetee}!`;
}

 _.curry(greet);

module.exports =  _.curry(greet);