La différence principale entre `window.onload` et `DOMContentLoaded` réside dans le moment où ces événements sont déclenchés lors du chargement d'une page web.

### `DOMContentLoaded`

L'événement `DOMContentLoaded` est déclenché lorsque le document HTML a été complètement chargé et analysé, sans attendre que les feuilles de style, les images, et les sous-frames aient fini de charger. Cela signifie que c'est l'événement à utiliser si vous voulez manipuler le DOM dès que possible, sans attendre que tous les éléments de la page soient chargés.

```javascript
document.addEventListener("DOMContentLoaded", function() {
  // Code à exécuter après le chargement complet du DOM
});
```

### `window.onload`

L'événement `window.onload`, en revanche, est déclenché lorsque la page entière est complètement chargée, y compris tous les contenus dépendants tels que les feuilles de style, les images, et les iframes. C'est l'événement à utiliser si le script que vous souhaitez exécuter dépend de ces éléments extérieurs au DOM.

```javascript
window.onload = function() {
  // Code à exécuter après le chargement complet de la page, y compris les images et les feuilles de style
};
```

### Quand utiliser l'un ou l'autre ?

- Utilisez `DOMContentLoaded` lorsque vous avez besoin d'exécuter du JavaScript dès que le DOM est prêt à être manipulé, mais avant que d'autres ressources comme les images ne soient chargées. Cela peut accélérer l'interaction de l'utilisateur avec la page car le script s'exécute sans attendre le chargement complet de la page.

- Utilisez `window.onload` lorsque votre script dépend de ressources externes qui doivent être chargées avant que le script ne s'exécute. Par exemple, si votre script travaille avec des images et que vous avez besoin de connaître leurs dimensions, ces informations ne seront disponibles qu'après le chargement complet de la page.