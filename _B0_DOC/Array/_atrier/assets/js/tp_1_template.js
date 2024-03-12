const nombres = [1, 2, 3, 4, 5];
const nombresRnd = [3, 4, 2, 1, 5];
const nombresGroupe = [6, 2, 2, 2, 3, 3, 3, 3];
const fruits = ['pomme', 'banane', 'orange', 'kiwi', 'mangue'];
const mixte = [1, 'deux', true, {nom: 'objet'}, [5, 6]];
const tableau2D = [[1, 2], [3, 4], [5, 6]];
const utilisateurs = [
    { nom: 'Alice', age: 25 },
    { nom: 'Bob', age: 30 },
    { nom: 'Carol', age: 22 }
];
const sparse = [1, , 3, , 5];
const keyValuePairs = [['clé1', 'valeur1'], ['clé2', 'valeur2']]; 
let products = [
    {name: "apple", type: "fruit", quantity: 10}, 
    {name: "carrot", type: "vegetable", quantity: 5},
    {name: "pomme", type: "fruit", quantity: 2},
    {name: "salade", type: "vegetable", quantity: 12}
];
const personnes= [
    {nom: "Alice", age: 30},
    {nom: "Bob", age: 30},
    {nom: "Marc", age: 25}
]
var tableauCle = [
    { cle: 1, valeur: 10 },
    { cle: 2, valeur: 20 },
    { cle: 3, valeur: 30 },
];


// **************************************************
console.log(nombres);
const filter_1 = undefined;
// SORTIE
console.log("filtre le nombres pair");
console.log(JSON.stringify(filter_1, null, 2), "\n");
// #################################################

// *************************************************
console.log(nombresGroupe);
let filter_2 = undefined;
// SORTIE
console.log("filtre les doublons");
console.log(JSON.stringify(filter_2, null, 2), "\n");
filter_2 = undefined;
console.log("ne filtre pas les doublons");
console.log(JSON.stringify(filter_2, null, 2), "\n");
// #################################################

// **************************************************
console.log(utilisateurs);
const filter_3 = undefined;
// SORTIE
console.log("filtre un tableau d'objet par age > 25");
console.log(JSON.stringify(filter_3, null, 2), "\n");
// #################################################

// **************************************************
console.log(products);
const filter_4 = undefined;
// SORTIE
console.log("filtre un tableau d'objet , avec un mappage créant un nouveaux tableu");
console.log(JSON.stringify(filter_4, null, 2), "\n");
// #################################################

// **************************************************
const filter_5 = undefined;
// SORTIE
console.log("filtre un tableau d'objet, filtra ge via thisarg");
console.log(JSON.stringify(filter_5, null, 2), "\n");
// #################################################


// **************************************************
console.log(nombres);
const reduce_t1 = undefined;
// SORTIE
console.log("somme");
console.log(JSON.stringify(reduce_t1, null, 2), "\n");
// #################################################

// **************************************************
console.log(nombres);
const reduce_t2 = undefined;
// SORTIE
console.log("find plus grande valu - v1");
console.log(JSON.stringify(reduce_t2, null, 2), "\n");
// #################################################

// **************************************************
console.log(nombresRnd);
const reduce_t3 = undefined;
// SORTIE
console.log("find plus grande valu - v2");
console.log(JSON.stringify(reduce_t3, null, 2), "\n");
// #################################################

// **************************************************
console.log(keyValuePairs);
const reduce_t4 = undefined;
// SORTIE
console.log("construire un objet");
console.log(JSON.stringify(reduce_t4, null, 2), "\n");
// #################################################

// **************************************************
console.log(nombresGroupe);
const reduce_t5 = undefined;
// SORTIE
console.log("compter les occurences");
console.log(JSON.stringify(reduce_t5, null, 2), "\n");
// #################################################

// **************************************************
console.log("personnes", personnes);
let reduce_t6 = undefined;
// SORTIE
console.log("grouePersonnes par age");
console.log(JSON.stringify(reduce_t6, null, 2));
// #################################################
reduce_t6 = undefined;
// SORTIE
console.log("grouePersonnes par age avec objet contenat que le nom");
console.log(JSON.stringify(reduce_t6, null, 2), "\n");
// #################################################


// **************************************************
console.log(nombres);
const map_1 = undefined;
// SORTIE
console.log("objet indiquant si la valeur est pair ou pas");
console.log(JSON.stringify(map_1, null, 2), "\n");
// #################################################

// **************************************************
console.log(tableauCle);
const map_2 = undefined;
// SORTIE
console.log("reformater un tableau");
console.log(JSON.stringify(map_2, null, 2), "\n");
// #################################################

// **************************************************
console.log(products);
let map_3 = undefined;
// SORTIE
console.log("retourner un item sous forme de string");
console.log(JSON.stringify(map_3, null, 2), "\n");
// #################################################

// **************************************************
console.log(utilisateurs);
let map_4 = undefined;
// SORTIE
console.log("ajouter un clé a chaque objet");
console.log(JSON.stringify(map_4, null, 2), "\n");
// #################################################