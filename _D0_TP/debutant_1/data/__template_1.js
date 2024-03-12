
// ##########################################################
// FIXME split, reduce, map, join
// https://peridot-ravioli-f95.notion.site/Adn-eb31a2970e1e4bcfbdf05140ca466d66?pvs=25
// https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/adn.md
// a partir de la séquence A,C,G,T
// compter les occurence de la string reçu en entrée
// sortie pour AACT :
// "2 1 0 1"
//
function countNucleotides_2(s) {
    return undefined;
}
console.log(countNucleotides_2("AACT"))
// **********************************************************

// ##########################################################
// FIXME split sort join
// https://peridot-ravioli-f95.notion.site/Anagramme-37927e17137b4a7cabd15fe7fcda4eff?pvs=25
// https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/anagramme.md
// déterminer si deux chaînes de caractères sont des anagrammes l'une de l'autre, c'est-à-dire si elles contiennent les mêmes lettres dans un ordre différent.
// ["listen", "silent"]
// sortie :
// true
// ["hello", "bello"]
// sortie :
// false
//
function estAnagramme(str1, str2) {
    return undefined;
}
console.log(estAnagramme("listen", "silent")); // true
console.log(estAnagramme("hello", "bello")); // false
// **********************************************************

// ##########################################################
// FIXME trim split(regex) filter
// https://peridot-ravioli-f95.notion.site/Comptage-des-mots-9d2f94c95f7e4c7aa08d984d814ede82?pvs=25
// https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/comptage_de_mots.md
// compter le nombre de mots dans une chaîne de caractères 
//
function countWords(str) {
    return undefined;
}
console.log(countWords("Hello world")); // 2
console.log(countWords("   Bonjour le monde   ")); // 3
console.log(countWords("")); // 0
console.log(countWords("Ceci est    un test.")); // 4
// **********************************************************


// ##########################################################
// FIXME Set, substring
// https://peridot-ravioli-f95.notion.site/Comptage-de-sous-cha-nes-uniques-c77fe17be46c48159adb8b19548e2a26?pvs=25
// https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/comptage_sousChaines_unique.md
// compter le nombre de sous-chaînes uniques d'une longueur donnée dans une chaîne de caractères.
// "abcabc" 3 ("abc", "bca", "cab")
// "abacab" 4 ("ab", "ba", "ac", "ca")
// "aaaa"   1 ("aa")
//
function uniqueSubstringCount(str, max) {
    return undefined;
}
console.log(uniqueSubstringCount("abcabc", 3)) // ("abc", "bca", "cab")
console.log(uniqueSubstringCount("abacab", 4)) // "ab", "ba", "ac", "ca")
console.log(uniqueSubstringCount("aaaa", 1)) // ("aa")
// **********************************************************

// ##########################################################
// FIXME String.includes
// https://peridot-ravioli-f95.notion.site/Comptage-de-voyelles-24530530ae524d6c8882e21dd945d049?pvs=25
// https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/compter_voyelles.md
// compter le nombre de voyelles (a, e, i, o, u) dans une chaîne de caractères donnée.
// Exemple d'utilisation
// "hello" // 2
// "world" // 1
// "AEIOU" // 5
//
function countVowels(str) {
    return undefined
}
console.log(countVowels("hello")) // 2
console.log(countVowels("world")) // 1
console.log(countVowels("AEIOU")) // 5
// **********************************************************

// ##########################################################
// FIXME split, reverse, join
// https://peridot-ravioli-f95.notion.site/Inversion-de-cha-ne-80d38d3d7dfc4644974d5a953f478370?pvs=25
// https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/inversion_chaine.md
// inverser une chaine de caractére
//  "hello" -> "olleh"
//  "world" -> "dlrow"
//
function reverseString(str) {
    return undefined
}
console.log(reverseString("hello")) // olleh
console.log(reverseString("world")) // dlrow
// **********************************************************

// ##########################################################
// FIXME Math.max
// https://peridot-ravioli-f95.notion.site/Maximum-d-un-tableau-a89d7d4728d0426eb851c65f9b19ee03?pvs=25
// https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/maximum_tableau.ms
//
// Écrivez une fonction en JavaScript qui prend un tableau d'entiers en entrée et retourne l'élément le plus grand de ce tableau.
//
let array = [10, 4, 2, 15, 6];
// solution sans Math.max
function findMax_1(array) {
    return undefined
}
console.log(findMax_1(array)) // 15
// solution avec Math.max
function findMax_2(array) {
    return undefined
}
console.log(findMax_2(array)) // 15
// **********************************************************

