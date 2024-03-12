Créons un problème de niveau "entre débutant et intermédiaire" en JavaScript qui met en lumière l'utilisation de certaines des fonctions les plus indispensables ou les plus utilisées en JavaScript, telles que les méthodes de tableau `map`, `filter`, `reduce`, et les fonctions de manipulation de chaînes de caractères comme `split` et `join`. 

### Énoncé du problème : **Analyse et Transformation de Données Journalières**

Vous êtes chargé de traiter et d'analyser un ensemble de données représentant les transactions journalières d'un magasin. Les données sont fournies sous forme de chaîne de caractères, où chaque transaction pour une journée est séparée par un point-virgule (`;`), et chaque transaction contient le nom de l'article vendu et le montant de la vente, séparés par une virgule (`,`).

Votre tâche est de créer une fonction en JavaScript qui prend cette chaîne de caractères comme entrée et retourne le montant total des ventes pour la journée. De plus, votre fonction doit retourner le nom de l'article le plus vendu (supposons qu'il y ait un seul article qui se distingue comme le plus vendu chaque jour).

### Structure des données d'entrée

Les données d'entrée sont une chaîne de caractères au format suivant : `"article1,montant1;article2,montant2;article3,montant3;..."`

### Solution

<details>

```javascript
function analyserVentes(journalVentes) {
    const transactions = journalVentes.split(';').map(transaction => {
        const [article, montant] = transaction.split(',');
        return { article, montant: parseFloat(montant) };
    });

    const totalVentes = transactions.reduce((acc, { montant }) => acc + montant, 0);

    const articlesVendus = transactions.reduce((acc, { article }) => {
        acc[article] = (acc[article] || 0) + 1;
        return acc;
    }, {});

    const articlePlusVendu = Object.keys(articlesVendus).reduce((a, b) => articlesVendus[a] > articlesVendus[b] ? a : b);

    return { totalVentes, articlePlusVendu };
}
```
</details><br>

```javascript
// Exemple d'utilisation
const journal = "pommes,10;bananes,5;bananes,5;pommes,15";
console.log(analyserVentes(journal));
// Doit afficher quelque chose comme : { totalVentes: 35, articlePlusVendu: "pommes" }
```

### Explication

<details>

- **Découpage et transformation** : On utilise `split` pour séparer les transactions, puis `map` pour transformer chaque transaction en un objet contenant le nom de l'article et le montant de la vente.
- **Calcul du total des ventes** : `reduce` compile le montant total des ventes à partir de l'ensemble des transactions.
- **Identification de l'article le plus vendu** : Une autre utilisation de `reduce` construit un objet qui compte combien de fois chaque article a été vendu. On utilise ensuite `Object.keys` et `reduce` pour trouver l'article le plus vendu.
</details><br>

Cette solution met en évidence l'importance et la polyvalence des méthodes `map`, `filter`, `reduce`, ainsi que des fonctions de manipulation de chaînes comme `split`. Elle démontre comment ces fonctions peuvent être combinées pour effectuer des analyses de données complexes de manière concise et lisible.