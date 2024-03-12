# Travaux Pratiques (TP) : Création d'Art ASCII en JavaScript

**Objectif** : Cet exercice vise à développer un programme en JavaScript qui prend en entrée un texte et affiche sa représentation en art ASCII. Vous apprendrez à manipuler des chaînes de caractères, à travailler avec des tableaux, et à appliquer des concepts de base de la programmation.

**Prérequis** :
- Connaissances de base en JavaScript.
- Comprendre les opérations sur les chaînes de caractères et les tableaux.

**Matériel Fourni** :
- Une chaîne de caractères représentant l'alphabet en art ASCII (A-Z et le point d'interrogation).
- Dimensions des caractères en art ASCII (largeur et hauteur).

**Consignes** :

1. **Initialisation des Variables** :
   - Définissez la largeur `L` et la hauteur `H` d'une lettre en art ASCII.
   - Créez une variable `T` contenant le texte que vous souhaitez convertir en art ASCII. Le texte doit être converti en majuscules.
   - Préparez un tableau `alphabetASCII` contenant les représentations ASCII des lettres A-Z et du point d'interrogation, chacune sur une ligne distincte.

2. **Traitement du Texte** :
   - Convertissez le texte en un tableau de caractères.
   - Pour chaque caractère du texte, trouvez sa représentation en art ASCII en utilisant son code ASCII pour calculer son index dans le tableau `alphabetASCII`.
   - Gérez les caractères non alphabétiques en les remplaçant par le point d'interrogation.

3. **Affichage de l'Art ASCII** :
   - Pour chaque ligne de hauteur `H`, extrayez et affichez la partie correspondante de chaque lettre du texte à partir du tableau `alphabetASCII`.
   - Concaténez ces extraits pour former la représentation complète en art ASCII du texte.

4. **Testez Votre Programme** :
   - Exécutez votre programme avec différents textes pour vérifier la précision de la conversion en art ASCII.
   - Assurez-vous que les caractères non alphabétiques sont correctement remplacés par le point d'interrogation.

**Critères de Réussite** :
- Le programme doit correctement afficher le texte en art ASCII dans le terminal ou la console.
- Les caractères non alphabétiques doivent être gérés comme spécifié.
- Le code doit être propre, bien commenté, et facile à comprendre.

**Livraison** :
- Soumettez votre fichier JavaScript contenant le code du programme.
- Incluez des captures d'écran ou des exemples de sortie de votre programme dans différents cas de test.

Cet exercice vous aidera à renforcer vos compétences en programmation JavaScript en travaillant sur un projet amusant et créatif. Bonne chance !


Pour réussir ce TP et créer un programme d'art ASCII en JavaScript, voici une documentation essentielle et un exemple de code de lancement avec les ressources nécessaires.

# Documentation Essentielle

1. **Manipulation de Chaînes de Caractères** :
   - **Accès aux caractères** : Utilisez `charAt(index)` ou directement `string[index]` pour accéder à un caractère spécifique dans une chaîne.
   - **Conversion en majuscules** : Appliquez la méthode `toUpperCase()` sur une chaîne pour convertir tous ses caractères en majuscules.
   - **Découpage de chaînes** : `substring(start, end)` permet d'extraire une sous-chaîne. Très utile pour isoler les parties de l'alphabet ASCII.

2. **Travail avec les Tableaux** :
   - **Parcourir un tableau** : Utilisez une boucle `for` ou `forEach` pour itérer sur chaque élément d'un tableau.
   - **Manipulation de tableaux** : Les méthodes comme `push()`, `pop()`, `shift()`, `unshift()`, et `splice()` sont utiles pour modifier des tableaux.

3. **Opérations sur les Codes ASCII** :
   - **Conversion caractère à code ASCII** : `charCodeAt(index)` renvoie le code ASCII du caractère à l'indice spécifié.
   - **Calcul d'index** : Pour un caractère `c`, l'index dans l'alphabet peut être trouvé avec `c.charCodeAt(0) - 'A'.charCodeAt(0)`.

## Code de Lancement avec Ressources

