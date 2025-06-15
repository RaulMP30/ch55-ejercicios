/*
*Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
1.- Solicitar 10 números por medio de prompts en un ciclo for
2.- Almacenarlos en un array
3.- Utilizar un ciclo for para recorrer el array
4.- determinar y mostar el número más alto de los números dados.

*/

let arrayNumeros = [];

//ciclo para pedir números
for (let i = 0; i < 10; i++) {
  let numerosDados = prompt(`Ingresa el número ${i + 1}:`);
  numerosDados = parseFloat(numerosDados);

  if (isNaN(numerosDados)) {
    alert("El número no es válido, por favor ingresa otro");
    i--;
  } else {
    arrayNumeros.push(numerosDados);
  }
}

let numeroMayor = arrayNumeros[0];

//ciclo para verificar el número mayor
for (let i = 1; i < arrayNumeros.length; i++) {
  if (arrayNumeros[i] > numeroMayor) {
    numeroMayor = arrayNumeros[i];
  }
}

alert(`El número mayor es: ${numeroMayor}`);