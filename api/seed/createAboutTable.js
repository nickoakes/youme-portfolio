const sqlite3 = require('sqlite3');

let db = new sqlite3.Database("./youme-db.db", (err) => { 
    if (err) { 
        console.log('Error when creating the database', err) 
    } else { 
        console.log('Database created!') 
        const createTable = () => {
            console.log("create database table users");
            db.run(
                `CREATE TABLE About (
                    id INTEGER PRIMARY KEY AUTOINCREMENT, 
                    title VARCHAR(255) NOT NULL DEFAULT '', 
                    content VARCHAR(255) NOT NULL DEFAULT '' UNIQUE, 
                    createdAt DATETIME NOT NULL, 
                    updatedAt DATETIME NOT NULL
                  );`, insertData);
        };
        const insertData = () =>{
            console.log("Insert data");
            db.run(
                `INSERT INTO About (title, content, createdAt, updatedAt) 
                VALUES (?, ?, datetime('now'), datetime('now'))`, "손유미의 인사말", "블라블라블라블라블라블라블라블라블라");
        };

        createTable();
    }
});

db.close();