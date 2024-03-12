Abordons un exercice de niveau intermédiaire en JavaScript qui se concentre sur les concepts de programmation synchrone et asynchrone, en particulier autour de l'utilisation de `setTimeout`, les Promesses, et `async`/`await`.

### Énoncé du problème : **Séquence d'exécution asynchrone**

Imaginez que vous développiez une application web qui doit effectuer une série de tâches asynchrones en séquence. Chaque tâche prend un certain temps pour être complétée, simulé par l'utilisation de `setTimeout`. Vous devez écrire une fonction qui exécute trois tâches asynchrones en séquence, où chaque tâche doit démarrer seulement après la complétion de la précédente. Chaque tâche doit également logger un message indiquant son achèvement.

### Structure de la tâche

Pour simplifier, considérons que chaque "tâche" est simplement une fonction qui utilise `setTimeout` pour simuler un délai asynchrone avant de logger un message.

### Solution

Vous allez définir trois fonctions de tâches, puis écrire une fonction asynchrone qui les exécute en séquence en utilisant des Promesses et `async`/`await`.

```javascript
// Tâche simulée
function tacheAsynchrone(msg, delai) {
    return new Promise(resolve => {
        **setTimeout**(() => {
            console.log(msg);
            resolve();
        }, delai);
    });
}

// Exécution séquentielle des tâches
async function executerTachesEnSequence() {
    await tacheAsynchrone("Tâche 1 complétée", 1000);
    await tacheAsynchrone("Tâche 2 complétée", 2000);
    await tacheAsynchrone("Tâche 3 complétée", 3000);
}

// Appeler la fonction
executerTachesEnSequence();
```

### Explication

- **Promesse dans `tacheAsynchrone`** : Chaque tâche est représentée par une fonction qui retourne une Promesse. La Promesse est résolue (et donc la tâche est considérée comme terminée) après un délai simulé par `setTimeout`. Le message passé à la fonction est loggé après ce délai.
- **`executerTachesEnSequence` avec `await`** : Cette fonction asynchrone attend la complétion de chaque tâche avant de passer à la suivante. L'utilisation de `await` force JavaScript à attendre que la Promesse retournée par `tacheAsynchrone` soit résolue avant de continuer.

Cet exercice illustre comment gérer des opérations asynchrones en séquence en JavaScript, un concept crucial pour de nombreuses applications web modernes qui interagissent avec des APIs, des bases de données, ou d'autres opérations qui prennent du temps à compléter.