# le **problème de la transformation d'un tableau**.

Ce problème implique l'utilisation de méthodes telles que `map`, `filter`, et `reduce`, qui sont parmi les fonctions les plus puissantes et les plus utilisées pour travailler avec des tableaux en JavaScript.

## Énoncé du problème

Vous avez un tableau d'objets représentant des employés. Chaque objet contient trois propriétés : `nom`, `departement`, et `salaire`. Écrivez une fonction en JavaScript qui effectue les opérations suivantes sur ce tableau :

1. **Filtrer** les employés pour ne garder que ceux du département "Technologie".
2. **Transformer** ces employés filtrés en augmentant leur salaire de 10%.
3. **Calculer** le salaire total de ces employés après augmentation.

Votre fonction doit retourner le salaire total calculé.

## Solution

<details>

<summary>Voici comment implémenter cette fonction en utilisant `filter`, `map`, et `reduce` :</summary>

```javascript
function salaireTotalTechnologie(employes) {
    return employes
        .filter(employe => employe.departement === "Technologie")
        .map(employe => ({
            ...employe,
            salaire: employe.salaire * 1.1
        }))
        .reduce((total, employe) => total + employe.salaire, 0);
}
```
</details><br>

```javascript
// Exemple d'utilisation
const employes = [
    { nom: "Alice", departement: "Technologie", salaire: 1000 },
    { nom: "Bob", departement: "RH", salaire: 1200 },
    { nom: "Charlie", departement: "Technologie", salaire: 1100 },
    { nom: "David", departement: "Marketing", salaire: 1000 }
];

console.log(salaireTotalTechnologie(employes)); // 2310
```

## Explication

<details>

- **`filter`** : La première étape utilise `filter` pour créer un nouveau tableau contenant uniquement les employés du département "Technologie".
- **`map`** : Ensuite, `map` est utilisé pour créer un nouveau tableau où chaque employé a son salaire augmenté de 10%. Notez l'utilisation de la syntaxe de décomposition (`...employe`) pour copier les propriétés de l'objet employé original dans un nouvel objet, avec un `salaire` mis à jour.
- **`reduce`** : Enfin, `reduce` parcourt le tableau des employés filtrés et augmentés pour calculer le salaire total. Le `0` initial indique que la valeur initiale de l'accumulateur (`total`) est `0`.
</details><br>

Cette solution démontre l'utilisation efficace des fonctions `filter`, `map`, et `reduce` pour manipuler et traiter des données dans un tableau d'objets, illustrant la puissance de ces méthodes pour réaliser des opérations complexes de manière concise et lisible.