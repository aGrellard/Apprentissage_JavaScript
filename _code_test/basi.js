
let n = 4;
for (let i = 0; i < n; i++) { // Boucle pour chaque ligne
    let line = ''; // Initialisation de la ligne
    for (let j = 0; j < n - i; j++) { // Boucle pour chaque '4' dans une ligne
        let str = n.toString()
        line += str; // Ajout d'un '4' à la ligne
    }
    console.log(line); // Affichage de la ligne
}

 n = 4;
for (let i = 0; i < n; i++) { // Boucle pour chaque ligne
    let line = ''; // Initialisation de la ligne
    for (let j = 0; j <= i; j++) { // Boucle pour ajouter '4' en fonction de la ligne actuelle
        let str = n.toString();
        line += str; // Ajout d'un '4' à la ligne
    }
    console.log(line); // Affichage de la ligne
}
