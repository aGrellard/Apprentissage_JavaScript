import json

objet = {
  "questions": [
    {
      "id": 1,
      "name": "adn",
      "methode": "split, reduce, map, join",
      "description": "a partir de la séquence A,C,G,T\n//compter les occurence de la string reçu en entrée",
      "codeSnippet": "",
      "questionSnippet": "function countNucleotides_2(s) {\n    return undefined;\n}\nconsole.log(countNucleotides_2(\"AACT\"))",
      "variablesInvolved": [],
      "expectedOutput": ["\"2 1 0 1\""],
      "solution": "https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/adn.md"
    },
    {
      "id": 2,
      "name": "anagramme",
      "methode": "split sort join",
      "description": "déterminer si deux chaînes de caractères sont des anagrammes l'une de l'autre, c'est-à-dire si elles contiennent les mêmes lettres dans un ordre différent.",
      "codeSnippet": "",
      "questionSnippet": "function estAnagramme(str1, str2) {\n    return undefined;\n}\nconsole.log(estAnagramme(\"listen\", \"silent\"));\nconsole.log(estAnagramme(\"hello\", \"bello\"));",
      "variablesInvolved": [],
      "expectedOutput": ["true", "false"],
      "solution": "https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/anagramme.md"
    },
    {
      "id": 3,
      "name": "comptage_de_mots",
      "methode": "trim split(regex) filter",
      "description": "compter le nombre de mots dans une chaîne de caractères",
      "codeSnippet": "",
      "questionSnippet": "function countWords(str) {\n    return undefined;\n}\nconsole.log(countWords(\"Hello world\"));\nconsole.log(countWords(\"   Bonjour le monde   \"));\nconsole.log(countWords(\"\"));\nconsole.log(countWords(\"Ceci est    un test.\"));",
      "variablesInvolved": [],
      "expectedOutput": [2, 3, 0, 4],
      "solution": "https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/comptage_de_mots.md"
    },
    {
      "id": 4,
      "name": "comptage_sousChaines_unique",
      "methode": "Set, substring",
      "description": "compter le nombre de sous-chaînes uniques d'une longueur donnée dans une chaîne de caractères.",
      "codeSnippet": "",
      "questionSnippet": "function uniqueSubstringCount(str, max) {\n    return undefined;\n}\nconsole.log(uniqueSubstringCount(\"abcabc\", 3))\nconsole.log(uniqueSubstringCount(\"abacab\", 4))\nconsole.log(uniqueSubstringCount(\"aaaa\", 1))",
      "variablesInvolved": [],
      "expectedOutput": [
      "Set(3) { 'abc', 'bca', 'cab' }", 
      "Set(2) { 'ab', 'ba', 'ac', 'ca' }", 
      "Set(1) { 'aa' }"],
      "solution": "https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/comptage_sousChaines_unique.md"
    },
    {
      "id": 5,
      "name": "compter_voyelles",
      "methode": "String.includes",
      "description": "compter le nombre de voyelles (a, e, i, o, u) dans une chaîne de caractères donnée.",
      "codeSnippet": "",
      "questionSnippet": "function countVowels(str) {\n    return undefined\n}\nconsole.log(countVowels(\"hello\"))\nconsole.log(countVowels(\"world\"))\nconsole.log(countVowels(\"AEIOU\"))",
      "variablesInvolved": [],
      "expectedOutput": [2, 1, 5],
      "solution": "https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/compter_voyelles.md"
    },
    {
      "id": 6,
      "name": "inversion_chaine",
      "methode": "split, reverse, join",
      "description": "inverser une chaîne de caractère",
      "codeSnippet": "",
      "questionSnippet": "function reverseString(str) {\n    return undefined\n}\nconsole.log(reverseString(\"hello\"))\nconsole.log(reverseString(\"world\"))",
      "variablesInvolved": [],
      "expectedOutput": ["\"olleh\"", "\"dlrow\""],
      "solution": "https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/inversion_chaine.md"
    },
    {
      "id": 7,
      "name": "maximum_tableau",
      "methode": "Math.max",
      "description": "Écrivez une fonction en JavaScript qui prend un tableau d'entiers en entrée et retourne l'élément le plus grand de ce tableau.",
      "codeSnippet": "",
      "questionSnippet": "let array = [10, 4, 2, 15, 6];\nfunction findMax_1(array) {\n    return undefined\n}\nconsole.log(findMax_1(array))\nfunction findMax_2(array) {\n    return undefined\n}\nconsole.log(findMax_2(array))",
      "variablesInvolved": [],
      "expectedOutput": [15, 15],
      "solution": "https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/maximum_tableau.md"
    },
    {
      "id": 8,
      "name": "parentheses_valides",
      "methode": "Array.push Array.pop Array.length",
      "description": "déterminer si une chaîne de caractères contenant uniquement des parenthèses `(` et `)` est valide.",
      "codeSnippet": "",
      "questionSnippet": "function isValidParentheses(str) {\n    return undefined\n}\nconsole.log(isValidParentheses(\"()\"));\nconsole.log(isValidParentheses(\")(\"));\nconsole.log(isValidParentheses(\"(()())\"));\nconsole.log(isValidParentheses(\"(())()\"));\nconsole.log(isValidParentheses(\"(()\"));\nconsole.log(isValidParentheses(\"())\"));",
      "variablesInvolved": [],
      "expectedOutput": ["true", "false", "true", "true", "false", "false"],
      "solution": "https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/parentheses_valides.md"
    },
    {
      "id": 9,
      "name": "verification_palyndrome",
      "methode": "replace(regex) toLowerCase, split, reverse, join",
      "description": "déterminer si une chaîne de caractères donnée est un palindrome ou non.",
      "codeSnippet": "",
      "questionSnippet": "function isPalindrome(s) {\n    return undefined;\n}\nconsole.log(isPalindrome(\"radar\"));\nconsole.log(isPalindrome(\"hello\"));\nconsole.log(isPalindrome(\"A man, a plan, a canal: Panama\"));",
      "variablesInvolved": [],
      "expectedOutput": ["true", "false", "false"],
      "solution": "https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/verification_palyndrome.md"
    },
    {
      "id": 10,
      "name": "regroupement",
      "methode": "Object.entries, reduce",
      "description": "filtrer l'objet dont les valeurs sont > 10 et retourner un tableau avec les Propriétés filtrer de l'objet",
      "codeSnippet": "",
      "questionSnippet": "let objet = {\n    \"voiture\": 12,\n    \"camion\": 5,\n    \"moto\": 4,\n    \"velo\": 22,\n    \"trotinette\":11\n}\nresult = undefined;\nconsole.log(JSON.stringify(result, 2))",
      "variablesInvolved": [],
      "expectedOutput": ["[{\"voiture\":12},{\"velo\":22},{\"trotinette\":11}]"],
      "solution": "https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/"
    },
    {
      "id": 11,
      "methode": "filter map ... reduce",
      "description": "Calculer le salaire total de ces employés du département \"Technologie\" après une augmentation de 10%.",
      "codeSnippet": "",
      "questionSnippet": "const employes = [\n    { nom: \"Alice\", departement: \"Technologie\", salaire: 1000 },\n    { nom: \"Bob\", departement: \"RH\", salaire: 1200 },\n    { nom: \"Charlie\", departement: \"Technologie\", salaire: 1100 },\n    { nom: \"David\", departement: \"Marketing\", salaire: 1000 }\n];\nfunction salaireTotalTechnologie(employes) {\n    return undefined;\n}\nconsole.log(salaireTotalTechnologie(employes));",
      "variablesInvolved": [],
      "expectedOutput": ["2310"],
      "solution": "https://github.com/aGrellard/Apprentissage_JavaScript/blob/main/_tp/debutant/transformation_tableau.md"
    }
  ]
}


# Préparation du contenu du fichier JS
exercises_content = ""
for question in objet["questions"]:
    exercises_content += f"// ID: {question['id']}\n"
    exercises_content += f"// Méthode: {question['methode']}\n"
    exercises_content += f"// Description: {question['description']}\n"
    for var in question["variablesInvolved"]:
        exercises_content += f"variable = {var['value']}\n"
    exercises_content += f"// Expected Output:\n"
    for var in question["expectedOutput"]:
        exercises_content += f"// {var}\n"
    exercises_content += f"{question['questionSnippet']}\n"
    exercises_content += "\n"

file_path = "./exercises.js"
with open(file_path, "w", encoding="utf-8") as file:
    file.write(exercises_content)

file_path