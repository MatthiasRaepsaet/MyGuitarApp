/**
 * Created by Matthias on 19/08/2017.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var guitarSchema = Schema({
    name : String,
    type : String,
    brand : String,
    price : String,
    strings : number,
    description: string,
    photoUrl : String
});

var guitar = mongoose.model("guitar", guitarSchema);