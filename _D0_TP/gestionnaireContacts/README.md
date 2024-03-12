Special Thx @ ChatGPT -> [Chat](https://chat.openai.com/share/f3cddc8e-e920-47b3-b696-d7b03fa5e9e8)

Pour construire le TP "Gestionnaire de Contacts" de niveau intermédiaire basé sur le code HTML et JavaScript fourni, concentrons-nous sur la structure attendue, les explications des différentes parties du code, et quelques conseils pour la création des fonctions attendues. Ce TP permettra de renforcer les compétences en JavaScript en manipulant des objets, des tableaux, et en interagissant avec le DOM.

### Structure et Fonctionnalités Attendues

1. **Ajout de Contacts** : La fonction `ajouterContact` permet d'ajouter un nouveau contact après avoir vérifié la validité des entrées avec `verifierNom`, `verifierEmail`, et `verifierTelephone`. 

2. **Affichage des Contacts** : `afficherContacts` met à jour la liste des contacts affichés sur la page. Chaque contact ajouté apparaîtra dans la liste avec un bouton "Modifier" pour permettre la modification.

3. **Recherche de Contacts** : La fonction `rechercherContact` filtre les contacts affichés en fonction du texte entré dans le champ de recherche.

4. **Modification de Contacts** : `modifierContact` permet de mettre à jour les informations d'un contact existant en utilisant des boîtes de dialogue pour saisir les nouvelles informations.

5. **Tri des Contacts** : `trierContacts` trie les contacts par nom en utilisant `localeCompare` pour un tri alphabétique.

6. **Calcul de Statistiques** : `calculerStatistiques` calcule et affiche des statistiques sur les contacts, comme le nombre total de contacts et les initiales des noms.

7. **Calcul de la Longueur Moyenne des Noms** : `calculerLongueurMoyenneNoms` calcule la longueur moyenne des noms des contacts et affiche le résultat.

### Aides pour la Création des Fonctions

- **Vérification des Entrées** :
  - **Nom** : Assurez-vous que la chaîne n'est ni trop courte ni trop longue et ne contient que des lettres et des espaces.
  - **Email** : Vérifiez la présence d'un `@` suivi d'un point, avec des caractères valides avant et après.
  - **Téléphone** : Vérifiez que le numéro contient uniquement des chiffres (et éventuellement un `+` au début) et respecte la longueur attendue.

- **Modification de Contact** :
  - Utilisez `prompt` pour obtenir les nouvelles valeurs.
  - Identifiez le contact à modifier à l'aide de son index dans le tableau `contacts`.
  - Mettez à jour le tableau en remplaçant l'objet contact à l'index spécifié.

- **Tri et Statistiques** :
  - Pour le tri, utilisez la méthode `sort` sur le tableau `contacts`.
  - Pour les statistiques, `map` peut extraire les premières lettres des noms, et `reduce` peut être utilisé pour calculer des sommes ou des moyennes.

### Conseils Généraux

- **Modularité** : Chaque fonction a un objectif précis. Assurez-vous de bien comprendre chaque rôle avant de commencer.
  
- **Debugging** : Utilisez `console.log` pour déboguer et suivre le flux de votre application.
  
- **Validation** : La validation côté client est cruciale pour une bonne UX, mais elle doit être complétée par une validation côté serveur pour la sécurité.

#### Aides supplémentaires pour la Création des Fonctions ( Si je suis bloqué )
<details>

<summary>Prootypes</summary>

```javascript

let contacts = [];

/** 
 * Cette fonction vérifie la validité d'un numéro de téléphone.
 * Un numéro de téléphone valide doit:
 * - Avoir une longueur entre 10 et 15 chiffres.
 * - Si le premier caractère est '+', il sera supprimé avant la vérification.
 * - Contenir seulement des chiffres.
 *
 * @param {string} telephone Le numéro de téléphone à vérifier.
 * @returns {boolean} Retourne vrai si le numéro de téléphone est valide, sinon il retourne faux.
 */
function verifierTelephone(telephone)

/**
 * Cette fonction vérifie si l'email entrant est valide
 *
 * @param {string} email - L'adresse e-mail à vérifier
 * @return {boolean} Retourne vrai si l'email est valide, sinon retourne faux
 */
function verifierEmail(email) {
    // Trouve la position de '@' dans l'email
    

    // Trouve la position du dernier '.' dans l'email
    

    // Vérifie la validité de l'email grâce à sa structure
        // Retourne faux si l'email n'est pas valide

    // Retourne vrai si l'email est valide
    return true;
}
/**
 * Cette fonction vérifie la validité d'un nom. Un nom valide doit:
 * - avoir une longueur entre 2 et 25 caractères.
 * - contenir seulement des lettres de l'alphabet (minuscules et majuscules) et des espaces.
 *
 * @param {string} nom Le nom à vérifier.
 * @returns {boolean} Retourne vrai si le nom est valide, sinon il retourne faux.
 */
function verifierNom(nom) 

/**
 * Cette fonction est utilisée pour ajouter un contact.
 * Elle récupère les données de contact (Nom, Email, Téléphone) depuis des éléments HTML avec ids spécifiques.
 * Elle valide ensuite ces données en utilisant d'autres fonctions : verifierNom, verifierEmail, verifierTelephone.
 * Si toutes les données sont valides, elle crée un objet de contact et l'ajoute à notre liste de contacts.
 * Ensuite, elle appelle une autre fonction afficherContacts pour mettre à jour l'affichage des contacts.
 * Sinon, elle affiche des alertes pour signaler quels champs de données étaient invalides.
 */
function ajouterContact() {
    // Récupérer les données du formulaire


    // Validation des données récupérées


    // Ajout du contact si toutes les données sont valides 

}

/**
 * Cette fonction est utilisée pour afficher tous les contacts dans une liste HTML.
 * Elle récupère un élément HTML avec l'id "listeContacts" et efface son contenu actuel.
 * Ensuite, pour chaque contact dans notre liste de contacts, elle fait les choses suivantes :
 *  - Crée un nouvel élément 'li'.
 *  - Défini son contenu textuel pour inclure les détails du contact (Nom, Email, Téléphone).
 *  - Crée un bouton "Modifier" pour chaque contact.
 *  - Associe une fonction modifierContact au clic sur ce bouton. L'index du contact dans la liste de contacts est passé à cette fonction.
 *  - Ajoute le bouton "Modifier" à l'élément 'li'.
 *  - Ajoute finalement l'élément 'li' à la liste de contacts HTML.
 * Enfin, elle appelle une autre fonction calculerStatistiques pour calculer certaines statistiques après l'affichage des contacts.
 */
function afficherContacts() {
    // Récupérer l'élément HTML pour la liste de contacts et nettoyer son contenu actuel
    const liste = document.getElementById("listeContacts");
    liste.innerHTML = '';

    // Parcourir tous les contacts et créer un élément 'li' pour chaque contact avec ses détails
    contacts.forEach((contact, index) => {

        // Création et configuration du bouton "Modifier"

        // Ajout du bouton "Modifier" et de l'élément 'li' à la liste HTML
    });

    // Calculer certaines statistiques après l'affichage des contacts
}

/**
 * Cette fonction est utilisée pour rechercher un contact par nom.
 * Elle récupère d'abord la valeur de recherche d'un élément HTML identifié par "rechercheContact".
 * Puis elle effectue une recherche insensible à la casse sur tous les noms de contact.
 * Pour ce faire, elle utilise la fonction 'filter' pour sélectionner uniquement les contacts dont le nom contient la chaîne de recherche.
 * Enfin, elle appelle une autre fonction 'afficherContactsFiltres' avec les résultats de la recherche pour mettre à jour la liste des contacts affichés.
 */
function rechercherContact()

/**
 * Cette fonction est utilisée pour afficher une liste filtrée de contacts.
 * Elle accepte un tableau de résultats, qui est une liste filtrée de contacts.
 * Elle récupère d'abord un élément HTML identifié par "listeContacts" et efface son contenu actuel.
 * Puis, pour chaque contact dans la liste des résultats, elle fait ce qui suit :
     *  - Crée un nouvel élément 'li'
     *  - Définit son contenu textuel pour inclure les détails du contact (Nom, Email, Téléphone)
     *  - Ajoute l'élément 'li' dans la liste de contacts HTML
 * Ainsi, à la fin de l'exécution de cette fonction, la liste des contacts HTML affiche uniquement les contacts filtrés.
 */
function afficherContactsFiltres(resultats)

/**
 * Cette fonction est utilisée pour calculer et afficher certaines statistiques de contact.
 * Elle calcule d'abord le nombre de contacts en utilisant la propriété 'length' de notre tableau 'contacts'.
 * Ensuite, elle utilise la méthode 'map' pour extraire l'initiale de chaque nom de contact dans un nouveau tableau.
 * Après, elle convertit ce tableau d'initiales en une seule chaîne de caractères en utilisant la méthode 'join'.
 * Finalement, elle met à jour le contenu textuel d'un élément HTML identifié par 'statistiques' pour afficher ces valeurs calculées.
 * Ainsi, après l'exécution de cette fonction, l'élément 'statistiques' affiche le nombre total de contacts et leurs initiales.
 */
function calculerStatistiques()

/**
 * Cette fonction est utilisée pour modifier les détails d'un contact spécifique.
 * Elle accepte un argument 'index', qui est l'index du contact dans le tableau 'contacts'.
 * D'abord, elle utilise la fonction 'prompt' pour afficher une fenêtre de dialogue demandant une nouvelle valeur pour le nom, l'email et le téléphone du contact. Les valeurs actuelles sont fournies comme valeurs par défaut.
 * Si toutes les nouvelles valeurs ont été fournies (c'est-à-dire, si aucune n'est null ou une chaîne de caractères vide), alors la fonction fait ce qui suit :
 * - Elle utilise la méthode 'splice' pour remplacer le contact à l'index donné par un nouvel objet avec les nouvelles valeurs.
 * - Elle appelle la fonction 'afficherContacts' pour mettre à jour l'affichage des contacts.
 * - Elle affiche dans la console et dans une alerte que le contact a été modifié.
 * Ainsi, cette fonction permet aux utilisateurs de modifier les informations d'un contact existant.
 */
function modifierContact(index)

/**
 * Cette fonction est utilisée pour trier le tableau 'contacts' par nom en ordre alphabétique.
 * Elle utilise la méthode 'sort' des tableaux JavaScript, avec une fonction de tri personnalisée.
 * La fonction de tri utilise la méthode 'localeCompare' pour comparer les noms de deux contacts (a et b).
 * 'localeCompare' est une méthode des chaînes de caractères qui compare deux chaînes dans l'ordre alphabétique de la langue locale, ce qui est idéal pour trier des noms.
 * Après le tri, la fonction appelle 'afficherContacts' pour mettre à jour l'affichage.
 * Ainsi, après l'exécution de cette fonction, la liste des contacts est affichée dans l'ordre alphabétique.
 */
function trierContacts()

/**
 * Cette fonction est utilisée pour calculer et afficher la longueur moyenne des noms des contacts.
 * Elle commence par vérifier si le tableau 'contacts' n'est pas vide. Si le tableau est vide, la fonction ne fait rien.
 * Si le tableau n'est pas vide, la fonction fait ce qui suit :
 * - Utilise la méthode 'map' pour extraire la longueur de chaque nom dans un nouveau tableau. 
 * - Utilise ensuite la méthode 'reduce' pour ajouter toutes ces longueurs ensemble, donnant la somme totale de toutes les longueurs.
 * - Ensuite, elle divise cette somme par le nombre de contacts pour obtenir la longueur moyenne.
 * - Finalement, elle utilise une alerte pour afficher cette longueur moyenne, arrondie à deux décimales avec 'toFixed'.
 * Ainsi, après l'exécution de cette fonction, une alerte s'affiche avec la longueur moyenne des noms des contacts.
 */
function calculerLongueurMoyenneNoms()

// Initialiser l'affichage des contacts au chargement de la page
document.addEventListener("DOMContentLoaded", afficherContacts);

```

</details>

### Conclusion

Ce TP est une excellente occasion de pratiquer la manipulation d'objets et de tableaux en JavaScript, ainsi que l'interaction avec le DOM pour créer une application web dynamique. Les étudiants sont encouragés à expérimenter avec le code, à ajouter des fonctionnalités supplémentaires et à personnaliser l'interface utilisateur pour rendre l'application unique.

### Structure HTML
<details>

<summary>Afficher un exemple de la structure HTML attendue</summary>

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Gestionnaire de Contacts</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="app">
        <input type="text" id="nomContact" placeholder="Nom du contact">
        <input type="email" id="emailContact" placeholder="Email du contact">
        <input type="tel" id="telContact" placeholder="Téléphone du contact">
        <button onclick="ajouterContact()">Ajouter</button>
        <input type="text" id="rechercheContact" placeholder="Rechercher un contact" oninput="rechercherContact()">
        <ul id="listeContacts"></ul>
        <div id="statistiques"></div>
        <button onclick="trierContacts()">Trier par Nom</button>
        <button onclick="calculerLongueurMoyenneNoms()">Longueur Moyenne des Noms</button>

    </div>
    <script src="script.js"></script>
</body>
</html>

Les événements doivent être inplémentés en JavaScript.
Le css est optionel.
```

</details>


### ressource
[notion](https://peridot-ravioli-f95.notion.site/30efc0cf463749ad9315b0983ce0c14b?v=0ac587e87c944b23a9b0f00b279f8f11)


