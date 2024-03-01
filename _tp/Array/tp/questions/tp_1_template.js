const {
    mixte,
    tableau2D,
    sparse,
    nombres,
    nombresRnd,
    nombresRnd_2,
    nombresGroupe,
    fruits,
    aliments,
    utilisateurs_2,
    utilisateurs_1,
    tableauCle,
    keyValuePairs
  } = require('./collections.js');

const fruits = ['Pomme', 'banane', 'orange', 'kiwi', 'mangue'];
let aliments = [
    {name: "apple", type: "fruit", quantity: 10}, 
    {name: "carrot", type: "vegetable", quantity: 5},
    {name: "pomme", type: "fruit", quantity: 2},
    {name: "salade", type: "vegetable", quantity: 12}
];
const utilisateurs_2 = [
    { nom: 'Alice', age: 25 },
    { nom: 'Bob', age: 30 },
    { nom: 'Carol', age: 22 },
    { nom: 'Alice', age: 12 }
];
const utilisateurs_1= [
    { nom: 'Alice', age: 25 },
    { nom: 'Bob', age: 30 },
    { nom: 'Carol', age: 22 }
];

var tableauCle = [
    { cle: 1, valeur: 10 },
    { cle: 2, valeur: 20 },
    { cle: 3, valeur: 30 },
];
const keyValuePairs = [['clé1', 'valeur1'], ['clé2', 'valeur2']]; 


// **************************************************
console.log(nombres);
const filter_1 = undefined;
// SORTIE [2,4] 
console.log("filtre le nombres pair");
console.log(JSON.stringify(filter_1, null, 2), "\n");
// #################################################

// *************************************************
console.log(nombresGroupe);
let filter_2 = undefined;
// SORTIE [6,2,3] 
console.log("filtre les doublons");
console.log(JSON.stringify(filter_2, null, 2), "\n");
filter_2 = undefined;
// SORTIE [2,2,3,3,3] 
console.log("ne filtre pas les doublons");
console.log(JSON.stringify(filter_2, null, 2), "\n");
// #################################################

// **************************************************
console.log(utilisateurs_1);
const filter_3 = undefined;
// SORTIE [{"nom":"Bob","age":30}] 
console.log("filtre un tableau d'objet par age > 25");
console.log(JSON.stringify(filter_3, null, 2), "\n");
// #################################################

// **************************************************
console.log(aliments);
const filter_4 = undefined;
// SORTIE [{"name":"apple","quantity":10},{"name":"carrot","quantity":5},{"name":"pomme","quantity":2},{"name":"salade","quantity":12}] 
console.log("filtre un tableau d'objet , avec un mappage créant un nouveaux tableu");
console.log(JSON.stringify(filter_4, null, 2), "\n");
// #################################################

// **************************************************
const filter_5 = undefined;
// SORTIE [{"name":"apple","type":"fruit","quantity":10}] 
console.log("filtre un tableau d'objet, filtra ge via thisarg");
console.log(JSON.stringify(filter_5, null, 2), "\n");
// #################################################


// **************************************************
console.log(nombres);
const reduce_t1 = undefined;
// SORTIE 15 
console.log("somme");
console.log(JSON.stringify(reduce_t1, null, 2), "\n");
// #################################################

// **************************************************
console.log(nombres);
const reduce_t2 = undefined;
// SORTIE 5 
console.log("find plus grande valu - v1");
console.log(JSON.stringify(reduce_t2, null, 2), "\n");
// #################################################

// **************************************************
console.log(nombresRnd);
const reduce_t3 = undefined;
// SORTIE 5 
console.log("find plus grande valu - v2");
console.log(JSON.stringify(reduce_t3, null, 2), "\n");
// #################################################

// **************************************************
console.log(keyValuePairs);
const reduce_t4 = undefined;
// SORTIE {"clé1":"valeur1","clé2":"valeur2"} 
console.log("construire un objet");
console.log(JSON.stringify(reduce_t4, null, 2), "\n");
// #################################################

// **************************************************
console.log(nombresGroupe);
const reduce_t5 = undefined;
// SORTIE {"2":3,"3":4,"6":1} 
console.log("compter les occurences");
console.log(JSON.stringify(reduce_t5, null, 2), "\n");
// #################################################

