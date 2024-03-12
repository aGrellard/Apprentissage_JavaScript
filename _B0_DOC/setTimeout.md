# setTimeout

La fonction `setTimeout` est une fonction JavaScript intégrée qui permet de définir un délai avant l'exécution d'une fonction spécifique. Elle est largement utilisée pour retarder l'exécution d'un morceau de code ou pour exécuter du code de manière asynchrone après un certain temps. Voici une explication détaillée de son fonctionnement, de ses paramètres et de quelques cas d'utilisation.

- [setTimeout](#settimeout)
  - [Documentation](#documentation)
    - [Fonctionnement de `setTimeout`](#fonctionnement-de-settimeout)
    - [Exemple de base](#exemple-de-base)
    - [Annulation d'un Timeout](#annulation-dun-timeout)
    - [Cas d'utilisation courants](#cas-dutilisation-courants)
    - [Bonnes pratiques](#bonnes-pratiques)
  - [Exemples](#exemples)
    - [1. Retarder l'exécution d'une fonction](#1-retarder-lexécution-dune-fonction)
    - [2. Debouncing](#2-debouncing)
    - [3. Throttling](#3-throttling)
    - [4. Exécuter du code après le chargement complet de la page](#4-exécuter-du-code-après-le-chargement-complet-de-la-page)
    - [5. Créer des animations ou des transitions temporisées](#5-créer-des-animations-ou-des-transitions-temporisées)
    - [6. Simuler des opérations asynchrones](#6-simuler-des-opérations-asynchrones)



## Documentation

### Fonctionnement de `setTimeout`

La syntaxe de base de `setTimeout` est la suivante :

```javascript
setTimeout(function, delay, [arg1, arg2, ...]);
```

- **function** : La fonction à exécuter après le délai. Cette fonction peut être une fonction anonyme ou le nom d'une fonction existante.
- **delay** : Le délai avant l'exécution de la fonction, exprimé en millisecondes (1000 millisecondes = 1 seconde). Si ce délai est omis ou mis à 0, la fonction sera mise dans la file d'attente pour être exécutée dès que possible, après l'achèvement des scripts en cours.
- **arg1, arg2, ...** : (Optionnel) Des arguments supplémentaires qui seront passés à la fonction lors de son exécution.

### Exemple de base

```javascript
function saluer() {
    console.log("Bonjour !");
}

// Exécute la fonction `saluer` après un délai de 2 secondes.
setTimeout(saluer, 2000);
```

Dans cet exemple, la console affichera `"Bonjour !"` après un délai de 2 secondes.

### Annulation d'un Timeout

`setTimeout` retourne un identifiant unique (un nombre) pour le timeout qu'elle a créé. Cet identifiant peut être utilisé avec la fonction `clearTimeout` pour annuler le timeout avant qu'il ne soit exécuté.

```javascript
const timeoutId = setTimeout(saluer, 2000);

// Annule le timeout
clearTimeout(timeoutId);
```

Dans cet exemple, le timeout est annulé avant qu'il ne puisse exécuter la fonction `saluer`, donc "Bonjour !" ne sera pas affiché dans la console.

### Cas d'utilisation courants

- **Retarder des animations ou des transitions** : Pour créer des effets visuels ou retarder l'affichage d'éléments sur une page web.
- **Debounce** : Attendre que l'utilisateur ait fini de taper dans un champ de saisie (par exemple, lors de la recherche) avant de lancer une requête.
- **Throttling** : S'assurer qu'une fonction ne s'exécute pas trop fréquemment, par exemple lors de l'écoute d'événements de défilement.

### Bonnes pratiques

- Utiliser `clearTimeout` pour éviter que des timeouts non nécessaires ne s'exécutent, en particulier dans les cas où l'utilisateur peut quitter la page ou modifier l'état qui rendrait l'exécution du timeout non pertinente.
- Être conscient du comportement du "timer clamping" dans certains navigateurs, où les délais courts peuvent être augmentés pour améliorer la performance et l'économie d'énergie, en particulier pour les onglets en arrière-plan.

En résumé, `setTimeout` est un outil puissant pour contrôler l'exécution asynchrone de code JavaScript. Il offre une flexibilité dans la gestion des opérations différées, des animations, et d'autres tâches nécessitant un contrôle du timing.

## Exemples

### 1. Retarder l'exécution d'une fonction

**Utilisation** : Exécuter une fonction après un certain temps.

**Exemple** :

```javascript
setTimeout(() => {
    console.log("Message affiché après 3 secondes");
}, 3000);
```

### 2. Debouncing

**Utilisation** : Limiter le nombre de fois qu'une fonction peut être exécutée sur une période. C'est utile pour les événements qui se déclenchent fréquemment, comme le redimensionnement de la fenêtre ou la saisie dans un champ de recherche.

**Exemple** :

```javascript
let debounceTimer;
function recherche() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        console.log("Recherche effectuée");
    }, 300);
}

// Simuler l'appel de la fonction `recherche` à chaque frappe de l'utilisateur
recherche(); // Appelé à chaque saisie de l'utilisateur
```

### 3. Throttling

**Utilisation** : Assurer qu'une fonction ne s'exécute pas plus d'une fois toutes les X millisecondes. C'est utile pour les événements de scroll ou de redimensionnement pour éviter des performances médiocres.

**Exemple** : Bien que `setTimeout` ne soit pas directement utilisé pour le throttling, on peut combiner `setTimeout` et `clearTimeout` pour un effet similaire.

```javascript
let throttleTimer;
function handleScroll() {
    if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
            throttleTimer = null;
            console.log("Scroll event handled");
        }, 100);
    }
}

// Simuler l'appel de la fonction `handleScroll` lors du défilement de la page
handleScroll();
handleScroll();
```

### 4. Exécuter du code après le chargement complet de la page

**Utilisation** : Retarder l'exécution de script jusqu'à ce que tous les éléments de la page soient chargés.

**Exemple** :

```javascript
window.onload = () => {
    setTimeout(() => {
        console.log("Page entièrement chargée et prête");
    }, 1000);
};
```

### 5. Créer des animations ou des transitions temporisées

**Utilisation** : Créer des effets d'animation ou de transition en retardant l'exécution de fonctions liées au style ou à la position des éléments HTML.

**Exemple** :

```javascript
setTimeout(() => {
    document.getElementById("monElement").style.opacity = 1;
}, 500);
```

### 6. Simuler des opérations asynchrones

**Utilisation** : Simuler un appel réseau ou une opération de base de données dans des environnements de développement ou d'apprentissage.

**Exemple** :

```javascript
function fetchDataSimulated(callback) {
    setTimeout(() => {
        callback("Données reçues");
    }, 2000);
}

fetchDataSimulated((data) => {
    console.log(data); // "Données reçues"
});
```

Chacune de ces utilisations démontre la flexibilité de `setTimeout` pour gérer des opérations asynchrones, des animations, des optimisations de performance, et plus encore dans le développement web.