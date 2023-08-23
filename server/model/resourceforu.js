const mongoose = require('mongoose')

const resourceforuSchema = new mongoose.Schema({
    technologyname : {
        type : String,
        required : true
    }
})

const Courses = mongoose.model('Courses',resourceforuSchema)

module.exports = Courses