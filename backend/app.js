const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path");

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

// This is getting exported. 
const app = express();

// "mongodb+srv://Henry:rWeJtaNpCTRPRnjg@cluster0-eoh2g.mongodb.net/node-angular?retryWrites=true&w=majority"
mongoose.connect("mongodb+srv://Henry:rWeJtaNpCTRPRnjg@cluster0-eoh2g.mongodb.net/node-angular?retryWrites=true&w=majority")
        .then(() => {
            console.log('Connected to database.');
        })
        .catch(() => {
            console.log("Connection failed!")
        });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/images", express.static(path.join("./images")));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

module.exports = app;