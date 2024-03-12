# le **problème de la conversion de température**.

Ce problème consiste à convertir une température donnée de degrés Celsius en degrés Fahrenheit, et vice-versa.

## Énoncé du problème

Écrivez deux fonctions en JavaScript : 
1. Une fonction qui convertit la température de Celsius en Fahrenheit.
2. Une fonction qui convertit la température de Fahrenheit en Celsius.

Les formules de conversion sont les suivantes :
- De Celsius en Fahrenheit : \(F = C \times \frac{9}{5} + 32\)
- De Fahrenheit en Celsius : \(C = (F - 32) \times \frac{5}{9}\)

## Solution

Voici comment implémenter ces deux fonctions en JavaScript :

<details>

```javascript
function celsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
```
</details>

```javascript
// Exemple d'utilisation
console.log(celsiusToFahrenheit(0)); // 32
console.log(fahrenheitToCelsius(32)); // 0
console.log(celsiusToFahrenheit(100)); // 212
console.log(fahrenheitToCelsius(212)); // 100
```

## Explication

<details>

- **Conversion de Celsius en Fahrenheit** : La fonction `celsiusToFahrenheit` prend une température en degrés Celsius comme argument et utilise la formule de conversion pour retourner la température équivalente en degrés Fahrenheit.
- **Conversion de Fahrenheit en Celsius** : La fonction `fahrenheitToCelsius` fait l'inverse, prenant une température en degrés Fahrenheit et utilisant la formule de conversion pour retourner la température équivalente en degrés Celsius.

Ces fonctions illustrent l'utilisation de calculs arithmétiques simples en JavaScript et comment appliquer des formules mathématiques dans le code. C'est un excellent exemple pour les débutants pour commencer à travailler avec des fonctions et des opérations mathématiques de base.
</details>

