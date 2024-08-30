const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let sampleData = { id: 1, name: 'Sample Item' };

app.post('/create', (req, res) => {
    console.log('Create:', req.body);
    res.status(201).json({ message: 'Object created successfully', data: req.body });
});

app.get('/read', (req, res) => {
    res.json(sampleData);
});

app.put('/update', (req, res) => {
    console.log('Update:', req.body);
    sampleData = { ...sampleData, ...req.body };
    res.json({ message: 'Object updated successfully', data: sampleData });
});

app.delete('/delete', (req, res) => {
    console.log('Delete:', req.body);
    res.json({ message: 'Object deleted successfully', data: req.body });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});