/*
 * TP JavaScript : Manipulation de Tableaux
 * Objectif : Ce TP a pour but de vous familiariser avec la manipulation des tableaux en JavaScript. 
 * Vous apprendrez à utiliser diverses méthodes pour filtrer, trier, et transformer les données des tableaux.
 */


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
console.log("Nombres pairs:");
console.log(JSON.stringify(nombresPairs, null, 2));

// --------------------------------------------------------

// Exemple 2: Rechercher des fruits commençant par 'p'
console.log("\nTableau original:", fruits);

// Instruction: Recherchez dans le tableau 'fruits' ceux qui commencent par la lettre 'p'.
// Exemple de réponse attendue : ['pomme']
const fruitsAvecP = fruits.filter(fruit => fruit.startsWith('p'));
console.log("Fruits commençant par 'p':");
console.log(JSON.stringify(fruitsAvecP, null, 2));

// --------------------------------------------------------

// Exemple 3: Filtrer les utilisateurs par âge
console.log("\nTableau original:", utilisateurs);

// Instruction: Filtrez le tableau 'utilisateurs' pour obtenir les utilisateurs de plus de 25 ans.
// Exemple de réponse attendue : [{ nom: 'Bob', age: 30 }]
const utilisateursPlus25 = utilisateurs.filter(user => user.age > 25);
console.log("Utilisateurs de plus de 25 ans:");
console.log(JSON.stringify(utilisateursPlus25, null, 2));

// --------------------------------------------------------
// Exemple 4: Trier les utilisateurs par âge
console.log("\nTableau original:", utilisateurs);

// Instruction: Triez le tableau 'utilisateurs' par âge croissant.
// Exemple de réponse attendue : [{ nom: 'Carol', age: 22 }, { nom: 'Alice', age: 25 }, { nom: 'Bob', age: 30 }]
const utilisateursTriesParAge = utilisateurs.slice().sort((a, b) => a.age - b.age);
console.log("Utilisateurs triés par âge:");
console.log(JSON.stringify(utilisateursTriesParAge, null, 2));

// --------------------------------------------------------

// Exemple 5: Transformation de tableaux
const nombresDoubles = [1, 2, 3, 4, 5];
console.log("\nTableau original:", nombresDoubles);

// Instruction: Doublez chaque élément du tableau 'nombresDoubles'.
// Exemple de réponse attendue : [2, 4, 6, 8, 10]
const nombresDoublesTransformes = nombresDoubles.map(n => n * 2);
console.log("Nombres doublés:");
console.log(JSON.stringify(nombresDoublesTransformes, null, 2));

// --------------------------------------------------------

// Exemple 6: Combinaison de méthodes de tableau
console.log("\nTableau original:", utilisateurs);

// Instruction: Trouvez le nom des utilisateurs qui ont plus de 25 ans et triez-les par ordre alphabétique.
// Exemple de réponse attendue : ['Bob']
const nomsUtilisateursPlus25Tries = utilisateurs
    .filter(user => user.age > 25)
    .map(user => user.nom)
    .sort();
console.log("Noms des utilisateurs de plus de 25 ans (triés):");
console.log(JSON.stringify(nomsUtilisateursPlus25Tries, null, 2));

// --------------------------------------------------------

// Exemple 7: Réduction de tableau
const numeros = [1, 2, 3, 4, 5];
console.log("\nTableau original:", numeros);

// Instruction: Calculez la somme de tous les éléments du tableau 'numeros'.
// Exemple de réponse attendue : 15
const sommeNumeros = numeros.reduce((total, n) => total + n, 0);
console.log("Somme des numéros:");
console.log(JSON.stringify(sommeNumeros, null, 2));

// --------------------------------------------------------
// Exemple 8: Création d'un nouvel objet à partir d'un tableau
const etudiants = [
    { nom: 'Alice', note: 12 },
    { nom: 'Bob', note: 15 },
    { nom: 'Carol', note: 10 }
];
console.log("\nTableau original:", etudiants);

// Instruction: Créez un objet qui associe le nom de chaque étudiant à sa note.
// Exemple de réponse attendue : { 'Alice': 12, 'Bob': 15, 'Carol': 10 }
const objetEtudiants = etudiants.reduce((obj, etudiant) => {
    obj[etudiant.nom] = etudiant.note;
    return obj;
}, {});
console.log("Objet des étudiants :");
console.log(JSON.stringify(objetEtudiants, null, 2));

// --------------------------------------------------------

// Exemple 9: Filtrage et mappage avancés
console.log("\nTableau original:", utilisateurs);

