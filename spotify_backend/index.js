const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8000;

require("dotenv").config()

mongoose.connect(process.env.MONGO_DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((x)=>{
    console.log("MongoDb connected.....")
}).catch((error)=>{
    console.log("MongoDB not Connected" + error.message)
})

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.listen(port,()=>{
    console.log("spotify runs on port "+ port);
});