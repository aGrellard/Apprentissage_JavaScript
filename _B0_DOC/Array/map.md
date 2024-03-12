# Contenu


- [Contenu](#contenu)
  - [la fonction map](#la-fonction-map)
    - [Syntaxe de base](#syntaxe-de-base)
    - [Fonctionnement de `map()`](#fonctionnement-de-map)
    - [Exemple d'Utilisation](#exemple-dutilisation)
    - [Points Importants](#points-importants)
  - [Exemples simple](#exemples-simple)
    - [1. **Transformation d'Éléments**](#1-transformation-déléments)
    - [2. **Extraction de Propriétés d'Objets**](#2-extraction-de-propriétés-dobjets)
    - [3. **Conversion de Types de Données**](#3-conversion-de-types-de-données)
    - [4. **Appliquer une Fonction Complexes**](#4-appliquer-une-fonction-complexes)
    - [5. **Création de Nouvelles Structures de Données**](#5-création-de-nouvelles-structures-de-données)
    - [6. **Combinaison avec d'autres Méthodes de Tableau**](#6-combinaison-avec-dautres-méthodes-de-tableau)
    - [7. **Mappage avec Index ou Tableau Complet**](#7-mappage-avec-index-ou-tableau-complet)
    - [8. **Opérations Mathématiques ou Algorithmiques**](#8-opérations-mathématiques-ou-algorithmiques)
  - [`thisArg`](#thisarg)
      - [Exemple sans `thisArg`](#exemple-sans-thisarg)
      - [Exemple avec `thisArg`](#exemple-avec-thisarg)
    - [Points Importants](#points-importants-1)
    - [utilisation de `thisArg`](#utilisation-de-thisarg)
      - [1. Accès aux Propriétés de l'Objet dans la Fonction de Rappel](#1-accès-aux-propriétés-de-lobjet-dans-la-fonction-de-rappel)
      - [2. Utilisation dans les Méthodes de Classe](#2-utilisation-dans-les-méthodes-de-classe)
      - [3. Modification du Comportement de la Fonction de Rappel](#3-modification-du-comportement-de-la-fonction-de-rappel)
      - [4. Utilisation avec des Objets Littéraux](#4-utilisation-avec-des-objets-littéraux)
    - [Points Importants](#points-importants-2)
  - [Utilisation de `index` et `array`](#utilisation-de-index-et-array)
    - [Utilisation de `index`](#utilisation-de-index)
    - [Utilisation de `array`](#utilisation-de-array)
    - [Points Importants](#points-importants-3)
    - [Combinant `index` et `array`](#combinant-index-et-array)
  - [Combiner l'utilisation de l'Indice et du Tableau Entier](#combiner-lutilisation-de-lindice-et-du-tableau-entier)
    - [1. Calculs Basés sur l'Indice et le Tableau Entier](#1-calculs-basés-sur-lindice-et-le-tableau-entier)
    - [2. Accès aux Éléments Adjacents](#2-accès-aux-éléments-adjacents)
    - [3. Utiliser l'Indice pour des Opérations Conditionnelles](#3-utiliser-lindice-pour-des-opérations-conditionnelles)
    - [4. Créer des Structures de Données Complexes](#4-créer-des-structures-de-données-complexes)
    - [5. Utiliser l'Indice pour Contrôler la Transformation](#5-utiliser-lindice-pour-contrôler-la-transformation)
    - [6. Références Croisées dans le Tableau](#6-références-croisées-dans-le-tableau)
  - [utilisation combinée de thisArg, index et array](#utilisation-combinée-de-thisarg-index-et-array)
    - [1. Utilisation de `thisArg` pour Accéder aux Propriétés d'un Objet](#1-utilisation-de-thisarg-pour-accéder-aux-propriétés-dun-objet)
    - [2. Utilisation de `index` pour des Transformations Basées sur la Position](#2-utilisation-de-index-pour-des-transformations-basées-sur-la-position)
    - [3. Utilisation de `array` pour des Comparaisons ou des Calculs Globaux](#3-utilisation-de-array-pour-des-comparaisons-ou-des-calculs-globaux)
    - [4. Combinaison de `thisArg`, `index` et `array` pour une Logique Complexe](#4-combinaison-de-thisarg-index-et-array-pour-une-logique-complexe)

  
## la fonction map

La fonction `map()` en JavaScript est une méthode de prototype d'Array qui est utilisée pour transformer les éléments d'un tableau en appliquant une fonction à chaque élément du tableau. Cette méthode renvoie un nouveau tableau contenant les résultats de l'application de la fonction à chaque élément. Elle ne modifie pas le tableau original.

### Syntaxe de base
```javascript
let nouveauTableau = tableauOriginal.map(function(element, index, array) {
    // Logique de transformation
}, thisArg);
```

- **tableauOriginal** : Le tableau sur lequel `map()` est appelé.
- **function(element, index, array)** : La fonction de rappel exécutée sur chaque élément du tableau.
  - **element** : L'élément courant du tableau.
  - **index** (optionnel) : L'indice de l'élément courant dans le tableau.
  - **array** (optionnel) : Le tableau sur lequel `map()` a été appelé.
- **thisArg** (optionnel) : La valeur à utiliser comme `this` lors de l'exécution de la fonction de rappel.
- **nouveauTableau** : Le nouveau tableau résultant, contenant les éléments transformés.

### Fonctionnement de `map()`

1. **Itération sur le Tableau**
   - `map()` passe en revue chaque élément du tableau `tableauOriginal`.

2. **Application de la Fonction de Rappel**
   - À chaque élément, la fonction de rappel est appelée, recevant l'élément courant, son indice et le tableau lui-même en tant qu'arguments.

3. **Transformation des Éléments :**
   - La fonction de rappel effectue une opération ou une transformation sur l'élément courant et renvoie un nouveau résultat.

4. **Construction d'un Nouveau Tableau**
   - Les valeurs renvoyées par la fonction de rappel pour chaque élément sont rassemblées dans un nouveau tableau.

5. **Renvoi du Nouveau Tableau**
   - Une fois tous les éléments traités, le nouveau tableau transformé est renvoyé.

### Exemple d'Utilisation

Supposons que nous ayons un tableau de nombres et que nous voulions créer un nouveau tableau avec le carré de chaque nombre :

```javascript
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(number => number * number);
console.log(squares); // [1, 4, 9, 16, 25]
```

Dans cet exemple, `map()` est utilisé pour calculer le carré de chaque élément du tableau `numbers`. Le résultat est un nouveau tableau `squares` contenant ces carrés.

### Points Importants

- `map()` est souvent utilisé pour transformer des données, notamment en manipulant des tableaux d'objets, en extrayant des sous-ensembles de données ou en convertissant des types de données.
- Contrairement à d'autres méthodes comme `forEach()`, `map()` renvoie toujours un nouveau tableau, ce qui le rend particulièrement utile dans la programmation fonctionnelle.
- `map()` n'affecte pas la taille du tableau original, mais la valeur de chaque élément peut être transformée. Si aucun élément n'est transformé, le tableau résultant aura la même taille que le tableau original.

La fonction `map()` en JavaScript est une méthode de l'objet Array qui permet de créer un nouveau tableau en transformant chaque élément du tableau original à l'aide d'une fonction de rappel. L'argument `thisArg` dans `map()` est un paramètre optionnel qui permet de spécifier le contexte (`this`) pour la fonction de rappel.

<br>

<hr>

<br>

## Exemples simple
 
###  1. **Transformation d'Éléments**
   - Modifier chaque élément d'un tableau.
   - Exemple : Doubler chaque nombre dans un tableau de nombres.
     ```javascript
     let numbers = [1, 2, 3];
     let doubled = numbers.map(num => num * 2);
     ```

###  2. **Extraction de Propriétés d'Objets**
   - Extraire une propriété spécifique de chaque objet dans un tableau d'objets.
   - Exemple : Obtenir un tableau des noms à partir d'un tableau d'utilisateurs.
     ```javascript
     let users = [{name: "Alice", age: 25}, {name: "Bob", age: 30}];
     let names = users.map(user => user.name);
     ```

###  3. **Conversion de Types de Données**
   - Transformer les types de données des éléments d'un tableau.
   - Exemple : Convertir un tableau de chaînes de caractères en nombres.
     ```javascript
     let stringNumbers = ["1", "2", "3"];
     let numbers = stringNumbers.map(Number);
     ```

###  4. **Appliquer une Fonction Complexes**
   - Appliquer une logique complexe ou une fonction personnalisée à chaque élément.
   - Exemple : Ajouter une nouvelle propriété à chaque objet dans un tableau.
     ```javascript
     let items = [{name: "chair"}, {name: "table"}];
     let itemsWithPrices = items.map(item => ({ ...item, price: 100 }));
     ```

### 5. **Création de Nouvelles Structures de Données**
   - Générer un nouveau format ou une nouvelle structure de données à partir d'un tableau existant.
   - Exemple : Créer un tableau de messages à partir d'un tableau d'utilisateurs.
     ```javascript
     let users = [{name: "Alice", age: 25}, {name: "Bob", age: 30}];
     let messages = users.map(user => `Bonjour ${user.name}, vous avez ${user.age} ans.`);
     ```

### 6. **Combinaison avec d'autres Méthodes de Tableau**
   - Chaîner `map()` avec d'autres méthodes de tableau pour des opérations plus complexes.
   - Exemple : Utiliser `map()` et `filter()` ensemble.
     ```javascript
     let numbers = [1, 2, 3, 4, 5];
     let doubledEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num * 2);
     ```

### 7. **Mappage avec Index ou Tableau Complet**
   - Utiliser l'indice de l'élément ou le tableau complet pour des opérations plus avancées.
   - Exemple : Utiliser l'indice pour modifier les éléments.
     ```javascript
     let items = ["first", "second", "third"];
     let indexedItems = items.map((item, index) => `${index}: ${item}`);
     ```

### 8. **Opérations Mathématiques ou Algorithmiques**
   - Effectuer des calculs complexes ou des algorithmes sur les éléments d'un tableau.
   - Exemple : Calculer le carré de chaque nombre d'un tableau.
     ```javascript
     let numbers = [1, 2, 3, 4];
     let squares = numbers.map(num => num * num);
     ```

`map()` est une méthode de tableau très puissante qui est largement utilisée pour sa capacité à transformer facilement les éléments d'un tableau, tout en gardant le tableau original inchangé.


<br>

<hr>

<br>

 
## `thisArg`

L'argument `thisArg` est utilisé pour définir le contexte (`this`) dans lequel la fonction de rappel est exécutée. Cela peut être particulièrement utile lorsque vous souhaitez accéder à des propriétés ou des méthodes d'un objet spécifique dans votre fonction de rappel.

#### Exemple sans `thisArg`
```javascript
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(function(number) {
    return number * number;
});
```

Dans cet exemple, la fonction de rappel calcule le carré de chaque nombre. `this` dans la fonction de rappel n'est pas défini ou se réfère à l'objet global.

#### Exemple avec `thisArg`
```javascript
function multiply(number) {
    return number * this.multiplier;
}

let numbers = [1, 2, 3, 4, 5];
let multiplierObject = { multiplier: 10 };
let multipliedNumbers = numbers.map(multiply, multiplierObject);
```

Ici, la fonction `multiply` utilise `this.multiplier`. Lorsque `map()` est appelé, `multiplierObject` est passé comme `thisArg`, ce qui fait que `this` dans `multiply` se réfère à `multiplierObject`.

### Points Importants

- Si la fonction de rappel est une fonction fléchée (`arrow function`), `thisArg` est ignoré car les fonctions fléchées n'ont pas leur propre contexte `this` ; elles le captent de leur contexte englobant.
- `map()` est utilisée pour les transformations de données et renvoie un nouveau tableau sans modifier le tableau original.
- `thisArg` est utile pour accéder à des objets ou des fonctions spécifiques dans la fonction de rappel sans avoir à les lier explicitement.


La fonction `map()` en JavaScript est une méthode très versatile utilisée pour créer un nouveau tableau en transformant chaque élément d'un tableau source. La fonction de rappel utilisée avec `map()` peut prendre jusqu'à trois arguments : l'élément en cours de traitement, son indice dans le tableau et le tableau lui-même. Ces arguments sont souvent notés comme `element`, `index` et `array`.

<br>

 
### utilisation de `thisArg`

L'utilisation de `thisArg` avec la méthode `map()` en JavaScript permet de définir le contexte (`this`) dans lequel la fonction de rappel est exécutée. Voici différentes façons d'utiliser `map()` avec `thisArg` :

#### 1. Accès aux Propriétés de l'Objet dans la Fonction de Rappel

Vous pouvez utiliser `thisArg` pour accéder aux propriétés d'un objet spécifique dans votre fonction de rappel.

```javascript
function multiplyByMultiplier(number) {
    return number * this.multiplier;
}

const numbers = [1, 2, 3];
const multiplierObj = { multiplier: 5 };
const multipliedNumbers = numbers.map(multiplyByMultiplier, multiplierObj);
// multipliedNumbers = [5, 10, 15]
```

Ici, `multiplyByMultiplier` utilise `this.multiplier` où `this` est lié à `multiplierObj` grâce à `thisArg`.

#### 2. Utilisation dans les Méthodes de Classe

Si vous travaillez avec des classes, `thisArg` peut être utilisé pour passer une instance de classe à la fonction de rappel.

```javascript
class NumberProcessor {
    constructor(factor) {
        this.factor = factor;
    }

    multiply(number) {
        return number * this.factor;
    }
}

const processor = new NumberProcessor(2);
const numbers = [1, 2, 3];
const processedNumbers = numbers.map(processor.multiply, processor);
// processedNumbers = [2, 4, 6]
```

#### 3. Modification du Comportement de la Fonction de Rappel

`thisArg` peut être utilisé pour changer le comportement de la fonction de rappel en fonction du contexte.

```javascript
function addPrefix(string) {
    return this.prefix + string;
}

const strings = ["one", "two", "three"];
const context = { prefix: "Number " };
const prefixedStrings = strings.map(addPrefix, context);
// prefixedStrings = ["Number one", "Number two", "Number three"]
```

#### 4. Utilisation avec des Objets Littéraux

Vous pouvez passer un objet littéral comme `thisArg` pour accéder à ses propriétés dans la fonction de rappel.

```javascript
function calculatePercentage(value) {
    return value / this.total * 100;
}

const values = [20, 30, 50];
const totalObj = { total: 100 };
const percentages = values.map(calculatePercentage, totalObj);
// percentages = [20, 30, 50]
```

### Points Importants

- Si vous utilisez des fonctions fléchées comme fonctions de rappel, `thisArg` est ignoré car les fonctions fléchées n'ont pas leur propre `this`. Elles capturent `this` de leur contexte englobant.
- `thisArg` est utile lorsque vous voulez que la fonction de rappel ait accès à des propriétés ou des méthodes d'un objet spécifique.
- `map()` crée toujours un nouveau tableau et ne modifie pas le tableau original.

Ces exemples montrent comment `thisArg` peut être utilisé pour personnaliser le contexte d'exécution de la fonction de rappel dans `map()`, ce qui rend cette méthode encore plus flexible et puissante pour manipuler des tableaux.

<br>

<hr>

<br>

 
## Utilisation de `index` et `array`

L'utilisation des paramètres `index` et `array` dans la fonction de rappel de `map()` offre une flexibilité supplémentaire pour des transformations plus complexes.

### Utilisation de `index`

- **Modification Basée sur l'Indice :** Vous pouvez utiliser l'indice de l'élément pour effectuer des calculs ou des transformations qui dépendent de la position de l'élément dans le tableau.
  
  ```javascript
  let numbers = [10, 20, 30, 40];
  let indexedNumbers = numbers.map((num, index) => num * index);
  // indexedNumbers est [0, 20, 60, 120]
  ```

  Ici, chaque élément est multiplié par son indice dans le tableau.

- **Création d'un Tableau de Chaînes Incluant l'Indice :**
  ```javascript
  let fruits = ['apple', 'banana', 'cherry'];
  let fruitWithIndex = fruits.map((fruit, index) => `${index + 1}: ${fruit}`);
  // fruitWithIndex = ["1: apple", "2: banana", "3: cherry"]
  ```

- **Calcul Basé sur l'Indice (par exemple, pour un Algorithme Mathématique) :**
  ```javascript
  let numbers = [6, 7, 8, 9];
  let indexedCalculation = numbers.map((num, index) => num * index);
  // indexedCalculation = [0, 7, 16, 27]
  ```

### Utilisation de `array`

- **Accès au Tableau Complet :** La référence au tableau complet permet d'effectuer des opérations qui peuvent nécessiter une vue d'ensemble du tableau, comme des comparaisons avec d'autres éléments.
  
  ```javascript
  let numbers = [1, 2, 3, 4, 5];
  let average = numbers.map((num, index, arr) => num - (arr.reduce((a, b) => a + b) / arr.length));
  // average calcule la différence de chaque élément par rapport à la moyenne
  ```

  Dans cet exemple, la différence entre chaque nombre et la moyenne du tableau est calculée.

- **Accès au Tableau Entier pour des Calculs Basés sur d'autres Éléments :**
  ```javascript
  let numbers = [1, 2, 3, 4];
  let percentages = numbers.map((num, index, arr) => num / arr.reduce((a, b) => a + b) * 100);
  // percentages = [10, 20, 30, 40] (pourcentages de la somme totale)
  ```

- **Utilisation de `array` pour des Comparaisons ou des Conditions :**
  ```javascript
  let numbers = [15, 30, 45];
  let isLargest = numbers.map((num, index, arr) => num === Math.max(...arr));
  // isLargest = [false, false, true]
  ```

### Points Importants

- `map()` est non destructrice : elle ne modifie pas le tableau original, mais renvoie un nouveau tableau.
- L'utilisation de `index` et `array` n'est pas toujours nécessaire, mais elle offre des options supplémentaires pour des transformations plus sophistiquées.
- `map()` est idéale pour les opérations qui transforment chaque élément d'un tableau de manière indépendante, mais avec l'accès à l'indice et au tableau complet, elle peut gérer des cas plus complexes.

En résumé, la méthode `map()` avec ses arguments `element`, `index` et `array` fournit une méthode puissante et flexible pour créer de nouveaux tableaux en transformant les éléments d'un tableau existant.

<br>

> La méthode `map()` en JavaScript est fréquemment utilisée pour transformer les éléments d'un tableau. En plus de l'élément actuellement traité, `map()` peut également recevoir l'indice de l'élément (`index`) et le tableau complet sur lequel la méthode est appelée (`array`) comme arguments de la fonction de rappel. Ces arguments supplémentaires offrent une flexibilité accrue pour les transformations complexes. Voici plusieurs utilisations de `map()` en tirant parti de `index` et `array` :

<br>


### Combinant `index` et `array`

- **Création d'Éléments de Liste HTML avec Index et Longueur Totale :**
  ```javascript
  let items = ['Item1', 'Item2', 'Item3'];
  let listItems = items.map((item, index, arr) => `<li>${item} (${index + 1} of ${arr.length})</li>`);
  // listItems = ["<li>Item1 (1 of 3)</li>", "<li>Item2 (2 of 3)</li>", "<li>Item3 (3 of 3)</li>"]
  ```

- **Construction de Tableaux de Données pour des Visualisations :**
  ```javascript
  let dataPoints = [100, 200, 300];
  let graphPoints = dataPoints.map((point, index, arr) => {
      return {
          x: index,
          y: point,
          percentageOfTotal: point / arr.reduce((a, b) => a + b) * 100
      };
  });
  // graphPoints = [{ x: 0, y: 100, percentageOfTotal: ... }, ...]
  ```


<br>

<hr>

<br>


## Combiner l'utilisation de l'Indice et du Tableau Entier

La méthode `map()` en JavaScript peut être utilisée de manière très créative en combinant les arguments `index` et `array` avec l'élément en cours de traitement. Cette approche permet de réaliser des transformations complexes sur les éléments du tableau en tenant compte de leur position ou en se référant à l'ensemble du tableau. Voici différentes manières d'utiliser `map()` en combinant `index` et `array` :

### 1. Calculs Basés sur l'Indice et le Tableau Entier

- **Calculer la Moyenne et la Soustraire de Chaque Élément :**
  ```javascript
  let numbers = [1, 2, 3, 4, 5];
  let average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  let deviations = numbers.map((num, index, arr) => num - average);
  ```

### 2. Accès aux Éléments Adjacents

- **Créer un Tableau de Paires d'Éléments Adjacents :**
  ```javascript
  let items = ['a', 'b', 'c', 'd'];
  let pairs = items.map((current, index, arr) => 
                index < arr.length - 1 ? [current, arr[index + 1]] : null)
                .filter(pair => pair !== null);
  ```

### 3. Utiliser l'Indice pour des Opérations Conditionnelles

- **Marquer les Éléments Basés sur leur Position :**
  ```javascript
  let items = ['first', 'second', 'third'];
  let markedItems = items.map((item, index, arr) => 
                      `${item}${index === arr.length - 1 ? ' (last)' : ''}`);
  ```

### 4. Créer des Structures de Données Complexes

- **Construire un Objet avec des Informations Supplémentaires :**
  ```javascript
  let numbers = [10, 20, 30];
  let detailedNumbers = numbers.map((num, index, arr) => ({
    value: num,
    isEven: num % 2 === 0,
    position: index,
    percentageOfTotal: (num / arr.reduce((a, b) => a + b)) * 100
  }));
  ```

### 5. Utiliser l'Indice pour Contrôler la Transformation

- **Transformation Conditionnelle Basée sur l'Indice :**
  ```javascript
  let names = ['Alice', 'Bob', 'Charlie'];
  let upperCasedOdd = names.map((name, index) => index % 2 !== 0 ? name.toUpperCase() : name);
  ```

### 6. Références Croisées dans le Tableau

- **Comparaison de l'Élément Actuel avec d'Autres Éléments :**
  ```javascript
  let numbers = [3, 6, 2, 8, 5];
  let greaterThanPrevious = numbers.map((num, index, arr) => 
                              index === 0 ? true : num > arr[index - 1]);
  ```


<br>

<hr>

<br>


## utilisation combinée de thisArg, index et array


### 1. Utilisation de `thisArg` pour Accéder aux Propriétés d'un Objet

- **Transformer des Éléments en Utilisant une Propriété d'Objet :**
  ```javascript
  function scaleNumber(number) {
      return number * this.scaleFactor;
  }

  const numbers = [1, 2, 3, 4, 5];
  const scaleContext = { scaleFactor: 10 };
  const scaledNumbers = numbers.map(scaleNumber, scaleContext);
  // Résultat : [10, 20, 30, 40, 50]
  ```

### 2. Utilisation de `index` pour des Transformations Basées sur la Position

- **Marquage des Éléments Basé sur leur Indice :**
  ```javascript
  const items = ['item1', 'item2', 'item3'];
  const markedItems = items.map(function(item, index) {
      return `${item} - Position: ${index + 1} sur ${this.totalItems}`;
  }, { totalItems: items.length });
  // Résultat : ["item1 - Position: 1 sur 3", "item2 - Position: 2 sur 3", ...]
  ```

### 3. Utilisation de `array` pour des Comparaisons ou des Calculs Globaux

- **Calculs Impliquant le Tableau Entier :**
  ```javascript
  const numbers = [2, 3, 5, 7, 11];
  const percentages = numbers.map(function(number, index, arr) {
      const total = arr.reduce((acc, curr) => acc + curr, 0);
      return `Number: ${number}, Share: ${(number / total * 100).toFixed(2)}%`;
  });
  // Résultat : ["Number: 2, Share: 6.67%", "Number: 3, Share: 10.00%", ...]
  ```

### 4. Combinaison de `thisArg`, `index` et `array` pour une Logique Complexe

- **Utilisation Complète des Trois Arguments pour une Logique Personnalisée :**
  ```javascript
  function customTransform(element, index, arr) {
      return `Element: ${element}, Scaled by: ${this.scaleFactor}, Position: ${index + 1}, Total Elements: ${arr.length}`;
  }

  const elements = [10, 20, 30];
  const transformContext = { scaleFactor: 2 };
  const transformedElements = elements.map(customTransform, transformContext);
  // Résultat : ["Element: 10, Scaled by: 2, Position: 1, Total Elements: 3", ...]
  ```

Dans ces exemples, `thisArg` est utilisé pour fournir un contexte externe (comme un objet avec des propriétés spécifiques) à la fonction de rappel. L'argument `index` est utilisé pour accéder à la position actuelle de l'élément dans le tableau, et `array` est utilisé pour effectuer des opérations qui impliquent une vision globale du tableau, comme des calculs impliquant tous les éléments.

Ces exemples montrent la flexibilité et la puissance de `map()` pour effectuer des transformations complexes sur des tableaux, tout en fournissant un contrôle fin sur le contexte et en accédant à des informations détaillées sur chaque élément et le tableau dans son ensemble.
