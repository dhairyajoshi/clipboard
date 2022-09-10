const express= require('express')
const mongoose = require("mongoose");
const app = express()
const port = process.env.PORT | 3000
const post= require('./api/routes/post')
require('dotenv').config()
app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
  
    if (req.method === "OPTIONS") {
      res.header("Access-Controll-Allow-Methods", "PUT,POST,PATCH,DELETE");
      return res.json({});
    }
  
    next();
  });
  mongoose.connect(
    "mongodb+srv://dhairya:" +
      process.env.MongoPW +
      "@cluster0.vpuxf.mongodb.net/?retryWrites=true&w=majority"
  );

app.use('/post',post)

app.listen(port,()=>{
    console.log('listening on port '+port)
})