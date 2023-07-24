// import express.js, setup routes for html.js/api.js, setup PORT and initialize express.js
const express = require('express');
const routerHtml = require('./routes/html');
const routerApi = require('./routes/api');
const PORT = process.env.PORT || 3001;
const app = express();


// express.urlencoded will parse incoming requests with URL-encoded payloads
// express.json() will parse incoming requests with JSON payloads
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(routerHtml)
app.use(routerApi)


// opens port and console logs the current running local server
app.listen(PORT, () => {
    console.log(`Server currently running on http://localhost:${PORT}`);
});