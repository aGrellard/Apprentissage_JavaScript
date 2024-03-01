
Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01
Test 1
Entrée
Sortie attendue

s

t

02
Test 2
Entrée
Sortie attendue

a

b

03
Test 3
Entrée
Sortie attendue

f

g

04
Test 4
Entrée
Sortie attendue

z

a

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const letter = readline();

if (letter.charCodeAt(0)=="z".charCodeAt(0))
    console.log(String.fromCharCode(letter.charCodeAt(0)-25));
else
    console.log(String.fromCharCode(letter.charCodeAt(0)+1));
