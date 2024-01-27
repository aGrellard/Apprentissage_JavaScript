/*
 * TP JavaScript : Maîtriser la méthode sort()
 * Objectif : Ce TP vise à vous familiariser avec la méthode sort() en JavaScript. 
 * Vous apprendrez à trier des tableaux de nombres, de chaînes de caractères, et des objets, 
 * en utilisant diverses fonctions de comparaison.
 */

// Exemple 1: Tri de nombres
const nombres = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("\nTableau original de nombres:", nombres);

// Instruction: Triez le tableau 'nombres' en ordre croissant.
// Exemple de réponse attendue : [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
const nombresTries = [...nombres].sort((a, b) => a - b);
console.log("Nombres triés en ordre croissant :");
console.log(JSON.stringify(nombresTries, null, 2));

// --------------------------------------------------------

// Exemple 2: Tri de chaînes de caractères
const mots = ["banane", "pomme", "cerise", "abricot"];
console.log("\nTableau original de mots:", mots);

// Instruction: Triez le tableau 'mots' par ordre alphabétique.
// Exemple de réponse attendue : ["abricot", "banane", "cerise", "pomme"]
const motsTries = [...mots].sort();
console.log("Mots triés par ordre alphabétique :");
console.log(JSON.stringify(motsTries, null, 2));

// --------------------------------------------------------

// Exemple 3: Tri de chaînes de caractères (Ordre décroissant)
console.log("\nTableau original de mots:", mots);

// Instruction: Triez le tableau 'mots' en ordre alphabétique décroissant.
// Exemple de réponse attendue : ["pomme", "cerise", "banane", "abricot"]
const motsTriesDesc = [...mots].sort((a, b) => b.localeCompare(a));
console.log("Mots triés en ordre alphabétique décroissant :");
console.log(JSON.stringify(motsTriesDesc, null, 2));

// --------------------------------------------------------

// Exemple 4: Tri d'objets selon une propriété
const personnes = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 },
    { nom: "Carol", age: 22 }
];
console.log("\nTableau original de personnes:", personnes);

// Instruction: Triez le tableau 'personnes' par âge croissant.
// Exemple de réponse attendue : [{ nom: "Carol", age: 22 }, { nom: "Alice", age: 25 }, { nom: "Bob", age: 30 }]
const personnesTriesParAge = [...personnes].sort((a, b) => a.age - b.age);
console.log("Personnes triées par âge croissant :");
console.log(JSON.stringify(personnesTriesParAge, null, 2));

// --------------------------------------------------------

// Exemple 5: Tri inversé d'objets selon une propriété
console.log("\nTableau original de personnes:", personnes);

// Instruction: Triez le tableau 'personnes' par âge décroissant.
// Exemple de réponse attendue : [{ nom: "Bob", age: 30 }, { nom: "Alice", age: 25 }, { nom: "Carol", age: 22 }]
const personnesTriesParAgeDesc = [...personnes].sort((a, b) => b.age - a.age);
console.log("Personnes triées par âge décroissant :");
console.log(JSON.stringify(personnesTriesParAgeDesc, null, 2));

// --------------------------------------------------------

// Exemple 6: Tri complexe d'objets
const produits = [
    { nom: "Pomme", type: "fruit", prix: 1 },
    { nom: "Carotte", type: "légume", prix: 0.5 },
    { nom: "Banane", type: "fruit", prix: 0.75 },
    { nom: "Céleri", type: "légume", prix: 1.5 }
];
console.log("\nTableau original de produits:", produits);

// Instruction: Triez le tableau 'produits' d'abord par type (alphabétiquement), puis par prix croissant.
// Exemple de réponse attendue : [{ nom: "Banane", type: "fruit", prix: 0.75 }, { nom: "Pomme", type: "fruit", prix: 1 }, { nom: "Carotte", type: "légume", prix: 0.5 }, { nom: "Céleri", type: "légume", prix: 1.5 }]
const produitsTries = [...produits].sort((a, b) => {
    if (a.type < b.type) return -1;
    if (a.type > b.type) return 1;
    return a.prix - b.prix;
});
console.log("Produits triés par type et prix :");
console.log(JSON.stringify(produitsTries, null, 2));

// --------------------------------------------------------
// Exemple 7: Tri de nombres en ordre décimal
const decimaux = [2.1, 2.01, 2.001, 2.0001];
console.log("\nTableau original de nombres décimaux:", decimaux);

// Instruction: Triez le tableau 'decimaux' en ordre croissant, en tenant compte des décimales.
// Exemple de réponse attendue : [2.0001, 2.001, 2.01, 2.1]
const decimauxTries = [...decimaux].sort((a, b) => a - b);
console.log("Nombres décimaux triés en ordre croissant :");
console.log(JSON.stringify(decimauxTries, null, 2));

// --------------------------------------------------------

