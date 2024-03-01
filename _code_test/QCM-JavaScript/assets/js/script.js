let QCM_db = null;

function doubleRandom(min, max) {
    let nb1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let nb2 = 0;
    do
        nb2 = Math.floor(Math.random()* (max-min+1)) +min;
    while (nb1 === nb2)
    return [nb1, nb2];
}

function getCheckbox(id, tagName = 'input[type=checkbox], input[type=radio]') {

    const articleElement = document.getElementById("article-" + id);

    if (!articleElement) return [];

    const formElement = articleElement.querySelector('form');
    if (!formElement) {
        console.error("Formulaire introuvable pour la question.");
        return [];
    }

    const checkboxes = formElement.querySelectorAll(tagName);
    if (!checkboxes || checkboxes.length === 0 ) {
        console.error("Aucun input ou label trouvé dans le formulaire.");
        return [];
    }

    return checkboxes;
}

function listSetCorrectAnswers(reponse, element){
    let count = 0;
    let okReponse =null, noOkReponse = null;
    if(reponse) {
        // console.log("reponse", reponse)
        const responseText = reponse.responseText;
        const reponses = reponse.reponses;
        okReponse = reponses.filter(item => item.checked && responseText.includes(item.name));
        noOkReponse = reponses.filter(item => item.checked && !responseText.includes(item.name));
        if (okReponse.length > 0 && noOkReponse.length == 0) {
           count++;
        } 
    }
    
    const question = QCM_instance.QCMList_get_question(element);    
    setCorrectAnswers(reponse, question);

    return count;

}
function setCorrectAnswers (reponse, question) {

    if ( question != null) {
        setQuestion(question, false, question.id);   
        const checkboxes = getCheckbox(question.id); 
        const labels = getCheckbox(question.id, 'label') 
        if (checkboxes.length > 0) {
            // let array = [];
            // Object.entries(checkboxes).forEach(([key, value])=>{array.push(value);})

            // !!!
            const asnswers = question.correct_answer.answer??question.correct_answer.answers;
            let reponses = Array.isArray(asnswers) ? asnswers : [asnswers];
            for (let j = 0; j < reponses.length; j++) {
                // FIXME changement d'id de l'elemnt chackbox/radio
                if (reponses[j].substr(0, 8) != "checkbox") 
                    reponses[j] = "checkbox-" + reponses[j];
            }

            checkboxes.forEach((item, itemIndex)=>{
                if (reponses.includes(item.id)) {item.checked =true;}
            });
            labels.forEach(item=>{
                if (reponse) {
                    reponse.reponses.forEach(item_2=>{
                        if (item_2.name == item.htmlFor && item_2.checked) {
                            item.style.backgroundColor = "#00000021";
                        }
                    })
                }
            })

            // FIXME changement d'id de l'elemnt chackbox/radio
            const articleElement = document.getElementById("article-" + question.id);
            if (articleElement) 
                addExplanationToArticle(articleElement,JSON.stringify(reponses)+ question.explanation);

        }
    }    
}
// set_question() {
//     const question = this.#get_question();
//     if (!question) return false;
//     // console.log(question);
//     setQuestion(question, true, question.id);
//     if (this.#isQCMList) {
//         this.#QCMList_i.updateCheckbox(question.id);
//     }

