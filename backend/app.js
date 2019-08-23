const express = require('express');
const bodyParser = require('body-parser');
const Post = require('./model/post');
const mongoose = require('mongoose');

// This is getting exported. 
const app = express();

mongoose.connect("mongodb+srv://Henry:rWeJtaNpCTRPRnjg@cluster0-eoh2g.mongodb.net/test?retryWrites=true&w=majority")
        .then(() => {
            console.log('Connected to database.');
        })
        .catch(() => {
            console.log("Connection failed!")
        });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.post("/api/posts", (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    console.log(post);
    res.status(201).json({
        message: 'Post added successful.'
    });
});

app.get('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: 'first id', 
            title: 'first title', 
            content: 'first content'
        },
        {
            id: '2nd id', 
            title: '2nd title', 
            content: '2nd content'
        }
    ];
    res.status(200).json({
        message: 'Posts fetched successfully!',
        posts: posts
    });
});

module.exports = app;