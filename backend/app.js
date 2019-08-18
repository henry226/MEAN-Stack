const express = require('express');

// This is getting exported. 
const app = express();

app.use((req, res, next) => {
    console.log('First Middleware');
    next();
});

app.use((req, res, next) => {
    res.send('Hello from express!');
});

module.exports = app;