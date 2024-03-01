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



// **************************************************
console.log(nombres);
const filter_1 = nombres.filter(item=>item%2 === 0);
// SORTIE [2,4] 
console.log("filtre le nombres pair");
console.log(JSON.stringify(filter_1, null, 2), "\n");






// #################################################

// *************************************************
console.log(nombresGroupe);
let filter_2 = nombresGroupe.filter((val, index, array)=>{
    return array.indexOf(val) === index
});
// SORTIE [6,2,3] 
console.log("filtre les doublons");
console.log(JSON.stringify(filter_2, null, 2), "\n");
filter_2 = nombresGroupe.filter((val, index, array)=>{
    return array.indexOf(val) !== index
});
// SORTIE [2,2,3,3,3] 
console.log("ne filtre pas les doublons");
console.log(JSON.stringify(filter_2, null, 2), "\n");
// #################################################

// **************************************************
console.log(utilisateurs_1);
const filter_3 = utilisateurs_1.filter(item=>item.age>25);
// SORTIE [{"nom":"Bob","age":30}] 
console.log("filtre un tableau d'objet par age > 25");
console.log(JSON.stringify(filter_3, null, 2), "\n");
// #################################################

// **************************************************
console.log(aliments);
const filter_4 = aliments.filter(item=>item.quantity < 12).map(item=> {return {name:item.name, qty:item.quantity}});
// SORTIE [{"name":"apple","quantity":10},{"name":"carrot","quantity":5},{"name":"pomme","quantity":2},{"name":"salade","quantity":12}] 
console.log("filtre un tableau d'objet , avec un mappage créant un nouveaux tableu");
console.log(JSON.stringify(filter_4, null, 2), "\n");
// #################################################

// **************************************************
const obj = {
    search: "apple"
}
function getApple(item) {
    if (this.search == item.name) return true
    return false 
}
const filter_5 = aliments.filter(getApple,obj);
// SORTIE [{"name":"apple","type":"fruit","quantity":10}] 
console.log("filtre un tableau d'objet, filtra ge via thisarg");
console.log(JSON.stringify(filter_5, null, 2), "\n");
// #################################################


// **************************************************
console.log(nombres);
const reduce_t1 = nombres.reduce((acc,val)=>acc+val);
// SORTIE 15 
console.log("somme");
console.log(JSON.stringify(reduce_t1, null, 2), "\n");
// #################################################

// **************************************************
console.log(nombres);
const reduce_t2 = nombres.reduce((acc,val)=>{
    if (acc>val) acc = val
    return val
});
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
const reduce_t4 = keyValuePairs.reduce((acc,[key,val])=>{
   acc = {...acc, [key]:val}
   return acc 
},{});
// SORTIE {"clé1":"valeur1","clé2":"valeur2"} 
console.log("construire un objet");
console.log(JSON.stringify(reduce_t4, null, 2), "\n");
// #################################################

// **************************************************
console.log(nombresGroupe);
const reduce_t5 = nombresGroupe.reduce((acc,val)=>{
    acc[val] = (acc[val] || 0) + 1
    return acc
},{});
// SORTIE {"2":3,"3":4,"6":1} 
console.log("compter les occurences");
console.log(JSON.stringify(reduce_t5, null, 2), "\n");
// #################################################

// **************************************************
console.log("personnes", utilisateurs_1);
let reduce_t6 = utilisateurs_1.reduce((acc,val)=>{
    if (!acc[val.age]) acc[val.age] = []
    acc[val.age].push(val)
    return acc;
}, {});
// SORTIE {"25":[{"nom":"Marc","age":25}],"30":[{"nom":"Alice","age":30},{"nom":"Bob","age":30}]}
console.log("grouePersonnes par age");
console.log(reduce_t6);
// #################################################

reduce_t6 = utilisateurs_1.reduce((acc,val)=>{
    if (!acc[val.age]) acc[val.age] = []
    acc[val.age].push(val.nom)
    return acc;
}, {});
// SORTIE {"25":["Marc"],"30":["Alice","Bob"]} 
console.log("grouePersonnes par age avec objet contenat que le nom");
console.log(JSON.stringify(reduce_t6, null, 2), "\n");
// #################################################


// **************************************************
console.log(nombres);
const map_1 = nombres.map(item=>{
    return {isNotPair:item%2}
});
// SORTIE [{"isNotPair":1},{"isNotPair":0},{"isNotPair":1},{"isNotPair":0},{"isNotPair":1}] 
console.log("objet indiquant si la valeur est pair ou pas");
console.log(JSON.stringify(map_1, null, 2), "\n");
// #################################################

// **************************************************
console.log(tableauCle);
const map_2 = tableauCle.map(item=>{
    let name = item.cle
    return {[name]:item.valeur}
});
// SORTIE [{"1":10},{"2":20},{"3":30}] 
console.log("reformater un tableau");
console.log(JSON.stringify(map_2, null, 2), "\n");
// #################################################

// **************************************************
console.log(aliments);
let map_3 = aliments.map(item=>{
    return `il reste ${item.quantity}/g de ${item.name}`
});
// SORTIE ["apple is 10 years old","carrot is 5 years old","pomme is 2 years old","salade is 12 years old"] 
console.log("retourner un item sous forme de string");
console.log(JSON.stringify(map_3, null, 2), "\n");
// #################################################

// **************************************************
console.log(utilisateurs_1);
let map_4 = utilisateurs_1.map(item=>{
    return {...item,new:"hellow world"}
});
// SORTIE [{"nom":"Alice","age":25,"namelength":50},{"nom":"Bob","age":30,"namelength":30},{"nom":"Carol","age":22,"namelength":50}] 
console.log("ajouter un clé a chaque objet");
console.log(JSON.stringify(map_4, null, 2), "\n");
// #################################################

// **************************************************
console.log(nombresRnd_2);
let sort_1 = [...nombresRnd_2].sort((a,b)=> a - b);
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
let sort_3 = [...fruits].sort((a,b)=>{
    return a.localeCompare(b)
});
// SORTIE ["banane","kiwi","mangue","orange","Pomme"] 
console.log("Trie les chaînes de caractères sans tenir compte de la casse");
console.log(JSON.stringify(sort_3, null, 0), "\n");
// #################################################

// **************************************************
console.log(utilisateurs_2);
let sort_4 = [...utilisateurs_2].sort((a,b)=>{
    return a.nom.localeCompare(b.nom) || a.age-b.age
});
// SORTIE [{"nom":"Alice","age":12},{"nom":"Alice","age":25},{"nom":"Bob","age":30},{"nom":"Carol","age":22}] 
console.log("Trie les personnes d'abord par nom, puis par âge en cas de noms identiques");
console.log(JSON.stringify(sort_4, null, 2), "\n");
// #################################################
/*
// **************************************************
console.log(nombresRnd_2);
let sort_5 = undefined;
// SORTIE [1,1,3,4,5,9] 
console.log("Trie les nombres en ordre croissant");
console.log(JSON.stringify(sort_5, null, 0), "\n");
// #################################################

*/