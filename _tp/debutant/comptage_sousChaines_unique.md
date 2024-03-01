# le **problème du comptage de sous-chaînes uniques**.

Ce problème consiste à compter le nombre de sous-chaînes uniques d'une longueur donnée dans une chaîne de caractères.

## Énoncé du problème

Vous avez une chaîne de caractères `s` et un entier `k`. Écrivez une fonction en JavaScript qui retourne le nombre de sous-chaînes uniques de longueur `k` que l'on peut former à partir de la chaîne `s`. Une sous-chaîne est définie comme une séquence de caractères consécutifs dans `s`.

## Déroulé
> - **Création d'un ensemble unique** 
> - **Extraction de sous-chaînes** 
> - **Calcul du résultat** 


## Solution


<details>
<br>

Une façon de résoudre ce problème est d'utiliser un ensemble (`Set`) pour stocker les sous-chaînes uniques et une boucle pour extraire toutes les sous-chaînes de longueur `k` :

```javascript
function uniqueSubstringCount(s, k) {
    let uniqueSubstrings = new Set();
    
    // Parcourir la chaîne et extraire les sous-chaînes de longueur k
    for (let i = 0; i <= s.length - k; i++) {
        const substring = s.substring(i, i + k);
        uniqueSubstrings.add(substring);
    }
    
    // Le nombre d'éléments dans le Set représente le nombre de sous-chaînes uniques
    return uniqueSubstrings.size;
}
/*
Si vous parcourez jusqu'à la fin de la chaîne (s.length), quand i est très proche de la fin (par exemple, i = s.length - 1 pour une chaîne de longueur 10 et une sous-chaîne de longueur k = 3), vous ne pourrez pas obtenir une sous-chaîne de longueur k parce qu'il n'y aurait pas assez de caractères restants à partir de la position i pour former une telle sous-chaîne. En fait, pour une position de départ i, il ne reste que s.length - i caractères dans la chaîne, et si s.length - i < k, il est impossible de former une sous-chaîne de longueur k.

Ainsi, en s'arrêtant à s.length - k, on s'assure que pour chaque position de départ i dans la boucle, il y aura toujours exactement k caractères disponibles pour former une sous-chaîne de longueur k, sans dépasser la fin de la chaîne. Cela optimise l'extraction des sous-chaînes et évite les erreurs ou les tentatives d'accès à des caractères qui n'existent pas dans la chaîne.
*/
```
</details>

```javascript
// Exemple d'utilisation
console.log(uniqueSubstringCount("abcabc", 3)); // 3 ("abc", "bca", "cab")
console.log(uniqueSubstringCount("abacab", 2)); // 4 ("ab", "ba", "ac", "ca")
console.log(uniqueSubstringCount("aaaa", 2)); // 1 ("aa")
```
## Explication

<details>

- **Création d'un ensemble unique** : Un `Set` est utilisé pour stocker les sous-chaînes uniques, car il n'accepte pas les doublons.
- **Extraction de sous-chaînes** : Une boucle parcourt la chaîne `s` et extrait toutes les sous-chaînes possibles de longueur `k` en utilisant `substring(i, i + k)`, où `i` est l'indice de départ de la sous-chaîne.
- **Calcul du résultat** : Après avoir parcouru toute la chaîne et ajouté les sous-chaînes à l'ensemble, la taille de cet ensemble (`Set.size`) donne le nombre de sous-chaînes uniques de longueur `k`.

Cette solution illustre une approche efficace pour traiter et analyser des chaînes de caractères, tout en utilisant des structures de données comme les ensembles pour éviter les doublons et faciliter le comptage. Elle constitue un bon exercice pour renforcer la compréhension des concepts intermédiaires en JavaScript.
</details>