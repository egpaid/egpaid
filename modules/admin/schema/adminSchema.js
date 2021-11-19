const mongoose = require("mongoose");

const admin = mongoose.Schema({
    mobile : {
        type : String,
        minLength : 10,
        maxLengrh : 10,
        unique : true,
        required : true
    },

    password : {
        type : String,
        required  : true
    },

    role : {
        type : String
    },

    token : {
        type : String
    }
})

const Admin = mongoose.model( "admin" , admin );

module.exports = Admin;