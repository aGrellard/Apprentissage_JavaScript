

// FIXME split, reduce, map, join
// a partir de la séquence A,C,G,T
// compter les occurence de la string reçu en entrée
// sortie pour AACT :
// "2 1 0 1"
let ADN = "AACT"
let split = ADN.split("").reduce((acc,val)=>{
    acc[val] = (acc[val] || 0) + 1
    return acc;
}, {A:0, C:0, G:0, T:0});
let result = ["A", "C", "G", "T"].map(item=>{return split[item]}).join(" ")
console.log(JSON.stringify(result, 2))


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
result = Object.entries(objet).reduce((acc,[key,val])=>{
   if (val >= 11) {
        acc[key] = val;
   } 
   return acc;
}, {});
console.log(JSON.stringify(result, 2))

/*

// FIXME split sort join
// déterminer si deux chaînes de caractères sont des anagrammes l'une de l'autre, c'est-à-dire si elles contiennent les mêmes lettres dans un ordre différent.
const anagrams = ["listen", "silent"]
// sortie :
// true
// let anagrams = ["hello", "bello"]
// sortie :
// false
if (undefined) {
    if (undefined) {
        console.log("c'est un anagrame")
    }else console.log("ce n'est pas un anagrame")
}


// FIXME trim split filter
// compter le nombre de mots dans une chaîne de caractères 
// console.log(str.trim().split(/\s+/))
// console.log(str.trim().split(/\s+/).filter(word=>word.length>0).length)

// FIXME Set, substring
// compter le nombre de sous-chaînes uniques d'une longueur donnée dans une chaîne de caractères.
// "abcabc" 3 ("abc", "bca", "cab")
// "abacab" 4 ("ab", "ba", "ac", "ca")
// "aaaa"   1 ("aa")
s = "abcabc"
k = 3
const essemble = undefined;

console.log(essemble)

// FIXME split, reverse, join
// inverser une chaine de caractére
// "hello" -> "olleh"
// "world" -> "dlrow"


// FIXME 
// Écrivez une fonction en JavaScript qui prend un tableau d'entiers en entrée et retourne l'élément le plus grand de ce tableau.
let array = [10, 4, 2, 15, 6];
// solution sans Math.max

// solution avec Math.max

*/