const express = require('express');
const app = express();
const { connectDB } = require('./database');

connectDB();

app.listen(3000, () => {
    console.log('server is running on port 3000');
});