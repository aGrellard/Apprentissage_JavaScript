// ##########################################################
// FIXME Array.push Array.pop Array.length
// https://peridot-ravioli-f95.notion.site/Parenth-ses-valides-902b61fdb8de4ca1875bd0abd3a42f9b?pvs=25
// https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/parentheses_valides.md
// déterminer si une chaîne de caractères contenant uniquement des parenthèses `(` et `)` est valide.
// Une chaîne de parenthèses est considérée comme valide si chaque parenthèse ouvrante `(` a une parenthèse fermante correspondante `)` qui apparaît après elle, et vice versa.
// De plus, chaque paire de parenthèses doit être correctement imbriquée.

// Utilise une pile pour suivre les parenthèses ouvrantes
// Parcours chaque caractère de la chaîne
    // Si c'est une parenthèse ouvrante, la pousser dans la pile
    // Si c'est une parenthèse fermante, vérifier si la pile est vide
    // ou si l'élément supérieur de la pile n'est pas une parenthèse ouvrante
// Si la pile est vide, toutes les parenthèses sont correctement fermées
//
function isValidParentheses(str) {
    return undefined
}
console.log(isValidParentheses("()"));      // true
console.log(isValidParentheses(")("));      // false
console.log(isValidParentheses("(()())"));  // true
console.log(isValidParentheses("(())()"));  // true
console.log(isValidParentheses("(()"));     // false
console.log(isValidParentheses("())"));     // false

// **********************************************************