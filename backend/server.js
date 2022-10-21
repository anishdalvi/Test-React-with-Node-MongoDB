const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")



require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())  //Middleware 
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI
mongoose.connect(uri,
    {
        useNewUrlParser:true, 
        useUnifiedTopology:true
    })

const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB connection established successfully")
})


const userRouter = require('./routes/users')
app.use('/users',userRouter)


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})


