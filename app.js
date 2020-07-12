const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const db_key = require('./config/keys').mongoURI;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors())

app.use(passport.initialize());
require('./config/passport')(passport);

app.get('/', (req, res) => res.send('Server Work'));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/school', require('./routes/school'));

const port = process.env.PORT || 1000;

mongoose.connect(db_key, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => console.log('Database Connected'));
    })
    .catch(err => {
        console.log(err);
    }); 