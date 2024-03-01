/*
 * TP JavaScript : Exploration avancée de la méthode splice()
 * Objectif : Ce TP vise à renforcer votre compréhension et votre maîtrise de la méthode splice() en JavaScript.
 * Vous apprendrez à modifier des tableaux en ajoutant, supprimant et remplaçant des éléments.
 */

// Exemple 1: Suppression d'éléments avec splice()
const fruits = ["pomme", "banane", "orange", "kiwi", "mangue"];
console.log("\nTableau original de fruits:", fruits);

// Instruction: Utilisez splice() pour supprimer 'orange' et 'kiwi' du tableau.
// Exemple de réponse attendue : ["pomme", "banane", "mangue"]
const supprimeFruits = undefined;
console.log("Fruits après suppression :");
console.log(JSON.stringify(fruits, null, 2));

// --------------------------------------------------------

// Exemple 2: Ajout d'éléments avec splice()
console.log("\nTableau original de fruits:", fruits);

// Instruction: Utilisez splice() pour ajouter 'abricot' et 'pêche' après 'banane'.
// Exemple de réponse attendue : ["pomme", "banane", "abricot", "pêche", "mangue"]
// undefined
console.log("Fruits après ajout :");
console.log(JSON.stringify(fruits, null, 2));

// --------------------------------------------------------

// Exemple 3: Remplacement d'éléments avec splice()
console.log("\nTableau original de fruits:", fruits);

// Instruction: Utilisez splice() pour remplacer 'pomme' par 'cerise'.
// Exemple de réponse attendue : ["cerise", "banane", "abricot", "pêche", "mangue"]
// undefined
console.log("Fruits après remplacement de 'pomme' par 'cerise' :");
console.log(JSON.stringify(fruits, null, 2));

// --------------------------------------------------------

// Exemple 4: Suppression de tous les éléments à partir d'une position
const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("\nTableau original de nombres:", nombres);

// Instruction: Utilisez splice() pour supprimer tous les éléments après le troisième élément.
// Exemple de réponse attendue : [1, 2, 3]
// undefined
console.log("Nombres après suppression des éléments après le troisième :");
console.log(JSON.stringify(nombres, null, 2));

// --------------------------------------------------------

// Exemple 5: Insertion multiple et suppression dans un tableau
const lettres = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log("\nTableau original de lettres:", lettres);

// Instruction: Utilisez splice() pour remplacer 'C' et 'D' par 'X', 'Y', 'Z'.
// Exemple de réponse attendue : ['A', 'B', 'X', 'Y', 'Z', 'E', 'F']
// undefined
console.log("Lettres après remplacement de 'C' et 'D' par 'X', 'Y', 'Z' :");
console.log(JSON.stringify(lettres, null, 2));

// --------------------------------------------------------

// Exemple 6: Utilisation de splice() pour inverser un tableau
console.log("\nTableau original de lettres:", lettres);

// Instruction: Utilisez une combinaison de splice() et d'autres méthodes pour inverser l'ordre du tableau 'lettres'.
// Exemple de réponse attendue : ['F', 'E', 'Z', 'Y', 'X', 'B', 'A']
const inverseLettres =  undefined;
console.log("Lettres inversées :");
console.log(JSON.stringify(inverseLettres, null, 2));

// --------------------------------------------------------

// Exemple 7: Manipulation complexe d'un tableau d'objets
const personnes = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 },
    { nom: "Carol", age: 22 },
    { nom: "Dave", age: 28 }
];
console.log("\nTableau original de personnes:", personnes);

// Instruction: Utilisez splice() pour ajouter deux nouvelles personnes après 'Bob'.
// Exemple de réponse attendue : [{...}, {...}, { nom: "Eve", age: 29 }, { nom: "Frank", age: 31 }, {...}]
// undefined
console.log("Personnes après ajout de 'Eve' et 'Frank' :");
console.log(JSON.stringify(personnes, null, 2));

// --------------------------------------------------------

// Exemple 8: Création de sous-ensembles avec splice()
console.log("\nTableau original de nombres:", nombres);

// Instruction: Utilisez splice() pour créer un sous-ensemble contenant les trois premiers nombres.
// Exemple de réponse attendue : [1, 2, 3]
const sousEnsembleNombres = undefined;
console.log("Sous-ensemble des trois premiers nombres :");
console.log(JSON.stringify(sousEnsembleNombres, null, 2));

// --------------------------------------------------------

// Exemple 9: Combinaison de splice() et slice() pour réorganiser un tableau
console.log("\nTableau original de lettres:", lettres);

// Instruction: Utilisez splice() et slice() pour déplacer 'X', 'Y', 'Z' à la fin du tableau.
// Exemple de réponse attendue : ['A', 'B', 'E', 'F', 'X', 'Y', 'Z']
const xyZ = undefined;

console.log("Lettres après déplacement de 'X', 'Y', 'Z' à la fin :");
console.log(JSON.stringify(lettres, null, 2));

// --------------------------------------------------------

// Exemple 10: Suppression et ajout combinés dans un tableau d'objets
console.log("\nTableau original de personnes:", personnes);

// Instruction: Remplacez 'Carol' par deux nouvelles personnes.
// Exemple de réponse attendue : [{...}, {...}, { nom: "Gary", age: 27 }, { nom: "Helen", age: 24 }, {...}, {...}]
// undefined
console.log("Personnes après remplacement de 'Carol' par 'Gary' et 'Helen' :");
console.log(JSON.stringify(personnes, null, 2));

// --------------------------------------------------------
