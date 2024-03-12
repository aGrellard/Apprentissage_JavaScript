L'échappement des caractères est généralement effectué côté serveur, au moment de préparer la requête SQL pour insérer ou mettre à jour les données dans la base de données, plutôt qu'au moment de la saisie par l'utilisateur. Voici pourquoi :

1. **Sécurité :** L'échappement des caractères aide à prévenir les attaques par injection SQL, où un attaquant tente d'insérer des instructions SQL malveillantes dans une requête à travers les entrées utilisateur. En échappant les caractères spéciaux, vous vous assurez que les données fournies par l'utilisateur sont traitées comme de simples données et non comme une partie de la commande SQL.

2. **Intégrité des données :** En effectuant l'échappement des caractères côté serveur, vous vous assurez que toutes les données insérées dans la base de données sont correctement formatées, quel que soit le type de client ou la manière dont les données sont envoyées au serveur. Cela garantit une cohérence dans le traitement des données.

3. **Flexibilité :** Les utilisateurs peuvent ne pas être conscients de la nécessité d'échapper certains caractères ou peuvent ne pas savoir comment le faire correctement. En gérant l'échappement côté serveur, vous réduisez le risque d'erreurs de l'utilisateur et vous vous assurez que l'application fonctionne correctement indépendamment de la manière dont les données sont saisies.

Dans les applications Node.js utilisant MySQL, l'échappement peut être géré automatiquement par le module de base de données que vous utilisez. Par exemple, si vous utilisez le module `mysql` ou `mysql2`, vous pouvez utiliser des requêtes préparées ou l'interpolation de chaîne fournie par le module pour insérer des données, comme dans l'exemple suivant :

```javascript
const query = "INSERT INTO table (column) VALUES (?)";
connection.query(query, [userInput], function(err, results) {
  // Gestion des erreurs et des résultats ici
});
```

Dans cet exemple, `?` est un placeholder pour la valeur que vous souhaitez insérer. Le module `mysql` s'occupe de l'échappement de `userInput` pour vous, ce qui rend l'opération sûre.

En résumé, il est préférable de gérer l'échappement des caractères côté serveur au moment de la préparation de vos requêtes SQL pour assurer la sécurité et l'intégrité des données sans imposer de contraintes supplémentaires aux utilisateurs.