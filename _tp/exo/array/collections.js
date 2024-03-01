
const mixte = [1, 'deux', true, {nom: 'objet'}, [5, 6]];
const tableau2D = [[1, 2], [3, 4], [5, 6]];

const sparse = [1, , 3, , 5];

const nombres = [1, 2, 3, 4, 5];
const nombresRnd = [3, 4, 2, 1, 5];
const nombresRnd_2 = [3, 1, 4, 1, 5, 9];
const nombresGroupe = [6, 2, 2, 2, 3, 3, 3, 3];

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

module.exports = {
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
};