/*
 * TP JavaScript : Découverte approfondie de la méthode slice()
 * Objectif : Ce TP vise à approfondir votre compréhension de la méthode slice() en JavaScript.
 * Vous apprendrez à extraire des sous-tableaux et à manipuler des tableaux sans modifier le tableau original.
 */

// Exemple 1: Extraire une partie d'un tableau
const fruits = ["pomme", "banane", "orange", "kiwi", "mangue", "ananas"];
console.log("\nTableau original de fruits:", fruits);

// Instruction: Utilisez slice() pour obtenir les trois premiers fruits du tableau.
// Exemple de réponse attendue : ["pomme", "banane", "orange"]
const premiersFruits = fruits.slice(0, 3);
console.log("Trois premiers fruits :");
console.log(JSON.stringify(premiersFruits, null, 2));

// --------------------------------------------------------

// Exemple 2: Obtenir une partie de la fin d'un tableau
console.log("\nTableau original de fruits:", fruits);

// Instruction: Utilisez slice() pour extraire les deux derniers fruits du tableau.
// Exemple de réponse attendue : ["mangue", "ananas"]
const derniersFruits = fruits.slice(-2);
console.log("Deux derniers fruits :");
console.log(JSON.stringify(derniersFruits, null, 2));

// --------------------------------------------------------

// Exemple 3: Extraction en utilisant des indices négatifs
console.log("\nTableau original de fruits:", fruits);

// Instruction: Utilisez slice() pour obtenir les fruits, en excluant les deux premiers et le dernier.
// Exemple de réponse attendue : ["orange", "kiwi", "mangue"]
const milieuFruits = fruits.slice(2, -1);
console.log("Fruits du milieu (sans les deux premiers et le dernier) :");
console.log(JSON.stringify(milieuFruits, null, 2));

// --------------------------------------------------------

// Exemple 4: Création d'une copie complète d'un tableau
console.log("\nTableau original de fruits:", fruits);

// Instruction: Utilisez slice() pour créer une copie complète du tableau 'fruits'.
// Exemple de réponse attendue : ["pomme", "banane", "orange", "kiwi", "mangue", "ananas"]
const copieFruits = fruits.slice();
console.log("Copie complète du tableau de fruits :");
console.log(JSON.stringify(copieFruits, null, 2));

// --------------------------------------------------------

// Exemple 5: Extraction d'une partie d'un tableau de nombres
const nombres = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("\nTableau original de nombres:", nombres);

// Instruction: Utilisez slice() pour obtenir les nombres de 30 à 70.
// Exemple de réponse attendue : [30, 40, 50, 60, 70]
const nombresChoisis = nombres.slice(2, 7);
console.log("Nombres de 30 à 70 :");
console.log(JSON.stringify(nombresChoisis, null, 2));

// --------------------------------------------------------

// Exemple 6: Utilisation de slice() dans une chaîne de méthodes
console.log("\nTableau original de nombres:", nombres);

// Instruction: Utilisez slice() pour obtenir les trois premiers nombres, puis multipliez-les par deux.
// Exemple de réponse attendue : [20, 40, 60]
const premiersNombresDoubles = nombres.slice(0, 3).map(n => n * 2);
console.log("Trois premiers nombres doublés :");
console.log(JSON.stringify(premiersNombresDoubles, null, 2));

// --------------------------------------------------------

// Exemple 7: Extraire une partie d'un tableau d'objets
const personnes = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 },
    { nom: "Carol", age: 22 },
    { nom: "Dave", age: 28 }
];
console.log("\nTableau original de personnes:", personnes);

// Instruction: Utilisez slice() pour obtenir les deux premières personnes du tableau.
// Exemple de réponse attendue : [{ nom: "Alice", age: 25 }, { nom: "Bob", age: 30 }]
const premièresPersonnes = personnes.slice(0, 2);
console.log("Deux premières personnes :");
console.log(JSON.stringify(premièresPersonnes, null, 2));

// --------------------------------------------------------

// Exemple 8: Création d'un sous-ensemble alternatif
console.log("\nTableau original de fruits:", fruits);

// Instruction: Utilisez slice() pour créer un sous-ensemble de fruits en prenant un fruit sur deux, en commençant par le premier.
// Exemple de réponse attendue : ["pomme", "orange", "mangue"]
const fruitsAlternatifs = fruits.filter((_, index) => index % 2 === 0);
console.log("Sous-ensemble de fruits (un sur deux) :");
console.log(JSON.stringify(fruitsAlternatifs, null, 2));

// --------------------------------------------------------

// Exemple 9: Exclure un élément spécifique en utilisant slice()
console.log("\nTableau original de fruits:", fruits);

// Instruction: Utilisez slice() pour créer un nouveau tableau de fruits, sans 'kiwi'.
// Exemple de réponse attendue : ["pomme", "banane", "orange", "mangue", "ananas"]
const sansKiwi = [...fruits.slice(0, 3), ...fruits.slice(4)];
console.log("Tableau de fruits sans 'kiwi' :");
console.log(JSON.stringify(sansKiwi, null, 2));

// --------------------------------------------------------

// Exemple 10: Combinaison de slice() et d'autres méthodes pour une analyse complexe
console.log("\nTableau original de personnes:", personnes);

// Instruction: Utilisez slice() pour obtenir les personnes d'âge compris entre 25 et 30 ans, puis calculez leur âge moyen.
// Exemple de réponse attendue : Age moyen calculé
const ageMoyen = personnes.slice(1, 3).reduce((acc, p) => acc + p.age, 0) / 2;
console.log("Âge moyen des personnes entre 25 et 30 ans :");
console.log(JSON.stringify(ageMoyen, null, 2));

// --------------------------------------------------------
