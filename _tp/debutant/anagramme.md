# le **problème de l'anagramme**.

Ce problème consiste à déterminer si deux chaînes de caractères sont des anagrammes l'une de l'autre, c'est-à-dire si elles contiennent les mêmes lettres dans un ordre différent.

## Énoncé du problème

Écrivez une fonction en JavaScript qui prend deux chaînes de caractères en entrée et retourne `true` si ces chaînes sont des anagrammes l'une de l'autre, et `false` sinon. Pour simplifier, vous pouvez supposer que les chaînes ne contiennent que des lettres minuscules et aucun espace ou caractère spécial.

## Déroulé
>- Vérification de la longueur 
>- Tri des lettres 
>- Comparaison

## Solution

Voici comment implémenter cette fonction :

<details>

```javascript
function estAnagramme(str1, str2) {
    // Vérifier si les chaînes ont la même longueur
    if (str1.length !== str2.length) {
        return false;
    }

    // Trier les lettres de chaque chaîne
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Comparer les chaînes triées
    return sortedStr1 === sortedStr2;
}

```
</details>

```javascript
// Exemple d'utilisation
console.log(estAnagramme("listen", "silent")); // true
console.log(estAnagramme("hello", "bello")); // false
```

## Explication

<details>

- **Vérification de la longueur** : Si les deux chaînes n'ont pas la même longueur, elles ne peuvent pas être des anagrammes. Cette vérification permet d'éviter un traitement inutile pour des chaînes de longueurs différentes.
- **Tri des lettres** : Les chaînes sont d'abord converties en tableaux de caractères avec `split('')`, puis triées avec `sort()`, et enfin reconverties en chaînes avec `join('')`. Si deux chaînes sont des anagrammes, leurs versions triées seront identiques.
- **Comparaison** : Les chaînes triées sont comparées. Si elles sont identiques, les chaînes d'origine sont des anagrammes.

Cette solution est un bon exercice pour pratiquer la manipulation de chaînes de caractères et de tableaux en JavaScript. Elle illustre comment des opérations simples peuvent être combinées pour résoudre un problème de manière efficace.
</details>