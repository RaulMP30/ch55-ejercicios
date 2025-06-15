/*
*Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
1.- Pedir al usuario que ingrese los segundos en un prompt
2.- Pedir al usuario que ingrese un mensaje para mostrar al finalizar los segundos mediante un prompt
3.-Mostrar mensaje de alarma programada
4.- Programar la alarma con setTimeout 
5.- Mostrar el mensaje al terminar el tiempo
*/

let segundos = prompt("Ingresa los segundos que quieres para programar la alarma");

segundos = parseInt(segundos);

//Comprobar que sea un número válido
if (isNaN(segundos) || segundos <= 0) {
  alert("Por favor ingresa un número de segundos válido (mayor a cero)")
} else {
  let programarMensaje = prompt("¿Qué mensaje quieres que se muestre con la alarma?");

  alert("se ha programado tu alarma para mostrarse en " + segundos + " segundos");

  //Alarma con setTimeout
  setTimeout(function () {
    alert("ALARMA: " + programarMensaje + ", " + " ya pasaron " + segundos + " segundos");
  }, segundos * 1000);

}


