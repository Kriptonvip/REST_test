const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//initialize routes

// set up exprss app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/ninjago');
mongoose.Promise = global.Promise;


app.use(bodyParser.json());
// write path as a first parametr
app.use('/api',require('./routes/api'));

//Error handling middleware

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(422).send({error:err.get_message});
});



//listen for request
app.listen(process.env.port || 4000, ()=> {
    console.log('Now listenning for requests'); 
});

