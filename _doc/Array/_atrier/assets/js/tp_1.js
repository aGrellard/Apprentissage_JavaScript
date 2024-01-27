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
const filter_1 = nombres.filter((v=>v%2===0));
console.log("filtre le nombres pair");
// [2,4] 
console.log(JSON.stringify(filter_1, null), "\n");
// #################################################

// *************************************************
console.log(nombresGroupe);
let filter_2 = nombresGroupe.filter((val, i , array) => {
    return (array.indexOf(val) === i)
})
console.log("filtre les doublons");
// [6,2,3] 
console.log(JSON.stringify(filter_2, null), "\n");
filter_2 = nombresGroupe.filter((val, i , array) => {
    return (array.indexOf(val) !== i)
})
console.log("ne filtre pas les doublons");
// [2,2,3,3,3] 
console.log(JSON.stringify(filter_2, null), "\n");
// #################################################

// **************************************************
console.log(utilisateurs);
const filter_3 = utilisateurs.filter(v=>v.age>25);
console.log("filtre un tableau d'objet par age > 25");
// [{"nom":"Bob","age":30}] 
console.log(JSON.stringify(filter_3, null), "\n");
// #################################################

// **************************************************
console.log(products);
const filter_4 = products.filter(v=>v.quantity<15).map((v)=>{
    return {name:v.name, quantity: v.quantity};
});
console.log("filtre un tableau d'objet , avec un mappage créant un nouveaux tableu");
// 
console.log(JSON.stringify(filter_4, null), "\n");
// #################################################

// **************************************************
let test_thisarg = {
    name: "apple"
}
function test_thisargFunc(v) {
    console.log("this.name", this.name)
    return v.name === this.name;
}
const filter_5 = products.filter(test_thisargFunc, test_thisarg);
console.log("filtre un tableau d'objet, filtra ge via thisarg");
console.log(JSON.stringify(filter_5, null), "\n");
// #################################################


// **************************************************
console.log(nombres);
const reduce_t1 = nombres.reduce((acc, val) => {
    return acc+val;
})
console.log("somme");
console.log(JSON.stringify(reduce_t1, null), "\n");
// #################################################

// **************************************************
console.log(nombres);
const reduce_t2 = nombres.reduce((acc, val, index, array) => {
    return val > acc ? val : acc;
})
console.log("find plus grande valu - v1");
console.log(JSON.stringify(reduce_t2, null), "\n");
// #################################################

// **************************************************
console.log(nombresRnd);
const reduce_t3 = nombresRnd.reduce((acc,val)=>{
    return val > acc ? val : acc;
})
console.log("find plus grande valu - v2");
console.log(JSON.stringify(reduce_t3, null), "\n");
// #################################################

// **************************************************
console.log(keyValuePairs);
const objet = keyValuePairs.reduce((acc, [key,value])=>{
    return {...acc, [key]:value};
}, {})
console.log("construire un objet");
console.log(JSON.stringify(objet, null), "\n");
// #################################################

// **************************************************
console.log(nombresGroupe);
const group_1 = nombresGroupe.reduce((acc, value, index, array)=>{
    acc[value] = (acc[value] || 0 ) + 1;
    return acc;
}, {})
console.log("compter les occurences");
console.log(JSON.stringify(group_1, null), "\n");
// #################################################

// **************************************************
console.log("personnes", personnes);
let grouePersonnes = personnes.reduce((acc, value, index, array)=>{
     (acc[value.age] = acc[value.age] || [] ).push(value);
    return acc;
}, {})
console.log("grouePersonnes par age", grouePersonnes);
console.log(JSON.stringify(grouePersonnes, null));
// #################################################
grouePersonnes = personnes.reduce((acc, value, index, array)=>{
    (acc[value.age] = acc[value.age] || [] ).push(value.nom);
   return acc;
}, {})
console.log("grouePersonnes par age avec objet contenat que le nom");
console.log(JSON.stringify(grouePersonnes, null), "\n");
// #################################################


// **************************************************
console.log(nombres);
const map_1 = nombres.map((v)=>{return {isNotPair:v%2}});
// SORTIE
console.log("objet indiquant si la valeur est pair ou pas");
console.log(JSON.stringify(map_1, null), "\n");
// #################################################

// **************************************************
console.log(tableauCle);
const map_2 = tableauCle.map((obj) => {
    var rObj = {};
    rObj[obj.cle] = obj.valeur;
    return rObj;
});
// SORTIE
console.log("reformater un tableau");
console.log(JSON.stringify(map_2, null), "\n");
// #################################################

// **************************************************
console.log(products);
let map_3 = products.map(user => `${user.name} is ${user.quantity} years old`);
// SORTIE
console.log("retourner un item sous forme de string");
console.log(JSON.stringify(map_3, null), "\n");
// #################################################

// **************************************************
console.log(utilisateurs);
let map_4 = utilisateurs.map(user => ({ ...user, namelength: user.nom.length * 10 }));
// SORTIE
console.log("ajouter un clé a chaque objet");
console.log(JSON.stringify(map_4, null), "\n");
// #################################################

