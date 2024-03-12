// ID: 1
// Name: filter_1
// Méthode: filter
// Description: Filtrer les nombres pairs dans un tableau de nombres.
variable = [1, 2, 3, 4, 5]
// Expected Output: [2, 4]
result = undefined
console.log(JSON.stringify(result))

// ID: 2
// Name: filter_2
// Méthode: filter
// Description: Filtrer les doublons dans un tableau de nombres.
variable = [6, 2, 2, 2, 3, 3, 3, 3]
// Expected Output: [6, 2, 3]
result = undefined
console.log(JSON.stringify(result))

// ID: 3
// Name: filter_3
// Méthode: filter
// Description: Filtrer un tableau d'objets par age > 25.
variable = [{ nom: 'Alice', age: 25 }, { nom: 'Bob', age: 30 }, { nom: 'Carol', age: 22 }]
// Expected Output: [{"nom":"Bob","age":30}]
result = undefined
console.log(JSON.stringify(result))

// ID: 4
// Name: filter_4
// Méthode: filter et map
// Description: Filtrer et mapper un tableau d'objets selon la quantité <= 10.
variable = [{name: 'apple', type: 'fruit', quantity: 10}, {name: 'carrot', type: 'vegetable', quantity: 5}, {name: 'pomme', type: 'fruit', quantity: 2}, {name: 'salade', type: 'vegetable', quantity: 12}]
// Expected Output: [{"name":"apple","qty":10},{"name":"carrot","qty":5},{"name":"pomme","qty":2}]
result = undefined
console.log(JSON.stringify(result))

// ID: 5
// Name: filter_5
// Méthode: filter
// Description: Filtrer un tableau d'objets en utilisant `thisArg`.
variable = [{name: 'apple', type: 'fruit', quantity: 10}, {name: 'carrot', type: 'vegetable', quantity: 5}, {name: 'pomme', type: 'fruit', quantity: 2}, {name: 'salade', type: 'vegetable', quantity: 12}]
variable = {name: 'apple'}
// Expected Output: [{"name":"apple","type":"fruit","quantity":10}]
result = undefined
console.log(JSON.stringify(result))

// ID: 6
// Name: reduce_1
// Méthode: reduce
// Description: Calculer la somme des éléments d'un tableau de nombres.
variable = [1, 2, 3, 4, 5]
// Expected Output: 15
result = undefined
console.log(JSON.stringify(result))

// ID: 7
// Name: reduce_2
// Méthode: reduce
// Description: Trouver la plus grande valeur dans un tableau de nombres (version 1).
variable = [1, 2, 3, 4, 5]
// Expected Output: 5
result = undefined
console.log(JSON.stringify(result))

// ID: 8
// Name: reduce_3
// Méthode: reduce
// Description: Trouver la plus grande valeur dans un tableau de nombres (version 2).
variable = [3, 4, 2, 1, 5]
// Expected Output: 5
result = undefined
console.log(JSON.stringify(result))

// ID: 9
// Name: reduce_4
// Méthode: reduce
// Description: Construire un objet à partir d'un tableau de paires clé-valeur.
variable = [['clé1', 'valeur1'], ['clé2', 'valeur2']]
// Expected Output: {"clé1":"valeur1","clé2":"valeur2"}
result = undefined
console.log(JSON.stringify(result))

// ID: 10
// Name: reduce_5
// Méthode: reduce
// Description: Compter les occurrences de chaque valeur dans un tableau.
variable = [6, 2, 2, 2, 3, 3, 3, 3]
// Expected Output: {"2":3,"3":4,"6":1}
result = undefined
console.log(JSON.stringify(result))

// ID: 11
// Name: reduce_6
// Méthode: reduce
// Description: Grouper des personnes par âge en incluant les objets complets.
variable = [{ nom: 'Alice', age: 25 }, { nom: 'Bob', age: 30 }, { nom: 'Carol', age: 22 }, { nom: 'Jhon', age: 22 }]
// Expected Output: {"22":[{"nom":"Carol","age":22},{"nom":"jhon","age":22}],"25":[{"nom":"Alice","age":25}],"30":[{"nom":"Bob","age":30}]}
result = undefined
console.log(JSON.stringify(result))

