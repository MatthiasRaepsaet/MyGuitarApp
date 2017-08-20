/**
 * Created by Matthias on 19/08/2017.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var userSchema = Schema({
    firstName : String,
    lastName : String,
    email : String,
    username : String,
    password : String,
    guitars : [{type :Schema.Types.ObjectId, ref: "guitar"}]
});

var User = mongoose.model("user", userSchema);