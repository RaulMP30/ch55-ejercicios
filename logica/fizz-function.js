/*
*Reto de Programación: FizzBuzz
*Descripción:

Escribe un programa que recorra los números del 1 al 100 y aplique las siguientes reglas:

Si el número es múltiplo de 3, imprime "Fizz".

Si el número es múltiplo de 5, imprime "Buzz".

Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".

Si no es múltiplo de ninguno, imprime el número tal cual

1.- Entrada: 100 números
2.- Crear un bucle que recorra 100 números
3.- Si el número es múltiplo de 3, imprime "Fizz".
 3.1.-ocupar la expresión numero % 3
 3.2.- Verdadero si el módulo es igual a 0
4.- Si el número es múltiplo de 5, imprime "Buzz".
 4.1.-Ocupar la expresión numero % 5
 4.2.- Es verdadero si el módulo es igual a 0
5.- Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".
 5.1.- Ocupar la expresion numero % 3 y modulo % 5
 5.2.- Es verdadero solo y solo si ambas expresiones son igual a 0
6.- Si no es múltiplo de ninguno, imprime el número tal cual

 */


//* Firma de la función

const fizzBuzz = (counterNumber) => {
  let counter = 1;
  do {
    if (counter % 3 === 0 && counter % 5 === 0) {
      console.log(`El número ${counter} es FizzBuzz`);
    } else if (counter % 3 === 0) {
      console.log(`El número ${counter} es Fizz`);
    } else if (counter % 5 === 0) {
      console.log(`El número ${counter} es Buzz`);
    } else {
      console.log(counter);
    }
    counter++;
  } while (counter <= counterNumber);

};

console.log("50 veces");
fizzBuzz(50);

console.log("200 veces");
fizzBuzz(200);