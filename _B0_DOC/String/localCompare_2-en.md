
![totn JavaScript](/js/images/js.png)

* * *

JavaScript: String localeCompare() method
=========================================

This JavaScript tutorial explains how to use the string method called localeCompare() with syntax and examples.

Description
-----------

In JavaScript, localeCompare() is a string method that is used to compare two strings and return a numeric value indicating which string comes first in the sort order based on locale. Because the localeCompare() method is a method of the String object, it must be invoked through a particular instance of the String class.

Syntax
------

In JavaScript, the syntax for the localeCompare() method is:

_string_.localeCompare(compare_string \[, locale \[, options\]\]);

### Parameters or Arguments

compare_string

It is a string value that will be compared against the localeCompare() method's calling string.

locale

Optional. It is a [BCP 47 language tag](language_tags.php) or an array of such tags that will be used to determine the sort order. A BCP 47 language tag defines a language that may contain a primary language code as well as an extension. If this parameter is not provided, the localeCompare() method will use the host environment's current locale.

options

Optional. The options to apply to the sort order. It can be one or more of the following:

| Value | Description |
| --- | --- |
| caseFirst | Determines how "case" will be handled when sorting. It can be one of the following values:<br><br>* _upper_ \- uppercase will be sorted first<br>* _lower_ \- lowercase will be sorted first<br>* _false_ \- use the locale's default sorting (_default_) |
| ignorePunctuation | Determines whether punctuation will be ignored. It can be one of the following values:<br><br>* _true_ \- punctuation will be ignored when sorting<br>* _false_ \- punctuation will not be ignored when sorting (_default_) |
| localeMatcher | Determines the locale matching algorithm to use. It can be one of the following values:<br><br>* _lookup_<br>* _best fit_ (_default_) |
| numeric | Determines whether numeric collation will be used. It can be one of the following values:<br><br>* _true_ \- numeric collation will be used when sorting<br>* _false_ \- numeric collation will not be used when sorting (_default_) |
| sensitivity | Determines whether numeric collation will be used. It can be one of the following values:<br><br>* _base_ \- strings that do not have the same base letters are considered unequal<br>* _accent_ \- strings that do not have the same base letters or accents are considered unequal<br>* _case_ \- strings that do not have the same base letters or case are considered unequal<br>* _variant_ \- strings that do not have the same base letters, accents or case are considered unequal (_default_) |
| usage | Determines whether the method will perform sorting or searching for matching string. It can be one of the following values:<br><br>* _sort_ \- method will perform sorting (_default_)<br>* _search_ \- method will search for matching strings |

Returns
-------

The localeCompare() method returns a **negative number** if the calling _string_ appears before the _compare_string_ in the sort order.

The localeCompare() method returns a **positive number** if the calling _string_ appears after the _compare_string_ in the sort order.

The localeCompare() method returns **0** if the calling _string_ is equivalent to the _compare_string_ and thus appears at the same position in the sort order.

Note
----

* The localeCompare() method does not change the value of the original _string_.
* Depending on the browser, the localeCompare() method may return different positive or negative values when the strings are not equivalent, such as 1, 2, -1, or -2. So when using this method, be sure to test for a positive or negative value and not a specific numeric value such as -1.
* It is okay to test for a value of 0 when the calling _string_ and _compare_string_ are equivalent. This return value does not differ between browsers.

Example
-------

Let's take a look at an example of how to use the localeCompare() method in JavaScript.

For example:

    var totn_string = 'TechOnTheNet';
    
    console.log(totn_string.localeCompare('abc'));

In this example, we have declared a variable called _totn_string_ that is assigned the string value of 'TechOnTheNet'. We have then invoked the localeCompare() method of the _totn_string_ variable to compare this string value to 'abc'.

We have written the output of the localeCompare() method to the [web browser console log](open_console_log.php), for demonstration purposes, to show what the localeCompare() method returns.

The following will be output to the [web browser console log](open_console_log.php):

1

In this example, the localeCompare() method returned a positive value of 1 because the string 'TechOnTheNet' appeared after 'abc' in the sort order.

Depending on the browser, the localeCompare() method may return a different positive value such as 1 or 2, or any other positive value. Don't assume that it will be a return value of 1.

### Specifying a Locale Parameter

You can also provide a [BCP 47 language tag](language_tags.php) for the _locale_ parameter to change the sort order based on locale.

For example:

    var totn_string = 'TechOnTheNet';
    
    console.log(totn_string.localeCompare('xyz','en-US'));

The following will be output to the [web browser console log](open_console_log.php):

-1

In this example, the localeCompare() method used a parameter of 'en-US' that sorted the strings using US English. The method returned a negative value of -1 because the string 'TechOnTheNet' appeared before 'xyz' using this sort order.

Again, remember that depending on the browser, the localeCompare() method may return a different negative value such as -1 or -2, or any other negative value. Don't assume that it will be a return value of -1.

### Specifying an Option Parameter

Next, the localeCompare() method has many options that you can specify that affects the sort order.

For example:

    var totn_string = '8';
    
    console.log(totn_string.localeCompare('30'));

The following will be output to the [web browser console log](open_console_log.php):

1

In this example, the localeCompare() method returned 1 because the string value '8' comes after '30' using a string sort.

However, what if we want to sort our values numerically? We can apply a numeric sort using an option parameter as follows:

    var totn_string = '8';
    
    console.log(totn_string.localeCompare('30', 'en-US', {numeric:"true"}));

The following will be output to the [web browser console log](open_console_log.php):

-1

Now the localeCompare() method returned -1 because the value '8' comes before '30' when sorting the values numerically.

[![previous](/images/previous.png)](/js/string_link.php)[NEXT: match![next](/images/next.png)](/js/string_match.php)
