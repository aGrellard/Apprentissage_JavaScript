const sessionStates = {};


const mysql = require('mysql');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const WebSocket = require('ws');
const { NULL } = require('mysql/lib/protocol/constants/types');
const fs = require('node:fs/promises');

// Configuration de la base de données
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "adri",
    password: "azeqsd",
    database: "tp_javascript"
});

// Initialisation de l'application Express
const app = express();
const port = 3000;

// Middlewares 
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"], // chargement de ressources du même origine
            connectSrc: ["'self'", "ws://localhost:8080"], 
        },
    },
}));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Configuration du WebSocket
const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', (ws) => {
    console.log('Un client est connecté');
    getSessions().then(result => {
        ws.send(JSON.stringify({status: "sessions_lists", message: result}))
    })
    ws.send('Bienvenue !');
    ws.on('message', (message) => {
        let json = JSON.parse(message);
        console.log(json)
        if (json.status == "user_response") {
            user_response(ws, message);
        }
        else if (json.status == "session_start") {
            handleNewSessionAndQuestions(ws, json.questions_type);
        } 
        else if (json.status == "session_stop") {
            deleteSessionById(json.session_id).then(result => {
                deleteResponsesBySessionId(json.session_id).then(result => {
                    ws.send(JSON.stringify({ status: 'session_completed', message: 'Session supprimée avec succès' }));
                })
            })
        } 
        else if (json.status == "sessions_get") {
            getSessions().then(result => {
                ws.send(JSON.stringify({status: "sessions_lists"}))
            })
        }
        else if (json.status == "sessions_list") {
            sessionStatistic(ws, json.session_id)
        }
        else if (json.status == "sessions_list_get") {
            getSessions().then(result => {
                ws.send(JSON.stringify({status: "sessions_lists", message: result}))
            })
        }
        else if (json.status == "question_code") {
            getSessions().then(result => {
                getQuestionByTitle(json.question_title).then(async (item)=>{

                    // var x = path.join(__dirname, item[0].filepath, item[0].filename);
                    // const data = await fs.readFile(x, { encoding: 'utf8' });        
                    // ws.send(JSON.stringify({status: "question_code", message: data}))
                    // eval(c);
                    // const vm = require('vm');
                }) 
                getResponseById(json.session_id, json.response_id).then(async (result)=>{
                    let jsonPath;

                    try {
                        var test = result[0].type_id
                    } catch (e) {
                        return;
                    }

                    switch (result[0].type_id) {
                        case 1:
                            jsonPath = path.join(__dirname, "data", "array.json")
                            break;
                        case 2:
                            jsonPath = path.join(__dirname, "data", "debutant.json")
                            break;
                        default:
                            jsonPath = path.join(__dirname, "data", "array.json")
                    }

                    try {
                        const data = await fs.readFile(jsonPath, { encoding: 'utf8' });   
                        let dataJson = JSON.parse(data)

                        let array = dataJson.questions
                        for (let index = 0; index < array.length; index++) {
                            const element = array[index];

                            if (element && element.name === json.question_title) {
                                let code = result[0].response;

                                const convert = (value) => {
                                    if (typeof value !== "string") return value;
                                    if (value == "true") return true;
                                    if (value == "false") return false;
                                    if (value.startsWith('"') && value.endsWith('"')) {
                                        value = value.replace(/"/g,"")
                                        return value;
                                    }
                                    return value;
                                }
                                // Sauvegarde de la fonction console.log originale
                                const originalConsoleLog = console.log;

                                // Préparation d'un tableau pour stocker les messages
                                let capturedLogs = [];

                                // Remplacement de console.log par une fonction personnalisée
                                console.log = (message) => {
                                    capturedLogs.push(message); // Capture le message
                                    // originalConsoleLog(message); // Continue à afficher le message dans la console
                                };

                                eval(code) 

                                console.log = originalConsoleLog;
                                // console.log("Captured logs:", capturedLogs);
                                

                                let response = element.expectedOutput.filter((item, pos)=>{
                                    let cS = capturedLogs[pos]
                                    let cR = item
                                    if (typeof item !== typeof capturedLogs[pos]) {
                                        if (typeof capturedLogs[pos] === "object") {
                                            cR = cR.replace(/'/g, '"')
                                            cR = JSON.parse(cR);
                                            cR = JSON.stringify(cR)
                                            cS = JSON.stringify( capturedLogs[pos])
                                        }
                                    }
                                    cR = convert(cR)
                                    try {
                                        cR = normalizedItem(cR)
                                    } catch(e) {}
                                    try {
                                        cS = normalizedItem(cS)
                                    } catch(e) {}
                                    
                                    return cR == cS
                                })
                                // console.log("response =", element.expectedOutput.length === response.length)
                                let cleanCode = code.split(/\r?\n/).filter(item => {return !item.startsWith('//')}).join("\r\n")
                                ws.send(JSON.stringify({status: "question_code", message: cleanCode}))

                            }
                        }
                    } catch(e) {
                        return;
                    }


                })
                // ws.send(JSON.stringify({status: "sessions_lists", message: result}))
            })
        }

    });
    // const interval = setInterval(() => ws.send('Message du serveur à ' + new Date().toLocaleTimeString()), 5000);
    // ws.on('close', () => clearInterval(interval));

});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html')); 
});


