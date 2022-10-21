// was inside src

const mongoose = require('mongoose')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
/* const url = `mongodb+srv://anish:1234@firstcluster.hnsxgmy.mongodb.net/test?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
} */
/* mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    }) */

mongoose.connect("mongodb://localhost:27017/test",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}).then( () => {
    console.log('Connected to the database ')
})
.catch( (err) => {
    console.error(`Error connecting to the database. n${err}`);
})


const testSchema = {
    name:String,
    email:String,
    phone:Number
}

const test1 = mongoose.model("test1",testSchema)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/components/Form.js")
})

app.post("/", (req, res) => {
    let newTest = new test1({
        name: req.body.name,
        email:req.body.email,
        phone:req.body.phone
    })
    newTest.save()
    res.redirect('/components/First.js')
})

app.listen(3000,function(){
    console.log("Server running on port 3000")
})