# le **problème du comptage de voyelles**.

Ce problème consiste à compter le nombre de voyelles (a, e, i, o, u) dans une chaîne de caractères donnée.

## Énoncé du problème

Écrivez une fonction en JavaScript qui prend une chaîne de caractères en entrée et retourne le nombre de voyelles contenues dans cette chaîne.

## Solution



<details>

Voici comment vous pouvez résoudre ce problème en utilisant une boucle et une vérification conditionnelle :

```javascript
function countVowels(s) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    
    for (let char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}
```
</details>

```javascript
// Exemple d'utilisation
console.log(countVowels("hello")); // 2
console.log(countVowels("world")); // 1
console.log(countVowels("AEIOU")); // 5
```

## Explication

<details>

- **Boucle** : La fonction parcourt chaque caractère de la chaîne d'entrée `s` en utilisant une boucle `for...of`.
- **Vérification conditionnelle** : Pour chaque caractère, la fonction vérifie si ce caractère est inclus dans la chaîne `vowels` qui contient toutes les voyelles (en minuscule et en majuscule pour gérer la casse).
- **Comptage** : Si le caractère est une voyelle, la fonction incrémente le compteur `count`.
- **Retour** : À la fin, la fonction retourne le nombre total de voyelles trouvées dans la chaîne.

Cette solution est simple et directe, rendant le problème du comptage de voyelles accessible aux débutants en programmation. Elle illustre l'utilisation de boucles, de chaînes, et de conditions en JavaScript de manière pratique.
</details>


