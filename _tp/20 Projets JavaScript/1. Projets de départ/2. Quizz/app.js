const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const reponsesText = [
  "Bravo c'est un sans faute !", 
  "Vous y êtes presque !", 
  "Encore un effort ...", 
  "Il reste quelques erreurs.", 
  "Peut mieux faire !"
];

// créations db
const questionReponses = [
  [
    "Qui est sacré empereur de France le 2 décembre 1804 ?",
    ["Clovis", "Abraham Lincoln", "Napoleon Bonaparte"],
    ["c", ""]
  ],
  [
    "Quand la déclaration d’indépendance des Etats-Unis a-t-elle été votée ?",
    ["4 juillet 1776", "18 avril 1856", "30 juin 1925"],
    ["a", ""]
  ],
  [
    "Quand a eu lieu la chute de l’empire romain d'occident ?",
    ["15 ap. J.-C.", "476 ap. J.-C.", "-740 av. J.-C."],
    ["b", ""]
  ],
  [
    "Quelle est la capitale de la Slovénie ?",
    ["Ljubljana", "Belgrade", "Bratislava"],
    ["a", ""]
  ],
  [
    "Combien d'habitants compte l'Irlande en 2020 ?",
    ["1,365 Million", "21 Millions", "4,9 Millions"],
    ["c", ""]
  ],
];

const formId = document.querySelector('form');

/*
    div id = "question-"i->questionReponses[]
        h3
        fieldset
            radio
                id      = "radio-" + i->question-questionReponses[] + "-" + i->question-questionReponses[][1]    
                value   = radio-questionReponses[i]-questionReponses[][2][0]      
                name    = i->question-questionReponses[] 

            label
                for     =  i->question-questionReponses[]
                text    =  "radio-" + question-questionReponses[i][1][j]  

    div.id.split("-") = ["question", indexQ]
    radio.id.split("-") = ["radio", indexQ, indexR]
    label.id.split("-") = ["radio", indexQ, indexR]
*/


// constructions du html
questionReponses.forEach((item, index) => {
  let div = document.createElement('div');
  div.id = `question-${index}`
  div.classList.add('container-question');

  let h3 = document.createElement('h3');
  h3.innerText = item[0]; // ennocé de la quéstion

  div.appendChild(h3); // ajout ennocé de la quéstion

  let fieldset = document.createElement('fieldset'); // zone de séléction pour chaque quéstions

  let reponses = item[1]; // array des réponses possible
  let reponse = item[2][0]; // bonne réponse

  for (let j = 0; j < reponses.length; j++) {
    const element = reponses[j];
    const id = `radio-${index}-${j}`; // id au format : radio-question[]-reponses[]
    const div = document.createElement('div') 
    const radio = createRadioElement(id, reponse, index);
    const label = createLabelElement(id, element);
    div.appendChild(radio); // ajout de l(input) au fieldset
    div.appendChild(label); // ajout du label
    fieldset.appendChild(div);
  }
  div.appendChild(fieldset); // ajout du fieldset a la div
  formId.appendChild(div); // ajout de la div a form
});

// Bouton valider
let button = document.createElement('button');
button.innerText = 'Valider';
button.addEventListener('click', e => {
  e.preventDefault();
  checkResponse();
})

formId.appendChild(button);


// Mise à jour de la couleur de la div de l'input cliqué
document.addEventListener("click", (e) => {
  let clickedElement = e.target;
  if (clickedElement.tagName == "INPUT") {
    updateUi_wp();

    // input["type=radio"], filedset, div, form, article, section, main, body
    for (; clickedElement != null; clickedElement = clickedElement.parentElement) {
      
      if (clickedElement.className == "container-question") {
        console.log(clickedElement)
        clickedElement.style.background = "linear-gradient(to right, #ffffff, #ebebeb)";
        break;
      }
    }
    // console.log(parentElement)
    // let split = parentElement.id.split("-")
    // console.log(clickedElement.id.split("-"))

  }
})


function createLabelElement(id, text) {
  let label = document.createElement('label');
  label.htmlFor = id; // id au format : radio-question[]-reponses[]
  label.innerText = text; // text d'une réponse possible
  return label;
}

function createRadioElement(id, value, name) {
  let radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = name; // question[]
  radio.id = id; // id au format : radio-question[]-reponses[]
  radio.value = value; // bonne réponse
  return radio;
}

// Vérifications des réponses
function checkResponse() {
  let count = 0;
  questionReponses.forEach((item, index) => {

    let reponses = item[1]; // array des réponses possible
    // let reponse = item[2][0]; // bonne réponse

    let divId = `question-${index}`;
    let div = document.getElementById(divId);
    
    if (div) {
      for (let j = 0; j < reponses.length; j++) {
        const radioId = `radio-${index}-${j}`;
        const radio = document.getElementById(radioId);
        if (!radio) continue;

        let value = radio.value;
        let indexAlpha = String.fromCharCode(97 + j); // retourne un caractére ASCII par rapport a l'indice de l'array des réponses possible ("a" commence a 97)

        if (radio.checked && (indexAlpha === value)) {
          count++;
          div.style.background = "linear-gradient(to right, #94ffb3, #2cbb54)";
          break;
        } else div.style.background = "linear-gradient(to right, #ffc1c1, #f84141)";

      }
    }
  })
  updateUi(count)
}

function updateUi(nbError) {
  nbError = nbError-1;

  let elmentsP = document.querySelector('.upd').querySelectorAll('p');
  if (elmentsP.length < 1) return;

  let elmentsP_1 = elmentsP[0];
  let elmentsP_2 = elmentsP[1];
  
  let count = reponsesText.length - nbError;
  count = nbError <= 0 ? reponsesText.length-1 : count-1;

  elmentsP_2.innerText = `${emojis[count]} ${reponsesText[count]} ${emojis[count]}`;
  if (reponsesText.length-1 == nbError) elmentsP_1.innerHTML = "Quelle culture...";

}
function updateUi_wp() {
  let elmentsP = document.querySelector('.upd').querySelectorAll('p');
  if (elmentsP.length < 1) return;

  let elmentsP_1 = elmentsP[0];
  let elmentsP_2 = elmentsP[1];
  elmentsP_1.innerHTML = "Cliquer sur <span>valider</span> pour voir les <span>résultats</span>";
  elmentsP_2.innerText = "";
}