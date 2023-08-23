const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    FullName:{
        type:String,
        required:true
    },
     phonenumber : {
        type : Number,
        required : true
    },
    emailid: {
        type : String,
        required : true
    },
    password:{
        type:String,
        required:true
    }
})

const userdetails = mongoose.model('userdetails',userSchema)

module.exports = userdetails