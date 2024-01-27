function doubleRandom(min, max) {
    let nb1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let nb2 = 0;
    do
        nb2 = Math.floor(Math.random()* (max-min+1)) +min;
    while (nb1 === nb2)
    return [nb1, nb2];
}

class QCMList{
    #nb = 0;
    #db = [];
    constructor(){
    }
    set_db(originalArray){
        this.#db.slice(this.#db.length);
        this.#db = Array.from(originalArray);  
        // this.#db.forEach((item,index)=>console.log(index,item));
        // console.log(this.#db[this.#db.length-1])
    }
    countCorrectAnswers(){
        for (let index = 0; index < this.#db.length; index++) {
            const element = this.#db[index];
            const reponse = element.reponse;
            if(reponse) {
                const responseText = reponse.responseText;
                const reponses = reponse.reponses;
                console.log("reponse", reponse);
                if (reponses.length > 0 && responseText.length == 1) {
                    const filteredData = reponses.filter(item => item.checked && responseText.includes(item.name));
                    console.log("filteredData", filteredData);
                }
            }
        }
    }
    add_reponse(id, reponse){
        this.#db.forEach(item=>{
            if (id == item.id) {
                item.reponse = reponse;
            }
        });
    }
    #get_db() {
        if (!Array.isArray(this.#db) || !this.#db.length) {
            console.error("Erreur: Base de données QCM non définie ou vide.");
            return null;
        }
        return this.#db; 
    }
    get_question() {
        const db = this.#get_db();
        if (!db || this.#nb >= db.length) return null;
        return db[this.#nb];
    }
    #changeQuestion(delta) {
        const db = this.#get_db();
        if (!db) return false;
        this.#nb = (this.#nb + delta + db.length) % db.length;
        return true;
    }
    set_question_next() {
        if (this.#nb >= this.#db.length - 1) {
            return false;
        } else {
            this.#changeQuestion(1);
            // console.log(this.#nb, this.#db[this.#nb]);
        }
        return true;
    }

    set_question_prev() {
        if (this.#nb <= 0) {
            return false;
        } else {
            this.#changeQuestion(-1);
        }
    } 
}

class QCM  {
    #db = null;
    #nb = 0;
    #category = [];
    #QCMList_i = new QCMList();
    #isQCMList = true;

