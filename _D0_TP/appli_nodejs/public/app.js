
let QUESTION_TIME_START = undefined; // Heure de début de réponse
let QUESTION_TYPE = 0; // Heure de début de réponse
let SESSION_ID = undefined;

let ws = undefined;

const LBL_UPD = document.querySelectorAll('ul')[0].querySelectorAll('li');
const LBL_WEB_SOCKET = LBL_UPD[0];
const LBL_SESSION = LBL_UPD[1];
const LBL_QUESTION_TYPE = LBL_UPD[2];
document.getElementById('questions-type').value = 0;

let BUTTONSUBMITWAIT_STATU = false;
let BUTTONSUBMITWAIT = document.querySelector('form button[type="button"]');


function sendMessageWithRetry(msg, maxAttempts = 5) {
    const attemptSend = (currentAttempt) => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(msg);
        } else if (currentAttempt < maxAttempts) {
            console.log(`Tentative ${currentAttempt}: La connexion n'est pas ouverte. Nouvelle tentative dans 1 seconde...`);
            setTimeout(() => attemptSend(currentAttempt + 1), 1000);
        } else {
            console.log("Nombre maximal de tentatives atteint. Échec de l'envoi du message.");
        }
    };

    attemptSend(1);
}

function convertSeconds(seconds) {
    const minutes = Math.floor(seconds / 60); // Trouve le nombre entier de minutes
    const remainingSeconds = seconds % 60; // Trouve les secondes restantes

    // Retourne le résultat sous forme de chaîne de caractères
    return `${minutes},${remainingSeconds.toFixed(0)}`;
}

function heartbeat() {
    clearTimeout(ws.pingTimeout);

    // Terminer la connexion si le serveur n'a pas répondu au ping dans les 30 secondes
    ws.pingTimeout = setTimeout(() => {
        ws.close();
    }, 31000); // 30 secondes + un délai de grâce de 1 seconde
}

function connect() {
    if (ws && ws.readyState === WebSocket.OPEN) return;

    ws = new WebSocket('ws://localhost:8080');
    ws.onopen = function() {
        console.log('WebSocket connecté');
        upd_ui();
        // heartbeat(); // Initialise ou réinitialise le heartbeat
    };
    ws.onmessage = function(event) {
        handleMessage(event)
        upd_ui();
    };
    ws.onerror = function(error) {
        console.log('WebSocket Erreur: ' , error);
    };   
    ws.onclose = function(error) {
        console.log('WebSocket close: ' , error);
        // clearTimeout(ws.pingTimeout); // Nettoyer le timeout du heartbeat
        // clearTimeout(ws.upd_ui); // Nettoyer le timeout du heartbeat
        setTimeout(connect, 1000);
        upd_ui();
    };    
}


function upd_ui() {
    let button_submit = document.querySelector('form button[type="submit"]');
    let button_submitWait = document.querySelector('form button[type="button"]');
    let array_buttonSubmit = [button_submit, button_submitWait];

    let button_session = document.querySelector('.button-group button');
    let select_question_type = document.getElementById('questions-type');
    button_session.innerText = "Demarer Session"

    if (ws && ws.readyState === WebSocket.OPEN) {
        LBL_WEB_SOCKET.classList.remove('li-disabled')

        if (SESSION_ID) LBL_SESSION.classList.remove('li-disabled')
        else LBL_SESSION.classList.add('li-disabled')

        if (select_question_type.value != 0) LBL_QUESTION_TYPE.classList.remove('li-disabled')
        else LBL_QUESTION_TYPE.classList.add('li-disabled')


        if (!SESSION_ID && select_question_type.value !== 0) {
            button_session.disabled = false;
            button_session.classList.remove('bt-bg-red')
            button_session.classList.add('bt-bg-green')


            array_buttonSubmit.forEach((button)=>{
                button.disabled = true;
                button.classList.remove('bt-bg-red')
                button.classList.remove('bt-bg-green')               
            })

            select_question_type.disabled = false;
        } 

        if (SESSION_ID && select_question_type.value !== 0) {
            button_session.classList.remove('bt-bg-red')
            button_session.classList.remove('bt-bg-green')
            button_session.innerText = "Stop Session"

            array_buttonSubmit.forEach((button)=>{
                button.disabled = false;
                button.classList.remove('bt-bg-red')
                button.classList.add('bt-bg-green')
            });    

            select_question_type.disabled = true;
        } 

        if (!SESSION_ID && select_question_type.value == 0) {
            button_session.disabled = true;
            button_session.classList.add('bt-bg-red')
            button_session.classList.remove('bt-bg-green')
        } 


    } else {
        LBL_WEB_SOCKET.classList.add('li-disabled')
        LBL_SESSION.classList.add('li-disabled')
        LBL_QUESTION_TYPE.classList.add('li-disabled')
        select_question_type.disabled = true;
        button_session.disabled = true;

        button_session.classList.add('bt-bg-red')
        button_session.classList.remove('bt-bg-green')

        array_buttonSubmit.forEach((button)=>{
            button.classList.remove('bt-bg-green')
            button.disabled = true;
            button.classList.add('bt-bg-red')
        });
    }
    

}
function toggleButtonSession(){
    let button = document.querySelector('form button[type="submit"]');
    if (button){
        button.classList.toggle('ws-activated')
    }
}
function toggleButtonResponse(){
    let button = document.querySelector('form button[type="submit"]');
    if (button){
        if (SESSION_ID) {
            button.disabled = false;}
        else {
            button.disabled = true;}
    }
}

