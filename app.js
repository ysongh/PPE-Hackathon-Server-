const express = require('express');
const mongoose = require('mongoose');

const db_key = require('./config/keys').mongoURI;

const app = express();

app.get('/', (req, res) => res.send('Server Work'));

const port = process.env.PORT || 1000;

mongoose.connect(db_key, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => console.log('Database Connected'));
    })
    .catch(err => {
        console.log(err);
    }); 