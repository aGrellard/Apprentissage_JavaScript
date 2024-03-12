const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tp_javascript"
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");


    const createQuestionsListType = `
    CREATE TABLE IF NOT EXISTS questions_list_type (
      type_id INT AUTO_INCREMENT PRIMARY KEY,
      type_name VARCHAR(255) NOT NULL
    )`;
    db.query(createQuestionsListType, (err, result) => {
        if (err) throw err;
    });
    const createQuestions = `
    CREATE TABLE IF NOT EXISTS questions (
      question_id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      filename VARCHAR(255),
      filepath VARCHAR(255),
      type_id INT,
      FOREIGN KEY (type_id) REFERENCES questions_list_type(type_id)
    )`;
    db.query(createQuestions, (err, result) => {
        if (err) throw err;
        db.end(); // Fermeture de la connexion
    });
});

