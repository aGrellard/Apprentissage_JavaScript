[mdn_promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#description)

<hr>

La différence principale entre une fonction asynchrone déclarée avec `async function mafonction()` et une fonction qui retourne explicitement une nouvelle promesse avec `function mafonction() { return new Promise((resolve, reject) => {}) }` réside dans la syntaxe et la lisibilité du code, mais les deux approches ont le même objectif fondamental : gérer les opérations asynchrones.

### Fonction Asynchrone (Async Function)

```javascript
async function mafonction() {
    // Logique asynchrone ici
}
```

- **Syntaxe simplifiée :** L'utilisation du mot-clé `async` devant une fonction indique automatiquement que la fonction retournera une promesse.
- **Gestion des erreurs :** Les erreurs peuvent être capturées avec des blocs `try...catch`.
- **Utilisation de `await` :** Permet d'écrire du code asynchrone de manière plus lisible, presque comme s'il s'agissait de code synchrone. Le mot-clé `await` ne peut être utilisé que dans des fonctions asynchrones.
- **Retour implicite de promesse :** Toute valeur retournée par une fonction asynchrone est automatiquement encapsulée dans une promesse. Si la fonction retourne une valeur non-promise, cette valeur est emballée dans une promesse résolue. Si la fonction lève une exception, elle retourne une promesse rejetée.

### Fonction Retournant une Promesse

```javascript
function mafonction() {
    return new Promise((resolve, reject) => {
        // Logique asynchrone ici
    });
}
```

- **Contrôle explicite :** Vous créez explicitement une nouvelle promesse. Cela vous donne un contrôle plus direct sur la résolution et le rejet de la promesse.
- **Gestion des erreurs :** Les erreurs doivent être gérées en rejetant la promesse (`reject`).
- **Polyvalence :** Peut être utile dans des situations où vous devez convertir des opérations basées sur des callbacks en promesses.
- **Pas d’utilisation de `await` à l’intérieur :** Dans ce contexte, vous ne pouvez pas utiliser `await` à l'intérieur de la fonction à moins que la fonction elle-même ne soit déclarée `async`.

### Conclusion

En pratique, les fonctions asynchrones (`async/await`) sont souvent préférées pour leur syntaxe plus claire et leur facilité de gestion des erreurs. Elles rendent le code asynchrone plus lisible et plus proche d’un style synchrone. Cependant, dans certains cas, notamment lors de la conversion de fonctions basées sur des callbacks en promesses, il peut être nécessaire de retourner explicitement une nouvelle promesse.