function submitResponse(){
    if (SESSION_ID === undefined) return
    if (QUESTION_TIME_START === undefined) return
    if (QUESTION_TYPE === 0) return
    const code = document.getElementById('codeInput').value;
    sendQuestionResponse(QUESTION_TYPE, SESSION_ID, code, QUESTION_TIME_START) 
}
document.addEventListener('DOMContentLoaded', function() {
    
    connect();

    const form = document.getElementById('codeForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            submitResponse();
        });
    }
    if (BUTTONSUBMITWAIT){
        BUTTONSUBMITWAIT.addEventListener("click", (e)=>{
            if (!BUTTONSUBMITWAIT_STATU) {
                submitResponse();
                BUTTONSUBMITWAIT.innerText = "En attente";
                BUTTONSUBMITWAIT.classList.remove('bt-bg-green')
                BUTTONSUBMITWAIT_STATU = true;

            } else {
                BUTTONSUBMITWAIT.innerText = "Envoyer et attendre";
                BUTTONSUBMITWAIT.classList.add('bt-bg-green')
                BUTTONSUBMITWAIT_STATU = false;
                QUESTION_TIME_START = new Date().toISOString().slice(0, 19).replace('T', ' ');
            }

        })
    }


    let button = document.querySelector('.button-group').querySelectorAll('button');
    if (button && button[0]){
        button[0].addEventListener("click", (e)=>{
            if (QUESTION_TYPE === 0) return
            // document.getElementById('sessions-list').disabled = true;
            if (!SESSION_ID)
                sendMessageWithRetry(JSON.stringify({status:"session_start", questions_type:QUESTION_TYPE}))
            else
                sendMessageWithRetry(JSON.stringify({status:"session_stop", session_id:SESSION_ID}))

        })
    }

    let select_session = document.getElementById('sessions-list');
    if (select_session){
        select_session.addEventListener("change", (e)=>{
            let session_id = e.target.value;
            if (session_id) sendMessageWithRetry(JSON.stringify({status:"sessions_list", session_id:session_id}))
        })
    }
    
    let select_questionsType = document.getElementById('questions-type');
    if (select_questionsType){
        select_questionsType.addEventListener("change", (e)=>{
            QUESTION_TYPE = e.target.value;
            upd_ui();
        })
    }
    let btn_get_session = document.getElementById('sessions-list-get');
    if (btn_get_session){
        btn_get_session.addEventListener("click", (e)=>{
            sendMessageWithRetry(JSON.stringify({status:"sessions_list_get"}))
        })
    }

    let table = document.querySelector('.statistic-table').querySelector('table');
    table.addEventListener('click', function(e){
        if (e.target && e.target.tagName === "TD" && select_session) {
            let clickedCell = e.target;
            let row = clickedCell.parentNode; // La rangée contenant la cellule cliquée
            let nextCellIndex = clickedCell.cellIndex + 1; // L'index de la cellule à droite
    
            // Vérifie si la cellule à droite existe dans la même rangée
            if (row.cells[nextCellIndex] !== undefined) {
                let nextCell = row.cells[nextCellIndex]; // Obtient la cellule à droite
                console.log('response_id:', nextCell.textContent);
                console.log("clickedCell", clickedCell.textContent)
                console.log("sessionId", select_session.value)
    
    
                sendMessageWithRetry(JSON.stringify({
                    status:"question_code", 
                    question_title:clickedCell.textContent, 
                    session_id:select_session.value,
                    response_id:nextCell.textContent,
    
                }))
            } else {
            }




        }
    })
});

