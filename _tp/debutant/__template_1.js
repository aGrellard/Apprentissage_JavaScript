
// ##########################################################
// FIXME split, reduce, map, join
// https://peridot-ravioli-f95.notion.site/Adn-eb31a2970e1e4bcfbdf05140ca466d66?pvs=25
// a partir de la séquence A,C,G,T
// compter les occurence de la string reçu en entrée
// sortie pour AACT :
// "2 1 0 1"
let ADN = "AACT"
let split = undefined;
let result = undefined;
console.log(JSON.stringify(result, 2))

// ##########################################################
// FIXME split sort join
// https://peridot-ravioli-f95.notion.site/Anagramme-37927e17137b4a7cabd15fe7fcda4eff?pvs=25
// déterminer si deux chaînes de caractères sont des anagrammes l'une de l'autre, c'est-à-dire si elles contiennent les mêmes lettres dans un ordre différent.
// ["listen", "silent"]
// sortie :
// true
// ["hello", "bello"]
// sortie :
// false
const anagrams = ["listen", "silent"]
if (undefined) {
    if (undefined) {
        console.log("c'est un anagrame")
    }else console.log("ce n'est pas un anagrame")
}

// ##########################################################
// FIXME trim split(regex) filter
// https://peridot-ravioli-f95.notion.site/Comptage-des-mots-9d2f94c95f7e4c7aa08d984d814ede82?pvs=25
// compter le nombre de mots dans une chaîne de caractères 

// ##########################################################
// FIXME Set, substring
// https://peridot-ravioli-f95.notion.site/Comptage-de-sous-cha-nes-uniques-c77fe17be46c48159adb8b19548e2a26?pvs=25
// compter le nombre de sous-chaînes uniques d'une longueur donnée dans une chaîne de caractères.
// "abcabc" 3 ("abc", "bca", "cab")
// "abacab" 4 ("ab", "ba", "ac", "ca")
// "aaaa"   1 ("aa")
s = "abcabc"
k = 3
const essemble = undefined;
console.log(essemble)

// ##########################################################
// FIXME String.includes
// compter le nombre de voyelles (a, e, i, o, u) dans une chaîne de caractères donnée.
// Exemple d'utilisation
// "hello" // 2
// "world" // 1
// "AEIOU" // 5

// ##########################################################
// FIXME split, reverse, join
// inverser une chaine de caractére
/*
"hello" -> "olleh"
"world" -> "dlrow"
*/

// ##########################################################
// FIXME Math.max
// Écrivez une fonction en JavaScript qui prend un tableau d'entiers en entrée et retourne l'élément le plus grand de ce tableau.
let array = [10, 4, 2, 15, 6];
// solution sans Math.max

// solution avec Math.max

// ##########################################################
// FIXME Array.push Array.pop Array.length
// déterminer si une chaîne de caractères contenant uniquement des parenthèses `(` et `)` est valide.
// Une chaîne de parenthèses est considérée comme valide si chaque parenthèse ouvrante `(` a une parenthèse fermante correspondante `)` qui apparaît après elle, et vice versa.
// De plus, chaque paire de parenthèses doit être correctement imbriquée.

// Utilise une pile pour suivre les parenthèses ouvrantes
// Parcours chaque caractère de la chaîne
    // Si c'est une parenthèse ouvrante, la pousser dans la pile
    // Si c'est une parenthèse fermante, vérifier si la pile est vide
    // ou si l'élément supérieur de la pile n'est pas une parenthèse ouvrante
// Si la pile est vide, toutes les parenthèses sont correctement fermées

// Exemples d'utilisation
// console.log(isValidParentheses("()"));      // true
// console.log(isValidParentheses(")("));      // false
// console.log(isValidParentheses("(()())"));  // true
// console.log(isValidParentheses("(())()"));  // true
// console.log(isValidParentheses("(()"));     // false
// console.log(isValidParentheses("())"));     // false

// ##########################################################



// ##########################################################
let objet = {
    "voiture": 12,
    "camion": 5,
    "moto": 4,
    "velo": 22,
    "trotinette":11
}
// FIXME Objet.entries, reduce
// filtrer l'objet dont les valeurs sont > 10 et retourner un tableau avec les Propriétés filtrer de l'objet
// sortie :
// [ { voiture: 12 }, { velo: 22 }, { trotinette: 11 } ]
result = undefined;
console.log(JSON.stringify(result, 2))





