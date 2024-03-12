# async et await

`async` et `await` sont des mots-clés introduits dans ECMAScript 2017 (ES8) pour simplifier l'écriture de code asynchrone en JavaScript, le rendant plus lisible et plus facile à comprendre par rapport à l'utilisation des callbacks et des Promises. Ces mots-clés permettent d'écrire des fonctions asynchrones qui semblent se comporter de manière synchrone.

- [async et await](#async-et-await)
  - [Documentation](#documentation)
    - [`async`](#async)
    - [`await`](#await)
    - [Gestion des erreurs](#gestion-des-erreurs)
    - [Utilisation dans les boucles](#utilisation-dans-les-boucles)
      - [Boucles Séquentielles](#boucles-séquentielles)
      - [Boucles Parallèles](#boucles-parallèles)
    - [`async`/`await` avec des fonctions immédiatement invoquées](#asyncawait-avec-des-fonctions-immédiatement-invoquées)
    - [Bonnes pratiques](#bonnes-pratiques)
    - [Points clés](#points-clés)
  - [Exemples](#exemples)
    - [1. Récupération de Données Asynchrones](#1-récupération-de-données-asynchrones)
    - [2. Attente de Plusieurs Promesses en Parallèle](#2-attente-de-plusieurs-promesses-en-parallèle)
    - [3. Gestion des Erreurs](#3-gestion-des-erreurs)
    - [4. Chaînage de Promesses](#4-chaînage-de-promesses)
    - [5. Boucles Asynchrones](#5-boucles-asynchrones)
    - [6. Fonctions Asynchrones Immédiatement Invoquées (IIFE)](#6-fonctions-asynchrones-immédiatement-invoquées-iife)
    - [7. Utilisation avec des APIs Modernes](#7-utilisation-avec-des-apis-modernes)


## Documentation

### `async`

Le mot-clé `async` est utilisé pour déclarer une fonction asynchrone, qui retourne implicitement une `Promise`. Lorsqu'une fonction est déclarée avec `async`, elle enveloppe son résultat dans une `Promise`. Si la fonction renvoie une valeur, la promise sera résolue avec cette valeur. Si la fonction lève une exception, la promise sera rejetée avec cette erreur.

**Syntaxe**:

```javascript
async function nomDeLaFonction() {
    // Code asynchrone ici
}
```

**Exemple**:

```javascript
async function chargerDonnees() {
    return "Données chargées";
}

chargerDonnees().then(console.log); // Affiche: Données chargées
```

Dans cet exemple, `chargerDonnees` est une fonction asynchrone qui retourne une chaîne de caractères. La fonction retourne une `Promise` qui est résolue avec la valeur `"Données chargées"`.

### `await`

Le mot-clé `await` est utilisé pour attendre la résolution d'une `Promise`. Il ne peut être utilisé qu'à l'intérieur d'une fonction `async`. Lorsqu'il est utilisé, l'exécution de la fonction est mise en pause jusqu'à ce que la `Promise` soit résolue ou rejetée.

**Syntaxe**:

```javascript
let valeur = await unePromise;
```

**Exemple**:

```javascript
async function afficherDonnees() {
    let donnees = await chargerDonnees(); // Attend que la promise soit résolue
    console.log(donnees); // Affiche: Données chargées
}

afficherDonnees();
```

Dans cet exemple, la fonction `afficherDonnees` attend que `chargerDonnees` soit terminée et que la `Promise` soit résolue avant de continuer son exécution.

### Gestion des erreurs

Les erreurs dans les fonctions asynchrones peuvent être gérées en utilisant `try...catch` autour des opérations `await`.

`try...catch` permet de gérer les erreurs dans les fonctions asynchrones de manière synchrone.


**Exemple**:

```javascript
async function chargerEtAfficherDonnees() {
    try {
        let donnees = await chargerDonnees();
        console.log(donnees);
    } catch (erreur) {
        console.error("Erreur lors du chargement des données", erreur);
    }
}
```

**Exemple**:

```javascript
async function chargerDonneesAvecGestionDesErreurs() {
    try {
        const donnees = await chargerDonnees();
        console.log(donnees);
    } catch (erreur) {
        console.error("Une erreur est survenue", erreur);
    } finally {
        console.log("Exécuté après le try/catch, succès ou échec");
    }
}
```

### Utilisation dans les boucles

L'utilisation de `await` dans les boucles permet de gérer des séquences d'opérations asynchrones de manière efficace. Cependant, il est crucial de comprendre comment combiner `async`/`await` avec des boucles pour contrôler le comportement asynchrone séquentiel ou parallèle.

#### Boucles Séquentielles

Pour exécuter des tâches asynchrones de manière séquentielle dans une boucle, utilisez `await` à l'intérieur d'une boucle `for`, `for...of` ou `while`.

**Exemple**:

```javascript
async function traiterElementsSequentiellement(elements) {
    for (const element of elements) {
        await traiterElement(element);
    }
}
```

Dans cet exemple, chaque appel à `traiterElement` doit être terminé avant que le prochain puisse commencer. Cela est utile lorsque chaque itération dépend du résultat de la précédente.

#### Boucles Parallèles

Pour lancer plusieurs tâches asynchrones en parallèle et attendre qu'elles soient toutes terminées, vous pouvez combiner `await` avec `Promise.all`.

**Exemple**:

```javascript
async function traiterElementsEnParallele(elements) {
    const promesses = elements.map(element => traiterElement(element));
    await Promise.all(promesses);
}
```

Dans cet exemple, `Promise.all` est utilisé pour attendre que toutes les promesses dans le tableau `promesses` soient résolues. Cela permet d'exécuter les tâches asynchrones en parallèle, ce qui peut améliorer considérablement la performance pour des opérations indépendantes.

### `async`/`await` avec des fonctions immédiatement invoquées

Vous pouvez utiliser une IIFE (Immediately Invoked Function Expression) asynchrone pour exécuter du code asynchrone immédiatement, sans avoir besoin de définir une fonction asynchrone séparée.

**Exemple**:

```javascript
(async () => {
    try {
        const resultat = await uneOperationAsynchrone();
        console.log(resultat);
    } catch (erreur) {
        console.error(erreur);
    }
})();
```

### Bonnes pratiques

- **Ne pas oublier `await`** : Omettre `await` devant une opération asynchrone peut conduire à des bugs subtils, car le code exécutera la suite sans attendre la résolution de la promesse.
- **Utiliser `Promise.all` pour la parallélisation** : Lorsque vous avez plusieurs tâches asynchrones indépendantes, `Promise.all` permet d'exécuter ces tâches en parallèle, améliorant la performance.
- **Gérer les erreurs avec `try...catch`** : La gestion des erreurs est cruciale dans les fonctions asynchrones pour éviter que les exceptions non capturées interrompent l'exécution de votre programme.

La compréhension profonde d'`async` et `await` vous permettra de gérer efficacement l'asynchronisme dans vos applications JavaScript, en rendant votre code plus lisible, plus robuste et plus facile à maintenir.


### Points clés

- Les fonctions `async` rendent le code asynchrone plus lisible et facile à maintenir.
- Le mot-clé `await` permet d'attendre la résolution d'une `Promise` de manière élégante, en suspendant l'exécution de la fonction asynchrone jusqu'à ce que la `Promise` soit résolue.
- L'utilisation de `async` et `await` permet une gestion des erreurs plus intuitive grâce à `try...catch`.
- Bien que `async` et `await` simplifient l'écriture de code asynchrone, il est important de comprendre comment fonctionnent les `Promises` puisqu'elles en sont la base.

`async` et `await` améliorent significativement la lisibilité du code asynchrone en JavaScript, permettant aux développeurs de gérer des opérations asynchrones de manière plus efficace et plus claire.

## Exemples

### 1. Récupération de Données Asynchrones

**Utilisation** : Charger des données depuis une source externe, comme une API.

**Exemple** :

```javascript
async function chargerUtilisateurs() {
    const reponse = await fetch('https://api.example.com/utilisateurs');
    const utilisateurs = await reponse.json();
    console.log(utilisateurs);
}
```

### 2. Attente de Plusieurs Promesses en Parallèle

**Utilisation** : Exécuter plusieurs tâches asynchrones en parallèle et attendre que toutes soient terminées.

**Exemple** :

```javascript
async function chargerDonneesEnParallele() {
    const [utilisateurs, articles] = await Promise.all([
        fetch('https://api.example.com/utilisateurs').then(r => r.json()),
        fetch('https://api.example.com/articles').then(r => r.json())
    ]);
    console.log(utilisateurs, articles);
}
```

### 3. Gestion des Erreurs

**Utilisation** : Attraper et gérer les erreurs qui peuvent survenir dans les opérations asynchrones.

**Exemple** :

```javascript
async function chargerDonneesAvecGestionDesErreurs() {
    try {
        const donnees = await fetch('https://api.example.com/data');
        console.log(await donnees.json());
    } catch (erreur) {
        console.error("Erreur lors du chargement des données", erreur);
    }
}
```

### 4. Chaînage de Promesses

**Utilisation** : Effectuer des opérations asynchrones séquentielles, où chaque opération dépend du résultat de la précédente.

**Exemple** :

```javascript
async function obtenirDetailUtilisateur() {
    const utilisateur = await fetch('https://api.example.com/utilisateur/1').then(r => r.json());
    const profil = await fetch(`https://api.example.com/profil/${utilisateur.id}`).then(r => r.json());
    console.log(profil);
}
```

### 5. Boucles Asynchrones

**Utilisation** : Itérer sur une collection et effectuer une opération asynchrone pour chaque élément.

**Exemple** :

```javascript
async function verifierUtilisateurs(utilisateurs) {
    for (const utilisateur of utilisateurs) {
        const estValide = await verifierUtilisateur(utilisateur);
        console.log(`Utilisateur: ${utilisateur}, Valide: ${estValide}`);
    }
}
```

### 6. Fonctions Asynchrones Immédiatement Invoquées (IIFE)

**Utilisation** : Exécuter immédiatement du code asynchrone sans avoir à définir une fonction externe.

**Exemple** :

```javascript
(async () => {
    const donnees = await fetch('https://api.example.com/data').then(r => r.json());
    console.log(donnees);
})();
```

### 7. Utilisation avec des APIs Modernes

**Utilisation** : Interagir avec des APIs modernes qui retournent des Promises, en utilisant une syntaxe plus lisible.

**Exemple** :

```javascript
async function lireFichierAsynchrone(path) {
    const contenu = await fs.promises.readFile(path, 'utf8');
    console.log(contenu);
}
```

Chaque exemple montre comment `async` et `await` rendent le code asynchrone plus simple à écrire et à comprendre, comparé à l'utilisation de callbacks ou de chaînes de Promises. Cette approche facilite la gestion de l'asynchronisme, rendant les opérations complexes plus accessibles et moins sujettes aux erreurs.