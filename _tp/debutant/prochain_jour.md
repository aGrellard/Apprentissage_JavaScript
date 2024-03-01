# le **problème du prochain jour**.

Ce problème consiste à calculer la date du jour suivant à partir d'une date donnée.

## Énoncé du problème

Écrivez une fonction en JavaScript qui prend trois paramètres représentant une année, un mois et un jour (tous des entiers), et retourne la date du jour suivant sous la forme d'une chaîne de caractères au format "AAAA-MM-JJ".

## Solution

Voici comment résoudre ce problème en utilisant l'objet `Date` de JavaScript et en manipulant la date pour ajouter un jour :

<details>

```javascript
function getNextDay(year, month, day) {
    // Créer une instance de Date avec la date donnée
    // Note : Les mois en JavaScript sont indexés à partir de 0, donc janvier = 0, février = 1, etc.
    const date = new Date(year, month - 1, day);
    
    // Ajouter un jour
    date.setDate(date.getDate() + 1);
    
    // Récupérer l'année, le mois, et le jour après l'ajout
    const nextYear = date.getFullYear();
    const nextMonth = date.getMonth() + 1; // Ajouter 1 pour compenser l'indexation à partir de 0
    const nextDay = date.getDate();
    
    // Formater la date en "AAAA-MM-JJ"
    return `${nextYear}-${String(nextMonth).padStart(2, '0')}-${String(nextDay).padStart(2, '0')}`;
}
```
</details>

```javascript
// Exemple d'utilisation
console.log(getNextDay(2023, 1, 31)); // "2023-02-01"
console.log(getNextDay(2023, 2, 28)); // "2023-03-01"
console.log(getNextDay(2023, 12, 31)); // "2024-01-01"
```

## Explication

<details>

- **Création de la date** : Une instance de `Date` est créée en utilisant l'année, le mois et le jour fournis en paramètres. Il est important de se souvenir que les mois sont indexés à partir de 0 en JavaScript, donc le mois est ajusté en conséquence lors de la création de l'objet `Date`.
- **Ajout d'un jour** : La méthode `setDate()` combinée avec `getDate() + 1` est utilisée pour ajouter un jour à la date. L'objet `Date` gère automatiquement le passage au mois ou à l'année suivante si nécessaire.
- **Formatage de la date** : La date du jour suivant est ensuite formatée en "AAAA-MM-JJ" en utilisant des chaînes de caractères, avec `padStart()` pour s'assurer que le mois et le jour sont toujours représentés avec deux chiffres.

Cette solution montre comment manipuler et formater des dates en JavaScript, une compétence utile pour de nombreux problèmes de programmation impliquant la gestion du temps.
</details>