    constructor() {
    }
    get_QCMList(){
        return this.#QCMList_i;
    }
    #category_search(search) {
        for (let index = 0; index < this.#category.length; index++) {
            const element = this.#category[index];
            if (search == element) return false;
        }
        return true;
    }
    #getQuestionCountByCategory(category){
        let countQuestions = 0;
        for (let dbIndex = 0; dbIndex < this.#db.length; dbIndex++) {
            const element = this.#db[dbIndex];
            if (category == element.category) {
                countQuestions++;
            }
        }
        return countQuestions;

    }
    #set_category() {
        const db = this.#get_db();
        if (!db) return false;
        db.forEach( (item, index) => {
            item["id"] = index;
            if (this.#category_search(item.category)) this.#category.push(item.category);
        });
        let filter = db.filter(item=>{
            let asnswers = item.correct_answer.answer??item.correct_answer.answers;
            let reponses = Array.isArray(asnswers) ? asnswers : [asnswers];
            return reponses.length >= 2;

        })
        console.log(filter)
        // this.#category.forEach(item=>console.log(item));
        // console.log("---");
        let qcm_list = [];
        this.#category.forEach( (item, index) => {
            for (let dbIndex = 0; dbIndex < this.#db.length; dbIndex++) {
                const element = this.#db[dbIndex];

                let asnswers = element.correct_answer.answer??element.correct_answer.answers;
                let reponses = Array.isArray(asnswers) ? asnswers : [asnswers];
                if (reponses.length < 2) continue;

                if (item == element.category) {
                    // if (!element.title)  console.log(dbIndex, "title", element.title);
                    // if (!element.category)  console.log(dbIndex, "category", element.category);
                    // if (!element.question_number)  console.log(dbIndex, "question_number", element.question_number);
                    // if (!element.question_type)  console.log(dbIndex, "question_type", element.question_type);
                    // if (!element.question_text)  console.log(dbIndex, "question_text", element.question_text);
                    // if (!element.options)  console.log(dbIndex, "options", element.options);
                    // if (!element.explanation)  console.log(dbIndex, "explanation", element.explanation);
                    // if (!element.correct_answer.answer??element.correct_answer.answers) console.log(dbIndex, "answers", element.correct_answer.answer??element.correct_answer.answers);
                    // if (!Array.isArray(element.correct_answer.answer??element.correct_answer.answers)) continue;
                    // let reponses = Array.isArray(asnswers) ? asnswers : [asnswers];
                    // if (reponses < 1) continue;

                    let duplicate = false;
                    for (let listIndex = 0; listIndex < qcm_list.length; listIndex++) {
                        const listElement = qcm_list[listIndex];
                        if (listElement.category == element.category && listElement.question_number == element.question_number) {
                            console.log("duplicate", element)
                            duplicate = true;
                            break;
                        }
                    }
                    if (duplicate) continue;

                    let rnd = doubleRandom(1, this.#getQuestionCountByCategory(item));
                    // console.log(doubleRandom, rnd);

                    [rnd[0]].forEach(nb=>{
                        // console.log(item, nb);
                        qcm_list.push({
                            "question_number": nb,
                            "category": item,
                            "reponse": null,
                            "id": -1
                        })
                    });
                    break;
                }
            };
        }); 
        // console.log("---------");

        for (let index = 0; index < this.#db.length; index++) {
            const dbItem = this.#db[index];


            for (let listIndex = 0; listIndex < qcm_list.length; listIndex++) {
                const listItem = qcm_list[listIndex];


                if (dbItem.category == listItem.category && dbItem.question_number == listItem.question_number) {
                    listItem.id = dbItem.id;
                }
                
            }
        }

        // qcm_list = qcm_list.sort(() => Math.random() - 0.5);
        for (let i = qcm_list.length - 1; i > 0; i--) {
            // Choisir un index aléatoire avant l'élément courant
            const j = Math.floor(Math.random() * (i + 1));
            // Echanger l'élément courant avec l'élément à l'index aléatoire
            [qcm_list[i], qcm_list[j]] = [qcm_list[j], qcm_list[i]];
        }

        this.#QCMList_i.set_db(qcm_list);

        /*
        qcm_list.forEach( (item, index) => {
            // console.log(index, item);
            this.#db.forEach( (dbItem, dbIndex) => {
                // if (this.#category_search(item.category)) this.#category.push(item.category);
                if (dbItem.category == item.category && dbItem.question_number == item.question_number) {
                    
                    setQuestion(dbItem, false, dbIndex);
                }
            });

        });
        */
        
        // setQuestion(this.#db[this.#db.length-2], true, this.#db[this.#nb].id);
        this.set_question();
    }

    set_db(db) {
        if (!Array.isArray(db)) {
            console.error("Erreur: La base de données fournie n'est pas un tableau.");
            return false;
        }
        this.#db = db;
        this.#set_category();
        return true;
    }
    #get_db() {
        if (!Array.isArray(this.#db) || !this.#db.length) {
            console.error("Erreur: Base de données QCM non définie ou vide.");
            return null;
        }
        return this.#db; 
    }

    #get_question() {
        if (!this.#isQCMList) {
            const db = this.#get_db();
            if (!db || this.#nb >= db.length) return null;
            return db[this.#nb];
        } else {
            const questionList = this.#QCMList_i.get_question();
            const question = this.#QCMList_get_question(questionList);
            return question;
        }

    }
    get_reponseTxt() {
        const question = this.#get_question();
        if (!question) return null;
        let asnswers = question.correct_answer.answer??question.correct_answer.answers;
        return Array.isArray(asnswers) ? asnswers : [asnswers];
    }
    get_questionJson() {
        const question = this.#get_question();
        if (!question) return null;
        return question;
    }
    #QCMList_get_question(item){
        for (let index = 0; index < this.#db.length; index++) {
            const dbItem = this.#db[index];
            if (dbItem.category == item.category && dbItem.question_number == item.question_number) {
                return dbItem;
            }
        }
    }    
    set_question() {
        const question = this.#get_question();
        if (!question) return false;
        console.log(question);
        setQuestion(question, true, question.id);
    }
    #changeQuestion(delta) {
        const db = this.#get_db();
        if (!db) return false;
        this.#nb = (this.#nb + delta + db.length) % db.length;
        return true;
    }
    set_question_next() {
        if (this.#isQCMList) {
            this.#QCMList_i.set_question_next();
            this.set_question();
            return true;
        }
        if (this.#nb >= this.#db.length - 1) {
            this.set_question();
            return false;
        } else {
            if (this.#changeQuestion(1)) this.set_question();
        }
        return true;
    }

    set_question_prev() {
        if (this.#isQCMList) {
            this.#QCMList_i.set_question_prev();
            this.set_question();
            return true;
        }
        if (this.#nb <= 0) {
            this.set_question();
            return false;
        } else {
            if (this.#changeQuestion(-1)) this.set_question();
        }
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



function countCorrectAnswers(inputs, reponses) {
    const search = (value) =>  {
        for (let index = 0; index < reponses.length; index++) {
            const element = reponses[index];
            if (value == element) {
                return true;
            }
        }
        return false;
    };
    let objet = {};
    let checkboxValues = [];
    inputs.forEach((input, index) => {
        let reponse =  search(input.id);
        const objet = {
           "checked": input.checked,
           "name": input.id,
           "index": index,
           "reponse": reponse
           
        };
        checkboxValues.push(objet);
    });
    objet.reponses = checkboxValues;
    return objet;
}

function validateAnswers() {
    const responseText = QCM_instance.get_reponseTxt();
    if (!responseText) {
        console.error("Aucune réponse trouvée.");
        return;
    }

    const questionObject = QCM_instance.get_questionJson();
    const articleElement = document.getElementById("article-" + questionObject.id);

    if (!articleElement) return;

    const formElement = articleElement.querySelector('form');
    if (!formElement) {
        console.error("Formulaire introuvable pour la question.");
        return;
    }

    const labels = formElement.querySelectorAll('label');
    const checkboxes = formElement.querySelectorAll('input[type=checkbox], input[type=radio]');
    if (!checkboxes || checkboxes.length === 0 || !labels) {
        console.error("Aucun input ou label trouvé dans le formulaire.");
        return;
    }

    const correctAnswer = countCorrectAnswers(checkboxes, responseText);
    correctAnswer["responseText"] = responseText;
    // console.log(JSON.stringify(correctAnswer, null, 2))
    // evaluateResponses(checkboxes, labels, responseText);
    // addExplanationToArticle(articleElement, questionObject.explanation);
    QCM_instance.get_QCMList().add_reponse(questionObject.id, correctAnswer);
}

function evaluateResponses(checkboxes, labels, correctAnswer) {
    checkboxes.forEach((checkbox, index) => {
        const isCorrectAnswer = checkbox.checked && correctAnswer.includes(checkbox.name);
        const isIncorrectAnswer = checkbox.checked && !correctAnswer.includes(checkbox.name);
        labels[index].style.color = isCorrectAnswer ? "green" : isIncorrectAnswer ? "red" : "black";
    });
}

function addExplanationToArticle(articleElement, explanationText) {
    const explanationDiv = document.createElement("div");
    explanationDiv.classList.add("question-titre");
    const explanationP = document.createElement("p");
    explanationP.innerText = explanationText;
    explanationDiv.appendChild(explanationP);
    articleElement.appendChild(explanationDiv);
}

 createDb().then(()=>{

    QCM_instance.set_db(QCM_db);

    document.getElementById('bt-side-1').addEventListener('click', (e) => {
        QCM_instance.get_QCMList().countCorrectAnswers()
    });
    document.getElementById('bt-side-2').addEventListener('click', (e) => {
        QCM_instance.set_question_prev()
    });
    document.getElementById('bt-side-3').addEventListener('click', (e) => {
        QCM_instance.set_question_next()
    });
    document.getElementById('bt-side-4').addEventListener('click', (e) => {
        validateAnswers();
    });
 })


 function setQuestion(questionObj, removeExistingArticles = true, id = "0") {
    const qcmElement = document.getElementById('QCM');
    if (removeExistingArticles) {
        qcmElement.querySelectorAll('article')?.forEach(article => article.remove());
    }

    const articleElement = createArticleElement(questionObj, id);
    qcmElement.appendChild(articleElement);
}

function createArticleElement(questionObj, id) {
    const articleElement = document.createElement("article");
    articleElement.id = "article-" + id;

    if (questionObj.category) {
        articleElement.appendChild(createElementWithText("h2", questionObj.category));
    }

    if (questionObj.title) {
        articleElement.appendChild(createElementWithText("h3", questionObj.title));
    }

    articleElement.appendChild(createQuestionTitleDiv(questionObj));
    appendCodeSnippets(articleElement, questionObj);
    articleElement.appendChild(createOptionsForm(questionObj));

    return articleElement;
}

function createElementWithText(tagName, text) {
    const element = document.createElement(tagName);
    element.innerText = text;
    return element;
}

function createQuestionTitleDiv(questionObj) {
    const questionTitleDiv = document.createElement("div");
    questionTitleDiv.classList.add("question-titre");

    if (questionObj.question_text) {
        const questionTitleP = createElementWithText("p", questionObj.question_text);
        questionTitleDiv.appendChild(questionTitleP);
    }

    return questionTitleDiv;
}

function appendCodeSnippets(articleElement, questionObj) {
    if (questionObj.snippet) {
        if (questionObj.snippet.code || questionObj.snippet.javascript) {
            articleElement.appendChild(createCodeSnippet(questionObj.snippet.code || questionObj.snippet.javascript, "javascript"));
        }
        if (questionObj.snippet.html) {
            articleElement.appendChild(createCodeSnippet(questionObj.snippet.html, "html"));
        }
    }
}

function createCodeSnippet(code, language) {
    const snippetElement = document.createElement("pre");
    snippetElement.classList.add("code", `language-${language}`);
    
    const codeElement = document.createElement("code");
    codeElement.classList.add(`language-${language}`);
    codeElement.innerHTML = Prism.highlight(code, Prism.languages[language], language);
    
    snippetElement.appendChild(codeElement);
    return snippetElement;
}

function createOptionsForm(questionObj) {
    const formElement = document.createElement("form");
    const fieldsetElement = document.createElement("fieldset");
    formElement.id = "formulaire-qcm";
    formElement.classList.add("question-options");

    const optionsList = document.createElement("ol");
    const optionNames = ["A", "B", "C", "D", "E", "F"];

    let asnswers = questionObj.correct_answer.answer??questionObj.correct_answer.answers;
    let reponses = Array.isArray(asnswers) ? asnswers : [asnswers];
    Object.entries(questionObj.options).forEach(([key, value], index) => {
        const listItem = document.createElement("li");
        const divElement = document.createElement('div');
        const checkBox = createOptionCheckbox(optionNames[index] , reponses.length>1?"checkbox":"radio");
        const label = createElementWithText('label', value);
        label.htmlFor = optionNames[index];

        divElement.appendChild(checkBox);
        divElement.appendChild(label);
        listItem.appendChild(divElement);
        optionsList.appendChild(listItem);
    });

    fieldsetElement.appendChild(optionsList);
    formElement.appendChild(fieldsetElement);
    return formElement;
}

function createOptionCheckbox(name, type = "radio") {
    const checkBox = document.createElement("input");
    checkBox.type = type;
    checkBox.name = "options";
    checkBox.id = name;
    checkBox.checked = false; // Modify this as per logic for correct answer
    return checkBox;
}