// ID: 12
// Name: reduce_7
// Méthode: reduce
// Description: Grouper des personnes par âge en incluant uniquement leurs noms.
variable = [{ nom: 'Alice', age: 25 }, { nom: 'Bob', age: 30 }, { nom: 'Carol', age: 22 }, { nom: 'Jhon', age: 22 }]
// Expected Output: {"25":["Alice","Jhon"],"30":["Bob"],"22":["Carol"]}
result = undefined
console.log(JSON.stringify(result))

// ID: 13
// Name: map_1
// Méthode: map
// Description: Créer un nouveau tableau d'objets indiquant si la valeur originale est paire ou impaire.
variable = [1, 2, 3, 4, 5]
// Expected Output: [{"isNotPair":1},{"isNotPair":0},{"isNotPair":1},{"isNotPair":0},{"isNotPair":1}]
result = undefined
console.log(JSON.stringify(result))

// ID: 14
// Name: map_2
// Méthode: map
// Description: Reformater un tableau d'objets pour créer un nouveau tableau où chaque objet a une clé issue de l'objet original et sa valeur correspondante.
variable = [{ cle: 1, valeur: 10 }, { cle: 2, valeur: 20 }, { cle: 3, valeur: 30 }]
// Expected Output: [{"1":10},{"2":20},{"3":30}]
result = undefined
console.log(JSON.stringify(result))

// ID: 15
// Name: map_3
// Méthode: map
// Description: Transformer un tableau d'objets en un tableau de chaînes de caractères qui décrit chaque objet.
variable = [{name: 'apple', type: 'fruit', quantity: 10}, {name: 'carrot', type: 'vegetable', quantity: 5}, {name: 'pomme', type: 'fruit', quantity: 2}, {name: 'salade', type: 'vegetable', quantity: 12}]
// Expected Output: ["il reste 10/g de apple","il reste 5/g de carrot","il reste 2/g de pomme","il reste 12/g de salade"]
result = undefined
console.log(JSON.stringify(result))

// ID: 16
// Name: map_4
// Méthode: map
// Description: Ajouter une nouvelle clé à chaque objet d'un tableau d'objets.
variable = [{ nom: 'Alice', age: 25 }, { nom: 'Bob', age: 30 }, { nom: 'Carol', age: 22 }]
// Expected Output: [{"nom":"Alice","age":25,"new":"Hello"},{"nom":"Bob","age":30,"new":"Hello"},{"nom":"Carol","age":22,"new":"Hello"}]
result = undefined
console.log(JSON.stringify(result))

// ID: 17
// Name: sort_1
// Méthode: sort
// Description: Trier un tableau de nombres en ordre croissant.
variable = [3, 1, 4, 1, 5, 9]
// Expected Output: [1, 1, 3, 4, 5, 9]
result = undefined
console.log(JSON.stringify(result))

// ID: 18
// Name: sort_2
// Méthode: sort
// Description: Trier un tableau de chaînes de caractères.
variable = ['Pomme', 'banane', 'orange', 'kiwi', 'mangue']
// Expected Output: ["Pomme","banane","kiwi","mangue","orange"]
result = undefined
console.log(JSON.stringify(result))

// ID: 19
// Name: sort_3
// Méthode: sort
// Description: Trier un tableau de chaînes de caractères sans tenir compte de la casse.
variable = ['Pomme', 'banane', 'orange', 'kiwi', 'mangue']
// Expected Output: ["banane","kiwi","mangue","orange","Pomme"]
result = undefined
console.log(JSON.stringify(result))

// ID: 20
// Name: sort_4
// Méthode: sort
// Description: Trier un tableau d'objets représentant des personnes d'abord par nom, puis par âge en cas de noms identiques.
variable = [{ nom: 'Alice', age: 25 }, { nom: 'Bob', age: 30 }, { nom: 'Carol', age: 22 }, { nom: 'Alice', age: 12 }]
// Expected Output: [{"nom":"Alice","age":12},{"nom":"Alice","age":25},{"nom":"Bob","age":30},{"nom":"Carol","age":22}]
result = undefined
console.log(JSON.stringify(result))

