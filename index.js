const express = require('express');

const app = express();

const PORT = 5000;

//router
app.get('/', (req, res) => {
    res.send('hello world');
})
app.get('/user', (req, res) => {
    res.send('hello user');
})
app.get('/ak', (req, res) => {
    console.log(res.body);
    res.send('hello ak');
})

app.listen(PORT);