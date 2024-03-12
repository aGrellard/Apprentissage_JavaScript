// ID: 1
// Méthode: split, reduce, map, join
// Description: a partir de la séquence A,C,G,T
//compter les occurence de la string reçu en entrée
// Expected Output:
// "2 1 0 1"
function countNucleotides_2(s) {
    return undefined;
}
console.log(countNucleotides_2("AACT"))

// ID: 2
// Méthode: split sort join
// Description: déterminer si deux chaînes de caractères sont des anagrammes l'une de l'autre, c'est-à-dire si elles contiennent les mêmes lettres dans un ordre différent.
// Expected Output:
// true
// false
function estAnagramme(str1, str2) {
    return undefined;
}
console.log(estAnagramme("listen", "silent"));
console.log(estAnagramme("hello", "bello"));

// ID: 3
// Méthode: trim split(regex) filter
// Description: compter le nombre de mots dans une chaîne de caractères
// Expected Output:
// 2
// 3
// 0
// 4
function countWords(str) {
    return undefined;
}
console.log(countWords("Hello world"));
console.log(countWords("   Bonjour le monde   "));
console.log(countWords(""));
console.log(countWords("Ceci est    un test."));

// ID: 4
// Méthode: Set, substring
// Description: compter le nombre de sous-chaînes uniques d'une longueur donnée dans une chaîne de caractères.
// Expected Output:
// Set(3) { 'abc', 'bca', 'cab' }
// Set(2) { 'ab', 'ba', 'ac', 'ca' }
// Set(1) { 'aa' }
function uniqueSubstringCount(str, max) {
    let essemble = new Set();
    for (let index = 0; index < str.length-max; index++) {
        const element = str[index];
        let substr = str.substring(index, index+max)
        essemble.add(substr)
        
    }
    let result = []
    essemble.forEach(item=>result.push(item))
    return result;
}
console.log(uniqueSubstringCount("abcabc", 3))
console.log(uniqueSubstringCount("abacab", 4))
console.log(uniqueSubstringCount("aaaa", 1))

// ID: 5
// Méthode: String.includes
// Description: compter le nombre de voyelles (a, e, i, o, u) dans une chaîne de caractères donnée.
// Expected Output:
// 2
// 1
// 5
function countVowels(str) {
    return undefined
}
console.log(countVowels("hello"))
console.log(countVowels("world"))
console.log(countVowels("AEIOU"))

// ID: 6
// Méthode: split, reverse, join
// Description: inverser une chaîne de caractère
// Expected Output:
// "olleh"
// "dlrow"
function reverseString(str) {
    return undefined
}
console.log(reverseString("hello"))
console.log(reverseString("world"))

// ID: 7
// Méthode: Math.max
// Description: Écrivez une fonction en JavaScript qui prend un tableau d'entiers en entrée et retourne l'élément le plus grand de ce tableau.
// Expected Output:
// 15
// 15
let array = [10, 4, 2, 15, 6];
function findMax_1(array) {
    return undefined
}
console.log(findMax_1(array))
function findMax_2(array) {
    return undefined
}
console.log(findMax_2(array))

// ID: 8
// Méthode: Array.push Array.pop Array.length
// Description: déterminer si une chaîne de caractères contenant uniquement des parenthèses `(` et `)` est valide.
// Expected Output:
// true
// false
// true
// true
// false
// false
function isValidParentheses(str) {
    return undefined
}
console.log(isValidParentheses("()"));
console.log(isValidParentheses(")("));
console.log(isValidParentheses("(()())"));
console.log(isValidParentheses("(())()"));
console.log(isValidParentheses("(()"));
console.log(isValidParentheses("())"));

// ID: 9
// Méthode: replace(regex) toLowerCase, split, reverse, join
// Description: déterminer si une chaîne de caractères donnée est un palindrome ou non.
// Expected Output:
// true
// false
// false
function isPalindrome(s) {
    return undefined;
}
console.log(isPalindrome("radar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));

// ID: 10
// Méthode: Object.entries, reduce
// Description: filtrer l'objet dont les valeurs sont > 10 et retourner un tableau avec les Propriétés filtrer de l'objet
// Expected Output:
// [{"voiture":12},{"velo":22},{"trotinette":11}]
let objet = {
    "voiture": 12,
    "camion": 5,
    "moto": 4,
    "velo": 22,
    "trotinette":11
}
result = undefined;
console.log(JSON.stringify(result, 2))

// ID: 11
// Méthode: filter map ... reduce
// Description: Calculer le salaire total de ces employés du département "Technologie" après une augmentation de 10%.
// Expected Output:
// 2310
const employes = [
    { nom: "Alice", departement: "Technologie", salaire: 1000 },
    { nom: "Bob", departement: "RH", salaire: 1200 },
    { nom: "Charlie", departement: "Technologie", salaire: 1100 },
    { nom: "David", departement: "Marketing", salaire: 1000 }
];
function salaireTotalTechnologie(employes) {
    return undefined;
}
console.log(salaireTotalTechnologie(employes));

