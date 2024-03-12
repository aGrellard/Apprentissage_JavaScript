Découvrons un exercice de niveau intermédiaire en JavaScript qui se concentre sur l'utilisation des classes, une fonctionnalité essentielle pour la programmation orientée objet en JavaScript. Les classes fournissent un moyen clair et concis de créer des objets et d'implémenter l'héritage.

### Énoncé du problème : **Création et extension de classes**

Imaginez que vous développiez une application pour une bibliothèque qui gère différents types de médias : livres, DVD, etc. Vous devez créer une classe de base `Media` avec des sous-classes `Livre` et `DVD` qui héritent de `Media`. 

- La classe `Media` doit avoir les propriétés `titre`, un constructeur qui accepte le titre comme paramètre, et une méthode `getInfo()` qui retourne une chaîne de caractères contenant le titre.
- La classe `Livre` étend `Media` et ajoute les propriétés `auteur` et `pages`. Sa méthode `getInfo()` doit inclure le titre, l'auteur et le nombre de pages.
- La classe `DVD` étend `Media` et ajoute les propriétés `realisateur` et `duree`. Sa méthode `getInfo()` doit inclure le titre, le réalisateur et la durée.

### Solution

<details>

```javascript
class Media {
    constructor(titre) {
        this.titre = titre;
    }

    getInfo() {
        return `Titre: ${this.titre}`;
    }
}

class Livre extends Media {
    constructor(titre, auteur, pages) {
        super(titre);
        this.auteur = auteur;
        this.pages = pages;
    }

    getInfo() {
        return `${super.getInfo()}, Auteur: ${this.auteur}, Pages: ${this.pages}`;
    }
}

class DVD extends Media {
    constructor(titre, realisateur, duree) {
        super(titre);
        this.realisateur = realisateur;
        this.duree = duree;
    }

    getInfo() {
        return `${super.getInfo()}, Réalisateur: ${this.realisateur}, Durée: ${this.duree} minutes`;
    }
}

// Exemple d'utilisation
const monLivre = new Livre("Harry Potter", "J.K. Rowling", 500);
console.log(monLivre.getInfo()); // Titre: Harry Potter, Auteur: J.K. Rowling, Pages: 500

const monDVD = new DVD("Inception", "Christopher Nolan", 148);
console.log(monDVD.getInfo()); // Titre: Inception, Réalisateur: Christopher Nolan, Durée: 148 minutes
```
</details>

### Explication

- **Classe de base `Media`** : La classe `Media` sert de classe de base avec le titre comme propriété commune.
- **Sous-classes `Livre` et `DVD`** : Ces classes étendent `Media` en ajoutant leurs propres propriétés spécifiques et en surchargeant la méthode `getInfo()` pour inclure ces propriétés dans la sortie.
- **Utilisation de `super`** : Le mot-clé `super` est utilisé pour appeler le constructeur de la classe parente `Media` ainsi que sa méthode `getInfo()` pour construire la chaîne de caractères finale.

Cet exercice illustre comment utiliser les classes et l'héritage en JavaScript pour organiser et structurer le code de manière efficace et maintenable, en alignement avec les principes de la programmation orientée objet.