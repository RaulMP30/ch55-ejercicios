/* 
*Sum of Resistors in Series
 

Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.

1.- Un array de resistencias
2.- Usando Math.abs obtener el valor absoluto de los elementos del array
 2.1 Usar un map para sacar todos los valores absolutos
3.- reduce o usar ciclos para hacer la suma
4.- Retornar un mensaje del tipo `"15 ohms"`

*/

function sumOfResistors(resistorsArray) {
  const resistorsAbs = resistorsArray.map((resistor) => Math.abs(resistor));
  console.log(resistorsAbs);
  const totalResistance = resistorsAbs.reduce((total, current) => total + current, 0);
  return `${totalResistance} ohms`
}

console.log(sumOfResistors([-1, 5, -6, 3, -9]));
console.log(sumOfResistors([-1, 5, -10, -5, 9]));
console.log(sumOfResistors([-4, 5, -16, 13, -2]));
