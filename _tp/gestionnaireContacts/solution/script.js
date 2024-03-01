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
function verifierTelephone(telephone) {
    if (telephone.length < 10 || telephone.length > 15) return false;
    if (telephone[0] === '+') telephone = telephone.substring(1);
    for (let i = 0; i < telephone.length; i++) {
        if (telephone[i] < '0' || telephone[i] > '9') return false;
    }
    return true;
}
/**
 * Cette fonction vérifie si l'email entrant est valide
 *
 * @param {string} email - L'adresse e-mail à vérifier
 * @return {boolean} Retourne vrai si l'email est valide, sinon retourne faux
 */
function verifierEmail(email) {
    // Trouve la position de '@' dans l'email
    const atIndex = email.indexOf('@');

    // Trouve la position du dernier '.' dans l'email
    const dotIndex = email.lastIndexOf('.');

    // Vérifie la validité de l'email grâce à sa structure
    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
        return false; // Retourne faux si l'email n'est pas valide
    }

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
function verifierNom(nom) {
    if (nom.length < 2 || nom.length > 25) return false;
    for (let i = 0; i < nom.length; i++) {
        const char = nom[i].toLowerCase();
        if (!(char >= 'a' && char <= 'z' || char === ' ')) return false;
    }
    return true;
}

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
    const nom = document.getElementById("nomContact").value;
    const email = document.getElementById("emailContact").value;
    const telephone = document.getElementById("telContact").value;

    // Validation des données récupérées
    if (!verifierNom(nom)) {
        alert("Le nom n'est pas valide. Il doit contenir entre 2 et 25 caractères alphabétiques.");
        return;
    }

    if (!verifierEmail(email)) {
        alert("L'email n'est pas valide.");
        return;
    }

    if (!verifierTelephone(telephone)) {
        alert("Le numéro de téléphone n'est pas valide.");
        return;
    }

    // Ajout du contact si toutes les données sont valides 
    if (nom && email && telephone) {
        contacts.push({ nom, email, telephone });
        afficherContacts();
        console.log("Contact ajouté :", nom);
        alert("Contact ajouté : " + nom);
    } else {
        alert("Veuillez remplir tous les champs");
    }
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
        const li = document.createElement("li");
        li.textContent = `${contact.nom} - ${contact.email} - ${contact.telephone} `;

        // Création et configuration du bouton "Modifier"
        const btnModifier = document.createElement("button");
        btnModifier.textContent = "Modifier";
        btnModifier.onclick = function () { modifierContact(index); };

        // Ajout du bouton "Modifier" et de l'élément 'li' à la liste HTML
        li.appendChild(btnModifier);
        liste.appendChild(li);
    });

    // Calculer certaines statistiques après l'affichage des contacts
    calculerStatistiques();
}

/**
 * Cette fonction est utilisée pour rechercher un contact par nom.
 * Elle récupère d'abord la valeur de recherche d'un élément HTML identifié par "rechercheContact".
 * Puis elle effectue une recherche insensible à la casse sur tous les noms de contact.
 * Pour ce faire, elle utilise la fonction 'filter' pour sélectionner uniquement les contacts dont le nom contient la chaîne de recherche.
 * Enfin, elle appelle une autre fonction 'afficherContactsFiltres' avec les résultats de la recherche pour mettre à jour la liste des contacts affichés.
 */
function rechercherContact() {
    const recherche = document.getElementById("rechercheContact").value.toLowerCase();
    const resultats = contacts.filter(contact => contact.nom.toLowerCase().includes(recherche));
    afficherContactsFiltres(resultats);
}

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
function afficherContactsFiltres(resultats) {
    const liste = document.getElementById("listeContacts");
    liste.innerHTML = '';
    resultats.forEach(contact => {
        const li = document.createElement("li");
        li.textContent = `${contact.nom} - ${contact.email} - ${contact.telephone}`;
        liste.appendChild(li);
    });
}

/**
 * Cette fonction est utilisée pour calculer et afficher certaines statistiques de contact.
 * Elle calcule d'abord le nombre de contacts en utilisant la propriété 'length' de notre tableau 'contacts'.
 * Ensuite, elle utilise la méthode 'map' pour extraire l'initiale de chaque nom de contact dans un nouveau tableau.
 * Après, elle convertit ce tableau d'initiales en une seule chaîne de caractères en utilisant la méthode 'join'.
 * Finalement, elle met à jour le contenu textuel d'un élément HTML identifié par 'statistiques' pour afficher ces valeurs calculées.
 * Ainsi, après l'exécution de cette fonction, l'élément 'statistiques' affiche le nombre total de contacts et leurs initiales.
 */
function calculerStatistiques() {
    const nbContacts = contacts.length;
    const initiales = contacts.map(contact => contact.nom[0]).join('');
    document.getElementById("statistiques").textContent = `Nombre de contacts : ${nbContacts}, Initiales : ${initiales}`;
}

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
function modifierContact(index) {
    const nom = prompt("Nouveau nom du contact :", contacts[index].nom);
    const email = prompt("Nouvel email du contact :", contacts[index].email);
    const telephone = prompt("Nouveau téléphone du contact :", contacts[index].telephone);
    if (nom && email && telephone) {
        contacts.splice(index, 1, { nom, email, telephone });
        afficherContacts();
        console.log("Contact modifié :", nom);
        alert("Contact modifié : " + nom);
    }
}

/**
 * Cette fonction est utilisée pour trier le tableau 'contacts' par nom en ordre alphabétique.
 * Elle utilise la méthode 'sort' des tableaux JavaScript, avec une fonction de tri personnalisée.
 * La fonction de tri utilise la méthode 'localeCompare' pour comparer les noms de deux contacts (a et b).
 * 'localeCompare' est une méthode des chaînes de caractères qui compare deux chaînes dans l'ordre alphabétique de la langue locale, ce qui est idéal pour trier des noms.
 * Après le tri, la fonction appelle 'afficherContacts' pour mettre à jour l'affichage.
 * Ainsi, après l'exécution de cette fonction, la liste des contacts est affichée dans l'ordre alphabétique.
 */
function trierContacts() {
    contacts.sort((a, b) => a.nom.localeCompare(b.nom));
    afficherContacts();
}

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
function calculerLongueurMoyenneNoms() {
    if (contacts.length > 0) {
        const sommeLongueurs = contacts.map(contact => contact.nom.length).reduce((acc, length) => acc + length, 0);
        const moyenne = sommeLongueurs / contacts.length;
        alert("Longueur moyenne des noms : " + moyenne.toFixed(2));
    }
}

// Initialiser l'affichage des contacts au chargement de la page
document.addEventListener("DOMContentLoaded", afficherContacts);