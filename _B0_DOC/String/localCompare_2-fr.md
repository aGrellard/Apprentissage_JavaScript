Voici la traduction en français du texte :

---

![totn JavaScript](/js/images/js.png)

* * *

JavaScript : Méthode localeCompare() de String
==============================================

Ce tutoriel JavaScript explique comment utiliser la méthode de string appelée localeCompare() avec la syntaxe et des exemples.

Description
-----------

En JavaScript, localeCompare() est une méthode de string utilisée pour comparer deux chaînes de caractères et retourner une valeur numérique indiquant quelle chaîne vient en premier dans l'ordre de tri basé sur la locale. Étant donné que la méthode localeCompare() est une méthode de l'objet String, elle doit être invoquée via une instance particulière de la classe String.

Syntaxe
------

En JavaScript, la syntaxe pour la méthode localeCompare() est :

_string_.localeCompare(compare_string \[, locale \[, options\]\]);

### Paramètres ou Arguments

compare_string

Il s'agit d'une valeur de chaîne qui sera comparée à la chaîne appelant la méthode localeCompare().

locale

Facultatif. C'est une [étiquette de langue BCP 47](language_tags.php) ou un tableau de telles étiquettes qui seront utilisées pour déterminer l'ordre de tri. Une étiquette de langue BCP 47 définit une langue qui peut contenir un code de langue principal ainsi qu'une extension. Si ce paramètre n'est pas fourni, la méthode localeCompare() utilisera la locale actuelle de l'environnement hôte.

options

Facultatif. Les options à appliquer à l'ordre de tri. Il peut s'agir d'une ou plusieurs des valeurs suivantes :

| Valeur | Description |
| --- | --- |
| caseFirst | Détermine comment la "casse" sera gérée lors du tri. Il peut être l'une des valeurs suivantes :<br><br>* _upper_ \- les majuscules seront triées en premier<br>* _lower_ \- les minuscules seront triées en premier<br>* _false_ \- utiliser le tri par défaut de la locale (_default_) |
| ignorePunctuation | Détermine si la ponctuation sera ignorée. Il peut être l'une des valeurs suivantes :<br><br>* _true_ \- la ponctuation sera ignorée lors du tri<br>* _false_ \- la ponctuation ne sera pas ignorée lors du tri (_default_) |
| localeMatcher | Détermine l'algorithme de correspondance de locale à utiliser. Il peut être l'une des valeurs suivantes :<br><br>* _lookup_<br>* _best fit_ (_default_) |
| numeric | Détermine si le tri numérique sera utilisé. Il peut être l'une des valeurs suivantes :<br><br>* _true_ \- le tri numérique sera utilisé lors du tri<br>* _false_ \- le tri numérique ne sera pas utilisé lors du tri (_default_) |
| sensitivity | Détermine si le tri numérique sera utilisé. Il peut être l'une des valeurs suivantes :<br><br>* _base_ \- les chaînes qui n'ont pas les mêmes lettres de base sont considérées comme inégales<br>* _accent_ \- les chaînes qui n'ont pas les mêmes lettres de base ou accents sont considérées comme inégales<br>* _case_ \- les chaînes qui n'ont pas les mêmes lettres de base ou casse sont considérées comme inégales<br>* _variant_ \- les chaînes qui n'ont pas les mêmes lettres de base, accents ou casse sont considérées comme inégales (_default_) |
| usage | Détermine si la méthode effectuera un tri ou une recherche de chaîne correspondante. Il peut être l'une des valeurs suivantes :<br><br>* _sort_ \- la méthode effectuera un tri (_default_)<br>* _search_ \- la méthode recherchera des chaînes correspondantes |

Retours
-------

La méthode localeCompare() renvoie un **nombre négatif** si la _string_ appelante apparaît avant la _compare_string_ dans l'ordre de tri.

La méthode localeCompare() renvoie un **nombre positif** si la _string_ appelante apparaît après la _compare_string_ dans l'ordre de tri.

