const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const items = [];
let currentId = 1;

app.use(bodyParser.json());

const itemRoutes = require('./routes/itemRoutes');

app.use('/items', itemRoutes(items, currentId));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});