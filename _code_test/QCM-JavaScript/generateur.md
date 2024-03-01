# description

Crée un test QCM pour tester les compétences et connaissances dans le langage de programmation de scripts Javascript. 

Le test sera composé de questions destinées à des personnes ayant déjà eu une expérience d’utilisation dans ce langage avec un niveau intermédiaire+. 

La ou les réponses doivent être fournies avec leurs explications, ce test s'adresse au temps au participant que pour le créateur.


## les thémes
Voici la liste révisée des catégories avec le nombre de questions prévu pour chacune :
1.	Les Méthodes sur les Tableaux : 10 questions
2.	Les Variables (types, scope, déclaration, mutabilité) : 10 questions
3.	La Programmation Orientée Objet : 10 questions
4.	Les Boucles : 10 questions
5.	Les Opérateurs : 10 questions
6.	Les Fonctions : 10 questions
7.	Les Méthodes d’Instance : 10 questions
8.	La Notation Pointée : 10 questions
9.	Les Tests Unitaires et Fonctionnels : 10 questions
10.	Les Évolutions de JavaScript et son Lien avec ECMAScript : 10 questions
11.	Gestion des Erreurs et Debugging : 10 questions
12.	Asynchronicité et Promesses : 10 questions
13.	Manipulation du DOM : 10 questions
14.	APIs Web et Requêtes HTTP : 10 questions
15.	Patterns de Conception : 10 questions
16.	Sécurité en JavaScript : 10 questions
17.	Optimisation des Performances : 10 questions

# question et réponses

Les questions et les réponses doivent être variées et ne pas être redondants

## Types de questions
Types de questions attendus :

1. Questions sur l'analyse de bloc de code (minimum 8 questions par catégorie).
2. Questions de type texte simple (maximum 2 questions par catégories).

## Types de réponses
Types de réponses attendus :

1. Réponses à Choix Multiples : Des options de réponse (2 à 5) seront proposées, avec une seule ou plusieurs réponses correctes, éviter la redondance et varier le nombres de réponses correctes
2. il faut faire attention à la redondance dans l'ordre des réponses.
3. analyse de l'ordre des réponses précédentes pour éviter toutes redondance avec l'ordres des réponses précédentes.

Les questions et les réponses doivent être variées et ne pas être redondants

Penses à varier les type de réponse : soit choix multiples possible, soit une seule réponse

# Format de sortie
Format attendu après chaque question :

Exemple 1:
```json
{
  "title": "Réduire un tableau à une seule valeur",
  "category": "Les Méthodes sur les Tableaux",
  "question_number": 1,
  "question_type": "code_analysis",
  "question_text": "Quel est le résultat de l'opération `reduce` dans ce code ?",
  "snippet": {
    "html":"",
    "javascript": "let numbers = [1, 2, 3, 4];\nlet sum = numbers.reduce((total, current) => total + current, 0);"
  },
  "options": {
    "A": "10",
    "B": "0",
    "C": "24",
    "D": "9"
  },
  "correct_answer": {
    "answer": ["A"]
  },
  "explanation": "La méthode `reduce` applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'un tableau (de gauche à droite) pour la réduire à une seule valeur. Ici, elle calcule la somme des nombres, donnant 10."
}

```
Exemple 2:
```json
{
  "title": "Combinaisons de méthodes sur les tableaux",
  "category": "Les Méthodes sur les Tableaux",
  "question_number": 11,
  "question_type": "code_analysis",
  "question_text": "Quelles affirmations sont vraies concernant le code suivant ?",
  "snippet": {
    "html": "",
    "javascript": "let numbers = [1, 2, 3, 4];\nlet processed = numbers.map(x => x * 2).filter(x => x > 5);"
  },
  "options": {
    "A": "Le résultat final `processed` est `[6, 8]`",
    "B": "`map` est appliqué avant `filter`",
    "C": "Le résultat de `map` seul serait `[2, 4, 6, 8]`",
    "D": "`filter` élimine tous les éléments inférieurs à 5",
    "E": "Le code génère une erreur"
  },
  "correct_answer": {
    "answer": ["A", "B", "C", "D"]
  },
  "explanation": "Ce code utilise d'abord `map` pour doubler chaque élément du tableau, produisant `[2, 4, 6, 8]`. Ensuite, `filter` est appliqué pour éliminer les éléments inférieurs ou égaux à 5, laissant `[6, 8]` comme résultat final dans `processed`. Aucune erreur n'est générée."
}

```