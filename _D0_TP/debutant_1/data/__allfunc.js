function estAnagramme(str1, str2) {
    // Vérifier si les chaînes ont la même longueur
    if (str1.length !== str2.length) {
        return false;
    }

    // Trier les lettres de chaque chaîne
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Comparer les chaînes triées
    return sortedStr1 === sortedStr2;
}

function countWords(str) {
    // Supprimer les espaces en début et fin de chaîne, puis diviser la chaîne en mots
    const words = str.trim().split(/\s+/);
    
    // Retourner le nombre de mots, en filtrant les éventuelles chaînes vides
    return words.filter(word => word.length > 0).length;
}

function uniqueSubstringCount(s, k) {
    let uniqueSubstrings = new Set();
    
    // Parcourir la chaîne et extraire les sous-chaînes de longueur k
    for (let i = 0; i <= s.length - k; i++) {
        const substring = s.substring(i, i + k);
        uniqueSubstrings.add(substring);
    }
    
    // Le nombre d'éléments dans le Set représente le nombre de sous-chaînes uniques
    return uniqueSubstrings.size;
}

function countVowels(s) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    
    for (let char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

function reverseString(s) {
    return s.split('').reverse().join('');
}

function getNextDay(year, month, day) {
    // Créer une instance de Date avec la date donnée
    // Note : Les mois en JavaScript sont indexés à partir de 0, donc janvier = 0, février = 1, etc.
    const date = new Date(year, month - 1, day);
    
    // Ajouter un jour
    date.setDate(date.getDate() + 1);
    
    // Récupérer l'année, le mois, et le jour après l'ajout
    const nextYear = date.getFullYear();
    const nextMonth = date.getMonth() + 1; // Ajouter 1 pour compenser l'indexation à partir de 0
    const nextDay = date.getDate();
    
    // Formater la date en "AAAA-MM-JJ"
    return `${nextYear}-${String(nextMonth).padStart(2, '0')}-${String(nextDay).padStart(2, '0')}`;
}

function regrouperArticlesParCategorie(articles) {
    return articles.reduce((acc, article) => {
        // Si la catégorie n'existe pas déjà, l'initialiser avec un tableau vide
        if (!acc[article.categorie]) {
            acc[article.categorie] = [];
        }
        // Ajouter le titre de l'article au tableau correspondant à sa catégorie
        acc[article.categorie].push(article.titre);
        return acc;
    }, {});
}

function rotateArray(arr, k) {
    // Pour éviter des rotations inutiles, si k est plus grand que la longueur du tableau
    k = k % arr.length;

    // Extraire les éléments à déplacer à l'avant du tableau
    const elementsToMove = arr.splice(-k);
    
    // Ajouter ces éléments au début du tableau
    return elementsToMove.concat(arr);
}

function sumOfDigits(num) {
    // Convertir le nombre en chaîne de caractères
    const str = num.toString();
    let sum = 0;
    
    // Parcourir chaque caractère de la chaîne
    for (let char of str) {
        // Convertir le caractère en nombre et l'ajouter à la somme
        sum += parseInt(char, 10); // Le second paramètre indique la base (10 pour décimal)
    }
    
    return sum;
}

function sumEvenNumbers(nums) {
    let sum = 0;
    
    for (let num of nums) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    
    return sum;
}

function removeDuplicates(nums) {
    // Utiliser Set pour éliminer les doublons, puis convertir le Set en tableau
    return [...new Set(nums)];
}

function isPalindrome(s) {
    // Nettoyer la chaîne : retirer les caractères non alphabétiques et passer en minuscules
    const cleanString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Vérifier si la chaîne nettoyée est un palindrome
    const reversedString = cleanString.split('').reverse().join('');
    
    return cleanString === reversedString;
}
