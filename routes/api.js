// importing of express, fs, path, and universally unique identifier v4
const express = require('express');
const fs = require('fs');
const path = require('path');
const {v4: uuidv4} = require('uuid');

const routerApi = express.Router();

routerApi.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(400).json({ error: 'Unable to read notes. No notes exist or route error.' });
        }
        const notes = JSON.parse(data);
        res.json(notes);
    });
});

routerApi.post('/api/notes', (req, res) => {
    const {title, text} = req.body;
    const newNote = {
        id: uuidv4(),
        title: title,
        text: text
    };

    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(400).json({ error: 'Unable to read notes. No notes exist or route error' });
        }
        const notes = JSON.parse(data);

        notes.push(newNote);

        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({error: 'Error occured saving note'});
            }
            res.json(newNote);
        });
    });
});


module.exports = routerApi;