// ##########################################################
// FIXME Array.push Array.pop Array.length
// https://peridot-ravioli-f95.notion.site/Parenth-ses-valides-902b61fdb8de4ca1875bd0abd3a42f9b?pvs=25
// https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/parentheses_valides.md
// déterminer si une chaîne de caractères contenant uniquement des parenthèses `(` et `)` est valide.
// Une chaîne de parenthèses est considérée comme valide si chaque parenthèse ouvrante `(` a une parenthèse fermante correspondante `)` qui apparaît après elle, et vice versa.
// De plus, chaque paire de parenthèses doit être correctement imbriquée.

// Utilise une pile pour suivre les parenthèses ouvrantes
// Parcours chaque caractère de la chaîne
    // Si c'est une parenthèse ouvrante, la pousser dans la pile
    // Si c'est une parenthèse fermante, vérifier si la pile est vide
    // ou si l'élément supérieur de la pile n'est pas une parenthèse ouvrante
// Si la pile est vide, toutes les parenthèses sont correctement fermées
//
function isValidParentheses(str) {
    return undefined
}
console.log(isValidParentheses("()"));      // true
console.log(isValidParentheses(")("));      // false
console.log(isValidParentheses("(()())"));  // true
console.log(isValidParentheses("(())()"));  // true
console.log(isValidParentheses("(()"));     // false
console.log(isValidParentheses("())"));     // false

// **********************************************************

// ##########################################################
// FIXME replace(regex) tolowerCase, split, reverse, join 
// https://peridot-ravioli-f95.notion.site/Palindrome-abcf2e102b8541429505105e2880e4fc
// https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/verification_palyndrome.md
//
// déterminer si une chaîne de caractères donnée est un palindrome ou non. 
// Un palindrome est une chaîne qui se lit de la même manière dans les deux sens, par exemple, "radar" ou "level".
// https://peridot-ravioli-f95.notion.site/RegEx-9c706ab7f3084c2386cb8bc9bfa5f5f9
//
function isPalindrome(s) {
    // Nettoyer la chaîne : retirer les caractères non alphabétiques et passer en minuscules
    
    // Vérifier si la chaîne nettoyée est un palindrome
    
    return undefined;
}

// Exemple d'utilisation
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// **********************************************************


// ##########################################################
let objet = {
    "voiture": 12,
    "camion": 5,
    "moto": 4,
    "velo": 22,
    "trotinette":11
}
// FIXME Objet.entries, reduce
// https://www.notion.so/
// https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/
//
// filtrer l'objet dont les valeurs sont > 10 et retourner un tableau avec les Propriétés filtrer de l'objet
// sortie :
// [ { voiture: 12 }, { velo: 22 }, { trotinette: 11 } ]
result = undefined;
console.log(JSON.stringify(result, 2)) // [ { voiture: 12 }, { velo: 22 }, { trotinette: 11 } ]
// **********************************************************

// FIXME filter map ... reduce
// https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/transformation_tableau.md
//
// Vous avez un tableau d'objets représentant des employés.
// Chaque objet contient trois propriétés : nom, departement, et salaire.
// Écrivez une fonction en JavaScript qui effectue les opérations suivantes sur ce tableau :
//
// Filtrer les employés pour ne garder que ceux du département "Technologie".
// Transformer ces employés filtrés en augmentant leur salaire de 10%.
// Calculer le salaire total de ces employés après augmentation.
//
const employes = [
    { nom: "Alice", departement: "Technologie", salaire: 1000 },
    { nom: "Bob", departement: "RH", salaire: 1200 },
    { nom: "Charlie", departement: "Technologie", salaire: 1100 },
    { nom: "David", departement: "Marketing", salaire: 1000 }
];
function salaireTotalTechnologie(employes) {
    return undefined;
}
console.log(salaireTotalTechnologie(employes)); // 2310
// **********************************************************


// FIXME new Promise New Error - for try await
// https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/promesseChaine_gestionsErreurs.md
//
// Vous travaillez sur une application web qui interagit avec une API externe pour récupérer des informations utilisateur.
// La récupération des données se fait de manière asynchrone et peut parfois échouer.
// Votre tâche consiste à écrire une fonction asynchrone qui tente de récupérer les données utilisateur et gère correctement les erreurs, tout en fournissant un mécanisme de reprise en cas d'échec.
// 
// La fonction doit essayer de récupérer les données utilisateur jusqu'à trois fois si les tentatives précédentes échouent. 
// Si toutes les tentatives échouent, la fonction doit logger une erreur et retourner null.
//
function recupererDonneesUtilisateur() {
    return undefined
}

async function obtenirDonneesUtilisateurAvecReprise(maxTentatives) {
    return undefined; 
}

// Appeler la fonction
obtenirDonneesUtilisateurAvecReprise(3);
// **********************************************************




