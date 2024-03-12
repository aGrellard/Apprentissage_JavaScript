

class QCM  {
    #db = null;
    #nb = 0;
    #category = [];
    #qcm_list = [];

    constructor() {
        this.result = false;
        this.resultValue = {};
    }

    status() {
        return {
            nb: this.#nb,
            result: this.result,
            resultValue: this.resultValue
        };
    }
    qcm_list(search) {
        for (let index = 0; index < this.#qcm_list.length; index++) {
            const element = this.#qcm_list[index];
            // if (search == element.) return false;
        }
        return true; 
    }
    category_search(search) {
        for (let index = 0; index < this.#category.length; index++) {
            const element = this.#category[index];
            if (search == element) return false;
        }
        return true;
    }
    set_category() {
        const db = this.get_db();
        if (!db) return false;
        db.forEach( (item, index) => {
            if (this.category_search(item.category)) this.#category.push(item.category);
        });
        this.#category.forEach( (item, index) => {
            for (let index = 0; index < this.#db.length; index++) {
                const element = this.#db[index];
                // console.log(index, element);
                if (item == element.category) {
                    [Math.round(Math.random() * 10), Math.round(Math.random() * 10)].forEach(nb=>{
                        // console.log(item, nb);
                        this.#qcm_list.push({
                            "question_number": nb,
                            "category": item,
                            "id": index
                        })
                    });
                    break;
                    // this.#qcm_list.push({
                    //     "question_number": dbItem.question_number
                    // })
                }
            };
        }); 
        console.log("---------");
        /*
        // this.#qcm_list = this.#qcm_list.sort(() => Math.random() - 0.5);
        for (let i = this.#qcm_list.length - 1; i > 0; i--) {
            // Choisir un index aléatoire avant l'élément courant
            const j = Math.floor(Math.random() * (i + 1));
            // Echanger l'élément courant avec l'élément à l'index aléatoire
            [this.#qcm_list[i], this.#qcm_list[j]] = [this.#qcm_list[j], this.#qcm_list[i]];
        }
        this.#qcm_list.forEach( (item, index) => {
            // console.log(index, item);
            this.#db.forEach( (dbItem, dbIndex) => {
                // if (this.category_search(item.category)) this.#category.push(item.category);
                if (dbItem.category == item.category && dbItem.question_number == item.question_number) {
                    
                    setQuestion(dbItem, false, dbIndex);
                }
            });

        });
        */
       
        db.forEach( (item, index) => {
            setQuestion(item, false, index);
        });

    }
    get_db() {
        if (!Array.isArray(this.#db) || !this.#db.length) {
            console.error("Erreur: Base de données QCM non définie ou vide.");
            return null;
        }
        return this.#db; 
    }

    get_question() {
        const db = this.get_db();
        if (!db || this.#nb >= db.length) return null;
        return db[this.#nb];
    }

    get_reponseTxt() {
        const question = this.get_question();
        if (!question) return null;
        return Array.isArray(question.correct_answer.answer) ? question.correct_answer.answer : [question.correct_answer.answer];
    }

    set_db(db) {
        if (!Array.isArray(db)) {
            console.error("Erreur: La base de données fournie n'est pas un tableau.");
            return false;
        }
        this.#db = db;
        this.set_category();
        return true;
    }

    changeReponse(delta) {
        const db = this.get_db();
        if (!db) return false;
        this.#nb = (this.#nb + delta + db.length) % db.length;
        return true;
    }

    set_question_next() {
        if (this.changeReponse(1)) this.set_question();
    }

    set_question_prev() {
        if (this.changeReponse(-1)) this.set_question();
    }

    set_question() {
        const question = this.get_question();
        if (!question) return false;
        setQuestion(question);
    }
};

let QCM_db = null;
let QCM_instance = new QCM();

async function createDb () {
    // const reponse = await fetch('db_2.json');
    // QCM_db = await reponse.json();
    // QCM_db = QCM_db.QCM;
    try {
        const reponse = await fetch('db_2.json');
        const text = await reponse.text(); 
        const data = JSON.parse(text); 
        QCM_db = data.QCM;
      } catch(err) {
        QCM_db = null;
        console.error("fetch error with json");
      }
}



function compterReponsesCorrectes(inputs, labels, names, reponse) {
    let count = 0;
    inputs.forEach((input, index) => {
        if (input.checked && reponse.includes(names[index])) {
            labels[index].style.color = "green";
            count++;
        } else {
            labels[index].style.color = "red";
            input.checked = false;
        }
    });
    return count;
}

 createDb().then(()=>{

    QCM_instance.set_db(QCM_db);


    document.getElementById('bt-side-2').addEventListener('click', (e) => {
        QCM_instance.set_question_prev()
    });
    document.getElementById('bt-side-3').addEventListener('click', (e) => {
        QCM_instance.set_question_next()
    });
    document.getElementById('bt-side-4').addEventListener('click', (e) => {
        let names = ["A", "B", "C", "D", "E", "F"];
        let reponse = QCM_instance.get_reponseTxt();
        if (!reponse) {
            console.error("Aucune réponse trouvée.");
            return;
        }
        
        const labels = document.getElementById('formulaire-qcm')?.querySelectorAll('label');
        const inputs = document.getElementById('formulaire-qcm')?.querySelectorAll('input[type=checkbox]');
        if (!inputs || !labels) {
            console.error("Aucun input trouvé dans le formulaire.");
            return;
        }
    
        let count = compterReponsesCorrectes(inputs, labels, names, reponse);
        console.log("count", count);
    
        if (count >= reponse.length) {
            console.log("SUCCES");
        } else {
            console.log("NP"); 
        }
    });
 })


function setQuestion(objet, remove_article = true, id = "0") {
        if (remove_article) document.getElementById('QCM').querySelectorAll('article')?.forEach(article=>article.remove())
 
        const articleElement = document.createElement("article");
        articleElement.id = id;

        let categoryElement = document.createElement("h2");
        categoryElement.innerText = objet.category;
        
        let questionTitleDiv = document.createElement("div");
        questionTitleDiv.classList.add("question-titre");
        let questionNb = document.createElement("p");
        let questionTtitle = document.createElement("p");
        questionTtitle.innerText = objet.question_text;
    

        let questionSnippet = document.createElement("pre");
        questionSnippet.classList.add("code");
        questionSnippet.classList.add("language-js");

        let questionSnippetCode = document.createElement("code");
        questionSnippetCode.classList.add("language-js");

        if(objet.snippet)
        questionSnippetCode.innerHTML = Prism.highlight(objet.snippet.code , Prism.languages.javascript, 'javascript');  

        questionSnippet.appendChild(questionSnippetCode);


        let questionOptionsDiv = document.createElement("form");
        questionOptionsDiv.id = "formulaire-qcm";
        questionOptionsDiv.classList.add("question-options")
        let questionOptionsForm = document.createElement("form");
        let questionOptionsOl = document.createElement("ol");
        let names = ["A", "B", "C", "D", "E", "F"];
        let index = 0;
        for (const [key, value] of Object.entries(objet.options)) {
            let liElement = document.createElement("li");
            let liDivElement = document.createElement('div');
            let checkElement = document.createElement("input");
            checkElement.type = "checkbox";
            checkElement.name = names[index];
            checkElement.checked = false;
            checkElement.id = names[index];
            let labelElement = document.createElement('label');
            labelElement.htmlFor = names[index];
            labelElement.innerText = value;
            liDivElement.appendChild(checkElement);
            liDivElement.appendChild(labelElement);
            questionOptionsOl.appendChild(liElement);
            liElement.appendChild(liDivElement);
            index++;
        };
        questionOptionsForm.appendChild(questionOptionsOl);
        questionOptionsDiv.appendChild(questionOptionsForm);

        questionTitleDiv.appendChild(questionTtitle);
        articleElement.appendChild(categoryElement);
        articleElement.appendChild(questionTitleDiv);
        articleElement.appendChild(questionSnippet);
        articleElement.appendChild(questionOptionsDiv);


        let elementQCM = document.getElementById('QCM');
        elementQCM.appendChild(articleElement);
        
}
