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
const personnes= [
    {nom: "Alice", age: 30},
    {nom: "Bob", age: 30},
    {nom: "Marc", age: 25}
]



console.log(nombres);
const reduce_t1 = nombres.reduce( (accu,value) => {
    return accu+value;
}, 0);
console.log("somme", reduce_t1, "\n");


console.log(nombres);
const reduce_t2 = nombres.reduce( (accu,value) => {
    return accu < value ? value: accu;
} , 0);
console.log("find plus grande valu - v1", reduce_t2, "\n");


console.log(nombresRnd);
const reduce_t3 = nombresRnd.reduce( (accu,value) => {
    return accu < value ? value: accu;
} , 0);
console.log("find plus grande valu - v2", reduce_t3, "\n");


console.log(keyValuePairs);
const objet = keyValuePairs.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
console.log("construire un objet", objet);


console.log(nombresGroupe);
const group_1 = nombresGroupe.reduce((acc, val)=>{
    acc[val] = (acc[val] || 0) + 1;
    return acc
}, {})
console.log("compter les occurences", group_1, "\n");


console.log("personnes", personnes);
let grouePersonnes = personnes.reduce((acc,val)=>{
    (acc[val.age] = acc[val.age] || []).push(val.nom);
    return acc;
}, {})
console.log("grouePersonnes", grouePersonnes);

grouePersonnes = personnes.reduce((acc,val)=>{
    (acc[val.age] = acc[val.age] || []).push(val);
    return acc;
}, {})
console.log("grouePersonnes 2", grouePersonnes, "\n");
