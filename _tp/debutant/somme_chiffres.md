# le **problème de la somme des chiffres**.

Ce problème consiste à calculer la somme de tous les chiffres d'un nombre donné.

## Énoncé du problème

Écrivez une fonction en JavaScript qui prend un nombre entier positif en entrée et retourne la somme de ses chiffres.

## Solution

Voici une manière simple de résoudre ce problème en convertissant le nombre en chaîne de caractères, puis en parcourant chaque caractère pour calculer la somme :

<details>

```javascript
function sumOfDigits(num) {
    // Convertir le nombre en chaîne de caractères
    const str = num.toString();
    let sum = 0;
    
    // Parcourir chaque caractère de la chaîne
    for (let char of str) {
        // Convertir le caractère en nombre et l'ajouter à la somme
        sum += parseInt(char, 10); // Le second paramètre indique la base (10 pour décimal)
    }
    
    return sum;
}
```
</details>

```javascript
// Exemple d'utilisation
console.log(sumOfDigits(123)); // 6 (1 + 2 + 3)
console.log(sumOfDigits(456)); // 15 (4 + 5 + 6)
console.log(sumOfDigits(0)); // 0
```

## Explication

<details>

- **Conversion en chaîne** : La fonction commence par convertir le nombre entier en une chaîne de caractères pour pouvoir le parcourir caractère par caractère.
- **Parcours et somme** : Ensuite, elle parcourt chaque caractère de la chaîne, le convertit en nombre à l'aide de `parseInt()`, et l'ajoute à la somme totale.
- **Résultat** : La somme de tous les chiffres du nombre est retournée à la fin de la fonction.

Cette méthode est simple et directe, rendant le problème accessible aux débutants. Elle montre comment manipuler les chaînes de caractères et les nombres, ainsi que comment utiliser des boucles et des conversions de type en JavaScript.
</details>