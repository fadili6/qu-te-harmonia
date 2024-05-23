const express = require('express');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3310;

app.get('/', (req, res) => {
    res.send('Welcome to Wild Series !');
});

app.listen(PORT, () => {
    console.warn(`Server is running on http://localhost:${PORT}`);
});
