// was outside src

const express = require('express')
const app = express()
const mongoose =require('mongoose');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://anish:1234@firstcluster.hnsxgmy.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true},{useUnifiedTopology:true})

const testSchema = {
    name : String,
    email : String,
    phone : Number
}

const test1 = mongoose.model("test1", testSchema)

app.get("/", function(req, res){
    //res.send("Express Is Working")
    res.sendFile(__dirname+ "/App.js")
})


app.post("/", function(req, res){
    let newTest = new test1({
        name: req.body.name,
        email: req.body.email,
        phone:req.body.phone,
    })
    newTest.save()
    res.redirect("/")
})


app.listen(3000, function(){
    console.log("Server is running on 3000")
})