# le **problème du comptage des mots**.

Ce problème consiste à compter le nombre de mots dans une chaîne de caractères donnée, en supposant que les mots sont séparés par des espaces.

## Énoncé du problème

Écrivez une fonction en JavaScript qui prend une chaîne de caractères en entrée et retourne le nombre de mots contenus dans cette chaîne.


## Déroulé

> - Supprimer les espaces en début et fin de chaîne, puis diviser la chaîne en mots
> - Retourner le nombre de mots, en filtrant les éventuelles chaînes vides

## Solution



<details>
<br>

Voici comment résoudre ce problème en utilisant la méthode `split` de JavaScript pour diviser la chaîne en mots, basé sur les espaces, et en comptant le nombre d'éléments dans le tableau résultant :

```javascript
function countWords(str) {
    // Supprimer les espaces en début et fin de chaîne, puis diviser la chaîne en mots
    const words = str.trim().split(/\s+/);
    
    // Retourner le nombre de mots, en filtrant les éventuelles chaînes vides
    return words.filter(word => word.length > 0).length;
}
/*

*/
```
</details>

```javascript
// Exemple d'utilisation
console.log(countWords("Hello world")); // 2
console.log(countWords("   Bonjour le monde   ")); // 3
console.log(countWords("")); // 0
console.log(countWords("Ceci est    un test.")); // 4
```

## Explication

<details>

- **Nettoyage de la chaîne** : `str.trim()` est utilisé pour supprimer les espaces inutiles en début et en fin de chaîne.
- **Division en mots** : `split(/\s+/)` divise la chaîne en utilisant un ou plusieurs espaces comme séparateur. L'expression régulière `\s+` correspond à tout espace blanc consécutif.
- **Comptage des mots** : Le tableau `words` peut contenir des chaînes vides si la chaîne d'entrée a des espaces multiples consécutifs. `filter(word => word.length > 0)` est utilisé pour filtrer ces chaînes vides avant de compter le nombre d'éléments restants avec `length`.

Cette solution est un bon exercice pour les débutants pour pratiquer la manipulation de chaînes et les expressions régulières en JavaScript, tout en offrant une approche robuste pour compter les mots dans une chaîne, même en présence d'espaces multiples.
</details>
