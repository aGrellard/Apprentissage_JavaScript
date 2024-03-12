// API ENDPOINT : `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`


const input = document.querySelector('input');
const errorMsg = document.querySelector(".error-msg");
const loader = document.querySelector(".loader");
const resultsDisplay = document.querySelector(".search-result");

input.addEventListener("keypress", async (e)=>{
    if (e.key == 'Enter'){
        resultsDisplay.innerHTML="";
        errorMsg.textContent ="";
        loader.style.display = "flex"
        await wikiPedia(e.target.value).then(data=> {
            const arr = data.query.search;
            const section = document.querySelector('.search-result');
            arr.forEach(element => {
                let article = createElementArticle(element);
                section.appendChild(article) 
            });
        }).catch(error=>{
            errorMsg.textContent = `${error}`;
            loader.style.display = "none";
        })
        loader.style.display = "none"
    }
})
async function wikiPedia(search) {
    const request = await fetch(`https://fr.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${search}`);
    const json = await request.json();
    return json;
}
function createElementArticle(element) {
    let article = document.createElement('article');
    let pName = document.createElement('h3');
    pName.innerText = element.title;
    let a = document.createElement('a');
    a.href = `https://en.wikipedia.org/?curid=${element.pageid}`;
    a.alt = "liens wiki";
    a.innerText = `https://en.wikipedia.org/?curid=${element.pageid}`;
    let pDsec = document.createElement('p');
    pDsec.innerHTML = element.snippet;
    article.appendChild(pName);
    article.appendChild(a);
    article.appendChild(pDsec);
    return article;
}

