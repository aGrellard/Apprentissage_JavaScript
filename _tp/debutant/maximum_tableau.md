# le **problème du maximum d'un tableau**.

Ce problème consiste à trouver l'élément le plus grand dans un tableau d'entiers.

## Énoncé du problème

Écrivez une fonction en JavaScript qui prend un tableau d'entiers en entrée et retourne l'élément le plus grand de ce tableau.

## Solution

Voici une manière simple de résoudre ce problème sans utiliser la fonction intégrée `Math.max()` :

<details>

```javascript
function findMax(nums) {
    let max = nums[0]; // Initialiser max au premier élément
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]; // Mettre à jour max si un élément plus grand est trouvé
        }
    }
    
    return max;
}
```
</details>

```javascript
// Exemple d'utilisation
console.log(findMax([1, 3, 2])); // 3
console.log(findMax([10, 4, 2, 15, 6])); // 15
```
## Explication

<details>

- **Initialisation** : La variable `max` est initialisée avec la valeur du premier élément du tableau. Cela sert de point de comparaison pour trouver le plus grand élément.
- **Boucle** : La fonction itère ensuite sur chaque élément du tableau (en commençant par le deuxième élément, puisque le premier est déjà utilisé pour initialiser `max`).
- **Comparaison** : À chaque itération, la fonction compare l'élément courant avec `max`. Si l'élément courant est plus grand que `max`, `max` est mis à jour avec cette nouvelle valeur.
- **Résultat** : Une fois la boucle terminée, `max` contient l'élément le plus grand du tableau, qui est alors retourné.

Cette solution est efficace pour les débutants car elle illustre l'utilisation de concepts de base en JavaScript tels que les boucles et les conditions. Elle montre comment parcourir un tableau et comment effectuer des comparaisons simples pour résoudre un problème courant.
</details>

## solution 2

Pour faire un `Math.max` sur un array d'entiers en JavaScript, vous pouvez utiliser la méthode `Math.max` en combinaison avec l'opérateur de décomposition `...` qui permet de passer les éléments de l'array comme des arguments individuels à la fonction. Voici comment faire :

```javascript
let numbers = [1, 2, 3, 4, 5]; // Ceci est votre array d'entiers.
let max = Math.max(...numbers); // Utilise l'opérateur de décomposition pour passer les éléments de l'array.
console.log(max); // Affiche le maximum de l'array.
```

Cette méthode est très pratique pour trouver le maximum (ou le minimum avec `Math.min`) dans un array d'entiers en JavaScript.

