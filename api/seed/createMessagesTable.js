const sqlite3 = require('sqlite3');

let db = new sqlite3.Database("./youme-db.db", (err) => { 
    if (err) { 
        console.log('Error when creating the database', err) 
    } else { 
        console.log('Database created!') 
        const createTable = () => {
            console.log("create database table messages");
            db.run(
                `CREATE TABLE Messages (
                    id INTEGER PRIMARY KEY AUTOINCREMENT, 
                    senderName VARCHAR(255) NOT NULL DEFAULT '', 
                    senderEmail VARCHAR(255) NOT NULL DEFAULT '', 
                    message VARCHAR(255) NOT NULL DEFAULT '',
                    createdAt DATETIME NOT NULL, 
                    updatedAt DATETIME NOT NULL
                  );`, insertData);
        };
        const insertData = () =>{
            console.log("Insert data");
            db.run(
                `INSERT INTO Messages (senderName, senderEmail, message, createdAt, updatedAt) 
                VALUES (?, ?, ?, datetime('now'), datetime('now'))`, "Corey Trevor", "ct@sunnyvale.ca", "Test message");
        };

        createTable();
    }
});

db.close();