const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//create geolocatoin Schema
const geoSchema = new Schema ({
    type:{
        type:String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
});

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
    },
    geometry:geoSchema
});

// Make a collection from the Schema 
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;