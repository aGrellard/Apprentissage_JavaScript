# le problème des parenthèses valides. 

## Énoncé du problème

Ce problème consiste à déterminer si une chaîne de caractères contenant uniquement des parenthèses `(` et `)` est valide. Une chaîne de parenthèses est considérée comme valide si chaque parenthèse ouvrante `(` a une parenthèse fermante correspondante `)` qui apparaît après elle, et vice versa. De plus, chaque paire de parenthèses doit être correctement imbriquée.


<details>
<summary>Solution</summary>

```javascript
function isValidParentheses(s) {
    // Utilise une pile pour suivre les parenthèses ouvrantes
    let stack = [];

    // Parcours chaque caractère de la chaîne
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // Si c'est une parenthèse ouvrante, la pousser dans la pile
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            // Si c'est une parenthèse fermante, vérifier si la pile est vide
            // ou si l'élément supérieur de la pile n'est pas une parenthèse ouvrante
            if (stack.length === 0 || stack.pop() !== '(') {
                return false;
            }
        }
    }

    // Si la pile est vide, toutes les parenthèses sont correctement fermées
    return stack.length === 0;
}
```
</details><br>


```javascript
// Exemples d'utilisation
console.log(isValidParentheses("()"));      // true
console.log(isValidParentheses(")("));      // false
console.log(isValidParentheses("(()())"));  // true
console.log(isValidParentheses("(())()"));  // true
console.log(isValidParentheses("(()"));     // false
console.log(isValidParentheses("())"));     // false
```

## Explications

<details>

1. **Utilise une pile pour suivre les parenthèses ouvrantes :** À chaque fois qu'une parenthèse ouvrante `(` est rencontrée, elle est ajoutée à la pile. Cette étape est cruciale pour s'assurer que les parenthèses sont correctement imbriquées.

2. **Vérifie les correspondances des parenthèses :** Lorsqu'une parenthèse fermante `)` est rencontrée, la fonction vérifie si la pile contient une parenthèse ouvrante correspondante en retirant le dernier élément ajouté à la pile (c'est-à-dire, elle vérifie si la dernière parenthèse ouverte a été fermée). Si la pile est vide à ce moment-là (ce qui signifie qu'il n'y a pas de parenthèse ouvrante correspondante à fermer) ou si l'élément retiré n'est pas une parenthèse ouvrante (ce qui ne devrait pas arriver dans ce cas spécifique, car on ne pousse que des `(` dans la pile), la fonction retourne `false`, indiquant que la chaîne de parenthèses n'est pas valide.

3. **Vérifie que toutes les parenthèses ouvrantes ont été fermées :** Après avoir parcouru toute la chaîne, la fonction vérifie si la pile est vide. Si la pile n'est pas vide, cela signifie qu'il y a des parenthèses ouvrantes qui n'ont pas été fermées, rendant la chaîne invalide. Si la pile est vide, cela indique que toutes les parenthèses ouvrantes ont été correctement appariées avec des parenthèses fermantes, validant ainsi la chaîne.

En résumé, la fonction ne se contente pas de compter les parenthèses ; elle s'assure également que chaque parenthèse ouvrante est correctement appariée avec une parenthèse fermante dans le bon ordre. C'est la vérification de l'imbrication correcte des parenthèses qui est la clé de cette approche.

</details>