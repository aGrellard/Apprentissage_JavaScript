const fs = require('fs').promises; // Utilisation de la version promisifiée pour permettre async/await
const path = require('path');

const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "adri",
    password: "azeqsd",
    database: "tp_javascript"
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!\n");


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
    });
    const createReponses = `
    CREATE TABLE IF NOT EXISTS user_reponses (
        response_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
        type_id int NOT NULL,
        session_id int NOT NULL,
        question_id int NOT NULL,
        response text COLLATE utf8mb4_unicode_ci NOT NULL,
        response_time_start datetime NOT NULL,
        response_time_end datetime NOT NULL,
        response_time_duree BIGINT,
        FOREIGN KEY (type_id) REFERENCES questions_list_type(type_id),
        FOREIGN KEY (session_id) REFERENCES sessions_list(session_id),
        FOREIGN KEY (question_id) REFERENCES questions(question_id)
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `;
    db.query(createReponses, (err, result) => {
        if (err) throw err;
    }); 
    const createSession = `
    CREATE TABLE IF NOT EXISTS sessions_list (
        session_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
        session_time_start datetime NOT NULL,
        session_time_end datetime NOT NULL
    )`;
    db.query(createSession, (err, result) => {
        if (err) throw err;
    }); 
    // const alterTable = `
    //     ALTER TABLE user_reponses ADD COLUMN response_time_duree INT;
    // `
    // db.query(alterTable, (err, result) => {
    //     if (err) throw err;
    // });   
    const createStatistic = `
    CREATE TABLE IF NOT EXISTS session_statistics (
        statistic_id int NOT NULL AUTO_INCREMENT,
        session_id int NOT NULL,
        total_responses int DEFAULT NULL,
        average_response_time double DEFAULT NULL,
        most_time_spent_question_id int DEFAULT NULL,
        least_time_spent_question_id int DEFAULT NULL,
        PRIMARY KEY (statistic_id),
        FOREIGN KEY (session_id) REFERENCES sessions_list(session_id)
       ) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
       `;
       db.query(createStatistic, (err, result) => {
        if (err) throw err;
        db.end(); // Fermeture de la connexion
    });        

});

// Fonction pour ajouter un type de question
function addQuestionType(typeName) {
    const query = 'INSERT INTO questions_list_type (type_name) VALUES (?)';
    db.query(query, [typeName], (err, result) => {
        if (err) {
        console.error(`Erreur lors de l'ajout du type de question "${typeName}":`, err);
        return;
        }
        console.log(`Type de question "${typeName}" ajouté avec succès, ID:`, result.insertId);
    });
}


// Fonction pour récupérer l'ID du type de question
function getTypeID(typeName, callback) {
    db.query('SELECT type_id FROM questions_list_type WHERE type_name = ?', [typeName], (err, results) => {
        if (err) {
        return callback(err, null);
        }
        if (results.length > 0) {
        return callback(null, results[0].type_id);
        } else {
        return callback(new Error('Type de question non trouvé.'), null);
        }
    });
}
  
async function insertQuestion(title, description, filename, filepath, typeId) {
    const query = `
        INSERT INTO questions (title, description, filename, filepath, type_id)
        VALUES (?, ?, ?, ?, ?)
    `;
    await db.query(query, [title, description, filename, filepath, typeId], (err, result) => {
        if (err) {
        console.error('Erreur lors de l\'insertion de la question:', err);
        return;
        }
        console.log('Question insérée avec succès, ID:', result.insertId);
    });
}

async function createDirectories(dirPath) {
    try {
        await fs.access(dirPath);
        console.log(`Le dossier "${dirPath}" existe déjà.`);
    } catch(dirExist) {
        try {
            await fs.mkdir(dirPath, { recursive: true }); // L'option { recursive: true } permet de créer des sous-dossiers si nécessaire
            console.log(`Dossier créé: ${dirPath}`);
        } catch (mkdirerror) {
            console.error(`Erreur lors de la création du dossier ${dirPath}:`, mkdirerror);
        }
    }
}

async function createFileIfNotExists(filePath, content = '') {
    try {
        // Vérifie si le fichier existe
        await fs.access(filePath);
        console.log('Le fichier existe déjà.');
    } catch (error) {
        // Si le fichier n'existe pas, une erreur est lancée, donc on crée le fichier
        try {
            await fs.writeFile(filePath, content);
            console.log('Fichier créé avec succès.');
        } catch (writeError) {
            console.error('Erreur lors de la création du fichier:', writeError);
        }
    }
}

/*
getTypeID('debutant', (err, typeId) => {
    if (err) {
        console.error(err);
        return;
    }
    const query = `SELECT * FROM questions WHERE type_id like ?`
    db.query(query, typeId, async (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        for (let item of results) {
            console.log(item.title); // Pas besoin de déclarer une fonction async supplémentaire
    
            const dirPath = path.join(__dirname, item.filepath); 
            await createDirectories(dirPath);
    
            const filePath = path.join(dirPath, item.filename); // Utilisez directement dirPath
            await createFileIfNotExists(filePath);
        }
    });
});
*/




// Exemple d'utilisation pour récupérer l'ID du type "debutant"
/*
getTypeID('debutant', (err, typeId) => {
    if (err) {
      console.error(err);
      return;
    }
    // Insertion d'une nouvelle question avec l'ID du type récupéré
    insertQuestion('anagramme', '', '', '', typeId);
    insertQuestion('comptage_de_mots', '', '', '', typeId);
    insertQuestion('comptage_sousChaines_unique', '', '', '', typeId);
    insertQuestion('compter_voyelles', '', '', '', typeId);
    insertQuestion('inversion_chaine', '', '', '', typeId);
    insertQuestion('maximum_tableau', '', '', '', typeId);
    insertQuestion('parentheses_valides', '', '', '', typeId);
    insertQuestion('verification_palyndrome', '', '', '', typeId);
    insertQuestion('regroupement', '', '', '', typeId);
});*/
getTypeID('array', async (err, typeId) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Insertion Questions array")
    /*
    let count = 1;
    for (let index = 1; index < 6; index++) {
        await insertQuestion('filter_'+index, '', 'question_'+count+'.js', '/db_questions/array_1/', typeId);
        count++;
    }
    for (let index = 1; index < 7; index++) {
        await insertQuestion('reduce_'+index, '', 'question_'+count+'.js', '/db_questions/array_1/', typeId);
        count++;
    }
    for (let index = 1; index < 5; index++) {
        await insertQuestion('map_'+index, '', 'question_'+count+'.js', '/db_questions/array_1/', typeId);
        count++;
    }
    for (let index = 1; index < 6; index++) {
        await insertQuestion('sort_'+index, '', 'question_'+count+'.js', '/db_questions/array_1/', typeId);
        count++;
    }
    */
   
    const fichier =  path.join(__dirname, "data", "array.json");
    try {
        const data = await fs.readFile(fichier, { encoding: 'utf8' });   
        let json = JSON.parse(data)
        let array = json.questions
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            await insertQuestion(element.name, '', '', '', typeId);

        }
    } catch(e) {
        return;
    }
      


});

// Ajouter les types "array" et "débutant" à la table questions_list_type
// addQuestionType('array');
// addQuestionType('debutant');