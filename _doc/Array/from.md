La fonction `from()` en JavaScript est une méthode statique de l'objet `Array`. Elle est conçue pour créer de nouveaux tableaux à partir d'objets itérables ou de tableaux-like (objets ressemblant à des tableaux). Cette méthode est particulièrement utile pour transformer des structures de données qui ne sont pas des tableaux en tableaux, afin de pouvoir utiliser les méthodes et les fonctionnalités des tableaux sur ces structures.

### Syntaxe de base :
```javascript
Array.from(source[, mapFn[, thisArg]])
```

- **source** : L'objet itérable ou tableau-like à convertir en tableau. Cela peut être n'importe quel objet sur lequel on peut itérer, comme une chaîne de caractères, un Node List, ou même un objet avec une propriété `length` et des éléments indexés.
- **mapFn** (optionnel) : Une fonction de mappage à appeler sur chaque élément de l'objet source. Cette fonction est appliquée avant que l'élément ne soit ajouté au nouveau tableau.
- **thisArg** (optionnel) : La valeur à utiliser comme `this` lors de l'exécution de `mapFn`.

### Fonctionnement :
- `Array.from()` crée un nouveau tableau à partir de l'objet source.
- Si `mapFn` est fourni, elle est appelée sur chaque élément de l'objet source, et le résultat de cette fonction est utilisé pour construire le nouveau tableau.
- Si `mapFn` n'est pas fourni, le nouveau tableau est une copie directe des éléments de l'objet source.

### Exemples :

1. **Créer un Tableau à partir d'une Chaîne de Caractères :**
   ```javascript
   let str = "Hello";
   let charsArray = Array.from(str);
   // charsArray = ['H', 'e', 'l', 'l', 'o']
   ```

2. **Utiliser `Array.from()` avec une Fonction de Mappage :**
   ```javascript
   let numbers = [1, 2, 3];
   let doubled = Array.from(numbers, num => num * 2);
   // doubled = [2, 4, 6]
   ```

3. **Convertir un Node List en Tableau :**
   ```javascript
   // Supposons que vous avez plusieurs éléments div dans votre document HTML
   let divs = document.querySelectorAll('div');
   let divsArray = Array.from(divs);
   ```

4. **Utiliser `Array.from()` pour Générer des Séquences :**
   ```javascript
   let range = Array.from({ length: 5 }, (v, i) => i);
   // range = [0, 1, 2, 3, 4]
   ```

### Points Importants :
- `Array.from()` est particulièrement utile pour travailler avec des objets qui ressemblent à des tableaux (comme les Node Lists dans le DOM) ou des objets itérables (comme les chaînes de caractères) en les convertissant en tableaux.
- Elle permet l'utilisation de fonctions de mappage pendant la conversion, offrant ainsi une grande flexibilité pour transformer les éléments du nouvel tableau.
- `Array.from()` renvoie toujours un nouveau tableau sans modifier l'objet source.

<br>

<hr>

<br>

La méthode `Array.from()` en JavaScript crée une nouvelle instance de tableau (un "clone superficiel") à partir d'un objet itérable ou tableau-like. Cependant, il est important de noter que cette méthode effectue une copie superficielle (shallow copy) et non une copie profonde (deep copy).

### Copie Superficielle (Shallow Copy) :
- Si l'objet source contient des objets ou des tableaux imbriqués, `Array.from()` copie leurs références dans le nouveau tableau. Cela signifie que les objets ou tableaux imbriqués ne sont pas clonés. Si vous modifiez l'un de ces objets ou tableaux imbriqués dans le tableau original, le changement sera également visible dans le nouveau tableau, car les deux tableaux référencent le même objet/tableau imbriqué.

### Exemple Illustratif :
```javascript
let original = [{a: 1}, {b: 2}];
let newArray = Array.from(original);

// Modifier un objet dans le tableau original affecte aussi le nouveau tableau
original[0].a = 3;
console.log(newArray[0].a); // Affichera 3, car newArray[0] fait référence au même objet que original[0]
```

Dans cet exemple, bien que `newArray` soit un nouveau tableau, les éléments à l'intérieur de `newArray` sont des références aux mêmes objets que ceux dans `original`. Ainsi, les modifications apportées aux objets dans `original` se reflètent également dans `newArray`.

### Conclusion :
- `Array.from()` est utile pour créer un nouveau tableau à partir d'une source itérable ou tableau-like, mais il ne crée pas de copies profondes des objets ou tableaux imbriqués.
- Pour les tableaux contenant uniquement des valeurs primitives (comme des nombres, des chaînes de caractères ou des booléens), les valeurs sont copiées et non les références, donc les modifications dans un tableau n'affectent pas l'autre.
- Pour les objets ou tableaux imbriqués, seules les références sont copiées, pas les objets/tableaux eux-mêmes.

