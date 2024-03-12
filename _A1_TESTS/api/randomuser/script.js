/*
https://github.com/AZYxV/FakeIdentityGen
function generate(){
    fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then((json) => {
    console.log(json['value']);
    document.getElementById("avatar").src = json['results'][0]['picture']['large'];
    document.getElementById("pseudo").textContent = "@" + json['results'][0]['login']['username'];


    document.getElementById("firstn").textContent = json['results'][0]['name']['first'];
    document.getElementById("lastn").textContent = json['results'][0]['name']['last'];

    document.getElementById("age").textContent = json['results'][0]['dob']['age'];
    document.getElementById("gender").textContent = json['results'][0]['gender'];


    document.getElementById("country").textContent = json['results'][0]['location']['country'];
    document.getElementById("city").textContent = json['results'][0]['location']['city'];

    document.getElementById("email").textContent = json['results'][0]['email'];
    document.getElementById("phone").textContent = json['results'][0]['phone'];
    })
}
*/

class Personne {
  constructor() {
    this.defaultValues = {
      picture: "",
      username: "",
      firstName: "",
      lastName: "",
      title: "",
      age: 0,
      gender: "",
      country: "",
      city: "",
      email: "",
      phone: "",
    };
    this.setDefaultValues();
  }
  setDefaultValues() {
    Object.keys(this.defaultValues).forEach((key) => {
      this[key] = this.defaultValues[key];
    });
  }
  get dtaJson() {
    const data = Object.keys(this.defaultValues).reduce((acc, key) => {
      acc[key] = this[key];
      return acc;
    }, {});

    return data;
  }
  setData(data) {
    try {
      const json = data.results[0];
      const keys = [
        "picture",
        "login",
        "name",
        "dob",
        "gender",
        "location",
        "email",
        "phone",
      ];
      keys.forEach((key) => {
        if (json[key]) {
          switch (key) {
            case "picture":
              this.picture = json[key].large;
              break;
            case "login":
              this.username = json[key].username;
              break;
            case "name":
              this.firstName = json[key].first;
              this.lastName = json[key].last;
              this.title = json[key].title;
              break;
            case "dob":
              this.age = json[key].age;
              break;
            case "location":
              this.city = json[key].city;
              this.country = json[key].country;
              break;
            case "gender":
            case "email":
            case "phone":
              this[key] = json[key];
              break;
            default:
              break;
          }
        }
      });
    } catch (e) {}
  }
}
const objectPersonne = new Personne();

async function getUSer() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const responseText = await response.text();
    try {
      const responseJson = JSON.parse(responseText);
      return responseJson;
    } catch (jsonError) {
      throw new Error("Erreur d'analyse JSON : " + jsonError.message);
    }
  } catch (networkError) {
    throw new Error("Erreur réseau : " + networkError.message);
  }
}

function createElementP(icone, dataSpan, name = "") {
  const pName = document.createElement('p');
  if (name) {
    pName.classList.add(name)
  }
  const ico = document.createElement('i');
  ico.classList.add("fa-solid");
  ico.classList.add(icone);
  const span = document.createElement('span');
  span.innerText = dataSpan;
  pName.appendChild(ico);
  pName.appendChild(span);
  return pName;
}

function generate() {
  getUSer()
    .then((succes) => {
      objectPersonne.setDefaultValues();
      objectPersonne.setData(succes);

      const container = document.querySelector('.container-personne');

      const article = document.createElement('article');
      article.classList.add('personne-data');

      const img = document.createElement('img');
      img.src = objectPersonne.dtaJson.picture;
      img.alt = "image not foud";

      const divData = document.createElement('div');

      const name = createElementP("fa-user", objectPersonne.dtaJson.title +" "+objectPersonne.dtaJson.firstName +" "+objectPersonne.dtaJson.lastName, "name");
      const email = createElementP("fa-at", objectPersonne.dtaJson.email);
      const age = createElementP("fa-cake-candles", objectPersonne.dtaJson.age);
      const location = createElementP("fa-location-dot",objectPersonne.dtaJson.country+" / "+objectPersonne.dtaJson.city);
      const phone = createElementP("fa-phone", objectPersonne.dtaJson.phone);

      
      divData.appendChild(name);
      divData.appendChild(email);
      divData.appendChild(age);
      divData.appendChild(location);
      divData.appendChild(phone);

      article.appendChild(img);
      article.appendChild(divData);

      container.appendChild(article);

    })
    .catch((e) => {
      console.log(e);
    });
}

document.addEventListener('click', function(event) {
  if (event.target.tagName === 'IMG' ) {
      generate();
  }
  if (event.target.classList.contains('personne-data')) {
    // Appeler votre fonction ici
    console.log("section")
    event.target.remove();
  }
}); 

