Voici la traduction en français du texte :

---

![totn JavaScript](/js/images/js.png)

* * *

JavaScript : Méthode indexOf() de String
========================================

Ce tutoriel JavaScript explique comment utiliser la méthode de string appelée indexOf() avec la syntaxe et des exemples.

Description
-----------

En JavaScript, indexOf() est une méthode de string qui est utilisée pour trouver l'emplacement d'une sous-chaîne dans une chaîne. Étant donné que la méthode indexOf() est une méthode de l'objet String, elle doit être invoquée via une instance particulière de la classe String.

Syntaxe
------

En JavaScript, la syntaxe pour la méthode indexOf() est :

_string_.indexOf(substring \[, start_position\]);

### Paramètres ou Arguments

substring

Il s'agit de la sous-chaîne que vous souhaitez trouver dans _string_.

start_position

Facultatif. C'est la position dans _string_ où la recherche commencera. La première position dans _string_ est 0. Si ce paramètre n'est pas fourni, la recherche débutera au début de _string_ et la chaîne entière sera recherchée.

Retours
-------

La méthode indexOf() renvoie la position de la première occurrence de substring dans _string_. La première position dans la chaîne est 0.

Si la méthode indexOf() ne trouve pas le _substring_ dans _string_, elle renverra -1.

Note
----

* La méthode indexOf() effectue une recherche sensible à la casse.
* La méthode indexOf() ne change pas la valeur de la _string_ originale.

Exemple
-------

Voyons un exemple de comment utiliser la méthode indexOf() en JavaScript.

Par exemple :

    var totn_string = 'TechOnTheNet';
    
    console.log(totn_string.indexOf('t'));

Dans cet exemple, nous avons déclaré une variable appelée _totn_string_ qui est assignée à la valeur de chaîne 'TechOnTheNet'. Nous avons ensuite invoqué la méthode indexOf() de la variable _totn_string_ pour rechercher une _substring_ dans _totn_string_.

Nous avons écrit la sortie de la méthode indexOf() dans la [console log du navigateur web](open_console_log.php), à des fins de démonstration, pour montrer ce que la méthode indexOf() renvoie.

Le résultat suivant sera affiché dans la [console log du navigateur web](open_console_log.php) :

11

Dans cet exemple, la méthode indexOf() a renvoyé 11 car la première occurrence de 't' dans 'TechOnTheNet' se trouve à la position 11 dans la chaîne.

### Spécification d'un Paramètre de Position de Départ

Vous pouvez changer la position où la recherche commencera dans la chaîne en fournissant un paramètre _start_position_ à la méthode indexOf().

Par exemple :

    var totn_string = 'TechOnTheNet';
    
    console.log(totn_string.indexOf('T',4));

Le résultat suivant sera affiché dans la [console log du navigateur web](open_console_log.php) :

6

Dans cet exemple, nous avons défini le paramètre _start_position_ à une valeur de 4. Cela signifie que la recherche commencera à chercher la valeur 'T' à partir de la position 4 dans la chaîne. Donc, dans ce cas, la sous-chaîne 'T' est trouvée à la position 6 dans la chaîne 'TechOnTheNet'.

### Spécification de Plusieurs Caractères comme la Sous-Chaîne

Ensuite, la méthode indexOf() peut rechercher plusieurs caractères dans une chaîne.

Par exemple :

    var totn_string = 'TechOnTheNet';
    
    console.log(totn_string.indexOf('The'));

Le résultat suivant sera affiché dans la [console log du navigateur web](open_console_log.php) :

6

Dans cet exemple, la méthode indexOf() a renvoyé 6, qui est la position de 'The' dans la chaîne 'TechOnTheNet'.

Puisque la méthode indexOf() ne peut renvoyer qu'une seule valeur, elle renverra la position du premier caractère de la _substring_ lorsque l'occurrence est trouvée, même si la _substring_ est composée de plusieurs caractères.

### Aucune Occurrence Trouvée

Enfin, la méthode indexOf() renverra -1 si une occurrence de _substring_ n'est pas trouvée dans _string_.

Par exemple :

    var totn_string = 'TechOnTheNet';
    
    console.log(totn_string.indexOf('z'));

Le résultat suivant sera affiché dans la [console

 log du navigateur web](open_console_log.php) :

-1

Dans cet exemple, la méthode indexOf() a renvoyé -1 car la sous-chaîne 'z' n'est pas trouvée dans la chaîne 'TechOnTheNet'.
