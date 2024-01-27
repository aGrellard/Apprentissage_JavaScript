/*
 * TP JavaScript : Comprendre et utiliser la méthode every()
 * Objectif : Ce TP a pour but de vous familiariser avec la méthode every() en JavaScript.
 * Vous apprendrez à vérifier si tous les éléments d'un tableau répondent à une condition spécifique.
 */

// Exemple 1: Vérification de nombres pairs
const nombres = [2, 4, 6, 8, 10];
console.log("\nTableau original de nombres:", nombres);

// Instruction: Utilisez every() pour vérifier si tous les nombres sont pairs.
// Exemple de réponse attendue : true
const tousPairs = nombres.every(n => n % 2 === 0);
console.log("Tous les nombres sont-ils pairs ?");
console.log(JSON.stringify(tousPairs, null, 2));

// --------------------------------------------------------

// Exemple 2: Vérification de la longueur des chaînes de caractères
const mots = ["soleil", "lune", "étoile"];
console.log("\nTableau original de mots:", mots);

// Instruction: Utilisez every() pour vérifier si tous les mots ont plus de 4 lettres.
// Exemple de réponse attendue : false
const tousLongs = mots.every(mot => mot.length > 4);
console.log("Tous les mots ont-ils plus de 4 lettres ?");
console.log(JSON.stringify(tousLongs, null, 2));

// --------------------------------------------------------

// Exemple 3: Vérification des propriétés des objets
const produits = [
    { nom: "Pomme", type: "fruit" },
    { nom: "Carotte", type: "légume" },
    { nom: "Banane", type: "fruit" }
];
console.log("\nTableau original de produits:", produits);

// Instruction: Utilisez every() pour vérifier si tous les produits sont des fruits.
// Exemple de réponse attendue : false
const tousFruits = produits.every(produit => produit.type === "fruit");
console.log("Tous les produits sont-ils des fruits ?");
console.log(JSON.stringify(tousFruits, null, 2));

// --------------------------------------------------------

// Exemple 4: Vérification avec des conditions complexes
const personnes = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 },
    { nom: "Carol", age: 22 }
];
console.log("\nTableau original de personnes:", personnes);

// Instruction: Utilisez every() pour vérifier si toutes les personnes ont entre 20 et 40 ans.
// Exemple de réponse attendue : true
const tousDansLaTranche = personnes.every(p => p.age >= 20 && p.age <= 40);
console.log("Toutes les personnes ont-elles entre 20 et 40 ans ?");
console.log(JSON.stringify(tousDansLaTranche, null, 2));

// --------------------------------------------------------

// Exemple 5: Vérification des valeurs dans un tableau mixte
const mixte = [1, "texte", true, { key: "value" }, [1, 2, 3]];
console.log("\nTableau original mixte:", mixte);

// Instruction: Utilisez every() pour vérifier si tous les éléments sont de type 'number'.
// Exemple de réponse attendue : false
const tousNombres = mixte.every(item => typeof item === "number");
console.log("Tous les éléments sont-ils de type 'number' ?");
console.log(JSON.stringify(tousNombres, null, 2));

// --------------------------------------------------------

// Exemple 6: Vérification de la présence de caractères spécifiques dans des chaînes
const chaînes = ["bonjour", "monde", "hello", "world"];
console.log("\nTableau original de chaînes:", chaînes);

// Instruction: Utilisez every() pour vérifier si toutes les chaînes contiennent la lettre 'o'.
// Exemple de réponse attendue : true
const tousAvecO = chaînes.every(ch => ch.includes('o'));
console.log("Toutes les chaînes contiennent-elles la lettre 'o' ?");
console.log(JSON.stringify(tousAvecO, null, 2));

// --------------------------------------------------------

// Exemple 7: Vérification des valeurs numériques dans un tableau de chaînes
const numChaines = ["10", "20", "30", "40"];
console.log("\nTableau original de chaînes numériques:", numChaines);

// Instruction: Utilisez every() pour vérifier si toutes les chaînes sont des nombres valides.
// Exemple de réponse attendue : true
const tousNombresValides = numChaines.every(ch => !isNaN(ch));
console.log("Toutes les chaînes sont-elles des nombres valides ?");
console.log(JSON.stringify(tousNombresValides, null, 2));

// --------------------------------------------------------
