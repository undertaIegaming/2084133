/**
 * Exercice - chaine-caractere
 *
 * Utiliser les fonctions JavaScript pour le traitement des chaines de caractères.
 *
 * Consignes:
 *  Créer le fichier js/chaine-caractere.js à partir du code suivant.
 *  Compléter le code manquant pour obtenir le résultat de la maquette.
 *
 * Note: Seulement l'objet console est nécessaire, pas d'itération ou autre structure de contrôle
 */
'use strict'

function numOfWords(str) { 
    const words = str.match(/\S+/g); 
    if(words.length!==0){ 
        return words.length; 
    } 
    else{ 
        return 0; 
    } 
} 

const SENTENCE = 'The strength of JavaScript is that you can do anything. The weakness is that you will.'
console.log('La phrase entière ', SENTENCE);
console.log('La longueur de la chaine de caractères : ', SENTENCE.length);
console.log('La position du mot JavaScript : ', SENTENCE.search("JavaScript"));
console.log('La position du dernier is : ', SENTENCE.lastIndexOf("is"));
console.log('La dernière phrase seulement: ', SENTENCE.substr(56));
console.log('Les 10 carateres a partir du 17iem caractere: ', SENTENCE.slice(16, 27));
console.log('Combien de mots dans la phrase: ', numOfWords(SENTENCE));
console.log('Le 61iem caractere: ', SENTENCE.slice(60, 61));
console.log('Remplacer \'you\' par \'I\' dans toute la phrase: ', SENTENCE.replaceAll("you", "I"));
