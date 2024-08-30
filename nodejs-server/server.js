const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;
const itemRoutes = require('./routes/itemRoutes');

app.use(cors());
app.use(express.json());
app.use('/api', itemRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});