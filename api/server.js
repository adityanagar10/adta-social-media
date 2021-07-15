const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const app = express()


dotenv.config()


app.listen(8000, () => {console.log("~~~~ Server Started ~~~~");})