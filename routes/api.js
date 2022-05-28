const fs = require('fs');
const express = require('express')
const app = express();

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        fs.readFile('./Develop/db/db.json', (err, data) => {
            if (err) throw err;
            dbData = JSON.parse(data);
            res.send(dbData);
        });
    });
};

app.post('/api/notes', (req, res) => {
    const userNotes = req.body;

    fs.readFile('./Develop/db/db.json', (err, data) => {
        if (err) throw err;
        dbData = JSON.parse(data);
        dbData.push(userNotes);
        for(let i = 1; i < dbData.length; i++){
            return dbData;
        }
    })
    console.log(dbData)
})
