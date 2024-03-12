# le **problème de la somme des nombres pairs**.
Ce problème consiste à calculer la somme de tous les nombres pairs dans un tableau d'entiers donné.

## Énoncé du problème

Écrivez une fonction en JavaScript qui prend un tableau d'entiers en entrée et retourne la somme de tous les éléments pairs du tableau.

## Solution

Voici une manière simple de résoudre ce problème en utilisant une boucle pour parcourir le tableau et un test conditionnel pour vérifier si un élément est pair :

<details>

```javascript
function sumEvenNumbers(nums) {
    let sum = 0;
    
    for (let num of nums) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    
    return sum;
}
```
</details>

```javascript
// Exemple d'utilisation
console.log(sumEvenNumbers([1, 2, 3, 4, 5])); // 6 (2 + 4)
console.log(sumEvenNumbers([10, 21, 33, 40, 50])); // 100 (10 + 40 + 50)
```

## Explication

<details>

- **Boucle** : La fonction parcourt chaque élément du tableau d'entiers `nums` en utilisant une boucle `for...of`.
- **Condition** : Pour chaque élément, la fonction vérifie si l'élément est pair en utilisant l'opérateur modulo `%`. Un nombre est pair si le reste de la division de ce nombre par 2 est égal à 0 (`num % 2 === 0`).
- **Somme** : Si l'élément est pair, il est ajouté à la variable `sum`, qui tient le compte de la somme des nombres pairs.
- **Retour** : À la fin, la fonction retourne la somme calculée.

Cette solution est efficace pour les débutants car elle utilise des concepts de base en JavaScript tels que les boucles, les opérations arithmétiques, et les conditions. Elle illustre comment manipuler des tableaux et effectuer des calculs simples sur leurs éléments.
</details>

