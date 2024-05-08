// Nombre choisi au clavier
var nb = prompt("Choisissez un nombre", "");
// Valeur initiale factorielle
var fact=1;
/* A chaque boucle, le résultat partiel est multiplié par le nombre courant (i)
puis celui-ci est décrémenté. Le calcul s'arrête quand le nombre courant =
1*/
for (var i=nb; i>1; i-=1)
fact*=i;
// Affichage du résultat
alert ("Factorielle " + nb + " = " + fact);