const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const app = express()
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

dotenv.config()

mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser:true , useUnifiedTopology: true},
    () => {console.log("Connected to Mongo");})




//middlewares

app.use(express.json());
app.use(helmet())
app.use(morgan('tiny'))


//routes

app.use('/api/users' , userRoute)
app.use('/api/auth' , authRoute)



app.get('/users', (req,res)=> {
    res.send("Welcome to homepage")
})


app.listen(8000, () => {console.log("~~~~ Server Started ~~~~");})