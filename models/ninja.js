const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//create ninja Schema &Model
const NinjaSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name field is required']
    },
    rank:{
        type:String
    },
    available:{
        type:Boolean,
        default:false
    }
    //add in geo location
});

// Make a collection from the Schema 
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;