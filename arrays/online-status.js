/*
Online status
 

Display online status for a list of users.
 

Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
 */

function onlineStatus(usuarios) {
  const total = usuarios.length;

  if (total === 0) {
    return 'Nadie está en línea';
  } else if (total === 1) {
    return `${usuarios[0]} en línea`;
  } else if (total === 2) {
    return `${usuarios[0]} y ${usuarios[1]} en línea`;
  } else {
    return `${usuarios[0]}, ${usuarios[1]} y ${total - 2} más en línea`;
  }
}

// Ejemplos:
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
console.log(onlineStatus(['Raúl', 'Juanito']));
console.log(onlineStatus([]));

