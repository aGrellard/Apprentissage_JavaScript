[mdn_promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#description)

<hr>

La polyvalence des fonctions retournant explicitement une promesse est particulièrement utile lorsqu'on doit convertir des opérations basées sur des callbacks en promesses. C'est souvent le cas avec des API plus anciennes ou des bibliothèques qui utilisent des callbacks pour gérer l'asynchronisme.

Imaginons que vous ayez une fonction basée sur un callback, comme une fonction de lecture de fichier dans Node.js :

```javascript
const fs = require('fs');

function lireFichier(callback) {
    fs.readFile('monFichier.txt', 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, data);
    });
}
```

Cette fonction utilise un callback pour retourner le résultat ou une erreur. Maintenant, disons que vous voulez utiliser des promesses pour gérer l'asynchronisme, ce qui rendrait votre code plus lisible et vous permettrait d'utiliser `async/await`. Vous pouvez envelopper cette fonction dans une nouvelle fonction qui retourne une promesse :

```javascript
function lireFichierAsync() {
    return new Promise((resolve, reject) => {
        lireFichier((err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}
```

Dans cette nouvelle version, `lireFichierAsync` retourne une promesse. Si `lireFichier` se termine avec succès, la promesse est résolue avec les données lues. Si une erreur survient, la promesse est rejetée avec cette erreur.

Vous pouvez maintenant utiliser `lireFichierAsync` avec `async/await` pour un code plus propre et plus lisible :

```javascript
async function traiterFichier() {
    try {
        const contenu = await lireFichierAsync();
        console.log(contenu);
    } catch (err) {
        console.error("Erreur lors de la lecture du fichier :", err);
    }
}
```

Dans cet exemple, l'utilisation de promesses rend le code asynchrone plus intuitif et plus facile à suivre, tout en intégrant une gestion d'erreur claire avec `try...catch`.