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

function mergeSort(arr, compareFn) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(
        mergeSort(left, compareFn),
        mergeSort(right, compareFn),
        compareFn
    );
}

function merge(left, right, compareFn) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (compareFn(left[leftIndex], right[rightIndex]) <= 0) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}




// **************************************************
console.log(nombres);
const filter_1 = nombres.filter((v=>v%2===0));
// SORTIE [2,4] 
console.log("filtre le nombres pair");
console.log(JSON.stringify(filter_1, null, 2), "\n");
// #################################################

// *************************************************
console.log(nombresGroupe);
let filter_2 = nombresGroupe.filter((v,i,a)=>{
    return a.indexOf(v)===i
});
// SORTIE [6,2,3] 
console.log("filtre les doublons");
console.log(JSON.stringify(filter_2, null, 2), "\n");
filter_2 = nombresGroupe.filter((v,i,a)=>{
    return a.indexOf(v)!==i
});
// SORTIE [2,2,3,3,3] 
console.log("ne filtre pas les doublons");
console.log(JSON.stringify(filter_2, null, 2), "\n");
// #################################################

// **************************************************
console.log(utilisateurs_1);
const filter_3 = utilisateurs_1.filter(v=>v.age>25);
// SORTIE [{"nom":"Bob","age":30}] 
console.log("filtre un tableau d'objet par age > 25");
console.log(JSON.stringify(filter_3, null, 2), "\n");
// #################################################

// **************************************************
console.log(aliments);
const filter_4 = aliments.filter(a=>a.quantity < 10).map(v=>{
    return {newName: v.name, newQuantity: v.quantity}
});
// SORTIE [{"name":"apple","quantity":10},{"name":"carrot","quantity":5},{"name":"pomme","quantity":2},{"name":"salade","quantity":12}] 
console.log("filtre un tableau d'objet , avec un mappage créant un nouveaux tableu");
console.log(JSON.stringify(filter_4, null, 2), "\n");
// #################################################

// **************************************************
let thisArg = {name:"apple"};
function filterBy(value){
    return value == this.name;
}
const filter_5 = aliments.filter(filterBy, thisArg);
// SORTIE [{"name":"apple","type":"fruit","quantity":10}] 
console.log("filtre un tableau d'objet, filtra ge via thisarg");
console.log(JSON.stringify(filter_5, null, 2), "\n");
// #################################################


// **************************************************
console.log(nombres);
const reduce_t1 = nombres.reduce((acc,v)=>acc+v);
// SORTIE 15 
console.log("somme");
console.log(JSON.stringify(reduce_t1, null, 2), "\n");
// #################################################

// **************************************************
console.log(nombres);
const reduce_t2 = nombres.reduce((acc,v)=>{
    return acc > v ? acc : v;
});
// SORTIE 5 
console.log("find plus grande valu - v1");
console.log(JSON.stringify(reduce_t2, null, 2), "\n");
// #################################################

// **************************************************
console.log(nombresRnd);
const reduce_t3 = nombresRnd.reduce((acc,v)=>{
    return acc > v ? acc : v;
});
// SORTIE 5 
console.log("find plus grande valu - v2");
console.log(JSON.stringify(reduce_t3, null, 2), "\n");
// #################################################

// **************************************************
console.log(keyValuePairs);
const reduce_t4 = keyValuePairs.reduce((acc, [key, val])=>{
    return {...acc, [key]:val}
},{});
// SORTIE {"clé1":"valeur1","clé2":"valeur2"} 
console.log("construire un objet");
console.log(JSON.stringify(reduce_t4, null, 2), "\n");
// #################################################

// **************************************************
console.log(nombresGroupe);
const reduce_t5 = nombresGroupe.reduce((acc,v)=>{
    acc[v] = ( acc[v] || 0 ) + 1
    return acc;
}, {});
// SORTIE {"2":3,"3":4,"6":1} 
console.log("compter les occurences");
console.log(JSON.stringify(reduce_t5, null, 2), "\n");
// #################################################

