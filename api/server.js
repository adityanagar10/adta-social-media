const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const cors = require("cors")
const app = express()
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const pathRoute = require("./routes/posts")
const multer = require("multer")
const path = require("path")


dotenv.config()

mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser:true , useUnifiedTopology: true},
    () => {console.log("Connected to Mongo");})


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//middlewares
app.use("/images", express.static(path.join(__dirname , "public/images")))
app.use(express.json());
app.use(helmet())
app.use(cors())
app.use(morgan('tiny'))

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, "public/images")
    },
    filename: (req,file,cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({storage})
app.post("/api/upload", upload.single("file"), (req,res)=>{
    try{
        return res.status(200).json("File uploaded")
    }catch(err){
        console.log(err)
    }
})


//routes

app.use('/api/posts', pathRoute)
app.use('/api/users' , userRoute)
app.use('/api/auth' , authRoute)

app.listen(8000, () => {console.log("~~~~ Server Started ~~~~");})