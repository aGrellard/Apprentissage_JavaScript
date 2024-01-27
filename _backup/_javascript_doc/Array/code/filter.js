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

console.log(nombres);
const filter_1 = nombres.filter((v) => v%2!=0);
console.log("filtre le nombres pair", filter_1, "\n");

console.log(nombresGroupe);
let filter_2 = nombresGroupe.filter((v,i,a) => a.indexOf(v) === i);
console.log("filtre les doublons", filter_2);
filter_2 = nombresGroupe.filter((v,i,a) => a.indexOf(v) !== i);
console.log("ne filtre pas les doublons", filter_2, "\n");

console.log(utilisateurs);
const filter_3 = utilisateurs.filter(v=>{return v.age > 25});
console.log("filtre un tableau d'objet par age > 25", filter_3);

console.log(products);
const filter_4 = products.filter(v=>{return v.quantity < 10}).map((v)=> {return {name:v.name, quantity:v.quantity}});
console.log("filtre un tableau d'objet par age > 25, avec un mappage créant un nouveaux tableu");
console.log(JSON.stringify(filter_4, null, 2), "\n");

let test_thisarg = {
    goodProduct: "apple"
}
const test_f = (v) => {
    return v.name === test_thisarg.goodProduct;
}
console.log(products);
const filter_5 = products.filter(test_f, test_thisarg)
console.log("filtre un tableau d'objet, filtra ge via thisarg");
console.log(JSON.stringify(filter_5, null, 2), "\n");




