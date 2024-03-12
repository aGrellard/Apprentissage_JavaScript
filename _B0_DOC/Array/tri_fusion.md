Le tri par fusion (ou merge sort) est un algorithme de tri efficace et comparatif, basé sur la méthode de diviser pour régner. Voici une description concrète de son fonctionnement :

### Principe de Base :
1. **Diviser :** L'algorithme divise récursivement le tableau en deux moitiés (gauche et droite) jusqu'à ce que chaque sous-tableau contienne un seul élément (ou aucun élément, dans le cas d'un tableau vide).

2. **Conquérir :** Ensuite, il trie et fusionne ces sous-tableaux pour former un nouveau tableau trié. Cette étape de fusion est la clé de l'algorithme.

3. **Combiner :** Finalement, il combine ces tableaux triés pour produire le tableau trié final.

### Fonctionnement Détaillé :
1. **Division du Tableau :**
   - L'algorithme commence par diviser le tableau en deux parties égales (ou presque égales) en calculant l'indice du milieu.
   - Cette étape de division se poursuit de manière récursive sur chaque sous-tableau jusqu'à ce que chaque sous-tableau ne contienne qu'un seul élément ou soit vide.

2. **Fusion et Tri :**
   - L'étape de fusion commence lorsque l'algorithme commence à remonter dans l'arbre de récursion.
   - Pendant la fusion, les éléments des deux sous-tableaux sont comparés et placés dans l'ordre dans un nouveau tableau.
   - Cette étape est cruciale car c'est là que le tri se produit réellement. Les sous-tableaux plus petits et triés sont fusionnés en tableaux plus grands et triés.

3. **Construction du Tableau Trié :**
   - L'algorithme remonte l'arbre de récursion, fusionnant et triant progressivement les sous-tableaux en plus grands, jusqu'à ce que le tableau entier soit à nouveau assemblé et entièrement trié.

### Avantages du Tri par Fusion :
- **Stabilité :** Le tri par fusion est un algorithme de tri stable, ce qui signifie qu'il conserve l'ordre des éléments égaux.
- **Efficacité :** Il a une complexité temporelle toujours garantie de O(n log n), ce qui le rend efficace pour de grands ensembles de données.
- **Efficace pour les Listes Liées :** Particulièrement efficace pour trier des listes liées.

### Inconvénients :
- **Espace Mémoire Supplémentaire :** Contrairement à certains autres algorithmes de tri (comme le tri rapide), le tri par fusion nécessite un espace mémoire supplémentaire pour les sous-tableaux temporaires lors de la fusion.
- **Moins Efficace pour de Petits Ensembles de Données :** Pour de petits ensembles de données, des algorithmes plus simples comme le tri par insertion peuvent être plus rapides.

### Utilisation :
Le tri par fusion est souvent utilisé dans des situations où la stabilité du tri est importante et où le coût en espace mémoire supplémentaire n'est pas un problème majeur, comme dans le tri de grandes listes de données qui ne peuvent pas être triées en mémoire (par exemple, tri externe).

<br>

<hr>

<br>

Le tri par fusion (merge sort) est un algorithme de tri efficace qui utilise une approche diviser pour régner. Pour trier le tableau `fruits` sans utiliser la méthode `sort` intégrée, nous allons implémenter une fonction de tri par fusion. Voici le code en JavaScript :

```javascript
function mergeSort(arr, compareFn) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(
        mergeSort(left, compareFn),
        mergeSort(right, compareFn),
        compareFn
    );
}

function merge(left, right, compareFn) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (compareFn(left[leftIndex], right[rightIndex]) <= 0) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

const fruits = ['Pomme', 'banane', 'orange', 'kiwi', 'mangue'];

const sortedFruits = mergeSort(fruits, (a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));

console.log(sortedFruits);
```

### Explication du Code
1. **mergeSort** : Cette fonction divise récursivement le tableau en deux moitiés jusqu'à ce que les sous-tableaux ne contiennent qu'un seul élément ou aucun élément. Elle appelle ensuite la fonction `merge` pour combiner les sous-tableaux triés en un seul tableau trié.

2. **merge** : Cette fonction fusionne deux sous-tableaux triés en un seul tableau trié. Elle utilise la fonction `compareFn` pour comparer les éléments.

3. **compareFn** : Une fonction de comparaison personnalisée qui utilise `localeCompare` pour trier les chaînes de caractères en français, en ignorant la casse et les accents.

4. **sortedFruits** : Le tableau `fruits` est trié en utilisant `mergeSort` avec la fonction de comparaison personnalisée.

Ce code triera le tableau `fruits` en français, en ignorant la casse et les accents, en utilisant l'algorithme de tri par fusion.

<br>

<hr>

<br>

Le tri par fusion (ou "merge sort" en anglais) est un algorithme de tri efficace qui utilise une approche "diviser pour régner". Voici une explication étape par étape de son fonctionnement en JavaScript, avec des exemples :

### Principe de Base
1. **Diviser** : L'algorithme divise récursivement le tableau en deux moitiés jusqu'à ce que chaque sous-tableau ne contienne qu'un seul élément.
2. **Conquérir** : Il fusionne ensuite ces sous-tableaux pour obtenir un nouveau tableau trié.

### Exemple en JavaScript
```javascript
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Diviser le tableau en deux
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Trier récursivement chaque moitié
    return merge(mergeSort(left), mergeSort(right));
}

// Fusionner deux tableaux triés
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Tant qu'il y a des éléments dans les deux tableaux
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concaténer les éléments restants
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Exemple d'utilisation
const array = [12, 11, 13, 5, 6, 7];
console.log('Tableau trié:', mergeSort(array));
```

### Explication du Code
1. **mergeSort(arr)** : Cette fonction est la fonction principale qui implémente le tri par fusion.
   - Si le tableau contient 0 ou 1 élément, il est déjà trié, donc on le retourne tel quel.
   - Sinon, le tableau est divisé en deux parties (`left` et `right`).
   - Chaque partie est triée récursivement en appelant `mergeSort`.
   - Enfin, les deux parties triées sont fusionnées en utilisant la fonction `merge`.

2. **merge(left, right)** : Cette fonction fusionne deux tableaux triés.
   - On crée un tableau vide `result` pour stocker les éléments triés.
   - Les indices `leftIndex` et `rightIndex` sont utilisés pour parcourir les tableaux `left` et `right`.
   - Dans une boucle, on compare les éléments des deux tableaux et on ajoute le plus petit dans `result`.
   - Une fois qu'on a parcouru l'un des tableaux, on ajoute les éléments restants de l'autre tableau à `result`.

### Complexité
- Temporelle : O(n log n) dans tous les cas.
- Spatiale : O(n) à cause de l'espace supplémentaire nécessaire pour le tableau `result`.