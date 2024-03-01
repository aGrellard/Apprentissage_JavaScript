# le **problème du regroupement d'articles**.

Ce problème consiste à organiser un ensemble d'articles en fonction de leur catégorie.

## Énoncé du problème

Vous avez un tableau d'objets où chaque objet représente un article avec les propriétés `titre`, `categorie` et `prix`. Écrivez une fonction en JavaScript qui prend ce tableau comme entrée et retourne un nouvel objet où les clés sont les catégories, et les valeurs sont des tableaux contenant les articles appartenant à ces catégories. Chaque article dans ces tableaux doit être représenté uniquement par son titre.

## Structure des données

Imaginons que nos données se présentent ainsi :

```javascript
const articles = [
    { titre: "Article 1", categorie: "Technologie", prix: 120 },
    { titre: "Article 2", categorie: "Voyage", prix: 200 },
    { titre: "Article 3", categorie: "Technologie", prix: 150 },
    { titre: "Article 4", categorie: "Cuisine", prix: 30 }
];
```

## Solution

Voici comment implémenter cette fonction :

<details>

```javascript
function regrouperArticlesParCategorie(articles) {
    return articles.reduce((acc, article) => {
        // Si la catégorie n'existe pas déjà, l'initialiser avec un tableau vide
        if (!acc[article.categorie]) {
            acc[article.categorie] = [];
        }
        // Ajouter le titre de l'article au tableau correspondant à sa catégorie
        acc[article.categorie].push(article.titre);
        return acc;
    }, {});
}
```
</details>

```javascript
// Exemple d'utilisation
const articles = [
    { titre: "Article 1", categorie: "Technologie", prix: 120 },
    { titre: "Article 2", categorie: "Voyage", prix: 200 },
    { titre: "Article 3", categorie: "Technologie", prix: 150 },
    { titre: "Article 4", categorie: "Cuisine", prix: 30 }
];

console.log(regrouperArticlesParCategorie(articles));
// Devrait afficher :
// {
//   Technologie: ["Article 1", "Article 3"],
//   Voyage: ["Article 2"],
//   Cuisine: ["Article 4"]
// }
```

## Explication

<details>

- **Réduction** : La fonction utilise la méthode `reduce` des tableaux pour transformer le tableau d'articles en un objet où les clés sont les catégories. La méthode `reduce` parcourt chaque élément du tableau et utilise une fonction de rappel pour accumuler son résultat dans un accumulateur (`acc`), ici initialisé comme un objet vide `{}`.
- **Accumulation** : Pour chaque article, la fonction vérifie si la catégorie de l'article existe déjà comme clé dans l'accumulateur. Si ce n'est pas le cas, elle initialise cette clé avec un tableau vide. Ensuite, elle ajoute le titre de l'article au tableau correspondant à la catégorie.

Ce problème illustre une utilisation pratique de la méthode `reduce` pour transformer et organiser des données complexes en structures plus utiles, tout en pratiquant la manipulation d'objets et de tableaux en JavaScript.
</details>