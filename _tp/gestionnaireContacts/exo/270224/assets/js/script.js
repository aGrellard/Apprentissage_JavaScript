let contacts = [];


function verifierEmail(value){
    try {
        let regexp = new RegExp("^[^@\\s]+@[^@\\s]+\\.[^@\s]+$")
        // console.log("verifierEmail", value.match(regexp))
        return value.match(regexp);
    } catch (e) {
        return false;
    }
}
function verifierNom(value) {
    try {
        let regexp = new RegExp("^[A-Za-z]\\S+$")
        // console.log("verifierNom", value.match(regexp))
        return value.match(regexp);
    } catch (e) {
        return false;
    }
}
function verifierTel(value){
    try {
        let regexp = new RegExp("^[0-9]{10,}$")
        // console.log("verifierTel", value.match(regexp))
        return value.match(regexp);
    } catch (e) {
        return false;
    }
}


function ajouterContact(){
    let inputs = document.querySelectorAll('input');

    let inputsData = [
        {type: "nom", nom: "nomContact", value:""},
        {type: "mail", nom: "emailContact", value:""},
        {type: "tel", nom: "telContact", value:""},
    ]

    inputs.forEach(item=>{
        let name = item.getAttribute('name');
        let search = inputsData.find(objet=> objet.nom === name)
        if (search) {
            search.value = item.value;
        }
    })

    let nom = inputsData.find(objet=> objet.type === "nom")
    if (!nom || !verifierNom(nom.value)) return false;
    
    let mail = inputsData.find(objet=> objet.type === "mail")
    if (!mail || !verifierEmail(mail.value)) return false;

    let tel = inputsData.find(objet=> objet.type === "tel")
    if (!tel || !verifierTel(tel.value)) return false;

    if (contacts.find(item=> item.nom.toLowerCase() === nom.value.toLowerCase())) return false;

    contacts.push({nom:nom.value, mail:mail.value, tel:tel.value})

    afficherConstact();

}

function rechercherContact(){
    let search = document.getElementById("rechercheContact");
    if (!search) return false;
    search = search.value.toLowerCase();
    let contactsFiltrer = contacts.filter(item=>{
        let nom = item.nom.toLowerCase();
        if(nom.includes(search)) return item;
    })
    afficherConstact(contactsFiltrer);
}

function afficherConstact(data = contacts){
    let ulElement = document.getElementById('listeContacts');
    ulElement.innerHTML = "";
    
    data.forEach(item=>{
        let liElement = document.createElement('li');
        liElement.innerText = `${item.nom} - ${item.mail} - ${item.tel}`
        ulElement.appendChild(liElement);
    })
}

function trierContacts(){
    contacts.sort((a,b)=> a.nom.localeCompare(b.nom) )
    afficherConstact();
}

function calculerLongueurMoyenneNoms(){
    let totalNoms = contacts.length;
    if (totalNoms <= 0) return false;

    let totalLength = contacts.reduce((acc,val)=>{
        acc += val.nom.length
        return acc;
    }, 0)
    
    let result = totalLength/totalNoms;
    if (isNaN(result)) return false

    let statElement = document.getElementById('statistiques');
    if (!statElement) return false;
    
    statElement.innerHTML = "";  
    statElement.innerText = result.toFixed(2);
}


document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector('form').addEventListener("submit", (e)=>{
        e.preventDefault();
        
        ajouterContact();

    })
})

