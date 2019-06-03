const sqlite3 = require('sqlite3');
const bcrypt = require('bcryptjs');

let db = new sqlite3.Database("./youme-db.db", (err) => { 
    if (err) { 
        console.log('Error when creating the database', err) 
    } else { 
        console.log('Database created!') 
        const createTable = () => {
            console.log("create database table users");
            db.run(
                `CREATE TABLE Users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT, 
                    name VARCHAR(255) NOT NULL DEFAULT '', 
                    username VARCHAR(255) NOT NULL DEFAULT '' UNIQUE, 
                    password VARCHAR(255) NOT NULL DEFAULT '', 
                    createdAt DATETIME NOT NULL, 
                    updatedAt DATETIME NOT NULL
                  );`, insertData);
        };

        const insertData = () =>{
            console.log("Insert data");
            let hash = bcrypt.hashSync('thewayshegoes35', 10);
            db.run(
                `INSERT INTO Users (name, username, password, createdAt, updatedAt) 
                VALUES (?, ?, ?, datetime('now'), datetime('now'))`, "Youme Son", "youmeson", hash);
        };

        createTable();
    } 
});

db.close();