const QCM_db = {
    "QCM" : [
        {
            "category": "Les Méthodes sur les Tableaux",
            "question_number": 1,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `found` après l'exécution du code ci-dessus ?",
            "snippet": {
              "code": "const numbers = [3, 6, 9, 12, 15];\nconst found = numbers.find(element => element > 10);"
            },
            "options": {
              "A": "3",
              "B": "12",
              "C": "15",
              "D": "undefined"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "La méthode `find()` renvoie la première valeur qui satisfait la condition spécifiée. Ici, elle renvoie `12`, qui est le premier élément supérieur à `10`."
          },
          {
            "category": "Les Méthodes sur les Tableaux",
            "question_number": 2,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur finale de `result` ?",
            "snippet": {
              "code": "const array = [1, 2, 3, 4];\nconst result = array.reduce((acc, val) => acc + val, 0);"
            },
            "options": {
              "A": "10",
              "B": "9",
              "C": "undefined",
              "D": "0"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La méthode `reduce()` applique une fonction qui est un 'accumulateur' et renvoie une seule valeur. Ici, elle additionne tous les éléments, donnant `10`."
          },
          {
            "category": "Les Méthodes sur les Tableaux",
            "question_number": 3,
            "question_type": "code_analysis",
            "question_text": "Quel est le contenu du tableau `multiplied` ?",
            "snippet": {
              "code": "const items = [1, 2, 3];\nconst multiplied = items.map(item => item * 2);"
            },
            "options": {
              "A": "[2, 4, 6]",
              "B": "[1, 2, 3]",
              "C": "[3, 6, 9]",
              "D": "[0, 2, 4]"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La méthode `map()` crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant. Ici, chaque élément est multiplié par `2`."
          },
          {
            "category": "Les Méthodes sur les Tableaux",
            "question_number": 4,
            "question_type": "code_analysis",
            "question_text": "Quels éléments sont présents dans `evenNumbers` après l'exécution du code ?",
            "snippet": {
              "code": "const numbers = [1, 2, 3, 4, 5, 6];\nconst evenNumbers = numbers.filter(num => num % 2 === 0);"
            },
            "options": {
              "A": "[2, 4, 6]",
              "B": "[1, 3, 5]",
              "C": "[1, 2, 3, 4, 5, 6]",
              "D": "[]"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La méthode `filter()` crée un nouveau tableau avec tous les éléments qui passent le test implémenté par la fonction fournie. Ici, elle renvoie les nombres pairs `[2, 4, 6]`."
          },
          {
            "category": "Les Méthodes sur les Tableaux",
            "question_number": 5,
            "question_type": "code_analysis",
            "question_text": "Est-ce que `values.every(isBelowThreshold)` renvoie `true` ou `false` ?",
            "snippet": {
              "code": "const values = [1, 30, 39, 29, 10, 13];\nconst isBelowThreshold = (currentValue) => currentValue < 40;"
            },
            "options": {
              "A": "true",
              "B": "false"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La méthode `every()` teste si tous les éléments du tableau passent le test implémenté par la fonction fournie. Ici, comme tous les éléments sont inférieurs à `40`, elle renvoie `true`."
          },
          {
            "category": "Les Méthodes sur les Tableaux",
            "question_number": 6,
            "question_type": "code_analysis",
            "question_text": "Quels éléments sont présents dans le tableau `processed` après l'exécution du code ?",
            "snippet": {
              "code": "const data = [1, 2, 3, 4, 5];\nconst processed = data.filter(n => n % 2).map(n => n * 2);"
            },
            "options": {
              "A": "[2, 4, 6, 8, 10]",
              "B": "[1, 3, 5]",
              "C": "[2, 6, 10]",
              "D": "[3, 6, 9]"
            },
            "correct_answer": {
              "answer": "C"
            },
            "explanation": "La chaîne de méthodes `filter()` et `map()` appliquée ici filtre d'abord les nombres impairs (`[1, 3, 5]`), puis les multiplie par `2`, résultant en `[2, 6, 10]`."
          },
          {
            "category": "Les Méthodes sur les Tableaux",
            "question_number": 7,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `sumProduct` ?",
            "snippet": {
              "code": "const values = [1, 2, 3, 4];\nconst sumProduct = values.reduce((acc, val, i) => acc + val * i, 0);"
            },
            "options": {
              "A": "20",
              "B": "14",
              "C": "18",
              "D": "24",
              "E": "30"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "La méthode `reduce()` ici calcule la somme des produits de chaque élément par son index, donnant `0*1 + 1*2 + 2*3 + 3*4 = 20`."
          },
          {
            "category": "Les Méthodes sur les Tableaux",
            "question_number": 8,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `result` après l'exécution du code ?",
            "snippet": {
              "code": "const numbers = [1, 2, 3, 4, 5, 6];\nconst result = numbers.filter(x => x % 2 === 0).map(x => x * 2).reduce((acc, x) => acc + x, 0);"
            },
            "options": {
              "A": "12",
              "B": "24",
              "C": "20",
              "D": "15",
              "E": "18"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "Les méthodes sont chaînées pour filtrer les nombres pairs, les doubler, puis additionner les résultats. Le résultat final est `24`."
          },
          {
            "category": "Les Méthodes sur les Tableaux",
            "question_number": 9,
            "question_type": "code_analysis",
            "question_text": "Quel est l'ordre final des éléments dans `items` ?",
            "snippet": {
              "code": "const items = [10, 30, 20, 5];\nitems.sort((a, b) => a - b);"
            },
            "options": {
              "A": "[5, 10, 20, 30]",
              "B": "[30, 20, 10, 5]",
              "C": "[10, 20, 30, 5]",
              "D": "[5, 30, 20, 10]",
              "E": "[10, 30, 20, 5]"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La méthode `sort()` trie les éléments du tableau en place en utilisant une fonction de comparaison. Ici, elle trie les nombres par ordre croissant, résultant en `[5, 10, 20, 30]`."
          },
          {
            "category": "Les Méthodes sur les Tableaux",
            "question_number": 10,
            "question_type": "code_analysis",
            "question_text": "Après l'exécution, quels sont les contenus de `array` et `removed` ?",
            "snippet": {
              "code": "const array = [1, 2, 3, 4, 5];\nconst removed = array.splice(2, 1, 6, 7);"
            },
            "options": {
              "A": "array: [1, 2, 6, 7, 4, 5], removed: [3]",
              "B": "array: [1, 2, 6, 7, 5], removed: [3, 4]",
              "C": "array: [1, 2, 3, 6, 7, 5], removed: []",
              "D": "array: [1, 2, 6, 7], removed: [3, 4, 5]"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La méthode `splice()` modifie le contenu d'un tableau en retirant ou en ajoutant des éléments. Ici, elle retire `1` élément à l'index `2` et ajoute `6` et `7` à cette position, résultant en `array: [1, 2, 6, 7, 4, 5]` et `removed: [3]`."
          },
          {
            "category": "Les Variables",
            "question_number": 1,
            "question_type": "code_analysis",
            "question_text": "Après l'exécution, quelles sont les valeurs de `x` et `y` ?",
            "snippet": {
              "code": "let x = 10;\nconst y = x;\nx = 20;"
            },
            "options": {
              "A": "x: 20, y: 10",
              "B": "x: 20, y: 20",
              "C": "x: 10, y: 10",
              "D": "x: 10, y: 20"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La variable `x` est modifiée après la copie de sa valeur initiale dans `y`. Les modifications de `x` n'affectent pas `y`."
          },
          {
            "category": "Les Variables",
            "question_number": 2,
            "question_type": "code_analysis",
            "question_text": "La variable `x` est-elle accessible en dehors du bloc `if` ?",
            "snippet": {
              "code": "if (true) {\n  var x = 5;\n}"
            },
            "options": {
              "A": "Oui",
              "B": "Non"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "Les variables déclarées avec `var` ont une portée de fonction ou globale, et non de bloc. `x` est donc accessible en dehors du bloc `if`."
          },
          {
            "category": "Les Variables",
            "question_number": 3,
            "question_type": "text_simple",
            "question_text": "Quels sont les types primitifs en JavaScript ?",
            "options": {
              "A": "`String`, `Number`, `Boolean`",
              "B": "`Object`, `Array`, `Function`",
              "C": "`Undefined`, `Null`, `Symbol`",
              "D": "`BigInt`, `RegExp`, `Date`",
              "E": "Toutes les options ci-dessus"
            },
            "correct_answer": {
              "answer": ["A", "C", "D"]
            },
            "explanation": "Les types primitifs en JavaScript incluent `String`, `Number`, `Boolean`, `Undefined`, `Null`, `Symbol`, et `BigInt`. Les autres options sont des types d'objets ou des structures de données."
          },
          {
            "category": "Les Variables",
            "question_number": 4,
            "question_type": "code_analysis",
            "question_text": "Est-il possible de modifier `obj.a` après la déclaration de `obj` ?",
            "snippet": {
              "code": "const obj = { a: 1 };\nobj.a = 2;"
            },
            "options": {
              "A": "Oui",
              "B": "Non"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "Bien que `obj` soit déclaré comme une constante, ses propriétés peuvent être modifiées. La mutabilité concerne les propriétés de l'objet, pas la liaison de la variable elle-même."
          },
          {
            "category": "Les Variables",
            "question_number": 5,
            "question_type": "text_simple",
            "question_text": "Lequel de ces énoncés est vrai concernant le 'hoisting' en JavaScript ?",
            "options": {
              "A": "Les déclarations de variables et de fonctions sont déplacées en haut de leur portée avant l'exécution du code.",
              "B": "Seules les déclarations de variables avec `var` sont hoistées.",
              "C": "Les initialisations de variables ne sont pas hoistées.",
              "D": "Le hoisting s'applique également aux variables déclarées avec `let` et `const`.",
              "E": "Toutes les options ci-dessus sont vraies."
            },
            "correct_answer": {
              "answer": ["A", "C", "D"]
            },
            "explanation": "Le 'hoisting' en JavaScript déplace les déclarations (mais pas les initialisations) en haut de leur portée. Cela s'applique aux déclarations avec `var`, `let`, et `const`, mais le comportement est différent pour `let` et `const`."
          },
          {
            "category": "Les Variables",
            "question_number": 6,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `x` après l'exécution du bloc de code ?",
            "snippet": {
              "code": "let x = 1;\n{\n  let x = 2;\n}"
            },
            "options": {
              "A": "1",
              "B": "2",
              "C": "undefined",
              "D": "Erreur"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La variable `x` déclarée à l'intérieur du bloc avec `let` a une portée de bloc. Elle n'affecte pas la valeur de `x` en dehors du bloc."
          },
          {
            "category": "Les Variables",
            "question_number": 7,
            "question_type": "code_analysis",
            "question_text": "Quel sera le résultat de l'exécution de ce code ?",
            "snippet": {
              "code": "console.log(a);\nlet a = 3;"
            },
            "options": {
              "A": "undefined",
              "B": "3",
              "C": "Une erreur de référence",
              "D": "0"
            },
            "correct_answer": {
              "answer": "C"
            },
            "explanation": "L'accès à une variable `let` avant son initialisation résulte en une erreur de référence due à la 'Temporal Dead Zone' (TDZ)."
          },
          {
            "category": "Les Variables",
            "question_number": 8,
            "question_type": "text_simple",
            "question_text": "Lequel de ces énoncés est vrai pour `let`, `const` et `var` ?",
            "options": {
              "A": "`let` et `const` ont une portée de bloc, tandis que `var` a une portée de fonction.",
              "B": "`const` permet de réaffecter la variable, mais pas `let` ou `var`.",
              "C": "`var` et `let` sont hoistées, mais pas `const`.",
              "D": "`let`, `const` et `var` permettent toutes la réaffectation."
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "`let` et `const` ont une portée de bloc, contrairement à `var` qui a une portée de fonction. Seules `let` et `var` permettent la réaffectation."
          },
          {
            "category": "Les Variables",
            "question_number": 9,
            "question_type": "code_analysis",
            "question_text": "Que se passe-t-il lors de l'exécution de ce code ?",
            "snippet": {
              "code": "const obj = { a: 1 };\nobj = { b: 2 };"
            },
            "options": {
              "A": "obj est maintenant `{ b: 2 }`",
              "B": "Une erreur de type",
              "C": "obj reste `{ a: 1 }`",
              "D": "obj est maintenant `{ a: 1, b: 2 }`"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "Lorsqu'une variable est déclarée avec `const`, sa référence ne peut pas être changée. Tenter de réaffecter `obj` génère une erreur de type."
          },
          {
            "category": "Les Variables",
            "question_number": 10,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `x` dans le scope global après l'appel de `test()` ?",
            "snippet": {
              "code": "var x = 1;\nfunction test() {\n  var x = 2;\n}\ntest();"
            },
            "options": {
              "A": "1",
              "B": "2",
              "C": "undefined",
              "D": "null"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La variable `x` déclarée à l'intérieur de la fonction `test` a une portée locale. Elle n'affecte pas la valeur de `x` dans le scope global."
          },
          {
            "category": "La Programmation Orientée Objet",
            "question_number": 1,
            "question_type": "code_analysis",
            "question_text": "Qu'arrive-t-il lorsqu'on crée une instance de `Animal` et appelle sa méthode `speak` ?",
            "snippet": {
              "code": "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    return `${this.name} makes a noise.`;\n  }\n}"
            },
            "options": {
              "A": "Il retourne le nom de l'animal et le bruit qu'il fait.",
              "B": "Il génère une erreur.",
              "C": "Il retourne uniquement le nom de l'animal.",
              "D": "Il ne se passe rien."
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "Lorsqu'une instance de la classe `Animal` est créée et que sa méthode `speak` est appelée, elle retourne une chaîne de caractères incluant le nom de l'animal et une phrase indiquant qu'il fait du bruit."
          },
          {
            "category": "La Programmation Orientée Objet",
            "question_number": 2,
            "question_type": "code_analysis",
            "question_text": "Que retourne `pet.speak()` ?",
            "snippet": {
              "code": "class Animal {\n  speak() {\n    return 'Makes a noise';\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    return 'Barks';\n  }\n}\n\nconst pet = new Dog();"
            },
            "options": {
              "A": "'Makes a noise'",
              "B": "'Barks'",
              "C": "undefined",
              "D": "Une erreur"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "La classe `Dog` étend la classe `Animal` et redéfinit la méthode `speak`. Lorsque `speak` est appelée sur une instance de `Dog`, elle retourne 'Barks'."
          },
          {
            "category": "La Programmation Orientée Objet",
            "question_number": 3,
            "question_type": "code_analysis",
            "question_text": "Que se passe-t-il si on tente d'accéder directement à la propriété `#name` d'une instance de `Person` ?",
            "snippet": {
              "code": "class Person {\n  #name;\n\n  constructor(name) {\n    this.#name = name;\n  }\n\n  getName() {\n    return this.#name;\n  }\n}"
            },
            "options": {
              "A": "On obtient la valeur de la propriété `#name`.",
              "B": "Rien ne se passe.",
              "C": "Une erreur est générée.",
              "D": "On obtient `undefined`."
            },
            "correct_answer": {
              "answer": "C"
            },
            "explanation": "En JavaScript, les propriétés précédées de `#` sont privées. L'accès direct à ces propriétés en dehors de la classe génère une erreur."
          },
          {
            "category": "La Programmation Orientée Objet",
            "question_number": 4,
            "question_type": "code_analysis",
            "question_text": "Que retourne `myShape.draw()` ?",
            "snippet": {
              "code": "class Shape {\n  draw() {\n    return 'Drawing a shape';\n  }\n}\n\nclass Circle extends Shape {\n  draw() {\n    return 'Drawing a circle';\n  }\n}\n\nconst myShape = new Circle();"
            },
            "options": {
              "A": "'Drawing a shape'",
              "B": "'Drawing a circle'",
              "C": "undefined",
              "D": "Une erreur"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "La méthode `draw` est surclassée dans la classe `Circle`. Lorsqu'elle est appelée sur une instance de `Circle`, la version surclassée de la méthode est exécutée."
          },
          {
            "category": "La Programmation Orientée Objet",
            "question_number": 5,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `result` ?",
            "snippet": {
              "code": "class Calculator {\n  static sum(a, b) {\n    return a + b;\n  }\n}\n\nconst result = Calculator.sum(5, 10);"
            },
            "options": {
              "A": "15",
              "B": "undefined",
              "C": "NaN",
              "D": "Une erreur"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La méthode `sum` est déclarée comme `static` dans la classe `Calculator`. Elle peut donc être appelée directement sur la classe, sans avoir besoin de créer une instance."
          },
          {
            "category": "La Programmation Orientée Objet",
            "question_number": 6,
            "question_type": "code_analysis",
            "question_text": "Après l'exécution, quelle est la valeur de `Rectangle.defaultColor` et `rect1.defaultColor` ?",
            "snippet": {
              "code": "class Rectangle {\n  static defaultColor = 'Blue';\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n  }\n}\n\nconst rect1 = new Rectangle(10, 20);\nconst rect2 = new Rectangle(15, 25);"
            },
            "options": {
              "A": "`Rectangle.defaultColor: 'Blue'`, `rect1.defaultColor: 'Blue'`",
              "B": "`Rectangle.defaultColor: undefined`, `rect1.defaultColor: 'Blue'`",
              "C": "`Rectangle.defaultColor: 'Blue'`, `rect1.defaultColor: undefined`",
              "D": "`Rectangle.defaultColor: undefined`, `rect1.defaultColor: undefined`"
            },
            "correct_answer": {
              "answer": "C"
            },
            "explanation": "`defaultColor` est une propriété statique de la classe `Rectangle` et n'est pas accessible via les instances de cette classe. Ainsi, `Rectangle.defaultColor` est 'Blue', mais `rect1.defaultColor` est `undefined`."
          },
          {
            "category": "La Programmation Orientée Objet",
            "question_number": 7,
            "question_type": "code_analysis",
            "question_text": "Après ces opérations, quelles sont les valeurs de `person.firstName` et `person.lastName` ?",
            "snippet": {
              "code": "class Person {\n  constructor(firstName, lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n\n  get fullName() {\n    return `${this.firstName} ${this.lastName}`;\n  }\n\n  set fullName(name) {\n    [this.firstName, this.lastName] = name.split(' ');\n  }\n}\n\nconst person = new Person('John', 'Doe');\nperson.fullName = 'Jane Smith';"
            },
            "options": {
              "A": "`person.firstName: 'John'`, `person.lastName: 'Doe'`",
              "B": "`person.firstName: 'Jane'`, `person.lastName: 'Smith'`",
              "C": "`person.firstName: 'Jane Smith'`, `person.lastName: undefined`",
              "D": "`person.firstName: undefined`, `person.lastName: 'Jane Smith'`"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "L'utilisation du setter `fullName` permet de modifier `firstName` et `lastName`. Après l'assignation `person.fullName = 'Jane Smith'`, `firstName` devient 'Jane' et `lastName` devient 'Smith'."
          },
          {
            "category": "Les Boucles",
            "question_number": 1,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `sum` après l'exécution de la boucle ?",
            "snippet": {
              "code": "let sum = 0;\nfor (let i = 1; i <= 5; i++) {\n  sum += i;\n}"
            },
            "options": {
              "A": "10",
              "B": "15",
              "C": "5",
              "D": "20"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "La boucle `for` itère de 1 à 5 inclusivement, additionnant chaque nombre à `sum`. La valeur finale de `sum` est donc 15."
          },
          {
            "category": "Les Boucles",
            "question_number": 2,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur finale de `num` ?",
            "snippet": {
              "code": "let num = 0;\nwhile (num < 3) {\n  num++;\n}"
            },
            "options": {
              "A": "2",
              "B": "3",
              "C": "4",
              "D": "1"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "La boucle `while` continue jusqu'à ce que `num` atteigne 3. À la fin de la boucle, `num` est incrémenté à 3, puis le test `num < 3` échoue."
          },
          {
            "category": "Les Boucles",
            "question_number": 3,
            "question_type": "code_analysis",
            "question_text": "Quelle est la chaîne finale de `result` après l'exécution de la boucle ?",
            "snippet": {
              "code": "let result = '';\nlet i = 0;\ndo {\n  i += 1;\n  result += i + ' ';\n} while (i < 5);"
            },
            "options": {
              "A": "\"1 2 3 4 5\"",
              "B": "\"1 2 3 4\"",
              "C": "\"1 2 3 4 5 \"",
              "D": "\"0 1 2 3 4\""
            },
            "correct_answer": {
              "answer": "C"
            },
            "explanation": "La boucle `do-while` exécute son corps au moins une fois avant de vérifier la condition. Ici, elle génère la chaîne '1 2 3 4 5 ' avant que la condition `i < 5` ne devienne fausse."
          },
          {
            "category": "Les Boucles",
            "question_number": 4,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `output` après l'exécution de la boucle ?",
            "snippet": {
              "code": "let output = '';\nfor (let i = 0; i < 10; i++) {\n  if (i % 2 === 0) {\n    continue;\n  }\n  output += i + ' ';\n}"
            },
            "options": {
              "A": "\"1 3 5 7 9\"",
              "B": "\"0 2 4 6 8\"",
              "C": "\"1 3 5 7 9 \"",
              "D": "\"2 4 6 8 \""
            },
            "correct_answer": {
              "answer": "C"
            },
            "explanation": "Le mot-clé `continue` saute l'itération courante si la condition `i % 2 === 0` est vraie. Ainsi, seuls les nombres impairs sont ajoutés à `output`, résultant en '1 3 5 7 9 '."
          },
          {
            "category": "Les Boucles",
            "question_number": 5,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `result` à la fin des boucles imbriquées ?",
            "snippet": {
              "code": "let result = '';\nfor (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 2; j++) {\n    result += `[${i},${j}] `;\n  }\n}"
            },
            "options": {
              "A": "\"[0,0] [0,1] [1,0] [1,1] [2,0] [2,1]\"",
              "B": "\"[0,1] [1,1] [2,1]\"",
              "C": "\"[0,0] [0,1] [1,0] [1,1] [2,0]\"",
              "D": "\"[0,0] [1,0] [2,0] [0,1] [1,1] [2,1]\""
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "Les boucles imbriquées génèrent une séquence de paires de coordonnées. La boucle intérieure s'exécute complètement pour chaque valeur de la boucle extérieure, formant toutes les paires possibles de `[i,j]`."
          },
          {
            "category": "Les Boucles",
            "question_number": 6,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur finale de `count` ?",
            "snippet": {
              "code": "let count = 0;\nfor (let i = 0; i < 10; i++) {\n  if (i === 5) {\n    break;\n  }\n  count++;\n}"
            },
            "options": {
              "A": "4",
              "B": "5",
              "C": "6",
              "D": "10"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "Le mot-clé `break` interrompt la boucle lorsque `i` atteint 5. Ainsi, `count` est incrémenté 5 fois avant l'interruption, résultant en une valeur finale de 5."
          },
          {
            "category": "Les Boucles",
            "question_number": 7,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `sum` après avoir parcouru `obj` ?",
            "snippet": {
              "code": "const obj = { a: 1, b: 2, c: 3 };\nlet sum = 0;\nfor (let key in obj) {\n  sum += obj[key];\n}"
            },
            "options": {
              "A": "3",
              "B": "6",
              "C": "undefined",
              "D": "{\"a\":1,\"b\":2,\"c\":3}"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "La boucle `for...in` parcourt les propriétés de l'objet `obj`. La variable `sum` accumule la somme des valeurs des propriétés, résultant en 6."
          },
          {
            "category": "Les Boucles",
            "question_number": 8,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `total` après l'exécution de la boucle ?",
            "snippet": {
              "code": "const numbers = [1, 2, 3, 4, 5];\nlet total = 0;\nfor (let num of numbers) {\n  total += num;\n}"
            },
            "options": {
              "A": "10",
              "B": "15",
              "C": "5",
              "D": "20"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "La boucle `for...of` itère sur chaque élément du tableau `numbers`, additionnant chaque élément à `total`. La valeur finale est 15."
          },
          {
            "category": "Les Boucles",
            "question_number": 9,
            "question_type": "code_analysis",
            "question_text": "Quelle est la chaîne finale de `result` après l'exécution de la boucle ?",
            "snippet": {
              "code": "let result = '';\nfor (let i = 0; i < 10; i++) {\n  if (i % 2 !== 0) {\n    result += i;\n  }\n}"
            },
            "options": {
              "A": "\"13579\"",
              "B": "\"02468\"",
              "C": "\"123456789\"",
              "D": "\"2468\""
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La boucle `for` itère de 0 à 9, mais la condition `if` n'ajoute à `result` que les nombres impairs. Ainsi, la chaîne finale est '13579'."
          },
          {
            "category": "Les Boucles",
            "question_number": 10,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur finale de `x` après l'exécution de la boucle ?",
            "snippet": {
              "code": "let x = 1;\nwhile (x < 100) {\n  x *= 2;\n}"
            },
            "options": {
              "A": "64",
              "B": "128",
              "C": "100",
              "D": "256"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "La boucle double la valeur de `x` à chaque itération. Elle s'arrête lorsque `x` atteint ou dépasse 100. La valeur finale qui satisfait cette condition est 128."
          },                                                                                                                                                                                                                                                                                                                    
          {
            "category": "Les Opérateurs",
            "question_number": 1,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `result` ?",
            "snippet": {
              "code": "let a = 10;\nlet b = 3;\nlet result = a % b;"
            },
            "options": {
              "A": "1",
              "B": "3.333",
              "C": "0",
              "D": "1.333"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "L'opérateur `%` est l'opérateur modulo qui donne le reste d'une division. Ici, `10 % 3` donne `1`."
          },
          {
            "category": "Les Opérateurs",
            "question_number": 2,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `result` ?",
            "snippet": {
              "code": "let x = '10';\nlet y = 10;\nlet result = x == y;"
            },
            "options": {
              "A": "true",
              "B": "false"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "L'opérateur `==` compare les valeurs après la conversion de type (égalité faible). Ici, la chaîne `'10'` est convertie en nombre, donc `x == y` donne `true`."
          },
          {
            "category": "Les Opérateurs",
            "question_number": 3,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `c` ?",
            "snippet": {
              "code": "let a = true;\nlet b = false;\nlet c = a || b;"
            },
            "options": {
              "A": "true",
              "B": "false"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "L'opérateur `||` est l'opérateur logique OU. Il renvoie `true` si l'un ou l'autre des opérandes est `true`. Ici, puisque `a` est `true`, `c` devient `true`."
          },
          {
            "category": "Les Opérateurs",
            "question_number": 4,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `result` ?",
            "snippet": {
              "code": "let x = false;\nlet result = !x;"
            },
            "options": {
              "A": "true",
              "B": "false"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "L'opérateur `!` est l'opérateur de négation logique qui inverse la valeur booléenne. Ici, `!x` convertit `false` en `true`."
          },
          {
            "category": "Les Opérateurs",
            "question_number": 5,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `result` ?",
            "snippet": {
              "code": "let a = null;\nlet b = 'Texte par défaut';\nlet result = a ?? b;"
            },
            "options": {
              "A": "null",
              "B": "\"Texte par défaut\"",
              "C": "undefined",
              "D": "false"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "L'opérateur `??` est l'opérateur de coalescence des nuls. Il renvoie son opérande de droite lorsque celui de gauche est `null` ou `undefined`. Ici, il renvoie `\"Texte par défaut\"` car `a` est `null`."
          },
          {
            "category": "Les Opérateurs",
            "question_number": 6,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `result` ?",
            "snippet": {
              "code": "let x = 0;\nlet y = '0';\nlet result = x === y;"
            },
            "options": {
              "A": "true",
              "B": "false"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "L'opérateur `===` est l'opérateur de comparaison stricte, qui vérifie à la fois la valeur et le type. Ici, bien que `x` et `y` aient la même valeur numérique, leurs types sont différents (`number` et `string`), donc `result` est `false`."
          },
          {
            "category": "Les Opérateurs",
            "question_number": 7,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `grade` ?",
            "snippet": {
              "code": "let score = 85;\nlet grade = score > 90 ? 'A' : score > 75 ? 'B' : 'C';"
            },
            "options": {
              "A": "\"A\"",
              "B": "\"B\"",
              "C": "\"C\"",
              "D": "undefined"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "L'expression utilise des opérateurs ternaires imbriqués. La première condition `score > 90` est fausse, donc on évalue la seconde condition `score > 75`, qui est vraie, donnant ainsi `grade = 'B'`."
          },
          {
            "category": "Les Opérateurs",
            "question_number": 8,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `sum` ?",
            "snippet": {
              "code": "let arr1 = [1, 2, 3];\nlet arr2 = [...arr1, 4, 5];\nlet sum = arr2.reduce((acc, val) => acc + val);"
            },
            "options": {
              "A": "10",
              "B": "15",
              "C": "5",
              "D": "20"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "L'opérateur de décomposition (spread) est utilisé pour étendre `arr1` dans `arr2`. Ainsi, `arr2` est `[1, 2, 3, 4, 5]`, et la somme de ses éléments avec `reduce` est `15`."
          },
          {
            "category": "Les Opérateurs",
            "question_number": 9,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `result` ?",
            "snippet": {
              "code": "const car = { make: 'Toyota', model: 'Corolla' };\nlet result = 'make' in car && 'year' in car;"
            },
            "options": {
              "A": "true",
              "B": "false"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "L'opérateur `in` vérifie si une propriété existe dans un objet. Ici, 'make' existe dans `car`, mais 'year' n'existe pas. Ainsi, `result` est `false`."
          },
          {
            "category": "Les Opérateurs",
            "question_number": 10,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `result` en utilisant l'opérateur AND bit à bit ?",
            "snippet": {
              "code": "let a = 9; // En binaire : 1001\nlet b = 5; // En binaire : 0101\nlet result = a & b;"
            },
            "options": {
              "A": "1",
              "B": "4",
              "C": "14",
              "D": "5"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "L'opérateur `&` effectue un AND bit à bit. Le seul bit commun dans les représentations binaires de 9 (1001) et 5 (0101) est le troisième bit (en comptant de droite à gauche), donc le résultat est 4 (0100 en binaire)."
          },
          {
            "category": "Les Fonctions",
            "question_number": 1,
            "question_type": "text_simple",
            "question_text": "Quelle est la principale différence entre `foo` et `bar` ?",
            "options": {
              "A": "foo est hoistée mais pas bar",
              "B": "bar est hoistée mais pas foo",
              "C": "Aucune différence, elles sont identiques",
              "D": "Seulement bar peut avoir des paramètres"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La principale différence est que `foo`, une déclaration de fonction, est hoistée, ce qui signifie que la fonction peut être appelée avant sa déclaration dans le code. `bar`, une expression de fonction, n'est pas hoistée de cette manière."
          },
          {
            "category": "Les Fonctions",
            "question_number": 2,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `result` ?",
            "snippet": {
              "code": "const multiply = (a, b) => a * b;\nlet result = multiply(2, 5);"
            },
            "options": {
              "A": "10",
              "B": "7",
              "C": "undefined",
              "D": "0"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La fonction fléchée `multiply` prend deux arguments et renvoie leur produit. Ici, `multiply(2, 5)` renvoie `10`."
          },
          {
            "category": "Les Fonctions",
            "question_number": 3,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `message` ?",
            "snippet": {
              "code": "function greet(name, greeting = 'Hello') {\n  return `${greeting}, ${name}!`;\n}\nlet message = greet('Alice');"
            },
            "options": {
              "A": "\"Hello, Alice!\"",
              "B": "\"Greeting, Alice!\"",
              "C": "\"Hello, !\"",
              "D": "\"Alice, Hello!\""
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La fonction `greet` utilise un paramètre par défaut pour `greeting`. Lorsqu'elle est appelée avec un seul argument, `greeting` prend la valeur par défaut 'Hello'. Ainsi, `message` vaut 'Hello, Alice!'."
          },
          {
            "category": "Les Fonctions",
            "question_number": 4,
            "question_type": "code_analysis",
            "question_text": "Que se passe-t-il lors de l'exécution de `processData(logData)` ?",
            "snippet": {
              "code": "function processData(callback) {\n  callback('Done');\n}\n\nfunction logData(data) {\n  console.log(data);\n}\n\nprocessData(logData);"
            },
            "options": {
              "A": "Il affiche 'Done'",
              "B": "Il ne se passe rien",
              "C": "Il affiche 'logData'",
              "D": "Erreur"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "`processData` est appelée avec `logData` en tant que fonction de rappel. `processData` appelle ensuite `logData` avec 'Done' comme argument, ce qui entraîne l'affichage de 'Done'."
          },
          {
            "category": "Les Fonctions",
            "question_number": 5,
            "question_type": "code_analysis",
            "question_text": "Quel est le résultat de cette expression ?",
            "snippet": {
              "code": "(function double(num) {\n  return num * 2;\n})(10);"
            },
            "options": {
              "A": "20",
              "B": "10",
              "C": "undefined",
              "D": "Erreur"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "C'est une IIFE, une expression de fonction invoquée immédiatement. Elle est exécutée dès sa définition avec `10` comme argument, et le résultat est `20`."
          },
          {
            "category": "Les Fonctions",
            "question_number": 6,
            "question_type": "code_analysis",
            "question_text": "Quelles sont les valeurs de `first` et `second` après l'exécution ?",
            "snippet": {
              "code": "function createCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\n\nconst counter = createCounter();\nlet first = counter();\nlet second = counter();"
            },
            "options": {
              "A": "first: 0, second: 1",
              "B": "first: 1, second: 1",
              "C": "first: 1, second: 2",
              "D": "first: 2, second: 2"
            },
            "correct_answer": {
              "answer": "C"
            },
            "explanation": "La fonction `createCounter` renvoie une fermeture qui garde en mémoire la variable `count`. À chaque appel, `count` est incrémenté. Ainsi, `first` vaut `1` et `second` vaut `2`."
          },
          {
            "category": "Les Fonctions",
            "question_number": 7,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `result` ?",
            "snippet": {
              "code": "const result = (function triangle(base, height) {\n  return 0.5 * base * height;\n})(10, 5);"
            },
            "options": {
              "A": "25",
              "B": "15",
              "C": "50",
              "D": "undefined"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "Cette expression de fonction auto-appelante (IIFE) calcule l'aire d'un triangle avec une base de 10 et une hauteur de 5, ce qui donne `25`."
          },
          {
            "category": "Les Fonctions",
            "question_number": 8,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `calculator.total` après ces opérations ?",
            "snippet": {
              "code": "const calculator = {\n  total: 0,\n  add(amount) {\n    this.total += amount;\n  },\n  subtract(amount) {\n    this.total -= amount;\n  }\n};\n\ncalculator.add(10);\ncalculator.subtract(5);"
            },
            "options": {
              "A": "5",
              "B": "10",
              "C": "15",
              "D": "0"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "L'objet `calculator` maintient un total qui est modifié par ses méthodes. Après l'ajout de 10 et la soustraction de 5, le total est `5`."
          },
          {
            "category": "Les Fonctions",
            "question_number": 9,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `result` après l'appel de `multiply(5)` ?",
            "snippet": {
              "code": "let result = 20;\nfunction multiply(x) {\n  result = x * x;\n  return;\n}\nmultiply(5);"
            },
            "options": {
              "A": "20",
              "B": "25",
              "C": "undefined",
              "D": "0"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "La fonction `multiply` modifie la variable globale `result`. L'appel `multiply(5)` change donc la valeur de `result` à `5 * 5`, soit `25`."
          },
          {
            "category": "Les Fonctions",
            "question_number": 10,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `result` ?",
            "snippet": {
              "code": "function factorial(n) {\n  if (n === 0) {\n    return 1;\n  } else {\n    return n * factorial(n - 1);\n  }\n}\nlet result = factorial(4);"
            },
            "options": {
              "A": "24",
              "B": "12",
              "C": "4",
              "D": "120"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La fonction `factorial` est une fonction récursive qui calcule le factorial de `n`. Pour `n = 4`, le résultat est `4 * 3 * 2 * 1`, soit `24`."
          },
          {
            "category": "Les Méthodes d’Instance",
            "question_number": 1,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `brand` après l'exécution du code ?",
            "snippet": {
              "code": "class Car {\n  constructor(brand) {\n    this.brand = brand;\n  }\n  getBrand() {\n    return this.brand;\n  }\n}\n\nconst myCar = new Car('Toyota');\nlet brand = myCar.getBrand();"
            },
            "options": {
              "A": "\"Toyota\"",
              "B": "undefined",
              "C": "\"Car\"",
              "D": "Erreur"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La méthode `getBrand` est une méthode d'instance qui accède à la propriété `brand` de l'instance via `this`. Ici, elle retourne la marque du `myCar`, qui est 'Toyota'."
          },
          {
            "category": "Les Méthodes d’Instance",
            "question_number": 2,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `action` après l'exécution du code ?",
            "snippet": {
              "code": "class Vehicle {\n  start() {\n    return 'Starting...';\n  }\n}\n\nclass Bike extends Vehicle {\n  start() {\n    return super.start() + ' Bike started.';\n  }\n}\n\nconst myBike = new Bike();\nlet action = myBike.start();"
            },
            "options": {
              "A": "\"Starting... Bike started.\"",
              "B": "\"Starting...\"",
              "C": "\"Bike started.\"",
              "D": "Erreur"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La méthode `start` dans `Bike` surcharge la méthode de la classe parent `Vehicle`, mais utilise `super` pour appeler la méthode originale, donc le résultat est la combinaison des deux."
          },
          {
            "category": "Les Méthodes d’Instance",
            "question_number": 3,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `area` ?",
            "snippet": {
              "code": "class Rectangle {\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n  }\n\n  getArea() {\n    return this.width * this.height;\n  }\n\n  static createSquare(size) {\n    return new Rectangle(size, size);\n  }\n}\n\nconst square = Rectangle.createSquare(5);\nlet area = square.getArea();"
            },
            "options": {
              "A": "25",
              "B": "10",
              "C": "5",
              "D": "undefined"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "`createSquare` est une méthode statique qui retourne une nouvelle instance de `Rectangle` avec des dimensions égales. `getArea` est une méthode d'instance qui calcule l'aire du rectangle. Ici, `area` vaut `5 * 5`, soit `25`."
          },
          {
            "category": "Les Méthodes d’Instance",
            "question_number": 4,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `name` ?",
            "snippet": {
              "code": "class Person {\n  constructor(name) {\n    this.name = name;\n    this.getName = this.getName.bind(this);\n  }\n\n  getName() {\n    return this.name;\n  }\n}\n\nconst person = new Person('Alice');\nconst getName = person.getName;\nlet name = getName();"
            },
            "options": {
              "A": "\"Alice\"",
              "B": "undefined",
              "C": "\"\"",
              "D": "Erreur"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "Grâce à l'utilisation de `.bind(this)` dans le constructeur, la méthode `getName` est liée au contexte correct (`this` se réfère à l'instance de `Person`). Même lorsqu'elle est assignée à une variable séparée, elle conserve ce contexte et retourne le nom correct."
          },
          {
            "category": "Les Méthodes d’Instance",
            "question_number": 5,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur finale de `counter.count` ?",
            "snippet": {
              "code": "class Counter {\n  constructor() {\n    this.count = 0;\n  }\n\n  increment() {\n    this.count++;\n    return this;\n  }\n\n  decrement() {\n    this.count--;\n    return this;\n  }\n}\n\nconst counter = new Counter();\ncounter.increment().increment().decrement();"
            },
            "options": {
              "A": "1",
              "B": "2",
              "C": "0",
              "D": "3"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "Les méthodes `increment` et `decrement` sont chainables car elles retournent `this` (l'instance de `Counter`). Après deux incréments et un décrément, `counter.count` est `1`."
          },
          {
            "category": "Les Méthodes d’Instance",
            "question_number": 6,
            "question_type": "code_analysis",
            "question_text": "Quelle sera la valeur affichée après 3 secondes ?",
            "snippet": {
              "code": "class Timer {\n  constructor() {\n    this.seconds = 0;\n    setInterval(function increase() {\n      this.seconds++;\n    }, 1000);\n  }\n}\n\nconst myTimer = new Timer();\nsetTimeout(() => console.log(myTimer.seconds), 3000);"
            },
            "options": {
              "A": "3",
              "B": "0",
              "C": "NaN",
              "D": "undefined"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "Dans la fonction `increase` utilisée par `setInterval`, `this` ne se réfère pas à l'instance de `Timer` mais à l'objet global (`window` dans un navigateur). Ainsi, `seconds` n'est jamais incrémenté dans l'instance `myTimer`, et sa valeur reste `0`."
          },
          {
            "category": "Les Méthodes d’Instance",
            "question_number": 7,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur finale de `modifier.value` ?",
            "snippet": {
              "code": "class StringModifier {\n  constructor(value) {\n    this.value = value;\n  }\n\n  addString(str) {\n    this.value += str;\n    return this;\n  }\n\n  replaceString(findStr, replaceStr) {\n    this.value = this.value.replace(findStr, replaceStr);\n    return this;\n  }\n}\n\nconst modifier = new StringModifier('Hello');\nmodifier.addString(' World').replaceString('World', 'JavaScript');"
            },
            "options": {
              "A": "\"Hello World\"",
              "B": "\"Hello JavaScript\"",
              "C": "\"Hello\"",
              "D": "\"World JavaScript\""
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "L'objet `modifier` utilise des méthodes chainables pour d'abord ajouter ' World' à sa valeur, puis remplacer 'World' par 'JavaScript', résultant en 'Hello JavaScript'."
          },
          {
            "category": "Les Méthodes d’Instance",
            "question_number": 8,
            "question_type": "code_analysis",
            "question_text": "Quel est l'état final du tableau `numArray.numbers` ?",
            "snippet": {
              "code": "class NumberArray {\n  constructor() {\n    this.numbers = [1, 2, 3];\n    this.multiplier = 2;\n  }\n\n  multiply() {\n    this.numbers = this.numbers.map(number => number * this.multiplier);\n  }\n}\n\nconst numArray = new NumberArray();\nnumArray.multiply();"
            },
            "options": {
              "A": "[1, 2, 3]",
              "B": "[2, 4, 6]",
              "C": "[0, 0, 0]",
              "D": "undefined"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "Dans la méthode `multiply`, la fonction fléchée conserve le contexte de `this` de l'objet `NumberArray`. Par conséquent, chaque élément du tableau `numbers` est multiplié par `multiplier`, donnant `[2, 4, 6]`."
          },
          {
            "category": "Les Méthodes d’Instance",
            "question_number": 9,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `finalText` après l'exécution du code ?",
            "snippet": {
              "code": "class Message {\n  constructor() {\n    this.text = '';\n  }\n\n  setText(text) {\n    this.text = text;\n  }\n\n  addText(additionalText) {\n    this.setText(this.text + ' ' + additionalText);\n  }\n\n  getText() {\n    return this.text;\n  }\n}\n\nconst msg = new Message();\nmsg.setText('Hello');\nmsg.addText('World');\nlet finalText = msg.getText();"
            },
            "options": {
              "A": "\"Hello\"",
              "B": "\"World\"",
              "C": "\"Hello World\"",
              "D": "\"\""
            },
            "correct_answer": {
              "answer": "C"
            },
            "explanation": "L'objet `msg` de la classe `Message` utilise d'abord `setText` pour définir le texte à 'Hello', puis `addText` pour ajouter 'World'. La méthode `getText` renvoie le texte final, 'Hello World'."
          },
          {
            "category": "Les Méthodes d’Instance",
            "question_number": 10,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `name` après l'exécution du code ?",
            "snippet": {
              "code": "class User {\n  constructor(name) {\n    this.name = name;\n    this.getName = this.getName.bind(this);\n  }\n\n  getName() {\n    return this.name;\n  }\n}\n\nconst user = new User('Alice');\nconst retrieveName = user.getName;\nlet name = retrieveName();"
            },
            "options": {
              "A": "\"Alice\"",
              "B": "undefined",
              "C": "\"\"",
              "D": "Erreur"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La méthode `getName` est liée à l'instance `user` avec `.bind(this)` dans le constructeur. Même lorsqu'elle est affectée à une autre variable (`retrieveName`), le contexte de `this` (l'instance `user`) est préservé, permettant de retourner le nom 'Alice'."
          },
          {
            "category": "La Notation Pointée",
            "question_number": 1,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `greeting` ?",
            "snippet": {
              "code": "const person = {\n  name: 'Alice',\n  age: 30,\n  greet() {\n    return `Hello, my name is ${this.name}`;\n  }\n};\n\nlet greeting = person.greet();"
            },
            "options": {
              "A": "\"Hello, my name is Alice\"",
              "B": "\"Hello, my name is\"",
              "C": "undefined",
              "D": "null"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La méthode `greet` est appelée sur l'objet `person` en utilisant la notation pointée. Elle renvoie la chaîne de caractères avec le nom de la personne, qui est 'Alice' dans ce cas."
          },
          {
            "category": "La Notation Pointée",
            "question_number": 2,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `carYear` ?",
            "snippet": {
              "code": "const car = {\n  brand: 'Toyota',\n  model: 'Corolla',\n  year: 2018\n};\n\ncar.year = 2020;\nlet carYear = car.year;"
            },
            "options": {
              "A": "2018",
              "B": "2020",
              "C": "undefined",
              "D": "null"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "L'année de la voiture (`car.year`) est mise à jour à `2020` en utilisant la notation pointée. Par conséquent, `carYear` vaut `2020`."
          },
          {
            "category": "La Notation Pointée",
            "question_number": 3,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `zipCode` ?",
            "snippet": {
              "code": "const company = {\n  name: 'Tech Corp',\n  address: {\n    street: '123 Tech Street',\n    city: 'Techville',\n    zipCode: '12345'\n  }\n};\n\nlet zipCode = company.address.zipCode;"
            },
            "options": {
              "A": "\"12345\"",
              "B": "\"Techville\"",
              "C": "undefined",
              "D": "\"Tech Corp\""
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La valeur de `zipCode` est obtenue en accédant à la propriété `zipCode` de l'objet imbriqué `address` dans l'objet `company`."
          },
          {
            "category": "La Notation Pointée",
            "question_number": 4,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `userEmail` ?",
            "snippet": {
              "code": "const user = {\n  id: 1001,\n  name: 'Alice',\n  email: 'alice@example.com'\n};\n\nconst prop = 'email';\nlet userEmail = user[prop];"
            },
            "options": {
              "A": "\"alice@example.com\"",
              "B": "\"Alice\"",
              "C": "1001",
              "D": "undefined"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La valeur de `userEmail` est obtenue en accédant à la propriété de `user` spécifiée par la variable `prop`, qui est `'email'`. Ainsi, `userEmail` est `'alice@example.com'`."
          },
          {
            "category": "La Notation Pointée",
            "question_number": 5,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `deviceStatus` ?",
            "snippet": {
              "code": "class Device {\n  constructor(name, status) {\n    this.name = name;\n    this.status = status;\n  }\n\n  turnOn() {\n    this.status = 'on';\n  }\n\n  turnOff() {\n    this.status = 'off';\n  }\n}\n\nconst myDevice = new Device('Laptop', 'off');\nmyDevice.turnOn();\nlet deviceStatus = myDevice.status;"
            },
            "options": {
              "A": "\"on\"",
              "B": "\"off\"",
              "C": "undefined",
              "D": "\"Laptop\""
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La méthode `turnOn` est appelée sur l'instance `myDevice`, changeant la propriété `status` en `'on'`. Ainsi, `deviceStatus` est `'on'` après l'appel."
          },
          {
            "category": "La Notation Pointée",
            "question_number": 6,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `leaderGreeting` ?",
            "snippet": {
              "code": "const team = {\n  leader: {\n    name: 'Alice',\n    greet() {\n      return `Hi, I'm ${this.name}`;\n    }\n  }\n};\n\nlet leaderGreeting = team.leader.greet();"
            },
            "options": {
              "A": "\"Hi, I'm Alice\"",
              "B": "\"Hi, I'm\"",
              "C": "undefined",
              "D": "Erreur"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La méthode `greet` est appelée sur l'objet `leader` qui fait partie de l'objet `team`. `this.name` fait référence correctement au nom du leader, donc la valeur retournée est 'Hi, I'm Alice'."
          },
          {
            "category": "La Notation Pointée",
            "question_number": 7,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `totalVisitors` après l'appel de `data.updateVisitors(25)` ?",
            "snippet": {
              "code": "const data = {\n  stats: {\n    visitors: 100,\n    members: 15\n  },\n  updateVisitors(num) {\n    this.stats.visitors += num;\n  }\n};\n\ndata.updateVisitors(25);\nlet totalVisitors = data.stats.visitors;"
            },
            "options": {
              "A": "100",
              "B": "125",
              "C": "15",
              "D": "140"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "L'appel à `data.updateVisitors(25)` augmente le nombre de visiteurs de 25, passant de 100 à 125. Ainsi, `totalVisitors` est `125` après la mise à jour."
          },
          {
            "category": "La Notation Pointée",
            "question_number": 8,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `result` ?",
            "snippet": {
              "code": "const calculator = {\n  add(a, b) {\n    return a + b;\n  },\n  subtract(a, b) {\n    return a - b;\n  }\n};\n\nlet operation = 'add';\nlet result = calculator[operation](5, 3);"
            },
            "options": {
              "A": "8",
              "B": "2",
              "C": "undefined",
              "D": "Erreur"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "L'opération `calculator[operation]` accède dynamiquement à la méthode `add` de l'objet `calculator`, puis l'appelle avec les arguments `(5, 3)`, ce qui donne `8`."
          },
          {
            "category": "La Notation Pointée",
            "question_number": 9,
            "question_type": "code_analysis",
            "question_text": "Quelle est la valeur de `bookInfo` ?",
            "snippet": {
              "code": "class Book {\n  constructor(title) {\n    this.title = title;\n    this.pageCount = 0;\n  }\n\n  addPage() {\n    this.pageCount++;\n    return this;\n  }\n\n  setPageCount(count) {\n    this.pageCount = count;\n    return this;\n  }\n\n  getTitle() {\n    return `Title: ${this.title}, Pages: ${this.pageCount}`;\n  }\n}\n\nconst myBook = new Book('JavaScript Essentials');\nmyBook.addPage().setPageCount(300);\nlet bookInfo = myBook.getTitle();"
            },
            "options": {
              "A": "\"Title: JavaScript Essentials, Pages: 1\"",
              "B": "\"Title: JavaScript Essentials, Pages: 300\"",
              "C": "\"Title: JavaScript Essentials, Pages: 301\"",
              "D": "\"Title: JavaScript Essentials, Pages: 0\""
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "Le chaînage des méthodes `addPage()` puis `setPageCount(300)` sur l'instance `myBook` définit `pageCount` à `300`. La méthode `getTitle()` retourne alors le titre et le nombre de pages actuel."
          },
          {
            "category": "La Notation Pointée",
            "question_number": 10,
            "question_type": "code_analysis",
            "question_text": "Quel est le contenu de la variable `titles` ?",
            "snippet": {
              "code": "const library = {\n  books: [\n    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },\n    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' }\n  ],\n  getBookTitles() {\n    return this.books.map(book => book.title);\n  }\n};\n\nlet titles = library.getBookTitles();"
            },
            "options": {
              "A": "[\"JavaScript: The Good Parts\", \"Eloquent JavaScript\"]",
              "B": "[\"Douglas Crockford\", \"Marijn Haverbeke\"]",
              "C": "undefined",
              "D": "[]"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "La méthode `getBookTitles` retourne un tableau des titres des livres présents dans l'objet `library`. Donc, `titles` contient `['JavaScript: The Good Parts', 'Eloquent JavaScript']`."
          },
          {
            "title": "Utilisation de Try-Catch pour la Gestion des Erreurs",
            "category": "Gestion des Erreurs et Debugging",
            "question_number": 1,
            "question_type": "code_analysis",
            "question_text": "Quelles sont les valeurs possibles de `result` après l'exécution de ce code ?",
            "snippet": {
              "code": "function riskyFunction() {\n  if (Math.random() < 0.5) {\n    throw new Error('Une erreur s'est produite');\n  }\n  return 'Succès';\n}\n\nlet result;\ntry {\n  result = riskyFunction();\n} catch (e) {\n  result = e.message;\n}"
            },
            "options": {
              "A": "\"Succès\" uniquement",
              "B": "\"Une erreur s'est produite\" uniquement",
              "C": "\"Succès\" ou \"Une erreur s'est produite\"",
              "D": "undefined"
            },
            "correct_answer": {
              "answer": "C"
            },
            "explanation": "Le bloc `try-catch` attrape l'exception lancée par `riskyFunction`. `result` peut donc être soit la chaîne de caractères retournée en cas de succès, soit le message d'erreur capturé."
          },
          {
            "title": "Identification d'Erreurs avec `console.log`",
            "category": "Gestion des Erreurs et Debugging",
            "question_number": 2,
            "question_type": "code_analysis",
            "question_text": "Comment `console.log` peut-il aider à identifier le problème dans cette fonction ?",
            "snippet": {
              "code": "function calculateSum(arr) {\n  let sum = 0;\n  for (let i = 0; i <= arr.length; i++) {\n    console.log(`Index: ${i}, Valeur actuelle: ${arr[i]}, Somme actuelle: ${sum}`);\n    sum += arr[i];\n  }\n  return sum;\n}\n\nlet result = calculateSum([1, 2, 3]);"
            },
            "options": {
              "A": "En affichant les valeurs des variables à chaque itération",
              "B": "En montrant les erreurs de syntaxe dans le code",
              "C": "En indiquant la ligne où le code s'arrête d'exécuter",
              "D": "En évaluant la performance de la fonction"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "`console.log` aide à déboguer en affichant les valeurs des variables à chaque itération de la boucle. Cela permet de voir les valeurs incorrectes ou inattendues, aidant à identifier le problème dans la logique de la boucle."
          },
          {
            "title": "Gestion des Erreurs dans les Fonctions Asynchrones",
            "category": "Gestion des Erreurs et Debugging",
            "question_number": 3,
            "question_type": "code_analysis",
            "question_text": "Comment le bloc `try-catch` est-il utilisé dans le contexte d'une fonction asynchrone ?",
            "snippet": {
              "code": "async function fetchData(url) {\n  try {\n    let response = await fetch(url);\n    return await response.json();\n  } catch (e) {\n    return { error: e.message };\n  }\n}\n\nfetchData('https://api.example.com/data');"
            },
            "options": {
              "A": "Il attrape uniquement les erreurs de syntaxe",
              "B": "Il attrape les erreurs lors de l'appel de `fetch` et de la conversion en JSON",
              "C": "Il empêche toutes les erreurs de se produire",
              "D": "Il attrape les erreurs uniquement si `fetch` renvoie une réponse"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "Dans une fonction asynchrone, un bloc `try-catch` peut être utilisé pour attraper les erreurs qui se produisent pendant les opérations asynchrones, comme les appels de `fetch` et les conversions de réponse en JSON."
          },
          {
            "title": "Rôle de `finally` dans les Blocs Try-Catch",
            "category": "Gestion des Erreurs et Debugging",
            "question_number": 4,
            "question_type": "code_analysis",
            "question_text": "Quel est le rôle du bloc `finally` dans ce code ?",
            "snippet": {
              "code": "function processFile(file) {\n  let fileOpened = false;\n\n  try {\n    openFile(file);\n    fileOpened = true;\n    // Traitement du fichier\n  } catch (error) {\n    console.error('Une erreur est survenue :', error);\n  } finally {\n    if (fileOpened) {\n      closeFile(file);\n    }\n  }\n}"
            },
            "options": {
              "A": "Il exécute `closeFile(file)` indépendamment de la réussite ou de l'échec de l'ouverture du fichier",
              "B": "Il ne s'exécute que si aucune erreur ne se produit dans le bloc `try`",
              "C": "Il est utilisé pour fermer le fichier uniquement si une erreur survient",
              "D": "Il réinitialise la variable `fileOpened` à `false`"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "Le bloc `finally` s'exécute après les blocs `try` et `catch`, quel que soit le résultat de ces derniers. Dans ce cas, il est utilisé pour s'assurer que le fichier est fermé, que l'opération dans `try` ait réussi ou non."
          },
          {
            "title": "Utilisation de Points d'Arrêt dans les Outils de Développement",
            "category": "Gestion des Erreurs et Debugging",
            "question_number": 5,
            "question_type": "code_analysis",
            "question_text": "Comment l'utilisation de points d'arrêt dans les outils de développement peut-elle aider à déboguer cette fonction ?",
            "snippet": {
              "code": "function findMax(numbers) {\n  let max = numbers[0];\n  for (let i = 1; i < numbers.length; i++) {\n    if (numbers[i] > max) {\n      max = numbers[i];\n    }\n  }\n  return max;\n}"
            },
            "options": {
              "A": "En exécutant automatiquement des tests sur la fonction",
              "B": "En permettant de suivre l'exécution ligne par ligne et d'inspecter les valeurs des variables",
              "C": "En identifiant les erreurs de syntaxe dans le code",
              "D": "En évaluant la performance de la fonction"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "Les points d'arrêt permettent aux développeurs de suspendre l'exécution du code à des endroits spécifiques, facilitant l'inspection des valeurs des variables et la compréhension de la logique du code, étape par étape."
          },
          {
            "title": "Assertions dans les Tests Unitaires",
            "category": "Gestion des Erreurs et Debugging",
            "question_number": 6,
            "question_type": "text_simple",
            "question_text": "Comment utiliseriez-vous les assertions pour tester la fonction `sum` ?",
            "options": {
              "A": "assert(sum(2, 2) === 4)",
              "B": "assert(sum(2, 2) !== 4)",
              "C": "sum(2, 2);",
              "D": "console.log(sum(2, 2))"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "Les assertions dans les tests unitaires sont utilisées pour valider que le code se comporte comme prévu. L'affirmation `assert(sum(2, 2) === 4)` vérifie que la fonction `sum` renvoie correctement 4 pour les entrées 2 et 2."
          },
          {
            "title": "Différencier `console.log` et `console.error`",
            "category": "Gestion des Erreurs et Debugging",
            "question_number": 7,
            "question_type": "text_simple",
            "question_text": "Quand utiliseriez-vous `console.error` par rapport à `console.log` ?",
            "options": {
              "A": "console.error pour les messages réguliers et console.log pour les erreurs",
              "B": "console.error pour les erreurs et console.log pour les messages de débogage",
              "C": "console.error et console.log sont interchangeables",
              "D": "console.error pour arrêter l'exécution du code"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "`console.error` est généralement utilisé pour enregistrer les erreurs ou les messages d'alerte importants, tandis que `console.log` est utilisé pour des messages de débogage général ou des informations."
          },
          {
            "title": "Gestion des Erreurs dans les Promesses",
            "category": "Gestion des Erreurs et Debugging",
            "question_number": 8,
            "question_type": "code_analysis",
            "question_text": "Comment fonctionne la gestion des erreurs dans les fonctions asynchrones utilisant `await` ?",
            "snippet": {
              "code": "async function fetchData(url) {\n  try {\n    let response = await fetch(url);\n    return await response.json();\n  } catch (e) {\n    console.error('Erreur lors de la récupération des données :', e);\n  }\n}"
            },
            "options": {
              "A": "Les erreurs asynchrones ne peuvent pas être capturées par `try-catch`",
              "B": "Le bloc `try-catch` capture les erreurs survenues dans les promesses `await`-ed",
              "C": "Le bloc `try` exécute toujours, indépendamment des erreurs",
              "D": "Le bloc `catch` ne s'exécute que pour les erreurs de syntaxe"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "Dans une fonction asynchrone, le bloc `try-catch` peut capturer les erreurs qui surviennent lors de l'attente (`await`) des promesses. Cela permet une gestion des erreurs asynchrones propre et efficace."
          },
          {
            "title": "Utilité des Source Maps en Débogage",
            "category": "Gestion des Erreurs et Debugging",
            "question_number": 9,
            "question_type": "text_simple",
            "question_text": "Comment les source maps peuvent-elles aider en débogage d'une application JavaScript complexe en production ?",
            "options": {
              "A": "En révélant la version originale du code avant la transpilation et la minification",
              "B": "En accélérant l'exécution du code JavaScript",
              "C": "En corrigeant automatiquement les erreurs dans le code minifié",
              "D": "En réduisant la taille du code JavaScript pour améliorer les performances"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "Les source maps permettent aux développeurs de voir la version originale du code source dans les outils de développement, même si le code en production est transpilé ou minifié. Cela facilite le débogage en permettant aux développeurs de localiser et comprendre les erreurs dans le contexte du code source original."
          },
          {
            "title": "Breakpoints et Conditional Breakpoints en Débogage",
            "category": "Gestion des Erreurs et Debugging",
            "question_number": 10,
            "question_type": "text_simple",
            "question_text": "Quelle est la différence entre un breakpoint standard et un conditional breakpoint en débogage JavaScript ?",
            "options": {
              "A": "Un breakpoint standard arrête l'exécution à chaque fois que la ligne est atteinte, tandis qu'un conditional breakpoint s'active seulement si une condition spécifique est vraie",
              "B": "Un breakpoint standard affiche des informations sur les variables, tandis qu'un conditional breakpoint ne le fait pas",
              "C": "Un breakpoint standard ne peut être utilisé que dans les fonctions, tandis qu'un conditional breakpoint peut être utilisé partout",
              "D": "Un conditional breakpoint est utilisé pour les erreurs, tandis qu'un breakpoint standard est utilisé pour la performance"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "Un breakpoint standard arrête toujours l'exécution du programme lorsqu'il est atteint. En revanche, un conditional breakpoint n'arrête l'exécution que si une condition spécifiée est remplie, ce qui permet de cibler des situations spécifiques pour le débogage."
          },
          {
            "title": "Base des Promesses en JavaScript",
            "category": "Asynchronicité et Promesses",
            "question_number": 1,
            "question_type": "code_analysis",
            "question_text": "Que fait le code suivant avec la promesse ?",
            "snippet": {
              "code": "let promise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve('Données chargées');\n  }, 1000);\n});\n\npromise.then(data => {\n  console.log(data);\n});"
            },
            "options": {
              "A": "Affiche 'Données chargées' immédiatement dans la console",
              "B": "Affiche 'Données chargées' dans la console après un délai d'une seconde",
              "C": "Renvoie une erreur",
              "D": "N'affiche rien pendant une seconde, puis affiche une erreur"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "Ce code crée une promesse qui se résout après un délai d'une seconde. Lorsqu'elle est résolue, elle affiche le message 'Données chargées'. Aucune erreur n'est générée."
          },
          {
            "title": "Enchaînement des Promesses",
            "category": "Asynchronicité et Promesses",
            "question_number": 2,
            "question_type": "code_analysis",
            "question_text": "Quel sera le résultat de cet enchaînement de promesses ?",
            "snippet": {
              "code": "function fetchData() {\n  return new Promise(resolve => {\n    setTimeout(() => resolve('Données'), 500);\n  });\n}\n\nfunction processData(data) {\n  return new Promise(resolve => {\n    setTimeout(() => resolve(data + ' traitées'), 500);\n  });\n}\n\nfetchData().then(processData).then(result => console.log(result));"
            },
            "options": {
              "A": "\"Données traitées\" après 500 ms",
              "B": "\"Données traitées\" après 1 seconde",
              "C": "\"Données\" après 1 seconde",
              "D": "Une erreur se produit"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "Chaque fonction renvoie une promesse qui se résout après 500 ms. L'enchaînement `fetchData().then(processData)` signifie que `processData` est appelée après la résolution de `fetchData`, ce qui prend au total 1 seconde."
          },
          {
            "title": "Gestion des Erreurs dans les Promesses",
            "category": "Asynchronicité et Promesses",
            "question_number": 3,
            "question_type": "code_analysis",
            "question_text": "Comment ce code gère-t-il les erreurs dans la promesse ?",
            "snippet": {
              "code": "function getUser(id) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (id === 0) {\n        reject('ID invalide');\n      } else {\n        resolve({ id: id, name: 'User ' + id });\n      }\n    }, 1000);\n  });\n}\n\ngetUser(0)\n  .then(user => console.log('Utilisateur récupéré :', user))\n  .catch(error => console.error('Erreur :', error));"
            },
            "options": {
              "A": "En lançant une exception si `id` est 0",
              "B": "En affichant un message d'erreur dans la console si `id` est 0",
              "C": "En retournant `null` si `id` est 0",
              "D": "En continuant l'exécution sans traitement d'erreur"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "Si `id` est 0, la promesse est rejetée avec un message d'erreur, qui est ensuite capturé et affiché dans la console par le gestionnaire `.catch`. Aucune exception n'est lancée et `null` n'est pas retourné."
          },
          {
            "title": "Utilisation de Async/Await avec des Boucles",
            "category": "Asynchronicité et Promesses",
            "question_number": 4,
            "question_type": "code_analysis",
            "question_text": "Comment fonctionne `await` dans la boucle `for` de `processArray` ?",
            "snippet": {
              "code": "async function processArray(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    await processItem(arr[i]);\n  }\n}\n\nfunction processItem(item) {\n  return new Promise(resolve => setTimeout(() => resolve(item * 2), 100));\n}"
            },
            "options": {
              "A": "Il attend la résolution de `processItem` pour chaque élément avant de continuer",
              "B": "Il traite tous les éléments du tableau simultanément",
              "C": "Il n'a aucun effet et la boucle se comporte comme une boucle normale",
              "D": "Il arrête l'exécution du programme"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "Dans la boucle `for` de `processArray`, `await` fait en sorte que la fonction attende la résolution de la promesse renvoyée par `processItem` pour chaque élément du tableau avant de passer à l'élément suivant. Cela sérialise le traitement des éléments du tableau."
          },
          {
            "title": "Utilisation de `Promise.all`",
            "category": "Asynchronicité et Promesses",
            "question_number": 5,
            "question_type": "code_analysis",
            "question_text": "Que fait `Promise.all` dans ce code ?",
            "snippet": {
              "code": "function fetchData(url) {\n  return new Promise(resolve => {\n    setTimeout(() => resolve(`Données de ${url}`), 1000);\n  });\n}\n\nPromise.all([\n  fetchData('url1.com'),\n  fetchData('url2.com'),\n  fetchData('url3.com')\n]).then(allData => {\n  console.log(allData);\n});"
            },
            "options": {
              "A": "Il exécute les promesses séquentiellement et renvoie leurs résultats un par un",
              "B": "Il attend que toutes les promesses soient résolues et renvoie tous les résultats en même temps",
              "C": "Il renvoie le résultat de la première promesse résolue",
              "D": "Il renvoie une erreur si l'une des promesses est rejetée"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "`Promise.all` prend un tableau de promesses et renvoie une nouvelle promesse qui se résout lorsque toutes les promesses du tableau sont résolues, fournissant un tableau de leurs résultats. Il ne renvoie pas les résultats séquentiellement."
          },
          {
            "title": "Gestion des Rejets de Promesses Non Capturés",
            "category": "Asynchronicité et Promesses",
            "question_number": 6,
            "question_type": "code_analysis",
            "question_text": "Que se passe-t-il si la promesse dans `fetchData` est rejetée sans gestionnaire `.catch` ?",
            "snippet": {
              "code": "async function fetchData(url) {\n  let response = await fetch(url);\n  if (!response.ok) {\n    throw new Error('Échec du chargement des données');\n  }\n  return response.json();\n}\n\nfetchData('https://api.example.com/data').then(data => {\n  console.log(data);\n});"
            },
            "options": {
              "A": "Le rejet de la promesse est ignoré silencieusement",
              "B": "Une erreur est lancée et peut être capturée par un gestionnaire d'erreur global",
              "C": "Le programme s'arrête immédiatement",
              "D": "La fonction `fetchData` est automatiquement rappelée"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "Si une promesse est rejetée et qu'aucun `.catch` n'est présent, JavaScript génère une erreur 'Uncaught (in promise)', qui peut être capturée par des gestionnaires d'erreur globaux tels que `window.onerror` dans les navigateurs."
          },
          {
            "title": "Exécution Parallèle avec `Promise.all`",
            "category": "Asynchronicité et Promesses",
            "question_number": 7,
            "question_type": "code_analysis",
            "question_text": "Comment `Promise.all` est-il utilisé dans ce contexte et quel est son avantage ?",
            "snippet": {
              "code": "function fetchDataFromUrl(url) {\n  return new Promise(resolve => setTimeout(() => resolve(`Données de ${url}`), 2000));\n}\n\nlet urls = ['url1.com', 'url2.com', 'url3.com'];\nPromise.all(urls.map(fetchDataFromUrl)).then(allData => {\n  console.log(allData);\n});"
            },
            "options": {
              "A": "Il exécute chaque appel de `fetchDataFromUrl` séquentiellement, réduisant la charge sur le serveur",
              "B": "Il exécute tous les appels de `fetchDataFromUrl` en parallèle, améliorant l'efficacité",
              "C": "Il exécute un seul appel de `fetchDataFromUrl` et ignore les autres",
              "D": "Il choisit l'appel de `fetchDataFromUrl` le plus rapide et ignore les autres"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "`Promise.all` est utilisé pour exécuter plusieurs promesses en parallèle. Il attend que toutes les promesses soient résolues avant de continuer, ce qui est plus efficace que de les exécuter séquentiellement."
          },
          {
            "title": "Gestion des Erreurs avec Async/Await",
            "category": "Asynchronicité et Promesses",
            "question_number": 8,
            "question_type": "code_analysis",
            "question_text": "Quelle est la bonne pratique de gestion des erreurs démontrée ici avec `async/await` ?",
            "snippet": {
              "code": "async function queryDatabase(query) {\n  try {\n    let response = await database.query(query);\n    return response.records;\n  } catch (error) {\n    throw new Error('La requête a échoué');\n  }\n}\n\nasync function getData() {\n  try {\n    let data = await queryDatabase('SELECT * FROM users');\n    console.log(data);\n  } catch (error) {\n    console.error(error.message);\n  }\n}"
            },
            "options": {
              "A": "Les erreurs sont ignorées dans `queryDatabase` et gérées uniquement dans `getData`",
              "B": "Les erreurs sont renvoyées à l'appelant de `queryDatabase`",
              "C": "Une nouvelle erreur est lancée dans `getData` si `queryDatabase` échoue",
              "D": "Les erreurs sont enregistrées dans `queryDatabase` et ne sont pas propagées"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "Dans ce code, `queryDatabase` attrape les erreurs et les relance, permettant à l'appelant (`getData`) de les gérer. Cela montre un modèle de propagation d'erreur où les fonctions appelantes sont responsables de la gestion des erreurs."
          },
          {
            "title": "Éviter les Race Conditions avec les Promesses",
            "category": "Asynchronicité et Promesses",
            "question_number": 9,
            "question_type": "code_analysis",
            "question_text": "Comment ce code pourrait-il conduire à une race condition et comment la prévenir ?",
            "snippet": {
              "code": "let globalData = null;\n\nasync function fetchData(url) {\n  const response = await fetch(url);\n  globalData = await response.json();\n}\n\nasync function processData() {\n  if (globalData === null) {\n    await fetchData('https://api.example.com/data');\n  }\n  console.log('Traitement des données:', globalData);\n}\n\nprocessData();\nprocessData();"
            },
            "options": {
              "A": "En exécutant `processData` deux fois simultanément ; résoudre en vérifiant `globalData` avant de le modifier",
              "B": "En appelant `fetchData` de manière asynchrone ; résoudre en utilisant `Promise.all`",
              "C": "En vérifiant `globalData` pour `null` ; résoudre en initialisant `globalData` avec une valeur non nulle",
              "D": "En accédant à `globalData` simultanément ; résoudre en utilisant un verrou ou un mutex"
            },
            "correct_answer": {
              "answer": "D"
            },
            "explanation": "Ce code peut conduire à une race condition car `processData` peut être appelée plusieurs fois avant que `globalData` ne soit initialisé. Utiliser un verrou ou un mutex pour contrôler l'accès à `globalData` peut prévenir cette condition."
          },
          {
            "title": "Gérer l'Asynchronicité avec les Callbacks",
            "category": "Asynchronicité et Promesses",
            "question_number": 10,
            "question_type": "code_analysis",
            "question_text": "Quels sont les problèmes potentiels avec cette approche de callback et comment les promesses pourraient-elles aider ?",
            "snippet": {
              "code": "function asyncOperation(callback) {\n  setTimeout(() => {\n    const result = 'Résultat de l\\'opération';\n    callback(result);\n  }, 1000);\n}\n\nasyncOperation(result => {\n  console.log(result);\n  asyncOperation(secondResult => {\n    console.log(secondResult);\n  });\n});"
            },
            "options": {
              "A": "Difficulté à gérer les erreurs ; les promesses permettent une meilleure gestion des erreurs",
              "B": "Impossible de savoir quand l'opération est terminée ; les promesses fournissent une syntaxe `then` pour cela",
              "C": "Risque de callback hell ; les promesses offrent une structure plus lisible",
              "D": "Toutes les réponses ci-dessus"
            },
            "correct_answer": {
              "answer": "D"
            },
            "explanation": "Les problèmes majeurs avec les callbacks sont la difficulté à gérer les erreurs, à déterminer quand les opérations sont terminées et la complexité liée au callback hell. Les promesses offrent des solutions à ces problèmes avec une syntaxe plus claire et des méthodes intégrées pour gérer les erreurs."
          },
          {
            "title": "Sélectionner des Éléments dans le DOM",
            "category": "Manipulation du DOM",
            "question_number": 1,
            "question_type": "code_analysis",
            "question_text": "Que représente `selectedElement` dans ce contexte ?",
            "snippet": {
              "html": "<div class='container'>\n  <div class='box' id='box1'>Boîte 1</div>\n  <div class='box' id='box2'>Boîte 2</div>\n</div>",
              "javascript": "let selectedElement = document.querySelector('.box');"
            },
            "options": {
              "A": "Un tableau contenant tous les éléments avec la classe `box`",
              "B": "Le premier élément du DOM avec la classe `box`",
              "C": "Tous les éléments du DOM avec la classe `box`",
              "D": "Le dernier élément du DOM avec la classe `box`"
            },
            "correct_answer": {
              "answer": "B"
            },
            "explanation": "`document.querySelector` renvoie le premier élément du document qui correspond au sélecteur spécifié. Dans ce cas, il s'agit du premier élément avec la classe `box`."
          },
          {
            "title": "Modifier le Style d'un Élément du DOM",
            "category": "Manipulation du DOM",
            "question_number": 2,
            "question_type": "code_analysis",
            "question_text": "Quel est l'effet de ce code JavaScript ?",
            "snippet": {
              "javascript": "let box = document.getElementById('myBox');\nbox.style.backgroundColor = 'blue';"
            },
            "options": {
              "A": "Il change la couleur d'arrière-plan de l'élément avec l'ID `myBox` en bleu",
              "B": "Il crée un nouvel élément avec un arrière-plan bleu",
              "C": "Il change la couleur de texte de l'élément avec l'ID `myBox` en bleu",
              "D": "Aucun effet, car la syntaxe est incorrecte"
            },
            "correct_answer": {
              "answer": "A"
            },
            "explanation": "Ce code sélectionne l'élément du DOM avec l'ID `myBox` et modifie sa propriété de style pour changer la couleur d'arrière-plan en bleu."
          },
          {
            "title": "Gestion des Événements dans le DOM",
            "category": "Manipulation du DOM",
            "question_number": 3,
            "question_type": "code_analysis",
            "question_text": "Quels seront les effets lorsque l'utilisateur clique sur le bouton avec l'ID `myButton` ?",
            "snippet": {
              "javascript": "document.getElementById('myButton').addEventListener('click', function() {\n  console.log('Bouton cliqué');\n});"
            },
            "options": {
              "A": "Le message 'Bouton cliqué' est affiché dans la console",
              "B": "Une nouvelle fenêtre s'ouvre",
              "C": "Le bouton est désactivé",
              "D": "Aucun effet, le code ne fonctionne pas"
            },
            "correct_answer": {
              "answer": ["A"]
            },
            "explanation": "Ce code attache un gestionnaire d'événement 'click' au bouton. Lorsque le bouton est cliqué, le message 'Bouton cliqué' est affiché dans la console."
          },
          {
            "title": "Ajouter et Supprimer des Classes CSS",
            "category": "Manipulation du DOM",
            "question_number": 4,
            "question_type": "code_analysis",
            "question_text": "Quels changements sont apportés à l'élément avec la classe `box` ?",
            "snippet": {
              "javascript": "let box = document.querySelector('.box');\nbox.classList.add('active');\nbox.classList.remove('hidden');"
            },
            "options": {
              "A": "La classe 'active' est ajoutée à l'élément",
              "B": "La classe 'hidden' est retirée de l'élément",
              "C": "La couleur de fond de l'élément change",
              "D": "L'élément est supprimé du DOM"
            },
            "correct_answer": {
              "answer": ["A", "B"]
            },
            "explanation": "Ce code ajoute la classe 'active' et retire la classe 'hidden' de l'élément sélectionné. Cela peut changer l'apparence de l'élément en fonction des styles CSS associés à ces classes."
          },
          {
            "title": "Modification Dynamique du Style avec JavaScript",
            "category": "Manipulation du DOM",
            "question_number": 5,
            "question_type": "code_analysis",
            "question_text": "Quel est l'effet de ce code JavaScript sur l'élément `infoBox` ?",
            "snippet": {
              "html": "<div id='infoBox' style='background-color: yellow;'>Informations</div>",
              "javascript": "document.getElementById('infoBox').style.backgroundColor = 'green';"
            },
            "options": {
              "A": "Change la couleur d'arrière-plan de l'élément en vert",
              "B": "Ne change rien car le style est déjà défini en HTML",
              "C": "Supprime l'élément du DOM",
              "D": "Change le texte de l'élément en 'green'"
            },
            "correct_answer": {
              "answer": ["A"]
            },
            "explanation": "Ce code JavaScript modifie dynamiquement le style de l'élément `infoBox`, changeant sa couleur d'arrière-plan de jaune à vert, peu importe le style défini initialement en HTML."
          },
          {
            "title": "Manipulation des Attributs d'Éléments DOM",
            "category": "Manipulation du DOM",
            "question_number": 6,
            "question_type": "code_analysis",
            "question_text": "Que fait ce code JavaScript ?",
            "snippet": {
              "javascript": "let link = document.createElement('a');\nlink.setAttribute('href', 'https://www.example.com');\nlink.textContent = 'Visitez Example.com';\ndocument.body.appendChild(link);"
            },
            "options": {
              "A": "Crée un nouvel élément de lien pointant vers 'https://www.example.com' et l'ajoute au body",
              "B": "Modifie tous les liens existants pour pointer vers 'https://www.example.com'",
              "C": "Affiche une alerte avec le texte 'Visitez Example.com'",
              "D": "Crée un bouton qui redirige vers 'https://www.example.com' lorsqu'on clique dessus"
            },
            "correct_answer": {
              "answer": ["A"]
            },
            "explanation": "Ce code crée dynamiquement un nouvel élément de lien (`<a>`), définit son attribut `href` pour pointer vers 'https://www.example.com', définit son texte et l'ajoute finalement au corps du document HTML."
          },
          {
            "title": "Propagation des Événements dans le DOM",
            "category": "Manipulation du DOM",
            "question_number": 7,
            "question_type": "code_analysis",
            "question_text": "Que se passe-t-il lorsque le bouton est cliqué ?",
            "snippet": {
              "html": "<div id='parent'>\n  <button id='child'>Cliquez-moi</button>\n</div>",
              "javascript": "document.getElementById('parent').addEventListener('click', () => {\n  console.log('Parent cliqué');\n});\ndocument.getElementById('child').addEventListener('click', () => {\n  console.log('Enfant cliqué');\n});"
            },
            "options": {
              "A": "Seul 'Enfant cliqué' est affiché dans la console",
              "B": "Seul 'Parent cliqué' est affiché dans la console",
              "C": "'Enfant cliqué' suivi de 'Parent cliqué' sont affichés dans la console",
              "D": "'Parent cliqué' suivi de 'Enfant cliqué' sont affichés dans la console"
            },
            "correct_answer": {
              "answer": ["C"]
            },
            "explanation": "Lorsque le bouton est cliqué, les deux gestionnaires d'événements sont déclenchés en raison de la propagation des événements. D'abord l'événement de l'enfant est traité, puis il remonte au parent."
          },
          {
            "title": "Optimisation de la Performance lors de la Modification du DOM",
            "category": "Manipulation du DOM",
            "question_number": 8,
            "question_type": "text_simple",
            "question_text": "Dans un scénario où vous devez ajouter plusieurs éléments au DOM, quelle approche est la plus performante ?",
            "options": {
              "A": "Ajouter chaque élément individuellement au DOM",
              "B": "Utiliser `document.createDocumentFragment()` pour construire le contenu hors-DOM avant l'ajout",
              "C": "Utiliser `innerHTML` pour ajouter tous les éléments en une seule opération",
              "D": "Utiliser `setTimeout` pour ajouter chaque élément individuellement"
            },
            "correct_answer": {
              "answer": ["B", "C"]
            },
            "explanation": "Utiliser `document.createDocumentFragment()` ou `innerHTML` pour ajouter plusieurs éléments en une seule opération réduit le nombre de reflows et repaints, ce qui améliore les performances par rapport à l'ajout d'éléments un par un."
          },
          {
            "title": "Accès et Modification des Valeurs de Formulaire",
            "category": "Manipulation du DOM",
            "question_number": 9,
            "question_type": "code_analysis",
            "question_text": "Quels sont les effets de ce code JavaScript sur le champ d'entrée `username` ?",
            "snippet": {
              "html": "<form id='loginForm'>\n  <input type='text' id='username' name='username' value='user123'>\n</form>",
              "javascript": "let username = document.getElementById('username').value;\ndocument.getElementById('username').value = 'nouvelUtilisateur';"
            },
            "options": {
              "A": "Récupère la valeur de l'entrée 'username' et la modifie en 'nouvelUtilisateur'",
              "B": "Affiche la valeur actuelle de l'entrée 'username' dans la console",
              "C": "Crée un nouvel élément d'entrée avec la valeur 'nouvelUtilisateur'",
              "D": "Supprime le champ d'entrée 'username' du formulaire"
            },
            "correct_answer": {
              "answer": ["A"]
            },
            "explanation": "Ce code JavaScript récupère d'abord la valeur actuelle du champ d'entrée `username`, puis définit une nouvelle valeur pour ce champ, changeant ainsi sa valeur en 'nouvelUtilisateur'."
          },
          {
            "title": "Optimisation des Écouteurs d'Événements pour la Performance",
            "category": "Manipulation du DOM",
            "question_number": 10,
            "question_type": "text_simple",
            "question_text": "Quelle approche est la plus performante pour gérer les clics sur de nombreux boutons ?",
            "options": {
              "A": "Attacher un écouteur d'événements à chaque bouton individuellement",
              "B": "Utiliser la délégation d'événements en attachant un seul écouteur d'événements au parent commun",
              "C": "Utiliser `setInterval` pour vérifier régulièrement les clics sur les boutons",
              "D": "Attacher les écouteurs d'événements lors du survol de la souris sur les boutons"
            },
            "correct_answer": {
              "answer": ["B"]
            },
            "explanation": "La délégation d'événements est une technique performante pour gérer les événements sur de multiples éléments. En attachant un écouteur d'événements au parent commun, vous réduisez le nombre d'écouteurs nécessaires et améliorez la performance, en particulier pour de grands ensembles d'éléments."
          }
                                                                                                                                                                                                                                                                         
          
    ]
};
  
export default QCM_db;