<br>

<hr>

<br>

Pour effectuer une copie profonde (deep copy) d'un tableau en JavaScript, il est nécessaire de s'assurer que tous les éléments du tableau, y compris les objets et tableaux imbriqués, sont également clonés. Voici quelques méthodes courantes pour réaliser une copie profonde :

### 1. Utilisation de `JSON.parse()` et `JSON.stringify()`

C'est une technique simple et largement utilisée pour les objets qui peuvent être sérialisés en JSON et désérialisés sans perdre d'informations.

```javascript
let original = [{ a: 1 }, { b: 2 }];
let deepCopy = JSON.parse(JSON.stringify(original));

// Les modifications sur deepCopy ne vont pas affecter original
deepCopy[0].a = 3;
console.log(original[0].a); // Affiche 1
```

**Limitations :**
- Ne fonctionne pas avec des valeurs non sérialisables en JSON, comme les fonctions, les objets contenant des références circulaires, les `Map`, `Set`, `Date`, `RegExp`, etc.
- Peut être inefficace en termes de performances pour de très grands objets.

### 2. Utilisation de Bibliothèques Externes

Des bibliothèques comme Lodash offrent une fonction `cloneDeep()` qui peut gérer une grande variété de cas, y compris des types de données non sérialisables en JSON.

```javascript
// Avec Lodash
let deepCopy = _.cloneDeep(original);
```

**Avantages :**
- Plus robuste et capable de gérer une large gamme de types de données.
- Gère les références circulaires et les types spéciaux comme `Date`, `RegExp`, etc.

### 3. Écriture d'une Fonction de Copie Profonde Personnalisée

Pour des cas spécifiques ou pour éviter d'ajouter des dépendances externes, vous pouvez écrire votre propre fonction de copie profonde.

```javascript
function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    let copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        let value = obj[key];
        copy[key] = deepCopy(value);
    }

    return copy;
}

let copiedArray = deepCopy(original);
```

**Avantages :**
- Personnalisable selon les besoins spécifiques du projet.
- Pas de dépendance à des bibliothèques externes.

### Choisir la Méthode Appropriée

La méthode à choisir dépend des exigences spécifiques de votre cas d'utilisation, notamment :
- Le type de données que contient votre tableau.
- Les préoccupations de performances.
- La complexité des objets contenus dans le tableau.

Pour des objets simples qui sont compatibles JSON, la combinaison `JSON.parse()` / `JSON.stringify()` est souvent la plus simple. Pour des structures de données plus complexes, une bibliothèque externe comme Lodash ou une fonction personnalisée serait plus appropriée.

<br>

<hr>

<br>

Dans la bibliothèque Lodash, pour réaliser une copie profonde (deep copy) d'un objet ou d'un tableau, vous pouvez utiliser la fonction `_.cloneDeep()`. Cette méthode est conçue spécifiquement pour créer une copie intégrale et indépendante de chaque niveau de l'objet ou du tableau, y compris les objets et tableaux imbriqués.

### Exemple d'utilisation de `_.cloneDeep()` :

```javascript
// Avec Lodash
let originalObject = {
    name: "Alice",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Anytown"
    }
};

let deepCopiedObject = _.cloneDeep(originalObject);

// Modifier deepCopiedObject ne va pas affecter originalObject
deepCopiedObject.address.street = "456 Elm St";
console.log(originalObject.address.street); // "123 Main St"
```

Dans cet exemple, `_.cloneDeep()` crée une copie de `originalObject`, y compris une copie séparée de l'objet `address` imbriqué. Les modifications apportées à `deepCopiedObject` n'affectent pas `originalObject`, ce qui indique que la copie est profonde.

### Avantages de `_.cloneDeep()` :
1. **Copie Complète :** Il s'agit d'une véritable copie profonde, ce qui signifie que tous les niveaux d'imbrication sont copiés, et les modifications sur les copies n'affectent pas les originaux.
2. **Gestion des Types Complexes :** `_.cloneDeep()` est capable de gérer divers types de données, y compris des objets, des tableaux, des dates, des expressions régulières, et d'autres types de données spéciaux qui ne sont pas bien gérés par des méthodes plus simples comme `JSON.parse(JSON.stringify())`.
3. **Gestion des Références Circulaires :** Elle peut gérer correctement les références circulaires sans causer d'erreurs.

### À Prendre en Compte :
- **Performances :** Pour de très grands objets ou tableaux, ou pour des structures avec de nombreux niveaux d'imbrication, la copie profonde peut être coûteuse en termes de performances.
- **Compatibilité :** Alors que `_.cloneDeep()` est très polyvalente, il est toujours bon de tester et de valider son comportement avec vos structures de données spécifiques, surtout si elles contiennent des types de données non standard.