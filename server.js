const express = require('express');

const app = express();

const PORT = process.env.port ||5000;

//router
app.get('/', (req, res) => {
    console.log(res.body);
    res.send('hello world');
})
app.get('/user', (req, res) => {
    console.log(res.body);
    res.send('hello user');
})
app.get('/ak', (req, res) => {
    console.log(res.body);
    res.send('hello ak');
})

app.listen(PORT, () => {
    console.log('server running');
});