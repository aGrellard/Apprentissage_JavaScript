La fonction `every()` en JavaScript est une méthode de l'objet `Array` qui teste si tous les éléments d'un tableau passent un test implémenté par une fonction de rappel fournie. Elle est souvent utilisée pour vérifier si tous les éléments d'un tableau satisfont à une condition spécifique.

### Syntaxe de base :
```javascript
array.every(callback(element[, index[, array]])[, thisArg])
```

- **callback** : Une fonction qui teste chaque élément du tableau. Cette fonction est appelée avec les arguments suivants :
  - **element** : L'élément actuellement traité dans le tableau.
  - **index** (optionnel) : L'indice de l'élément actuellement traité dans le tableau.
  - **array** (optionnel) : Le tableau sur lequel `every()` a été appelé.
- **thisArg** (optionnel) : Une valeur à utiliser comme `this` lors de l'exécution de la fonction de rappel.

### Fonctionnement :
- La méthode `every()` exécute la fonction de rappel une fois pour chaque élément présent dans le tableau, jusqu'à ce qu'elle trouve un élément pour lequel la fonction renvoie une valeur falsy (fausse).
- Si la fonction de rappel renvoie une valeur truthy (vraie) pour tous les éléments du tableau, `every()` renvoie `true`.
- Si la fonction de rappel renvoie `false` pour au moins un élément du tableau, `every()` renvoie `false` et cesse d'exécuter la fonction pour les éléments restants.
- `every()` ne modifie pas le tableau sur lequel il est appelé.

### Exemples :

1. **Vérifier si Tous les Éléments d'un Tableau sont des Nombres :**
   ```javascript
   let isNumber = (value) => typeof value === 'number';
   let numbers = [1, 2, 3, 4, 5];
   let allNumbers = numbers.every(isNumber); // Renvoie true
   ```

2. **Vérifier si Tous les Éléments d'un Tableau Satisfont à une Condition :**
   ```javascript
   let belowThreshold = (value) => value < 10;
   let numbers = [1, 2, 3];
   let allBelowThreshold = numbers.every(belowThreshold); // Renvoie true
   ```

3. **Vérification sur un Tableau d'Objets :**
   ```javascript
   let people = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
   let allAdults = people.every(person => person.age >= 18); // Renvoie true
   ```

### Points Importants :
- `every()` est une excellente option pour tester une condition sur tous les éléments d'un tableau, surtout dans les cas où vous avez besoin d'une vérification booléenne.
- La méthode retourne `true` pour tout tableau vide, quelle que soit la condition testée, car il n'y a aucun élément pour lequel la condition échoue.
- `every()` cesse l'exécution dès qu'une valeur falsy est retournée par la fonction de rappel, ce qui peut améliorer l'efficacité pour les grands tableaux.

<br>

<hr>

<br>

### 1. Vérifier si Tous les Éléments Répondent à une Condition Simple :
- **Vérifier si tous les nombres d'un tableau sont positifs :**
  ```javascript
  let numbers = [1, 2, 3, 4, 5];
  let allPositive = numbers.every(num => num > 0);
  ```

### 2. Utilisation avec des Tableaux d'Objets :
- **Vérifier si tous les objets d'un tableau ont une certaine propriété :**
  ```javascript
  let people = [{name: "Alice", age: 25}, {name: "Bob", age: 30}];
  let allHaveAge = people.every(person => person.age !== undefined);
  ```

### 3. Vérification de Conditions Complexes :
- **Tester des conditions plus complexes sur les éléments du tableau :**
  ```javascript
  let numbers = [3, 5, 7, 9];
  let allOdd = numbers.every(num => num % 2 !== 0);
  ```

### 4. Utilisation avec des Chaînes de Caractères :
- **Vérifier si tous les éléments d'un tableau de chaînes respectent un critère :**
  ```javascript
  let words = ["apple", "banana", "cherry"];
  let allStartWithA = words.every(word => word.startsWith("a"));
  ```

### 5. Combiner `every()` avec d'Autres Méthodes de Tableau :
- **Utiliser `every()` dans une chaîne de méthodes de traitement de tableau :**
  ```javascript
  let numbers = [1, 2, 3, 4, 5];
  let allEvenAfterTransformation = numbers.map(num => num * 2).every(num => num % 2 === 0);
  ```

### 6. Utilisation de `every()` pour la Validation :
- **Valider les éléments d'un tableau pour s'assurer qu'ils respectent une règle de validation :**
  ```javascript
  let ages = [22, 18, 33, 17];
  let allAdults = ages.every(age => age >= 18);
  ```

### 7. Utiliser `every()` avec des Indices ou le Tableau Complet :
- **Accéder à l'indice ou au tableau complet dans la fonction de rappel :**
  ```javascript
  let numbers = [1, 2, 3, 4, 5];
  let isOrdered = numbers.every((num, index, arr) => index === 0 || arr[index - 1] <= num);
  ```

### Points Importants :
- `every()` renvoie `true` si la fonction de rappel renvoie `true` pour chaque élément du tableau.
- Elle renvoie `false` dès qu'un élément ne satisfait pas la condition.
- La méthode est particulièrement utile pour la validation et la vérification des données dans les tableaux.
- `every()` renvoie `true` pour un tableau vide, quel que soit le test réalisé, car techniquement, aucun élément ne viole la condition.