// Exemple 8: Tri de chaînes de caractères avec casse mixte
const mixte = ["Alpha", "bravo", "CHARLIE", "delta"];
console.log("\nTableau original de mots mixtes:", mixte);

// Instruction: Triez le tableau 'mixte' par ordre alphabétique, sans tenir compte de la casse.
// Exemple de réponse attendue : ["Alpha", "bravo", "CHARLIE", "delta"]
const mixteTries = [...mixte].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("Mots mixtes triés sans tenir compte de la casse :");
console.log(JSON.stringify(mixteTries, null, 2));

// --------------------------------------------------------

// Exemple 9: Tri inversé de nombres (Ordre décroissant)
console.log("\nTableau original de nombres:", nombres);

// Instruction: Triez le tableau 'nombres' en ordre décroissant.
// Exemple de réponse attendue : [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]
const nombresTriesDesc = [...nombres].sort((a, b) => b - a);
console.log("Nombres triés en ordre décroissant :");
console.log(JSON.stringify(nombresTriesDesc, null, 2));

// --------------------------------------------------------

// Exemple 10: Tri d'objets par longueur de propriété
const noms = [{ nom: "Alice" }, { nom: "Bob" }, { nom: "Carolyn" }, { nom: "Dave" }];
console.log("\nTableau original d'objets:", noms);

// Instruction: Triez le tableau 'noms' par la longueur du nom, du plus court au plus long.
// Exemple de réponse attendue : [{ nom: "Bob" }, { nom: "Dave" }, { nom: "Alice" }, { nom: "Carolyn" }]
const nomsTriesParLongueur = [...noms].sort((a, b) => a.nom.length - b.nom.length);
console.log("Noms triés par longueur :");
console.log(JSON.stringify(nomsTriesParLongueur, null, 2));

// --------------------------------------------------------

// Exemple 11: Tri complexe de chaînes numériques
const codes = ["2", "12", "1", "22"];
console.log("\nTableau original de chaînes numériques:", codes);

// Instruction: Triez le tableau 'codes' comme s'il s'agissait de nombres.
// Exemple de réponse attendue : ["1", "2", "12", "22"]
const codesTries = [...codes].sort((a, b) => parseInt(a) - parseInt(b));
console.log("Codes triés numériquement :");
console.log(JSON.stringify(codesTries, null, 2));

// --------------------------------------------------------

// Exemple 12: Tri selon une propriété secondaire
console.log("\nTableau original de personnes:", personnes);

// Instruction: Triez 'personnes' par nom en cas d'égalité d'âge.
// Exemple de réponse attendue : [{ nom: "Alice", age: 25 }, { nom: "Bob", age: 30 }, { nom: "Carol", age: 22 }]
const personnesTriesNomAge = [...personnes].sort((a, b) => {
    if (a.age === b.age) {
        return a.nom.localeCompare(b.nom);
    }
    return a.age - b.age;
});
console.log("Personnes triées par âge, puis par nom :");
console.log(JSON.stringify(personnesTriesNomAge, null, 2));

// --------------------------------------------------------

// Exemple 13: Tri aléatoire
console.log("\nTableau original de nombres:", nombres);

// Instruction: Triez le tableau 'nombres' de manière aléatoire.
// Exemple de réponse : Résultat aléatoire
const nombresTriesAleatoirement = [...nombres].sort(() => Math.random() - 0.5);
console.log("Nombres triés aléatoirement :");
console.log(JSON.stringify(nombresTriesAleatoirement, null, 2));

// --------------------------------------------------------

// Exemple 14: Tri inversé d'objets selon une propriété numérique
console.log("\nTableau original de produits:", produits);

// Instruction: Triez le tableau 'produits' par prix décroissant.
// Exemple de réponse attendue : [{...}, {...}, ...] (produits triés par prix décroissant)
const produitsTriesPrixDesc = [...produits].sort((a, b) => b.prix - a.prix);
console.log("Produits triés par prix décroissant :");
console.log(JSON.stringify(produitsTriesPrixDesc, null, 2));

// --------------------------------------------------------

// Exemple 15: Tri stable (maintenir l'ordre d'origine en cas d'égalité)
console.log("\nTableau original de personnes:", personnes);

// Instruction: Effectuez un tri stable sur 'personnes' par âge, en conservant l'ordre d'origine si les âges sont égaux.
// Exemple de réponse attendue : [{...}, {...}, ...] (ordre original conservé en cas d'égalité d'âge)
const personnesTriesStable = [...personnes].sort((a, b) => {
    const ageDifference = a.age - b.age;
    return ageDifference !== 0 ? ageDifference : personnes.indexOf(a) - personnes.indexOf(b);
});
console.log("Tri stable des personnes par âge :");
console.log(JSON.stringify(personnesTriesStable, null, 2));

// --------------------------------------------------------
