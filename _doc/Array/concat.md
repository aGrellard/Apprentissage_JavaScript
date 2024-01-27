La fonction `concat()` en JavaScript est une méthode de l'objet `Array` utilisée pour fusionner deux ou plusieurs tableaux en un seul nouveau tableau. Cette méthode est non destructive, ce qui signifie qu'elle ne modifie pas les tableaux existants mais renvoie plutôt un nouveau tableau qui est la concaténation des tableaux d'origine.

### Syntaxe de base :
```javascript
nouveauTableau = tableauOriginal.concat(tableau1[, tableau2[, ...[, tableauN]]])
```

- **tableauOriginal** : Le tableau à partir duquel `concat()` est appelé.
- **tableau1, tableau2, ..., tableauN** : Un ou plusieurs tableaux (ou valeurs) à concaténer avec le tableau original.

### Fonctionnement :
- `concat()` prend un ou plusieurs tableaux et/ou valeurs et les fusionne avec le tableau sur lequel elle est appelée.
- Les tableaux passés en arguments sont ajoutés à la fin du tableau original, dans l'ordre où ils sont fournis.
- Si les arguments fournis ne sont pas des tableaux, ils sont ajoutés au nouveau tableau en tant que valeurs individuelles.

### Exemples :

1. **Concaténation de Deux Tableaux :**
   ```javascript
   let alpha = ['a', 'b', 'c'];
   let numeric = [1, 2, 3];
   let alphanumeric = alpha.concat(numeric);
   // alphanumeric = ['a', 'b', 'c', 1, 2, 3]
   ```

2. **Concaténation de Plusieurs Tableaux :**
   ```javascript
   let num1 = [1, 2, 3];
   let num2 = [4, 5, 6];
   let num3 = [7, 8, 9];
   let numbers = num1.concat(num2, num3);
   // numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
   ```

3. **Ajout d'Éléments Individuels :**
   ```javascript
   let letters = ['a', 'b', 'c'];
   let moreLetters = letters.concat('d', 'e');
   // moreLetters = ['a', 'b', 'c', 'd', 'e']
   ```

4. **Concaténation de Tableaux et de Valeurs :**
   ```javascript
   let numbers = [1, 2, 3];
   let moreNumbers = numbers.concat([4, 5], 6, 7);
   // moreNumbers = [1, 2, 3, 4, 5, 6, 7]
   ```

### Points Importants :
- `concat()` ne modifie pas les tableaux existants mais renvoie plutôt un nouveau tableau.
- Il est possible de concaténer des valeurs primitives (comme des chaînes de caractères ou des nombres) en plus des tableaux.
- Si un élément passé à `concat()` est un tableau, ses éléments sont ajoutés. Si l'élément n'est pas un tableau, il est ajouté tel quel dans le nouveau tableau.
- Cette méthode est souvent utilisée pour fusionner des tableaux sans modifier les tableaux originaux, préservant ainsi l'immutabilité des données.

<br>

<hr>

<br>

>La méthode `concat()` en JavaScript est utilisée pour combiner deux ou plusieurs tableaux en un seul. Voici différentes manières d'utiliser `concat()` :

### 1. Fusionner des Tableaux :
- **Combiner plusieurs tableaux en un seul :**
  ```javascript
  let array1 = [1, 2, 3];
  let array2 = [4, 5, 6];
  let combinedArray = array1.concat(array2);
  // combinedArray = [1, 2, 3, 4, 5, 6]
  ```

### 2. Ajouter des Éléments à un Tableau :
- **Ajouter des éléments individuels à un tableau :**
  ```javascript
  let numbers = [1, 2, 3];
  let moreNumbers = numbers.concat(4, 5);
  // moreNumbers = [1, 2, 3, 4, 5]
  ```

### 3. Combiner des Tableaux avec des Valeurs Non-Tableau :
- **Fusionner des tableaux avec des éléments non-tableau :**
  ```javascript
  let letters = ['a', 'b', 'c'];
  let numbersAndBoolean = letters.concat(1, [2, 3], true);
  // numbersAndBoolean = ['a', 'b', 'c', 1, 2, 3, true]
  ```

### 4. Concaténation en Chaîne :
- **Utiliser `concat()` plusieurs fois de suite :**
  ```javascript
  let array1 = [1, 2];
  let array2 = [3, 4];
  let array3 = [5, 6];
  let combinedArray = array1.concat(array2).concat(array3);
  // combinedArray = [1, 2, 3, 4, 5, 6]
  ```

### 5. Création de Copies Superficielles :
- **Créer une copie superficielle d'un tableau :**
  ```javascript
  let original = [1, 2, 3];
  let copy = original.concat();
  // copy = [1, 2, 3]
  ```

### 6. Fusion de Tableaux Contenant des Objets :
- **Combiner des tableaux qui contiennent des objets :**
  ```javascript
  let obj1 = [{ a: 1 }, { b: 2 }];
  let obj2 = [{ c: 3 }];
  let combinedObjects = obj1.concat(obj2);
  // combinedObjects = [{ a: 1 }, { b: 2 }, { c: 3 }]
  ```

### Points Importants :
- `concat()` ne modifie pas les tableaux existants mais crée un nouveau tableau.
- Elle peut être utilisée pour combiner n'importe quel nombre de tableaux et/ou de valeurs supplémentaires.
- `concat()` réalise une copie superficielle, ce qui signifie que les objets et les tableaux imbriqués dans les tableaux originaux sont copiés par référence plutôt que dupliqués.

Ces différentes utilisations montrent la flexibilité de `concat()` pour fusionner des tableaux et ajouter des éléments à des tableaux en JavaScript.