# Titre: Comptage des Nucléotides dans une Séquence d'ADN

## Objectif:
Développer une fonction JavaScript qui compte le nombre de fois que chaque nucléotide (A, C, G, T) apparaît dans une séquence d'ADN donnée.

## Description:
Les séquences d'ADN sont composées de quatre types de nucléotides: Adénine (A), Cytosine (C), Guanine (G), et Thymine (T). L'objectif de ce TP est de créer un script JavaScript capable de compter le nombre de chaque nucléotide dans une séquence d'ADN donnée.

## Entrée:
- Une chaîne de caractères `s`, représentant une séquence d'ADN, composée uniquement des lettres 'A', 'C', 'G', 'T'.

## Sortie:
- Un string contenant le nombre de 'A', 'C', 'G', 'T' présents dans la séquence `s`, chacun séparé par un espace.

## Contraintes:
- \(0 < \text{len}(s) < 1000\)

## Exemple:
- Entrée: `AACT`
- Sortie: `2 1 0 1`

## Instructions:

1. **Déclaration de la Fonction**:
   - Définissez une fonction `countNucleotides` qui prend une chaîne `s` comme paramètre.

2. **Initialisation des Compteurs**:
   - Initialisez quatre variables pour compter les occurrences de chaque nucléotide (A, C, G, T).

3. **Parcourir la Séquence**:
   - Utilisez une boucle pour parcourir chaque caractère de la séquence.
   - Incrémentez le compteur correspondant au nucléotide rencontré.

4. **Affichage des Résultats**:
   - À la fin de la boucle, affichez le nombre de 'A', 'C', 'G', 'T' séparés par un espace.

## solutions

<details>

<summary>Solution 1</summary>


```javascript

/**
 * Cette fonction compte le nombre de chaque nucléotide dans une séquence d'ADN
 * @param {string} s - une chaîne représentant une séquence d'ADN, composée des caractères 'A', 'C', 'G' et 'T'.
 * 
 * Il existe quatre nucléotides possibles dans une séquence d'ADN : Adénine (A), Cytosine (C), Guanine (G) et Thymine (T).
 * Cette fonction parcourt la chaîne de caractères, augmentant le compteur correspondant à chaque nucléotide rencontré. 
 *
 * @returns {void} Cette fonction ne renvoie rien. Au lieu de cela, elle enregistre les comptes en console.
 */
function countNucleotides(s) {
    let countA = 0, countC = 0, countG = 0, countT = 0; // Initialise les comptes pour chaque nucléotide à 0
    
    // Parcourt chaque caractère dans la chaîne
    for (let i = 0; i < s.length; i++) {
        // Augmente le compte du nucléotide correspondant rencontré dans la chaîne
        switch (s[i]) { 
            case 'A': countA++; break;
            case 'C': countC++; break;
            case 'G': countG++; break;
            case 'T': countT++; break;
        }
    }
    
    // Enregistre les comptes en console dans l'ordre : A, C, G, T
    console.log(`${countA} ${countC} ${countG} ${countT}`);
}

```

</details>

<details>

<summary>Solution 2</summary>


```javascript

/**
 * Cette fonction compte le nombre d'occurrences de chaque nucléotide (A, C, G, T) dans une séquence donnée.
 *
 * @param {string} s - La séquence de nucléotides à analyser.
 * @returns {string} Une chaîne de caractères représentant le nombre de chaque nucléotide dans l'ordre (A, C, G, T).
 *
 * @example
 *
 * // Renvoie "2 1 1 1"
 * countNucleotides_2('AACGT')
 */
function countNucleotides_2(s) {
    // On divise la chaîne en tableau de caractères et on l'accumule dans un objet avec le compte 
    // initial de chaque nucléotide mis à zéro
    let result = s.split('').reduce((acc, val) => {
        // Pour chaque caractère, on ajoute 1 à son compte existant dans l'accumulateur
        // Si le caractère n'est pas déjà dans l'accumulateur, on utilise 0 comme valeur par défaut
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {'A': 0, 'C': 0, 'G': 0, 'T': 0});
    
    // On formate le résultat final en une chaîne de caractères
    let resultC = ['A', 'C', 'G', 'T'].map(item => result[item]).join(" ");
    return resultC
}

```

</details>