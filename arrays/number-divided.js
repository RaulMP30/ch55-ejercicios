/*Number divided into halves
 

Given a number, return the number divided into its halves in an array.
 

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
 */

function numDiv(numero) {
  let mitad = numero / 2;
  return [mitad, mitad];
}

// Ejemplos:
console.log(numDiv(4));
console.log(numDiv(10));
console.log(numDiv(7));
console.log(numDiv(100));
console.log(numDiv(28));
console.log(numDiv(88));

