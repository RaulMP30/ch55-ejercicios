/*Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
*/

//Calcular con recursión

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

let numero = prompt("Por favor ingresa un número");
numero = parseInt(numero);

if (isNaN(numero) || numero < 1) {
  alert("El número no es válido, por favor ingresa otro");
} else {
  let factorialNumero = factorial(numero);
  alert(`El factorial de ${numero} es ${factorialNumero}.`)
};