app.listen(port, () => console.log(`Serveur démarré sur http://localhost:${port}`));

function normalizedItem(item1) {
    return JSON.stringify(JSON.parse(item1));
}

// Fonction helper pour exécuter les requêtes SQL
async function query(sql, params) {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

/* ########################################################## */
// Fonctions pour manipuler la base de données
/* ########################################################## */

// Recetion d'un message : session_start
// session_time_start, session_time_end sont initialisés à la date de création de la row
function createSession() {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO sessions_list (session_time_start, session_time_end) VALUES (NOW(), NOW())`;
        pool.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
    });
}

// Mise à jour de la date de début de session
function updateSessionStartTime(sessionId) {
    return new Promise((resolve, reject) => {
        const query = `UPDATE sessions_list SET session_time_start = NOW() WHERE session_id = ?`;
        pool.query(query, [sessionId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

// Préparer les questions pour une session
// Récupérer toutes les questions par son type
function getQuestions(questions_type) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM questions WHERE type_id = ? ORDER BY question_id ASC`;
        pool.query(query, [questions_type], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

// Préparer une liste de questions pour une session terminer 
// Récupérer une question par son ID
function getQuestion(question_id) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM questions WHERE question_id = ?`;
        pool.query(query, [question_id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}
function getQuestionByTitle(questionTitle) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM questions WHERE title = ?`;
        pool.query(query, [questionTitle], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

function getSessions() {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM sessions_list`;
        pool.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

function deleteSessionById(session_id) {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM sessions_list WHERE session_id = ?`;
        pool.query(query, [session_id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

function getResponses(session_id) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM user_reponses WHERE session_id = ? ORDER BY response_id`;
        pool.query(query, [session_id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}
function getResponseById(session_id, response_id) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM user_reponses WHERE session_id = ? AND response_id = ?`;
        pool.query(query, [session_id, response_id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

function deleteResponsesBySessionId(session_id) {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM user_reponses WHERE session_id = ?`;
        pool.query(query, [session_id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

async function handleNewSessionAndQuestions(ws, questions_type) {
    try {
        const sessionId = await createSession();
        await updateSessionStartTime(sessionId);
        const questions = await getQuestions(questions_type);
        initializeSessionState(sessionId, questions);
        ws.send(JSON.stringify({ status: 'session_start', id: sessionId }));
        sendNextQuestion(ws, sessionId);
    } catch (error) {
        console.error("Error:", error);
    }
}

function initializeSessionState(sessionId, questions) {
    sessionStates[sessionId] = {
        currentQuestionIndex: 0, // Commence à 0 pour la première question
        questions: questions, // Liste de toutes les questions à poser
        status: false,
        currentsession: undefined
    };
}

function getNextQuestion(sessionId) {
    const session = sessionStates[sessionId];
    if (session.currentQuestionIndex < session.questions.length) {
        const question = session.questions[session.currentQuestionIndex];
        session.currentQuestionIndex += 1; // incrémentation pour la prochaine question
        return question;
    } else {
        return null;
    }
}

function insertResponseWithDuration({ type_id, session_id, question_id, response, response_time_start, response_time_end }) {
    const query = `
        INSERT INTO user_reponses (type_id, session_id, question_id, response, response_time_start, response_time_end, response_time_duree)
        VALUES (?, ?, ?, ?, ?, ?, TIMESTAMPDIFF(MINUTE, ?, ?));
    `;

    pool.query(query, [type_id, session_id, question_id, response, response_time_start, response_time_end, response_time_start, response_time_end], (error, results) => {
        if (error) {
            console.error('Erreur lors de l\'insertion de la réponse avec durée:', error);
            return;
        }
    });
}

function user_response(ws, response, canSendNextQuestion = true) {
    response = JSON.parse(response);
    const query = `
    INSERT INTO user_reponses (type_id, session_id, question_id, response, response_time_start, response_time_end, response_time_duree)
    VALUES (?, ?, ?, ?, ?, ?,  TIMESTAMPDIFF(SECOND, ?, ?));
    `;
    const session = sessionStates[response.session_id];
    const question = session.questions[session.currentQuestionIndex - 1];
    pool.query(query, [
        response.type_id,
        response.session_id,
        question.question_id,
        response.response,
        response.response_time_start,
        response.response_time_end, response.response_time_start, response.response_time_end], async (error, results) => {
            if (error) {
                console.error('Erreur lors de l\'insertion de la réponse:', error);
                ws.send(JSON.stringify({ status: 'response_error', message: 'Erreur lors de l\'enregistrement de la réponse' }));
            } else {
                let responseJson = JSON.stringify({ status: 'response_success', message: 'Réponse enregistrée avec succès', title: question.title, id: question.question_id })
                ws.send(responseJson);
                // Envoyer la question suivante
                if (canSendNextQuestion) sendNextQuestion(ws, response.session_id);
            }
        });
}

function updateSessionEndTime(sessionId) {
    return new Promise((resolve, reject) => {
        const query = `UPDATE sessions_list SET session_time_end = NOW() WHERE session_id = ?`;
        pool.query(query, [sessionId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

function sendNextQuestion(ws, sessionId) {
    const question = getNextQuestion(sessionId);
    if (question) {
        // Envoyer la question au client
        // Le clien met en mémoire le temps a laquelle la question a été reçu : QUESTION_TIME_START
        ws.send(JSON.stringify({ status: 'question', data: question }));
    } else {
        // Pas de réponse attendu
        // le client met a 0 SESSIO_ID et QUESTION_TIME_START
        ws.send(JSON.stringify({ status: 'session_completed', message: 'Toutes les questions ont été posées. La session est terminée.' }));

        // Fin de session
        updateSessionEndTime(sessionId).then(async () => {
            // 
        }).catch((error) => {
            console.error(`Erreur lors de la mise à jour de l'heure de fin pour la session ${sessionId}:`, error);
        });
    }
}
async function sessionStatistic(ws, sessionId) {
    let responses = await getResponses(sessionId);
    let questions = []
    let responseClient = {}
    let totalResponsesSeconds = 0;
    for (let index = 0; index < responses.length; index++) {
        const element = responses[index];
        let question = await getQuestion(element.question_id)
        question = question[0];
        questions.push({
            response_id: element.response_id,
            type_id: element.type_id,
            session_id: element.session_id,
            question_id: element.question_id,
            question_title: question.title,
            response_time_duree: element.response_time_duree,
        })
        totalResponsesSeconds += element.response_time_duree;
    }
    let statistic = await calculateAndSaveSessionStats(sessionId, responses);
    statistic["totalTime"] = totalResponsesSeconds;
    responseClient["session"] = statistic;
    responseClient["questions"] = questions;
    ws.send(JSON.stringify({ status: 'session_statistic', message: responseClient}));    
}
async function calculateAndSaveSessionStats(sessionId, responses) {
    let totalResponses, averageResponseTime, mostTimeSpentQuestion, leastTimeSpentQuestion;
    const statsQuery = `
        SELECT 
            COUNT(response_id) AS total_responses,
            AVG(response_time_duree) AS average_response_time,
            MAX(response_time_duree) AS max_response_time,
            MIN(response_time_duree) AS min_response_time
        FROM user_reponses
        WHERE session_id = ?`;
    const maxMinQuestionQuery = `
        SELECT 
            question_id, 
            response_time_duree 
        FROM user_reponses 
        WHERE session_id = ? AND response_time_duree = ? LIMIT 1`;

    try {
        const statsResults = await query(statsQuery, [sessionId]);
        if (statsResults.length > 0) {
            totalResponses = statsResults[0].total_responses;
            averageResponseTime = statsResults[0].average_response_time;

            // Trouver la question avec le temps de réponse maximum
            const maxTimeResults = await query(maxMinQuestionQuery, [sessionId, statsResults[0].max_response_time]);
            mostTimeSpentQuestion = maxTimeResults[0] ? maxTimeResults[0].question_id : null;

            // Trouver la question avec le temps de réponse minimum
            const minTimeResults = await query(maxMinQuestionQuery, [sessionId, statsResults[0].min_response_time]);
            leastTimeSpentQuestion = minTimeResults[0] ? minTimeResults[0].question_id : null;

            // Insérer les statistiques dans la table session_statistics
            const insertStatsQuery = `
                INSERT INTO session_statistics 
                (session_id, total_responses, average_response_time, most_time_spent_question_id, least_time_spent_question_id)
                VALUES (?, ?, ?, ?, ?)`;

            await query(insertStatsQuery, [
                sessionId,
                totalResponses,
                averageResponseTime,
                mostTimeSpentQuestion,
                leastTimeSpentQuestion
            ]);

            // Retourner les statistiques pour transmission au client
            return {
                sessionId,
                totalResponses,
                averageResponseTime: averageResponseTime.toFixed(2), // Formater pour 2 décimales
                mostTimeSpentQuestion,
                leastTimeSpentQuestion,
                mostTimeSpent: statsResults[0].max_response_time,
                leastTimeSpent: statsResults[0].min_response_time
            };
        }
    } catch (error) {
        console.error('Erreur lors du calcul des statistiques de la session:', error);
        throw error; // Propager l'erreur pour traitement ultérieur
    }
}


