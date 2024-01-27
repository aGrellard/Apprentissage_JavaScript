`-Infinity` en JavaScript représente une valeur numérique qui est inférieure à toutes les autres valeurs numériques. En termes mathématiques, c'est l'équivalent de l'infini négatif. Voici quelques points clés pour comprendre `-Infinity` :

1. **Définition :**
   - `-Infinity` est une propriété globale qui représente une valeur inférieure à la limite la plus basse des nombres représentables en JavaScript.

2. **Utilisation :**
   - Elle est souvent utilisée dans des calculs qui nécessitent une initialisation avec une valeur extrêmement basse, par exemple, lors de la recherche de la valeur maximale dans un tableau de nombres. En commençant avec `-Infinity`, n'importe quel autre nombre rencontré sera plus grand.

3. **Comparaison :**
   - Tout nombre comparé à `-Infinity` sera plus grand, sauf `-Infinity` lui-même.
   - Par exemple, `(-Infinity < 0)` est `true` et `(-Infinity < -1000000)` est également `true`.

4. **Arithmétique :**
   - Des opérations mathématiques impliquant `-Infinity` suivront les règles normales de l'arithmétique infinie. Par exemple, `(-Infinity + 1)` est toujours `-Infinity`.

5. **Type :**
   - Le type de `-Infinity`, selon l'opérateur `typeof`, est `'number'`. Cela signifie que `-Infinity` est considéré comme un nombre en JavaScript, bien qu'il représente une notion mathématique abstraite.

6. **Overflow et Underflow :**
   - `-Infinity` peut également résulter d'un underflow, où une opération mathématique aboutit à un nombre plus petit que ce qui peut être représenté.

7. **JSON :**
   - Si vous encodez `-Infinity` en JSON en utilisant `JSON.stringify()`, il sera converti en `null`, car `Infinity` et `-Infinity` ne sont pas valides en JSON.

8. **Vérification :**
   - Pour vérifier si une variable est `-Infinity`, utilisez l'égalité (`value === -Infinity`).

```javascript
let x = -1 / 0; // Résultat en -Infinity
console.log(x === -Infinity); // true
```

`-Infinity` est donc un concept important en JavaScript, surtout lors de la manipulation de calculs mathématiques et de comparaisons.