La méthode localeCompare() renvoie **0** si la _string_ appelante est équivalente à la _compare_string_ et apparaît donc à la même position dans l'ordre de tri.

Note
----

* La méthode localeCompare()

 ne change pas la valeur de la _string_ originale.
* Selon le navigateur, la méthode localeCompare() peut retourner différentes valeurs positives ou négatives lorsque les chaînes ne sont pas équivalentes, telles que 1, 2, -1 ou -2. Donc, lors de l'utilisation de cette méthode, assurez-vous de tester une valeur positive ou négative et non une valeur numérique spécifique comme -1.
* Il est acceptable de tester une valeur de 0 lorsque la _string_ appelante et la _compare_string_ sont équivalentes. Cette valeur de retour ne diffère pas entre les navigateurs.

Exemple
-------

Voyons un exemple de comment utiliser la méthode localeCompare() en JavaScript.

Par exemple :

    var totn_string = 'TechOnTheNet';
    
    console.log(totn_string.localeCompare('abc'));

Dans cet exemple, nous avons déclaré une variable appelée _totn_string_ qui est assignée à la valeur de chaîne 'TechOnTheNet'. Nous avons ensuite invoqué la méthode localeCompare() de la variable _totn_string_ pour comparer cette valeur de chaîne à 'abc'.

Nous avons écrit la sortie de la méthode localeCompare() dans la [console log du navigateur web](open_console_log.php), à des fins de démonstration, pour montrer ce que la méthode localeCompare() renvoie.

Le résultat suivant sera affiché dans la [console log du navigateur web](open_console_log.php) :

1

Dans cet exemple, la méthode localeCompare() a renvoyé une valeur positive de 1 car la chaîne 'TechOnTheNet' apparaissait après 'abc' dans l'ordre de tri.

Selon le navigateur, la méthode localeCompare() peut renvoyer une valeur positive différente comme 1 ou 2, ou toute autre valeur positive. Ne supposez pas qu'il s'agira d'une valeur de retour de 1.

### Spécification d'un Paramètre de Locale

Vous pouvez également fournir une [étiquette de langue BCP 47](language_tags.php) pour le paramètre _locale_ afin de changer l'ordre de tri en fonction de la locale.

Par exemple :

    var totn_string = 'TechOnTheNet';
    
    console.log(totn_string.localeCompare('xyz','en-US'));

Le résultat suivant sera affiché dans la [console log du navigateur web](open_console_log.php) :

-1

Dans cet exemple, la méthode localeCompare() a utilisé un paramètre de 'en-US' qui a trié les chaînes en utilisant l'anglais américain. La méthode a renvoyé une valeur négative de -1 car la chaîne 'TechOnTheNet' apparaissait avant 'xyz' en utilisant cet ordre de tri.

Encore une fois, rappelez-vous que selon le navigateur, la méthode localeCompare() peut renvoyer une valeur négative différente comme -1 ou -2, ou toute autre valeur négative. Ne supposez pas qu'il s'agira d'une valeur de retour de -1.

### Spécification d'un Paramètre d'Option

Ensuite, la méthode localeCompare() a de nombreuses options que vous pouvez spécifier qui affectent l'ordre de tri.

Par exemple :

    var totn_string = '8';
    
    console.log(totn_string.localeCompare('30'));

Le résultat suivant sera affiché dans la [console log du navigateur web](open_console_log.php) :

1

Dans cet exemple, la méthode localeCompare() a renvoyé 1 car la valeur de chaîne '8' vient après '30' en utilisant un tri de chaînes.

Cependant, que faire si nous voulons trier nos valeurs numériquement ? Nous pouvons appliquer un tri numérique en utilisant un paramètre d'option comme suit :

    var totn_string = '8';
    
    console.log(totn_string.localeCompare('30', 'en-US', {numeric:"true"}));

Le résultat suivant sera affiché dans la [console log du navigateur web](open_console_log.php) :

-1

Maintenant, la méthode localeCompare() a renvoyé -1 car la valeur '8' vient avant '30' lors du tri des valeurs numériquement.
