const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
        min:3,
        max: 20,
        unique: true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:20
    },
    profilePicture:{
        type:String,
        required:true,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default: false
    }
})

module.exports = mongoose.model("User", userSchema)