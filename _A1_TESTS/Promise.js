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