/*
*Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
1.-Solicitar al usuario una palabra o frase
2.- Modificar la palabra o frase para ignorar espacios, mayúsculas y signos de puntuación
3.- Invertir la palabra o frase
4.- Comparar la palabra o frase invertida con la original para comprobar si son igual
5.- Imprimir si es un palíndromo o no
*/

function modificarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD") // Separa los acentos
    .replace(/[\u0300-\u036f]/g, "") // Elimina acentos
    .replace(/[^a-z0-9]/g, ""); // Elimina todo menos letras y números
}

//pedir palabra o frase y modificarla
let palabraFrase = prompt("Ingresa una palabra o frase para verificar si es un palíndromo:");
let textoModificado = modificarTexto(palabraFrase);

//invertir palabra o frase para comparar
let textoInvertido = textoModificado.split("").reverse().join("");

//comparar
if (textoModificado === textoInvertido) {
  alert("Es un palíndromo.");
} else {
  alert("No es un palíndromo.");
}