// }
class QCMList{
    #nb = 0;
    #db = [];
    constructor(){
    }
    set_db(originalArray){
        this.#db.slice(this.#db.length);
        this.#db = Array.from(originalArray);  
        this.#db.forEach((item,index)=>console.log(index,item));
    }
    countCorrectAnswers(){
        document.getElementById('QCM').querySelectorAll('article')?.forEach(article => article.remove());

        let count = 0;
        for (let index = 0; index < this.#db.length; index++) {
            const element = this.#db[index];
            const reponse = element.reponse;
            
            // console.log("reponse", reponse)
            count += listSetCorrectAnswers(reponse, element)
        }
        console.log("count", count, "total", this.#db.length)


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
    updateCheckbox(id){
        const db = this.#get_db();
        if (!db || this.#nb >= db.length) return;

        let checkboxes = getCheckbox(id);  
        if (checkboxes.length <= 0) return;

        let array = [];

        Object.entries(checkboxes).forEach(([key, value])=>{array.push(value);})
        
        const element = db[this.#nb];
        const reponse = element.reponse;
        if(reponse) {
            const okReponse = reponse.reponses.filter(item => item.checked).map(item=> {return item.name});
            array.filter(item=>{return okReponse.includes(item.id)}).forEach(item=>item.checked = true);
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

    /* #######################################################
    
        Access/Gestion de la basse de données pour les listes personnalisées

    ####################################################### */
    is_QCMList() {
        return this.#isQCMList;
    }
    get_QCMList(){
        return this.#QCMList_i;
    }

    QCMList_get_question(item){
        for (let index = 0; index < this.#db.length; index++) {
            const dbItem = this.#db[index];
            if (dbItem.category == item.category && dbItem.question_number == item.question_number) {
                return dbItem;
            }
        }
    }    


    /* #######################################################
    
        Gestion de la base de données principal

    ####################################################### */
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

    /* #######################################################
    
        Organisation de la db principal et de la db personnalisée

    ####################################################### */
    #set_category() {
        const db = this.#get_db();
        if (!db) return false;
        if (this.#category.length <= 0) {
            db.forEach( (item, index) => {
                item["id"] = index;
                if (this.#category_search(item.category)) this.#category.push(item.category);
            });
        }

        // this.#category.forEach( (item, index) => {
        //     console.log(index, item, this.#getQuestionCountByCategory(item))
        // });
        // console.log();
        
        let qcm_list = [];
        
        this.#category.forEach( (item, index) => {
            for (let dbIndex = 0; dbIndex < this.#db.length; dbIndex++) {
                const element = this.#db[dbIndex];
                if (item == element.category) {

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

                    [rnd[0]].forEach(nb=>{
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
        
        // setQuestion(this.#db[this.#db.length-2], true, this.#db[this.#nb].id);
        this.set_question();
    }


    /* #######################################################
    
        Accéder a la question en cour

    ####################################################### */
    #get_question() {
        if (!this.#isQCMList) {
            const db = this.#get_db();
            if (!db || this.#nb >= db.length) return null;
            return db[this.#nb];
        } else {
            const questionList = this.#QCMList_i.get_question();
            const question = this.QCMList_get_question(questionList);
            return question;
        }
    }

    /* #######################################################
    
        validateAnswers

    ####################################################### */
    get_questionJson() {
        const question = this.#get_question();
        if (!question) return null;
        return question;
    }
    get_reponseTxt() {
        const question = this.#get_question();
        if (!question) return null;
        // !!!
        let asnswers = question.correct_answer.answer??question.correct_answer.answers;
        let result =  Array.isArray(asnswers) ? asnswers : [asnswers];
        for (let index = 0; index < result.length; index++) {
            // FIXME changement d'id de l'elemnt chackbox/radio
            if (result[index].substr(0, 8) != "checkbox") 
                result[index] = "checkbox-" + result[index];
        }
        return result;
    }


    /* #######################################################
    
        affichage simple d'une question

    ####################################################### */
    set_question() {
        const question = this.#get_question();
        if (!question) return false;
        // console.log(question);
        setQuestion(question, true, question.id);
        if (this.#isQCMList) {
            this.#QCMList_i.updateCheckbox(question.id);
        }

    }

    /* #######################################################
    
        Positions des questions et affichage simple d'une question

    ####################################################### */
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

const QCM_instance = new QCM();

async function createDb () {
    // const reponse = await fetch('db_2.json');
    // QCM_db = await reponse.json();
    // QCM_db = QCM_db.QCM;
    try {
        const reponse = await fetch('db.json', {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
        });
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
    // console.log("correctAnswer", correctAnswer)
    // console.log("responseText", responseText)
    // 
    // TODO ajouter la réponse pour la liste classique
    if (QCM_instance.is_QCMList()) {
        correctAnswer["responseText"] = responseText;
        QCM_instance.get_QCMList().add_reponse(questionObject.id, correctAnswer);
    }
    else {
        document.getElementById('QCM').querySelectorAll('article')?.forEach(article => article.remove());
        setCorrectAnswers (correctAnswer, questionObject) 
    }
    //

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
    explanationDiv.classList.add("bg-green");
    const explanationP = document.createElement("p");
    explanationP.innerText = explanationText;
    explanationDiv.appendChild(explanationP);
    articleElement.appendChild(explanationDiv);
}

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

    // !!!
    let asnswers = questionObj.correct_answer.answer??questionObj.correct_answer.answers;
    let reponses = Array.isArray(asnswers) ? asnswers : [asnswers];
    Object.entries(questionObj.options).forEach(([key, value], index) => {
        const listItem = document.createElement("li");
        const divElement = document.createElement('div');
        // FIXME changement d'id de l'elemnt chackbox/radio
        const checkBox = createOptionCheckbox("checkbox-" + optionNames[index] , reponses.length>1?"checkbox":"radio");
        const label = createElementWithText('label', value);
        label.htmlFor = "checkbox-" + optionNames[index];
        label.id = "label-" + optionNames[index];

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
    checkBox.checked = false; //
    return checkBox;
}


createDb().then(()=>{

    QCM_instance.set_db(QCM_db);

    document.getElementById('bt-side-1').addEventListener('click', (e) => {
        // TODO ajouter la correction pour la liste classique
        if (QCM_instance.is_QCMList()) QCM_instance.get_QCMList().countCorrectAnswers()
        //
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