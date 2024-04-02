const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/name', (req, res) => {
    res.send('Hello Friend!')
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});