
# Le **problème de l'inversion de chaîne**.

Ce problème consiste simplement à inverser une chaîne de caractères donnée.

## Énoncé du problème

Écrivez une fonction en JavaScript qui prend une chaîne de caractères en entrée et retourne cette chaîne inversée. Par exemple, si la chaîne d'entrée est `"hello"`, la chaîne de sortie doit être `"olleh"`.

## Solution

Voici une manière simple de résoudre ce problème en utilisant les méthodes intégrées de JavaScript :

<details>

```javascript
function reverseString(s) {
    return s.split('').reverse().join('');
}

```
</details>

```javascript
// Exemple d'utilisation
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
```

## Explication

<details>

- **`split('')`** : Cette méthode divise la chaîne de caractères `s` en un tableau de caractères. Par exemple, `"hello".split('')` donne `["h", "e", "l", "l", "o"]`.
- **`reverse()`** : Cette méthode inverse l'ordre des éléments dans un tableau. Donc, après avoir appliqué `reverse()`, l'exemple précédent devient `["o", "l", "l", "e", "h"]`.
- **`join('')`** : Cette méthode rassemble tous les éléments d'un tableau pour former une chaîne. En joignant les éléments inversés sans séparateur (`''`), on obtient la chaîne inversée `"olleh"`.

Cette solution est concise et tire parti des méthodes de chaîne et de tableau fournies par JavaScript, rendant le code facile à comprendre et à maintenir, ce qui est idéal pour les débutants.
</details>