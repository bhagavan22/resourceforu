const mongoose = require('mongoose')

const SubSchema = new mongoose.Schema({
    CourseId:{
        type:String,
        required:true
    },
     Topicname : {                 
        type : String,
        required : true
    },
    Explanation: {
        type : String,
        required : true
    },
    ResourceLinks:{
        type:String,
        required:true
    }
})

const Subtopics = mongoose.model('Subtopics',SubSchema)

module.exports = Subtopics