const express = require('express');

// This is getting exported. 
const app = express();

app.use('/api/posts', (req, res, next) => {
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