function handleMessage(event) {
    const messages = document.getElementById('messages');
    if (!messages) return;

    let upd = event.data;
    try {
        let json = JSON.parse(upd);
        if (json.status == "question") {
            QUESTION_TIME_START = new Date().toISOString().slice(0, 19).replace('T', ' ');
        } else if (json.status == "response_success") {
            messages.innerHTML=""
            upd = "";
        } else if (json.status == "session_start") {
            SESSION_ID = json.id;
            messages.innerHTML=""
            upd = "";
        } else if (json.status == "session_completed") {
            SESSION_ID = undefined;
            QUESTION_TIME_START = undefined;
            messages.innerHTML=""
            // document.getElementById('sessions-list').disabled = false;
            BUTTONSUBMITWAIT.innerText = "Envoyer et attendre";
            BUTTONSUBMITWAIT.classList.add('bt-bg-green')
            BUTTONSUBMITWAIT_STATU = false;
        } else if (json.status == "session_statistic") {
            messages.innerHTML=""
            upd = "";
            console.log(JSON.stringify(json.message, null, 2))
            let objet = json.message;
            let container = document.querySelector('.statistic-status');
            container.innerHTML = ""
            Object.entries(objet.session).forEach(([key, value]) => {
                let div = document.createElement('div');
                if (key.toLocaleLowerCase().indexOf("time") > -1 && key.toLocaleLowerCase().indexOf("question") < 0) value = convertSeconds(value)
                div.innerHTML = `<strong>${key}</strong>: ${value}`;
                container.appendChild(div);
            });
            let tableTd = document.querySelector('table');
            tableTd.querySelectorAll('tr').forEach((tr)=>{
                if (tr.parentElement.tagName != "THEAD") tr.remove()
            })
            let questions = objet.questions;
            questions.forEach((question)=>{ 
                let tr = document.createElement('tr');
                tr.innerHTML = `<td>${question.question_title}</td><td>${question.response_id}</td><td>${convertSeconds(question.response_time_duree)}</td>`;
                tableTd.appendChild(tr);
            })
        } else if (json.status == "sessions_lists") {
            messages.innerHTML=""
            upd = "";
            let data = json.message
            const sel = document.getElementById('sessions-list')
            while (sel.options.length > 0) {
                sel.remove(0);
            }
            const opt = document.createElement("option");
            opt.value = "";
            opt.text = "--Session--";
            sel.add(opt, null);
            data.forEach(item=>{
                const opt = document.createElement("option");
                opt.value = item.session_id;
                var date = new Date(item.session_time_start);
                opt.text = date.getDate() + "/" + date.getMonth()+1 + "/" +  date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() ;
                sel.add(opt, null);
            })
        } else if (json.status == "question_code") {
            let textArea = document.querySelector('textarea');
            textArea.value = json.message
            upd = "";

        } 

        if (upd !== "") {
            const message = document.createElement('div');
            message.textContent = upd;
            messages.appendChild(message);
        }
    } catch(e) {
        console.error("ws.onmessage\n", e)
    }    
}

function sendQuestionResponse(typeId, session_id, response, responseTimeStart) {
    const responseTimeEnd = new Date().toISOString().slice(0, 19).replace('T', ' '); // Heure de fin de réponse
    const responseData = {
        status: "user_response",
        type_id: typeId,
        session_id: session_id,
        response: response,
        response_time_start: responseTimeStart,
        response_time_end: responseTimeEnd
    };
    sendMessageWithRetry(JSON.stringify(responseData));
}

