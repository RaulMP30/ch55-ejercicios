/*Positive dominance in Array
 

Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
 */

function dominanciaPositiva(arrayNumeros) {
  let numerosPositivos = 0;

  for (let i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] > 0) {
      numerosPositivos++;
    }
  }
  return numerosPositivos > arrayNumeros.length / 2;
}

console.log(dominanciaPositiva([-1, -3, -5, 4, 6767]));
console.log(dominanciaPositiva([3, 45, -6, 78]));
console.log(dominanciaPositiva([-5, -100, -9, 6, 90, 12]));
console.log(dominanciaPositiva([5, 67, 89, 12, 10]));