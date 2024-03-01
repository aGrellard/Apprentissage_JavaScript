# le **problème de la rotation d'array**.

Ce problème consiste à effectuer une rotation à droite d'un tableau d'entiers un certain nombre de fois.

## Énoncé du problème

Vous avez un tableau d'entiers `arr` et un entier `k`. Écrivez une fonction en JavaScript qui effectue `k` rotations à droite sur le tableau. Une rotation à droite déplace chaque élément du tableau vers sa droite, et le dernier élément devient le premier.

## Solution

Voici comment implémenter cette fonction :

<details>

```javascript
function rotateArray(arr, k) {
    // Pour éviter des rotations inutiles, si k est plus grand que la longueur du tableau
    k = k % arr.length;

    // Extraire les éléments à déplacer à l'avant du tableau
    const elementsToMove = arr.splice(-k);
    
    // Ajouter ces éléments au début du tableau
    return elementsToMove.concat(arr);
}
```
</details>

```javascript
// Exemple d'utilisation
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(rotateArray([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]
```

## Explication

<details>

- **Optimisation de `k`** : La rotation d'un tableau de longueur `n`, `n` fois, le ramène à sa forme originale. Ainsi, utiliser `k % arr.length` permet de réduire le nombre de rotations au minimum nécessaire.
- **Extraction et déplacement** : La méthode `splice(-k)` est utilisée pour retirer les `k` derniers éléments du tableau. Ces éléments sont ensuite ajoutés au début du tableau original en utilisant `concat`, ce qui réalise la rotation à droite demandée.

Cette solution montre une façon efficace de manipuler des tableaux en JavaScript, notamment comment utiliser `splice` et `concat` pour modifier et combiner des tableaux. C'est un bon exercice pour renforcer la compréhension des méthodes de tableau et leur application pour résoudre des problèmes algorithmiques.
</details>