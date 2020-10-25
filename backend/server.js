const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongodb = require('./database/mongoose');
const route = require('./routes/index')

const app = express();
const corsConfig = cors({ origin: ['http://localhost:4000', 'http://localhost:4200'] }); 
const db = mongodb.connect();

app.use(bodyParser.json());
app.use(corsConfig);
app.use(route());


app.listen(process.env.PORT || 8000, () => {
    console.log('Server..: OK');
});