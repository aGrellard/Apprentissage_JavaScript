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
var tableauCle = [
    { cle: 1, valeur: 10 },
    { cle: 2, valeur: 20 },
    { cle: 3, valeur: 30 },
];

const sparse = [1, , 3, , 5];
const keyValuePairs = [['clé1', 'valeur1'], ['clé2', 'valeur2']]; 
let products = [
    {name: "apple", type: "fruit", quantity: 10}, 
    {name: "carrot", type: "vegetable", quantity: 5},
    {name: "pomme", type: "fruit", quantity: 2},
    {name: "salade", type: "vegetable", quantity: 12}
];

console.log(nombres);
const map_1 = nombres.map((v)=>{return {isNotPair:v%2}});
console.log("map_1", map_1, "\n");

console.log(tableauCle);
var tableauFormate = tableauCle.map((obj) => {
    var rObj = {};
    rObj[obj.cle] = obj.valeur;
    return rObj;
});
console.log("tableauFormate");
console.log(JSON.stringify(tableauFormate, null, 2), "\n");

console.log(products);
let userInfo = products.map(user => `${user.name} is ${user.quantity} years old`);
console.log("userInfo", userInfo, "\n");

console.log(utilisateurs);
let usersWithAge = utilisateurs.map(user => ({ ...user, namelength: user.nom.length * 10 }));
console.log("usersWithAge", usersWithAge, "\n");
