'use strict'

const temperature = 21.3
const fruits = ['pomme', 'poire', 'orange']

console.clear();

console.log("Salut");
console.log(temperature);
console.log(fruits);
console.log("La temperature est ", temperature);
console.log("La collection de fruits est", fruits);
console.log("<h1>Pas d'inerpreteur HTML</h1>");
console.log(18, '"dix-huit"', true, null, undefined);
console.group("Ceci ets un groupe a part");
console.log("Contenu du groupe");
console.groupEnd();
console.group("Ceci ets un second groupe a part (ferme par defaut)");
console.log("Contenu du second groupe");