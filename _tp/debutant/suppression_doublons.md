# le **problème de la suppression des doublons**.

Ce problème consiste à retirer les éléments en double d'un tableau pour ne laisser que des éléments uniques.

## Énoncé du problème

Écrivez une fonction en JavaScript qui prend un tableau d'entiers comme entrée et retourne un nouveau tableau contenant uniquement des éléments uniques du tableau d'origine, c'est-à-dire sans aucun doublon.

## Solution

Une façon simple de résoudre ce problème est d'utiliser les fonctionnalités de `Set` en JavaScript, qui stocke uniquement des valeurs uniques.

<details>

```javascript
function removeDuplicates(nums) {
    // Utiliser Set pour éliminer les doublons, puis convertir le Set en tableau
    return [...new Set(nums)];
}
```
</details>

```javascript
// Exemple d'utilisation
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([1, 1, 1, 1])); // [1]
console.log(removeDuplicates([1, 2, 3])); // [1, 2, 3]
```

## Explication

<details>

- **`Set`** : Un `Set` est une collection d'éléments qui sont uniques, ce qui signifie que chaque élément ne peut apparaître qu'une seule fois. En passant le tableau `nums` au constructeur `Set`, on crée un `Set` qui contient tous les éléments de `nums`, mais sans aucun doublon.
- **Conversion en tableau** : Bien que le `Set` élimine les doublons, la fonction doit retourner un tableau. L'opérateur de décomposition (`...`) est utilisé pour convertir le `Set` en tableau.

Cette solution est particulièrement concise et efficace pour les débutants, car elle démontre l'utilisation des `Set` pour résoudre un problème commun de manipulation de tableaux en une seule ligne de code. Elle montre également comment convertir un `Set` en tableau, une technique utile dans de nombreux contextes de développement JavaScript.
</details>
