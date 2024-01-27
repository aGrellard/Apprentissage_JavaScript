const memoizedFibonacci = (function() {
    const cache = {};
    return function(n) {
      if (n in cache) return cache[n];
      const result = n <= 2 ? 1 : memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
      cache[n] = result;
      return result;
    };
  })();
  
  // Calculer le 10ème nombre de Fibonacci
  const fibonacci10 = memoizedFibonacci(10);
  
  console.log(`Le 10ème nombre de Fibonacci est : ${fibonacci10}`);

  
// Fusionne deux tableaux triés
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Tant qu'il y a des éléments dans les deux tableaux
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++; // déplacer l'index du tableau de gauche
        } else {
            result.push(right[rightIndex]);
            rightIndex++; // déplacer l'index du tableau de droite
        }
    }

    // Copier les éléments restants des deux moitiés, s'il y en a
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Diviser le tableau en deux moitiés
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Trier chaque moitié et les fusionner
    return merge(mergeSort(left), mergeSort(right));
}
// Exemple d'utilisation
const array = [34, 7, 23, 32, 5, 62];
console.log("Tableau trié :", mergeSort(array));
