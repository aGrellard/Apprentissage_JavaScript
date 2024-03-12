import json

objet = {
  "questions": [
    {
      "id": 1,
      "name": "filter_1",
      "methode": "filter",
      "description": "Filtrer les nombres pairs dans un tableau de nombres.",
      "codeSnippet": "const filter_1 = nombres.filter(item => item % 2 === 0);",
      "variablesInvolved": [
        {
          "name": "nombres",
          "value": "[1, 2, 3, 4, 5]"
        }
      ],
      "expectedOutput": ["[2, 4]"],
      "solution": "nombres.filter(item => item % 2 === 0);"
    },
    {
      "id": 2,
      "name": "filter_2",
      "methode": "filter",
      "description": "Filtrer les doublons dans un tableau de nombres.",
      "codeSnippet": "let filter_2 = nombresGroupe.filter((item, index, array) => { return array.indexOf(item) === index });",
      "variablesInvolved": [
        {
          "name": "nombresGroupe",
          "value": "[6, 2, 2, 2, 3, 3, 3, 3]"
        }
      ],
      "expectedOutput": ["[6, 2, 3]"],
      "solution": "nombresGroupe.filter((item, index, array) => array.indexOf(item) === index);"
    },
    {
      "id": 3,
      "name": "filter_3",
      "methode": "filter",
      "description": "Filtrer un tableau d'objets par age > 25.",
      "codeSnippet": "const filter_3 = utilisateurs_1.filter(item => item.age > 25);",
      "variablesInvolved": [
        {
          "name": "utilisateurs_1",
          "value": "[{ nom: 'Alice', age: 25 }, { nom: 'Bob', age: 30 }, { nom: 'Carol', age: 22 }]"
        }
      ],
      "expectedOutput": ["[{\"nom\":\"Bob\",\"age\":30}]"],
      "solution": "utilisateurs_1.filter(item => item.age > 25);"
    },
    {
      "id": 4,
      "name": "filter_4",
      "methode": "filter et map",
      "description": "Filtrer et mapper un tableau d'objets selon la quantité <= 10.",
      "codeSnippet": "const filter_4 = aliments.filter(item => item.quantity <= 10).map(item => { return { name: item.name, qty: item.quantity } });",
      "variablesInvolved": [
        {
          "name": "aliments",
          "value": "[{name: 'apple', type: 'fruit', quantity: 10}, {name: 'carrot', type: 'vegetable', quantity: 5}, {name: 'pomme', type: 'fruit', quantity: 2}, {name: 'salade', type: 'vegetable', quantity: 12}]"
        }
      ],
      "expectedOutput": ["[{\"name\":\"apple\",\"qty\":10},{\"name\":\"carrot\",\"qty\":5},{\"name\":\"pomme\",\"qty\":2}]"],
      "solution": "aliments.filter(item => item.quantity <= 10).map(item => { return { name: item.name, qty: item.quantity } });"
    },
    {
      "id": 5,
      "name": "filter_5",
      "methode": "filter",
      "description": "Filtrer un tableau d'objets en utilisant `thisArg`.",
      "codeSnippet": "const filter_5 = aliments.filter(getApple, obj);",
      "variablesInvolved": [
        {
          "name": "aliments",
          "value": "[{name: 'apple', type: 'fruit', quantity: 10}, {name: 'carrot', type: 'vegetable', quantity: 5}, {name: 'pomme', type: 'fruit', quantity: 2}, {name: 'salade', type: 'vegetable', quantity: 12}]"
        },
        {
          "name": "obj",
          "value": "{name: 'apple'}"
        }
      ],
      "expectedOutput": ["[{\"name\":\"apple\",\"type\":\"fruit\",\"quantity\":10}]"],
      "solution": "function getApple(obj) { if (this.name === obj.name) return true; return false; }\naliments.filter(getApple, obj);"
    },
    {
      "id": 6,
      "name": "reduce_1",
      "methode": "reduce",
      "description": "Calculer la somme des éléments d'un tableau de nombres.",
      "codeSnippet": "const reduce_t1 = nombres.reduce((acc, val) => acc + val);",
      "variablesInvolved": [
        {
          "name": "nombres",
          "value": "[1, 2, 3, 4, 5]"
        }
      ],
      "expectedOutput": ["15"],
      "solution": "nombres.reduce((acc, val) => acc + val);"
    },
    {
      "id": 7,
      "name": "reduce_2",
      "methode": "reduce",
      "description": "Trouver la plus grande valeur dans un tableau de nombres (version 1).",
      "codeSnippet": "const reduce_t2 = nombres.reduce((acc, val) => { if (acc < val) acc = val; return val; });",
      "variablesInvolved": [
        {
          "name": "nombres",
          "value": "[1, 2, 3, 4, 5]"
        }
      ],
      "expectedOutput": ["5"],
      "solution": "Le code contient une erreur; il doit retourner `acc` à la place de `val` à la fin. La solution correcte est `nombres.reduce((acc, val) => acc < val ? val : acc);`"
    },
    {
      "id": 8,
      "name": "reduce_3",
      "methode": "reduce",
      "description": "Trouver la plus grande valeur dans un tableau de nombres (version 2).",
      "codeSnippet": "const reduce_t3 = nombresRnd.reduce((acc, val) => acc < val ? val : acc);",
      "variablesInvolved": [
        {
          "name": "nombresRnd",
          "value": "[3, 4, 2, 1, 5]"
        }
      ],
      "expectedOutput": ["5"],
      "solution": "nombresRnd.reduce((acc, val) => acc < val ? val : acc);"
    },
    {
      "id": 9,
      "name": "reduce_4",
      "methode": "reduce",
      "description": "Construire un objet à partir d'un tableau de paires clé-valeur.",
      "codeSnippet": "const reduce_t4 = keyValuePairs.reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});",
      "variablesInvolved": [
        {
          "name": "keyValuePairs",
          "value": "[['clé1', 'valeur1'], ['clé2', 'valeur2']]"
        }
      ],
      "expectedOutput": ["{\"clé1\":\"valeur1\",\"clé2\":\"valeur2\"}"],
      "solution": "keyValuePairs.reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});"
    },
    {
      "id": 10,
      "name": "reduce_5",
      "methode": "reduce",
      "description": "Compter les occurrences de chaque valeur dans un tableau.",
      "codeSnippet": "const reduce_t5 = nombresGroupe.reduce((acc, val) => { acc[val] = (acc[val] || 0) + 1; return acc; }, {});",
      "variablesInvolved": [
        {
          "name": "nombresGroupe",
          "value": "[6, 2, 2, 2, 3, 3, 3, 3]"
        }
      ],
      "expectedOutput": ["{\"2\":3,\"3\":4,\"6\":1}"],
      "solution": "nombresGroupe.reduce((acc, val) => { acc[val] = (acc[val] || 0) + 1; return acc; }, {});"
    },
    {
      "id": 11,
      "name": "reduce_6",
      "methode": "reduce",
      "description": "Grouper des personnes par âge en incluant les objets complets.",
      "codeSnippet": "let reduce_t6 = utilisateurs_1.reduce((acc, val) => { if (!acc[val.age]) acc[val.age] = []; acc[val.age].push(val); return acc; }, {});",
      "variablesInvolved": [
        {
          "name": "utilisateurs_1",
          "value": "[{ nom: 'Alice', age: 25 }, { nom: 'Bob', age: 30 }, { nom: 'Carol', age: 22 }, { nom: 'Jhon', age: 22 }]"
        }
      ],
      "expectedOutput": ["{\"22\":[{\"nom\":\"Carol\",\"age\":22},{\"nom\":\"jhon\",\"age\":22}],\"25\":[{\"nom\":\"Alice\",\"age\":25}],\"30\":[{\"nom\":\"Bob\",\"age\":30}]}"],
      "solution": "utilisateurs_1.reduce((acc, val) => { if (!acc[val.age]) acc[val.age] = []; acc[val.age].push(val); return acc; }, {});"
    },
    {
      "id": 12,
      "name": "reduce_7",
      "methode": "reduce",
      "description": "Grouper des personnes par âge en incluant uniquement leurs noms.",
      "codeSnippet": "reduce_t6 = utilisateurs_1.reduce((acc, val) => { if (!acc[val.age]) acc[val.age] = []; acc[val.age].push(val.nom); return acc; }, {});",
      "variablesInvolved": [
        {
          "name": "utilisateurs_1",
          "value": "[{ nom: 'Alice', age: 25 }, { nom: 'Bob', age: 30 }, { nom: 'Carol', age: 22 }, { nom: 'Jhon', age: 22 }]"
        }
      ],
      "expectedOutput": ["{\"25\":[\"Alice\",\"Jhon\"],\"30\":[\"Bob\"],\"22\":[\"Carol\"]}"],
      "solution": "utilisateurs_1.reduce((acc, val) => { if (!acc[val.age]) acc[val.age] = []; acc[val.age].push(val.nom); return acc; }, {});"
    },
    {
      "id": 13,
      "name": "map_1",
      "methode": "map",
      "description": "Créer un nouveau tableau d'objets indiquant si la valeur originale est paire ou impaire.",
      "codeSnippet": "const map_1 = nombres.map(item => { return { isNotPair: item % 2 } });",
      "variablesInvolved": [
        {
          "name": "nombres",
          "value": "[1, 2, 3, 4, 5]"
        }
      ],
      "expectedOutput": ["[{\"isNotPair\":1},{\"isNotPair\":0},{\"isNotPair\":1},{\"isNotPair\":0},{\"isNotPair\":1}]"],
      "solution": "nombres.map(item => { return { isNotPair: item % 2 } });"
    },
    {
      "id": 14,
      "name": "map_2",
      "methode": "map",
      "description": "Reformater un tableau d'objets pour créer un nouveau tableau où chaque objet a une clé issue de l'objet original et sa valeur correspondante.",
      "codeSnippet": "const map_2 = tableauCle.map((item) => { return { [item.cle]: item.valeur } });",
      "variablesInvolved": [
        {
          "name": "tableauCle",
          "value": "[{ cle: 1, valeur: 10 }, { cle: 2, valeur: 20 }, { cle: 3, valeur: 30 }]"
        }
      ],
      "expectedOutput": ["[{\"1\":10},{\"2\":20},{\"3\":30}]"],
      "solution": "tableauCle.map((item) => { return { [item.cle]: item.valeur } });"
    },
    {
      "id": 15,
      "name": "map_3",
      "methode": "map",
      "description": "Transformer un tableau d'objets en un tableau de chaînes de caractères qui décrit chaque objet.",
      "codeSnippet": "let map_3 = aliments.map(item => { return `il reste ${item.quantity}/g de ${item.name}` });",
      "variablesInvolved": [
        {
          "name": "aliments",
          "value": "[{name: 'apple', type: 'fruit', quantity: 10}, {name: 'carrot', type: 'vegetable', quantity: 5}, {name: 'pomme', type: 'fruit', quantity: 2}, {name: 'salade', type: 'vegetable', quantity: 12}]"
        }
      ],
      "expectedOutput": ["[\"il reste 10/g de apple\",\"il reste 5/g de carrot\",\"il reste 2/g de pomme\",\"il reste 12/g de salade\"]"],
      "solution": "aliments.map(item => { return `il reste ${item.quantity}/g de ${item.name}` });"
    },
    {
      "id": 16,
      "name": "map_4",
      "methode": "map",
      "description": "Ajouter une nouvelle clé à chaque objet d'un tableau d'objets.",
      "codeSnippet": "let map_4 = utilisateurs_1.map(item => { return { ...item, new: 'Hello' } });",
      "variablesInvolved": [
        {
          "name": "utilisateurs_1",
          "value": "[{ nom: 'Alice', age: 25 }, { nom: 'Bob', age: 30 }, { nom: 'Carol', age: 22 }]"
        }
      ],
      "expectedOutput": ["[{\"nom\":\"Alice\",\"age\":25,\"new\":\"Hello\"},{\"nom\":\"Bob\",\"age\":30,\"new\":\"Hello\"},{\"nom\":\"Carol\",\"age\":22,\"new\":\"Hello\"}]"],
      "solution": "utilisateurs_1.map(item => { return { ...item, new: 'Hello' } });"
    },

    {
      "id": 17,
      "name": "sort_1",
      "methode": "sort",
      "description": "Trier un tableau de nombres en ordre croissant.",
      "codeSnippet": "let sort_1 = nombresRnd_2.sort((a, b) => a - b);",
      "variablesInvolved": [
        {
          "name": "nombresRnd_2",
          "value": "[3, 1, 4, 1, 5, 9]"
        }
      ],
      "expectedOutput": ["[1, 1, 3, 4, 5, 9]"],
      "solution": "nombresRnd_2.sort((a, b) => a - b);"
    },
    {
      "id": 18,
      "name": "sort_2",
      "methode": "sort",
      "description": "Trier un tableau de chaînes de caractères.",
      "codeSnippet": "let sort_2 = fruits.sort();",
      "variablesInvolved": [
        {
          "name": "fruits",
          "value": "['Pomme', 'banane', 'orange', 'kiwi', 'mangue']"
        }
      ],
      "expectedOutput": ["[\"Pomme\",\"banane\",\"kiwi\",\"mangue\",\"orange\"]"],
      "solution": "fruits.sort();"
    },
    {
      "id": 19,
      "name": "sort_3",
      "methode": "sort",
      "description": "Trier un tableau de chaînes de caractères sans tenir compte de la casse.",
      "codeSnippet": "let sort_3 = fruits.sort((a, b) => a.localeCompare(b));",
      "variablesInvolved": [
        {
          "name": "fruits",
          "value": "['Pomme', 'banane', 'orange', 'kiwi', 'mangue']"
        }
      ],
      "expectedOutput": ["[\"banane\",\"kiwi\",\"mangue\",\"orange\",\"Pomme\"]"],
      "solution": "fruits.sort((a, b) => a.localeCompare(b));"
    },
    {
      "id": 20,
      "name": "sort_4",
      "methode": "sort",
      "description": "Trier un tableau d'objets représentant des personnes d'abord par nom, puis par âge en cas de noms identiques.",
      "codeSnippet": "let sort_4 = utilisateurs_2.sort((a, b) => a.nom.localeCompare(b.nom) === 0 ? a.age - b.age : a.nom.localeCompare(b.nom));",
      "variablesInvolved": [
        {
          "name": "utilisateurs_2",
          "value": "[{ nom: 'Alice', age: 25 }, { nom: 'Bob', age: 30 }, { nom: 'Carol', age: 22 }, { nom: 'Alice', age: 12 }]"
        }
      ],
      "expectedOutput": ["[{\"nom\":\"Alice\",\"age\":12},{\"nom\":\"Alice\",\"age\":25},{\"nom\":\"Bob\",\"age\":30},{\"nom\":\"Carol\",\"age\":22}]"],
      "solution": "utilisateurs_2.sort((a, b) => a.nom.localeCompare(b.nom) === 0 ? a.age - b.age : a.nom.localeCompare(b.nom));"
    }
  ]
}

# Préparation du contenu du fichier JS
exercises_content = ""
for question in objet["questions"]:
    exercises_content += f"// ID: {question['id']}\n"
    exercises_content += f"// Name: {question['name']}\n"
    exercises_content += f"// Méthode: {question['methode']}\n"
    exercises_content += f"// Description: {question['description']}\n"
    for var in question["variablesInvolved"]:
        exercises_content += f"variable = {var['value']}\n"
    exercises_content += f"// Expected Output: {question['expectedOutput']}\n"
    exercises_content += f"result = undefined\n"
    exercises_content += f"console.log(JSON.stringify(result))\n"
    exercises_content += "\n"

file_path = "./exercises.js"
with open(file_path, "w", encoding="utf-8") as file:
    file.write(exercises_content)

file_path