const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
const PORT = 9000
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})

const mongoose = require('mongoose')

const DB = 'mongodb://0.0.0.0:27017/resource'
mongoose.connect(DB, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})



const resourceforu = require('./model/resourceforu')

app.post('/add-technology', async(req,res) => {
    const techid = new resourceforu(req.body)
    try{
        await techid.save()
        res.status(201).json({
            status: 'Success',
            data : {
                techid
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

const SubSchema=require('./model/Topicsanddata')

app.post('/add-Subtopic', async(req,res) => {
    const tech = new SubSchema(req.body)
    try{
        await tech.save()
        res.status(201).json({
            data : {
                tech
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})


app.get('/get-subtopic', async (req,res) => {
    const tech = await resourceforu.find({})
    try{
        res.status(200).json({
         
            data : {
                tech
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})


const userdata = require('./model/userdata')

app.post('/add-user', async(req,res) => {
    const userinfo = new userdata(req.body)
    try{
        await userinfo.save()
        res.status(201).json({
            status: 'Success',
            data : {
                userinfo
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
   }
})



app.get('/get-allsubtopics/:id', async (req,res) => {
    const subtopics = await SubSchema.find({"CourseId" :req.params.id})
    try{
        res.status(200).json({
           
            data : {
                subtopics
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})


app.get('/get-courses', async (req,res) => {
    const allcourses = await resourceforu.find({})
    try{
        res.status(200).json({
         
            data : {
                allcourses
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})