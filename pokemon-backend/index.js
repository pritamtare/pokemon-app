const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const { router } = require("./routes/mainRoute")
const cookieParser = require("cookie-parser")
const cors= require('cors')

const app = express();
const dbUrl=`mongodb+srv://pritam:pritam@cluster0.ekinfhu.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(dbUrl);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser());
app.use(cors())

app.use("/api",router)

app.listen(3001, () =>{
    console.log("Server is running on port: 3001");
})
