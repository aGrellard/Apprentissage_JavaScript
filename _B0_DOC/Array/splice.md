La fonction `splice()` en JavaScript est une méthode très versatile de l'objet `Array` qui est utilisée pour modifier le contenu d'un tableau en ajoutant, enlevant, ou remplaçant des éléments. Contrairement à `slice()`, `splice()` modifie directement le tableau sur lequel elle est appelée.

### Syntaxe de base :
```javascript
array.splice(start, deleteCount, item1, item2, ..., itemN)
```

- **start** : L'indice auquel commencer à changer le tableau.
- **deleteCount** (optionnel) : Le nombre d'éléments à supprimer à partir de l'indice `start`.
- **item1, item2, ..., itemN** (optionnels) : Les éléments à ajouter au tableau à partir de l'indice `start`.

### Fonctionnement :

1. **Suppression d'Éléments :**
   - Si `deleteCount` est spécifié et non nul, `splice()` supprime le nombre d'éléments indiqué à partir de l'indice `start`.
   - Exemple :
     ```javascript
     let fruits = ["pomme", "banane", "cerise", "datte"];
     fruits.splice(1, 2); // Supprime "banane" et "cerise"
     ```

2. **Ajout d'Éléments :**
   - Si des éléments supplémentaires (`item1`, `item2`, ..., `itemN`) sont fournis, ils sont ajoutés au tableau à partir de l'indice `start`.
   - Exemple :
     ```javascript
     let fruits = ["pomme", "banane"];
     fruits.splice(1, 0, "cerise", "datte"); // Ajoute "cerise" et "datte" après "pomme"
     ```

3. **Remplacement d'Éléments :**
   - `splice()` peut également être utilisé pour remplacer des éléments, en supprimant certains éléments et en ajoutant de nouveaux éléments à leur place.
   - Exemple :
     ```javascript
     let fruits = ["pomme", "banane", "cerise"];
     fruits.splice(1, 1, "datte"); // Remplace "banane" par "datte"
     ```

### Retour de la Fonction :
- `splice()` renvoie un tableau contenant les éléments supprimés, qui peut être vide si aucun élément n'est supprimé.
- Le tableau original est modifié.

### Points Importants :
- `splice()` est une méthode puissante pour manipuler des tableaux car elle peut effectuer trois opérations (suppression, insertion et remplacement) en une seule méthode.
- Elle modifie le tableau original, ce qui est un aspect important à considérer pour éviter des effets secondaires indésirables.
- Les indices négatifs peuvent être utilisés pour `start`, ce qui signifie que le comptage se fait à partir de la fin du tableau. Par exemple, `splice(-2, 1)` supprimerait l'avant-dernier élément du tableau.

<br>

<hr>

<br>

### 1. Suppression d'Éléments :
- **Enlever des éléments spécifiques d'un tableau :**
  ```javascript
  let numbers = [1, 2, 3, 4, 5];
  numbers.splice(2, 1); // Supprime "3", numbers devient [1, 2, 4, 5]
  ```

### 2. Ajout d'Éléments :
- **Insérer des éléments à une position spécifique dans un tableau :**
  ```javascript
  let fruits = ["pomme", "banane"];
  fruits.splice(1, 0, "orange"); // Insère "orange" à l'indice 1, fruits devient ["pomme", "orange", "banane"]
  ```

### 3. Remplacement d'Éléments :
- **Remplacer un ou plusieurs éléments :**
  ```javascript
  let months = ["Jan", "March", "April"];
  months.splice(1, 1, "Feb"); // Remplace "March" par "Feb", months devient ["Jan", "Feb", "April"]
  ```

### 4. Suppression et Ajout Simultanés :
- **Supprimer des éléments et en ajouter de nouveaux simultanément :**
  ```javascript
  let numbers = [1, 2, 4, 5];
  numbers.splice(2, 1, 3); // Supprime "4" et insère "3", numbers devient [1, 2, 3, 5]
  ```

### 5. Suppression sans Ajout :
- **Supprimer des éléments sans en insérer de nouveaux :**
  ```javascript
  let letters = ['a', 'b', 'c', 'd', 'e'];
  letters.splice(2, 2); // Supprime "c" et "d", letters devient ['a', 'b', 'e']
  ```

### 6. Utilisation d'Indices Négatifs :
- **Utiliser des indices négatifs pour compter à partir de la fin du tableau :**
  ```javascript
  let numbers = [1, 2, 3, 4, 5];
  numbers.splice(-2, 1); // Supprime "4", numbers devient [1, 2, 3, 5]
  ```

### 7. Suppression de Tous les Éléments à Partir d'un Indice :
- **Effacer une partie du tableau à partir d'un certain indice :**
  ```javascript
  let numbers = [1, 2, 3, 4, 5];
  numbers.splice(3); // Supprime tous les éléments à partir de l'indice 3, numbers devient [1, 2, 3]
  ```

### Points Importants :
- `splice()` modifie directement le tableau sur lequel il est appelé.
- Il peut être utilisé pour effectuer des modifications complexes sur un tableau avec une seule opération.
- La méthode renvoie un tableau contenant les éléments supprimés, ou un tableau vide si aucun élément n'est supprimé.