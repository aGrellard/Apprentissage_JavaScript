# le **problème de la vérification de palindrome**.

Ce problème consiste à déterminer si une chaîne de caractères donnée est un palindrome ou non. Un palindrome est une chaîne qui se lit de la même manière dans les deux sens, par exemple, "radar" ou "level".

## Énoncé du problème

Écrivez une fonction en JavaScript qui prend une chaîne de caractères en entrée et retourne `true` si la chaîne est un palindrome et `false` dans le cas contraire. Pour simplifier, considérez que la chaîne est en minuscules et ignorez les espaces et les caractères non alphabétiques.

## Solution

Voici comment vous pouvez résoudre ce problème en nettoyant d'abord la chaîne d'entrée, puis en vérifiant si elle est un palindrome :

<details>

```javascript
function isPalindrome(s) {
    // Nettoyer la chaîne : retirer les caractères non alphabétiques et passer en minuscules
    const cleanString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Vérifier si la chaîne nettoyée est un palindrome
    const reversedString = cleanString.split('').reverse().join('');
    
    return cleanString === reversedString;
}
```
</details>

```javascript
// Exemple d'utilisation
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
```

## Explication

<details>

- **Nettoyage** : La chaîne d'entrée est d'abord nettoyée en utilisant `replace` pour retirer tous les caractères qui ne sont pas des lettres ou des chiffres (`/[^a-z0-9]/gi`) et en transformant tout en minuscules avec `toLowerCase()`. Cela permet de s'assurer que la vérification du palindrome ignore la casse et les caractères non alphabétiques.
- **Inversion** : La chaîne nettoyée est ensuite inversée en utilisant `split('')` pour la transformer en tableau, `reverse()` pour inverser ce tableau, et `join('')` pour rassembler les éléments du tableau inversé en une nouvelle chaîne.
- **Comparaison** : La fonction vérifie si la chaîne nettoyée est identique à sa version inversée. Si c'est le cas, la chaîne est un palindrome, sinon, elle ne l'est pas.

Cette solution est adaptée aux débutants car elle utilise des méthodes de chaîne et de tableau simples pour résoudre un problème classique de manière élégante et concise. Elle montre également comment manipuler et comparer des chaînes en JavaScript.
</details>
