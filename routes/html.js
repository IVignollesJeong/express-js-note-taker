// importing of express and path.
const express = require('express');
const path = require('path');

const routerHtml = express.Router();

// next 2 router.get methods will send the index.html file to the user's client when the url ends with '/' (landing page), and notes.html file when the url ends with '/notes' (notes page).
routerHtml.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});


routerHtml.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = routerHtml;