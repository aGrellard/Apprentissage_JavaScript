const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];
// IMC = poids en kg / taille² en m


// gestion des erreurs de saisie
function getInputError(nombre){
  if (!nombre) return true;
  nombre = parseFloat(nombre);
  if (!isNaN(nombre) && isFinite(nombre)) {
    if (nombre < 0) return true; 
    return false;
  }
  return true;
}

// calcul imc via inputs value
function calculIMC(inputTaille, inputPoids){
  let tailleMettre = inputTaille / 100;
  let poids = inputPoids;
  return poids / Math.pow(tailleMettre, 2);  
}

// maj du bloc infos imc et saisi utilisateur 
function updUI_infos(imcName, color) {
  document.querySelector('.upd').querySelectorAll('p')[1].innerText = imcName;
  document.querySelector('.upd').querySelectorAll('p')[0].style.color = color;
  document.querySelector('.upd').querySelectorAll('p')[1].style.color = color;
}
function updUI_imc(imc) {
  document.querySelector('.upd').querySelectorAll('p')[0].innerText = imc.toFixed(2);
}

// main function
function handleButtonIMC(e){
  e.preventDefault();

  let inputTaille = document.querySelectorAll('input')[0];
  let inputPoids  = document.querySelectorAll('input')[1];
  if (!getInputError(inputPoids.value) && !getInputError(inputTaille.value)) {
    let imc = calculIMC(inputTaille.value, inputPoids.value);
    updUI_imc(imc);
    BMIData.forEach(item=>{
      if (Array.isArray(item.range)) {
        let min = item.range[0];
        let max = item.range[1];
        if (imc >= min && imc < max) {
          updUI_infos(item.name, item.color) 
        }
      } else {
        if (imc >= item.range) {
          updUI_infos(item.name, item.color) 
        }
      }
    });
  } else {
    updUI_infos("Erreur de saisie !", "inherit");
    updUI_imc(0);
  }
}

// ajout d'un evennement sur le bouton
document.querySelector('button').addEventListener('click', handleButtonIMC)