// Instruction: Créez un tableau contenant uniquement le nom des utilisateurs de plus de 25 ans.
// Exemple de réponse attendue : ['Bob']
const nomsUtilisateursAgePlus25 = utilisateurs
    .filter(user => user.age > 25)
    .map(user => user.nom);
console.log("Noms des utilisateurs de plus de 25 ans :");
console.log(JSON.stringify(nomsUtilisateursAgePlus25, null, 2));

// --------------------------------------------------------

// Exemple 10: Chaînage de méthodes
const notes = [12, 15, 10, 17, 8];
console.log("\nTableau original:", notes);

// Instruction: Calculez la moyenne des notes supérieures à 10.
// Exemple de réponse attendue : 14.666666666666666 (ou une valeur approchée)
const moyenneNotesSup10 = notes
    .filter(note => note > 10)
    .reduce((acc, note, _, array) => acc + note / array.length, 0);
console.log("Moyenne des notes supérieures à 10 :");
console.log(JSON.stringify(moyenneNotesSup10, null, 2));

// --------------------------------------------------------
// Exemple 15: Filtrage avec plusieurs conditions
const produits = [
    { nom: "Pomme", type: "fruit", quantite: 10, prix: 1 },
    { nom: "Carotte", type: "légume", quantite: 0, prix: 2 },
    { nom: "Banane", type: "fruit", quantite: 5, prix: 1 },
    { nom: "Céleri", type: "légume", quantite: 30, prix: 3 }
];
console.log("\nTableau original:", produits);

// Instruction: Trouvez tous les fruits avec une quantité supérieure à 0.
// Exemple de réponse attendue : [{ nom: "Pomme", type: "fruit", quantite: 10, prix: 1 }, { nom: "Banane", type: "fruit", quantite: 5, prix: 1 }]
const fruitsDisponibles = produits.filter(p => p.type === "fruit" && p.quantite > 0);
console.log("Fruits disponibles :");
console.log(JSON.stringify(fruitsDisponibles, null, 2));

// --------------------------------------------------------

// Exemple 16: Application de plusieurs transformations
console.log("\nTableau original:", nombres);

// Instruction: Multipliez chaque nombre par 2, puis soustrayez 1.
// Exemple de réponse attendue : [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
const transformes = nombres.map(n => n * 2).map(n => n - 1);
console.log("Nombres transformés :");
console.log(JSON.stringify(transformes, null, 2));

// --------------------------------------------------------

// Exemple 17: Utilisation de 'flatMap'
const tableauDeTableaux = [[1, 2], [3, 4], [5, 6]];
console.log("\nTableau original de tableaux:", tableauDeTableaux);

// Instruction: Aplatissez et multipliez chaque élément par 2.
// Exemple de réponse attendue : [2, 4, 6, 8, 10, 12]
const aplatiEtMultiplie = tableauDeTableaux.flatMap(n => n.map(x => x * 2));
console.log("Tableau aplati et multiplié :");
console.log(JSON.stringify(aplatiEtMultiplie, null, 2));

// --------------------------------------------------------

// Exemple 18: Utilisation de 'some'
console.log("\nTableau original:", nombres);

// Instruction: Vérifiez s'il existe un nombre supérieur à 8 dans le tableau 'nombres'.
// Exemple de réponse attendue : true
const supAHuit = nombres.some(n => n > 8);
console.log("Existe-t-il un nombre supérieur à 8 ?");
console.log(JSON.stringify(supAHuit, null, 2));

// --------------------------------------------------------

// Exemple 19: Répartition des éléments (Partitionnement)
console.log("\nTableau original:", produits);

// Instruction: Séparez les produits en fruits et légumes.
// Exemple de réponse attendue : { fruits: [...], légumes: [...] }
const partition = produits.reduce((acc, produit) => {
    acc[produit.type === "fruit" ? "fruits" : "légumes"].push(produit);
    return acc;
}, { fruits: [], légumes: [] });
console.log("Répartition des produits :");
console.log(JSON.stringify(partition, null, 2));

// --------------------------------------------------------

// Exemple 20: Création d'une chaîne de caractères à partir d'un tableau
const lettres = ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'];
console.log("\nTableau original:", lettres);

// Instruction: Joignez les lettres pour former un mot.
// Exemple de réponse attendue : "JavaScript"
const mot = lettres.join("");
console.log("Mot formé à partir du tableau :");
console.log(JSON.stringify(mot, null, 2));

// --------------------------------------------------------
