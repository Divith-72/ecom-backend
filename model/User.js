const mongoose = require('mongoose');
    const UserSchema = new mongoose.Schema({
        name:{type:String,required:true},
        email:{type:String},
        password:{type:String,required:true},
        address:{type:String}

    });

    module.exports = mongoose.model('User',UserSchema);