```javascript
// Dimensions des caractères en art ASCII
const L = 4; // Largeur
const H = 5; // Hauteur

// Texte à convertir en art ASCII (exemple)
let T = "Hello World!".toUpperCase();

// Représentation de l'alphabet en art ASCII + point d'interrogation pour les caractères non gérés
const alphabetASCII = [
  " #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ### ### ",
  "# # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   #   # ",
  "### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #   ## ",
  "# # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #       ",
  "# # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ###  #  "
];

// Fonction pour générer l'art ASCII
/**
 * Cette fonction génère un art ASCII d'une chaîne de texte.
 * @param {string} T - Le texte pour lequel l'art ASCII sera généré. 
 * 
 * Cette fonction parcourt chaque caractère de la chaîne de texte. 
 * Pour chaque caractère, elle détermine son index correspondant dans l'alphabet.
 * Si le caractère n'est pas une lettre majuscule de l'alphabet, l'index est réglé sur 26.
 * Ensuite, elle extrait la sous-chaîne correspondante de l'art ASCII de l'alphabet.
 * Elle répète ce processus pour chaque ligne de l'art ASCII de l'alphabet.
 * Finalement, elle affiche une ligne de l'art ASCII du texte.
 * 
 * Note : L'alphabet ASCII est supposé être une variable globale qui est un tableau de chaînes de caractères.
 * Chaque élément du tableau représente une ligne de l'art ASCII de l'alphabet.
 * Les arts ASCII pour chaque lettre sont côte à côte. 
 * La variable globale H est la hauteur de l'art ASCII. 
 * La variable globale L est la largeur de l'art ASCII pour une lettre.
 * 
 * @returns {void} Cette fonction ne renvoie pas de valeur. Au lieu de cela, elle affiche l'art ASCII en console.
 */
function generateASCIIArt(T) {

} 

// Exécution de la fonction avec le texte T
generateASCIIArt(T) 

```

### Explication du Code

- **Initialisation des variables** : La largeur `L` et la hauteur `H` de chaque caractère en art ASCII sont définies, ainsi que le texte `T` à convertir.
- **Préparation du tableau `alphabetASCII`** : Contient les représentations ASCII de A-Z et du point d'interrogation.
- **Fonction `generateASCIIArt`** : Convertit le texte `T` en art ASCII. Pour chaque caractère, elle calcule son index dans `alphabetASCII` et extrait la sous-chaîne correspondante pour chaque ligne de hauteur `H`. Les caractères non gérés sont remplacés par le point d'interrogation.

## Solution

<details>

<summary>Code</summary>

```javascript
/**
 * Cette fonction génère un art ASCII d'une chaîne de texte.
 * @param {string} T - Le texte pour lequel l'art ASCII sera généré. 
 * 
 * Cette fonction parcourt chaque caractère de la chaîne de texte. 
 * Pour chaque caractère, elle détermine son index correspondant dans l'alphabet.
 * Si le caractère n'est pas une lettre majuscule de l'alphabet, l'index est réglé sur 26.
 * Ensuite, elle extrait la sous-chaîne correspondante de l'art ASCII de l'alphabet.
 * Elle répète ce processus pour chaque ligne de l'art ASCII de l'alphabet.
 * Finalement, elle affiche une ligne de l'art ASCII du texte.
 * 
 * Note : L'alphabet ASCII est supposé être une variable globale qui est un tableau de chaînes de caractères.
 * Chaque élément du tableau représente une ligne de l'art ASCII de l'alphabet.
 * Les arts ASCII pour chaque lettre sont côte à côte. 
 * La variable globale H est la hauteur de l'art ASCII. 
 * La variable globale L est la largeur de l'art ASCII pour une lettre.
 * 
 * @returns {void} Cette fonction ne renvoie pas de valeur. Au lieu de cela, elle affiche l'art ASCII en console.
 */
function generateASCIIArt(T) {
    for (let i = 0; i < H; i++) { 
      let row = '';
      for (let char of T) { 
        let index = char.charCodeAt(0) - 'A'.charCodeAt(0);
        if (index < 0 || index > 25) index = 26; 
        let start = index * L;
        row += alphabetASCII[i].substring(start, start + L);
      }
      console.log(row);
    }
}
```

</details>