Découvrons un autre exercice de niveau intermédiaire en JavaScript qui explore davantage les concepts de programmation asynchrone, en se concentrant sur la gestion des erreurs dans les opérations asynchrones.

### Énoncé du problème : **Gestion des erreurs dans une chaîne de Promesses**

Vous travaillez sur une application web qui interagit avec une API externe pour récupérer des informations utilisateur. La récupération des données se fait de manière asynchrone et peut parfois échouer. Votre tâche consiste à écrire une fonction asynchrone qui tente de récupérer les données utilisateur et gère correctement les erreurs, tout en fournissant un mécanisme de reprise en cas d'échec.

La fonction doit essayer de récupérer les données utilisateur jusqu'à trois fois si les tentatives précédentes échouent. Si toutes les tentatives échouent, la fonction doit logger une erreur et retourner `null`.

### Solution

<details>

```javascript
function recupererDonneesUtilisateur() {
    return new Promise((resolve, reject) => {
        // Simule une requête API qui peut réussir ou échouer
        const aReussi = Math.random() > 0.5;
        if (aReussi) {
            resolve({ nom: "John Doe", age: 30 });
        } else {
            reject(new Error("Échec de la récupération des données utilisateur"));
        }
    });
}

async function obtenirDonneesUtilisateurAvecReprise(maxTentatives) {
    let derniereErreur = null;
    for (let tentative = 0; tentative < maxTentatives; tentative++) {
        try {
            const donnees = await recupererDonneesUtilisateur();
            console.log("Données utilisateur récupérées avec succès :", donnees);
            return donnees; // Retourne immédiatement en cas de succès
        } catch (erreur) {
            console.log(`Tentative ${tentative + 1} a échoué`);
            derniereErreur = erreur;
        }
    }
    console.log("Toutes les tentatives ont échoué :", derniereErreur);
    return null; // Retourne null après toutes les tentatives
}

// Appeler la fonction
obtenirDonneesUtilisateurAvecReprise(3);
```
</details><br>

### Explication

<details>

- **Fonction `recupererDonneesUtilisateur`** : Simule une requête asynchrone qui peut réussir aléatoirement ou échouer, représentée par une Promesse. La Promesse est résolue avec des données factices en cas de succès ou rejetée avec une erreur en cas d'échec.
- **Gestion des tentatives répétées** : La fonction `obtenirDonneesUtilisateurAvecReprise` tente de récupérer les données utilisateur jusqu'à un nombre maximum de tentatives (`maxTentatives`). Elle utilise une boucle `for` et `try`/`catch` pour gérer les tentatives successives.
- **Gestion des erreurs** : À chaque itération, si `recupererDonneesUtilisateur` échoue, l'erreur est capturée dans le bloc `catch`, et la boucle continue jusqu'à ce que le nombre maximum de tentatives soit atteint. Si toutes les tentatives échouent, une erreur est loggée, et la fonction retourne `null`.
</details><br>

Cet exercice met en évidence l'importance de la gestion des erreurs dans les opérations asynchrones et montre comment implémenter une logique de reprise simple pour améliorer la robustesse des applications web.