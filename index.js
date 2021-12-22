const express = require('express');

const bodyParser = require('body-parser')
//initialize routes

// set up exprss app
const app = express();

// write path as a first parametr
app.use(bodyParser.json());

app.use('/api',require('./routes/api'));



//listen for request
app.listen(process.env.port || 4000, ()=> {
    console.log('Now listenning for requests'); 
});