// **************************************************
console.log("personnes", utilisateurs_1);
let reduce_t6 = utilisateurs_1.reduce((acc,v)=>{
    (acc[v.age] = acc[v.age] || []).push(v.nom);
    return acc;
}, {});
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
const map_1 = nombres.map(v=>{return {isNotPair:v%2===0}});
// SORTIE [{"isNotPair":1},{"isNotPair":0},{"isNotPair":1},{"isNotPair":0},{"isNotPair":1}] 
console.log("objet indiquant si la valeur est pair ou pas");
console.log(JSON.stringify(map_1, null, 2), "\n");
// #################################################

// **************************************************
console.log(tableauCle);
const map_2 = tableauCle.map(v=>{
    let cle = [v.cle];
    return `{${cle}:${v.valeur}}`
});
// SORTIE [{"1":10},{"2":20},{"3":30}] 
console.log("reformater un tableau");
console.log(JSON.stringify(map_2, null, 2), "\n");
// #################################################

// **************************************************
console.log(aliments);
let map_3 = aliments.map(v=>{
    return `${v.name} is ${v.quantity} of quantity`
});
// SORTIE ["apple is 10 years old","carrot is 5 years old","pomme is 2 years old","salade is 12 years old"] 
console.log("retourner un item sous forme de string");
console.log(JSON.stringify(map_3, null, 2), "\n");
// #################################################

// **************************************************
console.log(utilisateurs_1);
let map_4 = utilisateurs_1.map(v=>{
    return {...v, length:v.nom.length}
});
// SORTIE [{"nom":"Alice","age":25,"namelength":50},{"nom":"Bob","age":30,"namelength":30},{"nom":"Carol","age":22,"namelength":50}] 
console.log("ajouter un clé a chaque objet");
console.log(JSON.stringify(map_4, null, 2), "\n");
// #################################################

// **************************************************
console.log(nombresRnd_2);
let sort_1 = [...nombresRnd_2].sort((a,b)=>a-b);
// SORTIE [1,1,3,4,5,9] 
console.log("Trie les nombres en ordre croissant");
console.log(JSON.stringify(sort_1, null, 0), "\n");
// #################################################

// **************************************************
console.log(fruits);
let sort_2 = [...fruits].sort();
// SORTIE ["Pomme","banane","kiwi","mangue","orange"] 
console.log("Trie les chaînes de caractères");
console.log(JSON.stringify(sort_2, null, 0), "\n");
// #################################################

// **************************************************
console.log(fruits);
const sort_3 = mergeSort(fruits, (a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
// let sort_3 = [...fruits].sort((a,b)=>a.localeCompare(b,"fr",{'sensitivity':'base'}));;
// SORTIE ["banane","kiwi","mangue","orange","Pomme"] 
console.log("Trie les chaînes de caractères sans tenir compte de la casse");
console.log(JSON.stringify(sort_3, null, 0), "\n");
// #################################################

// **************************************************
console.log(utilisateurs_2);
let sort_4 = [...utilisateurs_2].sort((a,b)=>{
    return a.nom.localeCompare(b.nom) || a.age - b.age;
});
// SORTIE [{"nom":"Alice","age":12},{"nom":"Alice","age":25},{"nom":"Bob","age":30},{"nom":"Carol","age":22}] 
console.log("Trie les personnes d'abord par nom, puis par âge en cas de noms identiques");
console.log(JSON.stringify(sort_4, null, 0), "\n");
// #################################################

// **************************************************
console.log(nombresRnd_2);
let sort_5 = [...nombresRnd_2].sort((a,b)=>a-b).reverse();
// SORTIE [1,1,3,4,5,9] 
console.log("Trie les nombres en ordre decroissant");
console.log(JSON.stringify(sort_5, null, 0), "\n");
// #################################################
