// Déclaration des tableaux de données
const nombres = [1, 2, 3, 4, 5];
const fruits = ['pomme', 'banane', 'orange', 'kiwi', 'mangue'];
const utilisateurs = [
    { nom: 'Alice', age: 25 },
    { nom: 'Bob', age: 30 },
    { nom: 'Carol', age: 22 }
];

// Exemple 1: Filtrer les nombres pairs
console.log("Tableau original:", nombres);

// Instruction: Filtrez le tableau 'nombres' pour obtenir uniquement les nombres pairs.
// Exemple de réponse attendue : [2, 4]
const nombresPairs = nombres.filter(n => n % 2 === 0);
console.log("Nombres pairs:", nombresPairs);

// --------------------------------------------------------

// Exemple 2: Rechercher des fruits commençant par 'p'
console.log("\nTableau original:", fruits);

// Instruction: Recherchez dans le tableau 'fruits' ceux qui commencent par la lettre 'p'.
// Exemple de réponse attendue : ['pomme']
const fruitsAvecP = fruits.filter(fruit => fruit.startsWith('p'));
console.log("Fruits commençant par 'p':", fruitsAvecP);

// --------------------------------------------------------

// Exemple 3: Filtrer les utilisateurs par âge
console.log("\nTableau original:", utilisateurs);

// Instruction: Filtrez le tableau 'utilisateurs' pour obtenir les utilisateurs de plus de 25 ans.
// Exemple de réponse attendue : [{ nom: 'Bob', age: 30 }]
const utilisateursPlus25 = utilisateurs.filter(user => user.age > 25);
console.log("Utilisateurs de plus de 25 ans:", utilisateursPlus25);

// --------------------------------------------------------
