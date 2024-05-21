const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')
const dotenv = require("dotenv")
const mongoose = require("mongoose")


const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
dotenv.config()
const { Schema } = mongoose

const userSchema = new Schema({
    imgSRC: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    param: {
        type: String,
        require: true
    }
})

const User = mongoose.model("User", userSchema)

//!POST REQUEST
app.post("/users", async (req, res) => {
    try {
        const { imgSRC, title, param } = req.body
        const user = new User({
            imgSRC,
            title,
            param
        })
        await user.save()
        res.status(201).send(user)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

//!GET REQUEST
app.get("/users", async (req, res) => {
    try {
        const user = await User.find({})
        res.status(200).send(user)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

//!DELETE REQUEST
app.delete("/users/:id",async(req,res)=>{
    try{
        const{id}=req.params
        const user = await User.findByIdAndDelete(id)
        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send(err)
    }
})

//!GET BYID
app.get("/users/:id",async(req,res)=>{
try{
    const {id}=req.params
    const user = await User.findById(id)
    res.status(200).send(user)
}
catch(err){
    res.status(500).send(err)
}
})

//GET UPDATE
app.put("/users/:id",async(req,res)=>{
    try{
        const {id}=req.params
        const user = await User.findByIdAndUpdate(id)
        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send(err)
    }
})




const PORT = process.env.PORT;
const DB = process.env.DB_URL;
mongoose.connect(DB).then(() => console.log("Connected!"))
app.listen(PORT, () => console.log("Port listen", PORT))