const express = require('express');
//initialize routes
const routes = require('./routes/api');

// set up exprss app
const app = express();

// write path as a first parametr
app.use('/api',routes);



//listen for request
app.listen(process.env.port || 4000, ()=> {
    console.log('Now listenning for requests'); 
});