// **************************************************
console.log("personnes", utilisateurs_1);
let reduce_t6 = undefined;
// SORTIE {"25":[{"nom":"Marc","age":25}],"30":[{"nom":"Alice","age":30},{"nom":"Bob","age":30}]}
console.log("grouePersonnes par age");
console.log(JSON.stringify(reduce_t6, null, 2));
// #################################################
reduce_t6 = undefined;
// SORTIE {"25":["Marc"],"30":["Alice","Bob"]} 
console.log("grouePersonnes par age avec objet contenat que le nom");
console.log(JSON.stringify(reduce_t6, null, 2), "\n");
// #################################################


// **************************************************
console.log(nombres);
const map_1 = undefined;
// SORTIE [{"isNotPair":1},{"isNotPair":0},{"isNotPair":1},{"isNotPair":0},{"isNotPair":1}] 
console.log("objet indiquant si la valeur est pair ou pas");
console.log(JSON.stringify(map_1, null, 2), "\n");
// #################################################

// **************************************************
console.log(tableauCle);
const map_2 = undefined;
// SORTIE [{"1":10},{"2":20},{"3":30}] 
console.log("reformater un tableau");
console.log(JSON.stringify(map_2, null, 2), "\n");
// #################################################

// **************************************************
console.log(aliments);
let map_3 = undefined;
// SORTIE ["apple is 10 years old","carrot is 5 years old","pomme is 2 years old","salade is 12 years old"] 
console.log("retourner un item sous forme de string");
console.log(JSON.stringify(map_3, null, 2), "\n");
// #################################################

// **************************************************
console.log(utilisateurs_1);
let map_4 = undefined;
// SORTIE [{"nom":"Alice","age":25,"namelength":50},{"nom":"Bob","age":30,"namelength":30},{"nom":"Carol","age":22,"namelength":50}] 
console.log("ajouter un clé a chaque objet");
console.log(JSON.stringify(map_4, null, 2), "\n");
// #################################################

// **************************************************
console.log(nombresRnd_2);
let sort_1 = undefined;
// SORTIE [1,1,3,4,5,9] 
console.log("Trie les nombres en ordre croissant");
console.log(JSON.stringify(sort_1, null, 0), "\n");
// #################################################

// **************************************************
console.log(fruits);
let sort_2 = undefined;
// SORTIE ["Pomme","banane","kiwi","mangue","orange"] 
console.log("Trie les chaînes de caractères");
console.log(JSON.stringify(sort_2, null, 0), "\n");
// #################################################

// **************************************************
console.log(fruits);
let sort_3 = undefined;
// SORTIE ["banane","kiwi","mangue","orange","Pomme"] 
console.log("Trie les chaînes de caractères sans tenir compte de la casse");
console.log(JSON.stringify(sort_3, null, 0), "\n");
// #################################################

// **************************************************
console.log(utilisateurs_2);
let sort_4 = undefined;
// SORTIE [{"nom":"Alice","age":12},{"nom":"Alice","age":25},{"nom":"Bob","age":30},{"nom":"Carol","age":22}] 
console.log("Trie les personnes d'abord par nom, puis par âge en cas de noms identiques");
console.log(JSON.stringify(sort_4, null, 0), "\n");
// #################################################

// **************************************************
console.log(nombresRnd_2);
let sort_5 = undefined;
// SORTIE [1,1,3,4,5,9] 
console.log("Trie les nombres en ordre croissant");
console.log(JSON.stringify(sort_5, null, 0), "\n");
// #################################################

/*
let filter_2 = nombresGroupe.filter((item, index, array)=>{
    return array.indexOf(item) === index
});
La condition array.indexOf(item) === index évalue à true uniquement pour la première occurrence de chaque élément. Ceci est parce que c'est la seule fois où l'indice de l'itération courante (index) correspondra à l'indice de la première occurrence de cet élément (array.indexOf(item)). Pour toutes les occurrences suivantes d'un élément déjà rencontré, index sera plus grand, faisant en sorte que la condition évalue à false et que ces éléments supplémentaires ne soient pas inclus dans le tableau final.

Donc, oui, c'est l'utilisation de index dans cette vérification qui permet de "positionner" si un élément a déjà été pris en compte pour l'inclusion dans le tableau résultant de .filter(), servant effectivement de mécanisme pour exclure les doublons sans nécessiter une vérification directe des éléments précédemment ajoutés au tableau de sortie.

*/